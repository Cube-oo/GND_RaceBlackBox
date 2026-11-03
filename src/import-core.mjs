import Papa from 'papaparse';
import semver from 'semver';
import {FlightLogParser} from '../vendor/src/flightlog_parser.js';
import {FIRMWARE_TYPE_BETAFLIGHT} from '../vendor/src/flightlog_fielddefs.js';
import {CHANNELS,finite,clamp} from './model.mjs';
import {AttitudeEstimator,fromRecorded,quaternionFields} from './attitude-model.mjs';
import {TuningCollector,TUNING_CHANNELS,tuningHeaders} from './tuning.mjs';
const marker=new TextEncoder().encode('H Product:Blackbox flight data recorder');
export const CSV_FIELDS={t:['time (us)','time','time (s)','time (ms)','timestamp','t'],throttle:['throttle','setpoint[3]','rcCommand[3]'],roll:['setpoint[0]','roll'],pitch:['setpoint[1]','pitch'],yaw:['setpoint[2]','yaw'],gx:['gyroADC[0]','gyro[0]','gx'],gy:['gyroADC[1]','gyro[1]','gy'],gz:['gyroADC[2]','gyro[2]','gz'],m0:['motor[0]','m0'],m1:['motor[1]','m1'],m2:['motor[2]','m2'],m3:['motor[3]','m3'],voltage:['voltage','vbatLatest'],current:['current','amperageLatest'],ax:['accSmooth[0]','ax'],ay:['accSmooth[1]','ay'],az:['accSmooth[2]','az'],qx:['imuQuaternion[0]'],qy:['imuQuaternion[1]'],qz:['imuQuaternion[2]']};
export function inspectCSV(text){
  const lines=text.replace(/^\uFEFF/,'').split(/\r?\n/);let start=-1;
  for(let i=0;i<Math.min(lines.length,1000);i++){
    const cells=Papa.parse(lines[i],{skipEmptyLines:true}).data[0]||[];
    if(cells.some(c=>CSV_FIELDS.t.some(x=>x.toLowerCase()===c.trim().toLowerCase()))&&cells.length>=2){start=i;break;}
  }
  if(start<0)throw Error('Intestazione CSV non trovata. Serve una colonna time, time (us), time (ms), time (s), timestamp o t.');
  const csv=lines.slice(start).join('\n');const preview=Papa.parse(csv,{preview:6,skipEmptyLines:'greedy'});
  const headers=preview.data[0].map(x=>x.trim());if(new Set(headers).size!==headers.length)throw Error('Il CSV contiene intestazioni duplicate.');
  const mapping={};for(const [key,names] of Object.entries({...CSV_FIELDS,...TUNING_CHANNELS}))mapping[key]=headers.findIndex(h=>names.some(n=>n.toLowerCase()===h.toLowerCase()));
  const h=headers[mapping.t];return {headers,mapping,start,timeUnit:h?.includes('(s)')||h==='t'?'s':h?.includes('(ms)')?'ms':'us',throttleUnit:headers[mapping.throttle]==='rcCommand[3]'?'rc':headers[mapping.throttle]==='setpoint[3]'?'milli':'pct',csv};
}
function heatFrom(samples,source,firmware,warnings){
  if(samples.length<2)throw Error('Il log non contiene abbastanza campioni validi.');
  const channels=CHANNELS.filter(k=>samples.some(p=>finite(p[k])));if(!channels.length)throw Error('Nessun canale telemetrico riconosciuto.');
  return {name:source.replace(/\.[^.]+$/,''),officialTime:null,battery:'',setup:'',notes:'',source,firmware,demo:false,samples,trim:[0,samples.at(-1).t],offset:0,warnings,channels};
}
export function parseCSV(text,options,source){
  const {csv}=inspectCSV(text),samples=[],warnings=[];let first=null,last=-Infinity,seen=0,invalid=0,skipped=0,lastRetained=-Infinity;
  const {mapping,timeUnit,throttleUnit,motorMin,motorMax,voltageDiv,currentDiv,gyroMultiplier}=options;
  const accDiv=options.accDiv??1;
  const recorded=['qx','qy','qz'].every(k=>mapping[k]>=0),withAcc=['ax','ay','az'].every(k=>mapping[k]>=0);
  const estimator=new AttitudeEstimator(withAcc);
  const tuning=new TuningCollector({source:'csv'});
  if(!finite(accDiv)||accDiv<=0)throw Error('Scala accelerometro non valida.');
  if(mapping.t<0||!['s','ms','us'].includes(timeUnit))throw Error('Seleziona una colonna e una unita per il tempo.');
  if(![motorMin,motorMax,voltageDiv,currentDiv,gyroMultiplier].every(finite)||motorMax<=motorMin||voltageDiv<=0||currentDiv<=0||gyroMultiplier<=0)throw Error('Scale dei canali non valide.');
  let fatal;
  const parsed=Papa.parse(csv,{skipEmptyLines:'greedy',step(result,parser){
    if(!seen++){return}if(seen>2000000){fatal='CSV troppo grande: massimo 2 milioni di righe.';parser.abort();return}
    if(result.errors.length){invalid++;estimator.invalidate();tuning.invalidate();return}const row=result.data;
    const n=k=>{const value=row[mapping[k]];return value===undefined||value.trim()===''?null:Number(value.trim().replace(',','.'))};
    const raw=n('t'),t=raw/(timeUnit==='us'?1e6:timeUnit==='ms'?1e3:1);
    if(!finite(raw)||t<0){invalid++;tuning.invalidate();return}if(first===null)first=t;
    const elapsed=t-first;if(elapsed<0||elapsed<=last){invalid++;tuning.invalidate();return}if(elapsed>86400){fatal='Il tempo supera 24 ore. Controlla la scala temporale.';parser.abort();return}
    last=elapsed;
    const p={t:elapsed};for(const k of CHANNELS){const value=n(k);p[k]=finite(value)?value:null;}
    if(p.throttle!==null)p.throttle=throttleUnit==='rc'?(p.throttle-1000)/10:throttleUnit==='milli'?p.throttle/10:p.throttle;
    if(p.throttle!==null&&(p.throttle<0||p.throttle>100)){p.throttle=null;invalid++;}
    for(const k of ['gx','gy','gz'])if(p[k]!==null)p[k]*=gyroMultiplier;
    for(const k of ['ax','ay','az'])if(p[k]!==null)p[k]/=accDiv;
    let attitude;
    if(recorded){const q=fromRecorded([n('qx'),n('qy'),n('qz')]);attitude=q?quaternionFields(q):null;}
    else attitude=estimator.update(elapsed,[p.gx,p.gy,p.gz],[p.ax,p.ay,p.az]);
    for(const k of ['qx','qy','qz','qw','attitudeSegment'])p[k]=attitude?.[k]??null;
    for(const k of ['m0','m1','m2','m3'])if(p[k]!==null)p[k]=clamp((p[k]-motorMin)/(motorMax-motorMin)*100,0,100);
    if(p.voltage!==null)p.voltage/=voltageDiv;if(p.current!==null)p.current/=currentDiv;
    const extra={};for(const k of Object.keys(TUNING_CHANNELS)){const v=n(k);extra[k]=finite(v)?v*(k.startsWith('raw')?gyroMultiplier:1):null;}
    tuning.push({...p,...extra});
    if(elapsed-lastRetained<.005-1e-8){skipped++;return}lastRetained=elapsed;samples.push(p);
  }});
  if(fatal)throw Error(fatal);if(invalid)warnings.push(`${invalid} righe o valori non validi esclusi.`);
  if(skipped)warnings.push('Campioni limitati a 200 Hz. Picchi piu brevi possono non essere rappresentati.');
  const heat=heatFrom(samples,source,'CSV / scale confermate',warnings);
  heat.attitudeSource=recorded?'recorded':withAcc?'estimated':'relative';heat.tuning=tuning.finish();return heat;
}
export function parseBBL(buffer,source){
  const bytes=new Uint8Array(buffer),starts=[];
  outer:for(let i=0;i<=bytes.length-marker.length;i++){if(bytes[i]!==72)continue;for(let j=1;j<marker.length;j++)if(bytes[i+j]!==marker[j])continue outer;starts.push(i);i+=marker.length-1;}
  if(!starts.length)throw Error('Intestazione Blackbox non trovata. Importa un BBL/BFL originale o il CSV decodificato.');
  if(starts.length>100)throw Error('Il file contiene oltre 100 voli. Dividilo prima di importarlo.');
  const heats=[],errors=[];
  for(let log=0;log<starts.length;log++){
    try{
      const parser=new FlightLogParser(bytes),end=starts[log+1]??bytes.length;parser.parseHeader(starts[log],end);
      const config=parser.sysConfig,idx=parser.frameDefs.I.nameToIndex;
      if(config.firmwareType!==FIRMWARE_TYPE_BETAFLIGHT||!semver.gte(config.firmwareVersion,'3.1.0'))throw Error('Firmware non supportato direttamente: esporta un CSV e conferma le scale.');
      const samples=[],warnings=[],header=new TextDecoder().decode(bytes.subarray(starts[log],Math.min(end,starts[log]+20000)));
      const highResolution=config.blackbox_high_resolution>0?10:1;
      const hasGyroScale=/H gyro(?:\.scale|_scale):/.test(header),gyroScale=config.gyroScale*1e6/(Math.PI/180)/highResolution;
      const tuning=new TuningCollector({source:'bbl',config:tuningHeaders(header)});
      let first=null,last=-Infinity,skipped=0,invalid=0,lastNative=-Infinity;
      const recorded=[0,1,2].every(i=>idx[`imuQuaternion[${i}]`]!==undefined);
      const withAcc=[0,1,2].every(i=>idx[`accSmooth[${i}]`]!==undefined)&&finite(config.acc_1G)&&config.acc_1G>0&&/H acc_1G:/.test(header);
      const estimator=new AttitudeEstimator(withAcc);
      const motorMin=config.motorOutput?.[0],motorMax=config.motorOutput?.[1];
      const validMotors=finite(motorMin)&&finite(motorMax)&&motorMax>motorMin;
      parser.onFrameReady=(valid,frame,type)=>{
        if(type!=='I'&&type!=='P')return;if(!valid){invalid++;estimator.invalidate();tuning.invalidate();return}
        const value=name=>{const v=frame[idx[name]];return finite(v)?v:null;};
        const raw=value('time');if(raw===null){tuning.invalidate();return}if(first===null)first=raw;
        const t=(raw-first)/1e6;if(t<0||t>86400||t<=lastNative){invalid++;tuning.invalidate();return}lastNative=t;
        const acc=[0,1,2].map(i=>withAcc&&value(`accSmooth[${i}]`)!==null?value(`accSmooth[${i}]`)/config.acc_1G:null);
        let attitude;
        if(recorded){const q=fromRecorded([0,1,2].map(i=>value(`imuQuaternion[${i}]`)));attitude=q?quaternionFields(q):null;}
        else attitude=estimator.update(t,[0,1,2].map(i=>hasGyroScale&&value(`gyroADC[${i}]`)!==null?value(`gyroADC[${i}]`)*gyroScale:null),acc);
        const p={t};let throttle=value('setpoint[3]');p.throttle=throttle!==null?throttle/10:value('rcCommand[3]')!==null?(value('rcCommand[3]')/highResolution-1000)/10:null;
        if(p.throttle!==null)p.throttle=clamp(p.throttle,0,100);
        for(let axis=0;axis<3;axis++){const sp=value(`setpoint[${axis}]`);p[['roll','pitch','yaw'][axis]]=sp===null?null:sp/highResolution;const g=value(`gyroADC[${axis}]`);p[['gx','gy','gz'][axis]]=g!==null&&hasGyroScale?g*gyroScale:null;}
        for(let axis=0;axis<3;axis++)p[['ax','ay','az'][axis]]=acc[axis];
        for(const k of ['qx','qy','qz','qw','attitudeSegment'])p[k]=attitude?.[k]??null;
        for(let m=0;m<4;m++){const v=value(`motor[${m}]`);p[`m${m}`]=v!==null&&validMotors?clamp((v-motorMin)/(motorMax-motorMin)*100,0,100):null;}
        const v=value('vbatLatest'),a=value('amperageLatest');p.voltage=v===null?null:v/(semver.gte(config.firmwareVersion,'4.0.0')?100:10);p.current=a===null?null:a/100;
        const extra={};for(const [k,names] of Object.entries(TUNING_CHANNELS)){const v=value(names[0]);extra[k]=v!==null&&(!k.startsWith('raw')||hasGyroScale)?v*(k.startsWith('raw')?gyroScale:1):null;}
        tuning.push({...p,...extra});
        // Attitude and spectral analysis consume native frames before display decimation.
        if(t-last<.005-1e-8){skipped++;return}last=t;
        if(samples.length>=300000)throw Error('Volo troppo lungo: massimo 300.000 campioni conservati.');samples.push(p);
      };
      parser.parseLogData(false);
      if(skipped)warnings.push('Campioni limitati a 200 Hz. Picchi piu brevi possono non essere rappresentati.');
      const corrupt=parser.stats.totalCorruptFrames||invalid;if(corrupt)warnings.push(`${corrupt} frame corrotti o non validi rilevati.`);
      if(!hasGyroScale)warnings.push('Scala gyro assente: risposta gyro non disponibile.');if(!validMotors)warnings.push('Scala motori assente: percentuali motori non disponibili.');
      if(idx['setpoint[0]']===undefined)warnings.push('Setpoint non registrato: tracking non disponibile.');
      const heat=heatFrom(samples,starts.length>1?`${source} / volo ${log+1}`:source,`Betaflight ${config.firmwareVersion}`,warnings);
      heat.attitudeSource=recorded?'recorded':withAcc?'estimated':'relative';heat.tuning=tuning.finish();heats.push(heat);
    }catch(e){errors.push(`Volo ${log+1}: ${e.message||e}`)}
  }
  if(!heats.length)throw Error(errors.join('\n'));return {heats,errors};
}
