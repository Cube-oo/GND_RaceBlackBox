import {selectWindows,summarizeTuning,tuningAdvice,TUNING_AXES} from './tuning.mjs';
import {parseBackup,readBackupField,firmwareVersion} from './config-backup.mjs';

// Keep the original header key: unknown or absent values are never defaults.
export function readSetting(config,keys,index){
  const matches=[];
  for(const key of keys){
    if(!Object.hasOwn(config,key))continue;
    const raw=String(config[key]),part=index===undefined?raw:raw.split(',')[index];
    if(part===undefined||!part.trim())continue;
    const value=Number(part.trim());if(!Number.isFinite(value)||value<0)continue;
    matches.push({key,raw,value});
  }
  if(!matches.length)return {value:null,key:null};
  if(matches.some(m=>m.value!==matches[0].value))return {value:null,key:matches.map(m=>m.key).join(' / '),conflict:true};
  return matches[0];
}
const field=(id,label,keys,extra={})=>({id,label,keys,...extra});
export const SETUP_GROUPS=[
  {id:'sliders',tab:'pid',title:'Regolazione semplificata',fields:[
    field('mode','Modalita PID',['simplified_pids_mode'],{kind:'mode'}),
    ...[['damp','Damping / D','simplified_d_gain'],['tracking','Tracking / P & I','simplified_pi_gain'],['response','Stick Response / FF','simplified_feedforward_gain'],['dynamic','Dynamic Damping','simplified_dmax_gain','simplified_d_max_gain','simplified_dmin_ratio'],['drift','Drift - Wobble / I','simplified_i_gain'],['pitchd','Pitch Damping','simplified_pitch_d_gain'],['pitchpi','Pitch Tracking','simplified_pitch_pi_gain'],['master','Master Multiplier','simplified_master_multiplier']].map(([id,label,...keys])=>field(id,label,keys,{kind:'multiplier'}))]},
  {id:'ff',tab:'pid',title:'Feedforward',fields:[
    field('jitter','Jitter Reduction',['feedforward_jitter_factor','ff_jitter_factor']),field('smooth','Smoothness',['feedforward_smooth_factor','ff_smooth_factor']),field('average','Averaging',['feedforward_averaging','ff_averaging']),field('boost','Boost',['feedforward_boost','ff_boost']),field('limit','Max Rate Limit',['feedforward_max_rate_limit','ff_max_rate_limit']),field('transition','Transition',['feedforward_transition','ff_transition'])]},
  {id:'controller',tab:'pid',title:'Controllo PID',fields:[
    field('relax','I Term Relax',['iterm_relax']),field('relax-type','I Term Relax Type',['iterm_relax_type']),field('relax-cutoff','I Term Relax Cutoff',['iterm_relax_cutoff'],{unit:'Hz'}),field('gravity','Anti Gravity Gain',['anti_gravity_gain']),field('d-gain','Dynamic D Gain',['d_max_gain','d_min_gain']),field('d-advance','Dynamic D Advance',['d_max_advance','d_min_advance']),field('tpa-rate','TPA Rate',['tpa_rate']),field('tpa-break','TPA Breakpoint',['tpa_breakpoint'])]},
  {id:'gyro',tab:'filters',title:'Gyro Lowpass Filters',fields:[
    field('gyro-slider','Gyro Filter Multiplier',['simplified_gyro_filter_multiplier'],{kind:'multiplier',advice:'noise'}),field('gyro-type','Lowpass 1 Type',['gyro_lpf1_type','gyro_lowpass_type','gyro_soft_type'],{kind:'filter'}),field('gyro-static','Lowpass 1 Static',['gyro_lpf1_static_hz','gyro_lowpass_hz','gyro_lowpass'],{unit:'Hz'}),field('gyro-min','Lowpass 1 Dynamic Min',['gyro_lpf1_dyn_hz','gyro_lowpass_dyn_hz'],{index:0,unit:'Hz',advice:'noise'}),field('gyro-max','Lowpass 1 Dynamic Max',['gyro_lpf1_dyn_hz','gyro_lowpass_dyn_hz'],{index:1,unit:'Hz',advice:'noise'}),field('gyro2-type','Lowpass 2 Type',['gyro_lpf2_type','gyro_lowpass2_type','gyro_soft2_type'],{kind:'filter'}),field('gyro2','Lowpass 2 Static',['gyro_lpf2_static_hz','gyro_lowpass2_hz'],{unit:'Hz'})]},
  {id:'dterm',tab:'filters',title:'D Term Lowpass Filters',fields:[
    field('d-slider','D Term Filter Multiplier',['simplified_dterm_filter_multiplier'],{kind:'multiplier',advice:'d-noise'}),field('d-type','Lowpass 1 Type',['dterm_lpf1_type','dterm_filter_type'],{kind:'filter'}),field('d-static','Lowpass 1 Static',['dterm_lpf1_static_hz','dterm_lowpass_hz','dterm_lpf_hz'],{unit:'Hz'}),field('d-min','Lowpass 1 Dynamic Min',['dterm_lpf1_dyn_hz','dterm_lowpass_dyn_hz','dterm_lpf_dyn_hz'],{index:0,unit:'Hz',advice:'d-noise'}),field('d-max','Lowpass 1 Dynamic Max',['dterm_lpf1_dyn_hz','dterm_lowpass_dyn_hz','dterm_lpf_dyn_hz'],{index:1,unit:'Hz',advice:'d-noise'}),field('d2-type','Lowpass 2 Type',['dterm_lpf2_type','dterm_filter2_type'],{kind:'filter'}),field('d2','Lowpass 2 Static',['dterm_lpf2_static_hz','dterm_lowpass2_hz','dterm_lpf2_hz'],{unit:'Hz'})]},
  {id:'rpm',tab:'filters',title:'Gyro RPM Filter',fields:[
    field('rpm-harmonics','Harmonics',['rpm_filter_harmonics','gyro_rpm_notch_harmonics']),field('rpm-min','Min Frequency',['rpm_filter_min_hz','gyro_rpm_notch_min'],{unit:'Hz'}),field('rpm-q','Q Factor',['rpm_filter_q','gyro_rpm_notch_q']),field('rpm-fade','Fade Range',['rpm_filter_fade_range_hz'],{unit:'Hz'})]},
  {id:'notch',tab:'filters',title:'Dynamic Notch Filter',fields:[
    field('notch-count','Notch Count',['dyn_notch_count']),field('notch-q','Q Factor',['dyn_notch_q']),field('notch-min','Min Frequency',['dyn_notch_min_hz'],{unit:'Hz'}),field('notch-max','Max Frequency',['dyn_notch_max_hz'],{unit:'Hz'})]},
  {id:'other',tab:'filters',title:'Notch e filtro Yaw',fields:[
    field('notch-d','D Term Notch Center',['dterm_notch_hz'],{unit:'Hz'}),field('notch-d-cutoff','D Term Notch Cutoff',['dterm_notch_cutoff'],{unit:'Hz'}),field('yaw-lpf','Yaw Lowpass',['yaw_lowpass_hz','yaw_lpf_hz'],{unit:'Hz'})]},
];
export function buildSetup(heat,report,{start=0,end=Infinity,throttle='all'}={}){
  const config=report?.config||{},windows=selectWindows(report,{start,end,throttle});
  const backup=heat?.configBackup,parsed=backup?parseBackup(backup.text):null;
  const backupCompatible=!!parsed&&backup.confirmed===true&&parsed.firmware!==null&&parsed.firmware===firmwareVersion(heat?.firmware)&&!heat?.demo;
  const summaries=[0,1,2].map(i=>summarizeTuning(windows,i));
  const findings=[0,1,2].flatMap(axis=>tuningAdvice(report,summaries[axis],axis).map(a=>({...a,axis,ref:`${axis}-${a.id}`})));
  const version=/Betaflight\s+(\d+)\.(\d+)/i.exec(heat?.firmware||'');
  const supported=report?.source==='demo'||!!version&&+version[1]===4&&+version[2]>=3&&+version[2]<=5;
  const enough=windows.length>=3&&summaries[0].duration>=3;
  function decorate(def,axis){
    const log=readSetting(config,def.keys,def.index),cli=readBackupField(parsed,backup?.profile,def);
    const disagreement=backupCompatible&&(cli.conflict||log.value!==null&&cli.value!==null&&log.value!==cli.value);
    const setting=log.value!==null||log.conflict?log:backupCompatible&&cli.value!==null?cli:log;
    const origin=setting===cli?'CLI':log.value!==null?'LOG':null;
    let state=setting.conflict?'conflict':setting.value===null?'missing':!supported?'version':!enough?'insufficient':'unchanged';
    if(disagreement)state='conflict';
    const evidence=def.advice?findings.filter(f=>f.id===def.advice&&(axis===undefined||axis===f.axis)):[];
    let direction=null;
    if(state==='unchanged'&&evidence.length&&setting.value>0){state='review';direction=def.advice==='tracking'?'Valutare aumento P':'Valutare piu filtraggio';}
    return {...def,...setting,state,direction,evidence,origin,cli,log};
  }
  const dynamicKey=Object.hasOwn(config,'d_max')?'d_max':'d_min';
  const gains=TUNING_AXES.map((name,axis)=>({name,axis,fields:[
    ...['P','I','D'].map((term,i)=>decorate(field(`${name}-${term}`,term,[name.toLowerCase()+'PID'],{index:i,advice:term==='P'?'tracking':undefined}),axis)),
    decorate(field(`${name}-dynamic`,dynamicKey==='d_max'?'D Max':'D Min',[dynamicKey],{index:axis}),axis),
    decorate(field(`${name}-ff`,'Feedforward',['feedforward_weight'],{index:axis}),axis)]}));
  const groups=SETUP_GROUPS.map(g=>({...g,fields:g.fields.map(f=>decorate(f))}));
  const fields=[...gains.flatMap(g=>g.fields),...groups.flatMap(g=>g.fields)];
  const configurationBlocked=!!backup&&!backupCompatible||fields.some(f=>f.state==='conflict');
  const coverage=report?.seen?Math.max(0,1-report.discarded/report.seen)*100:null;
  const qualityBlocked=!!report?.capped||coverage!==null&&coverage<80;
  if(configurationBlocked||qualityBlocked)for(const f of fields)if(['review','unchanged'].includes(f.state)){f.state='blocked';f.direction=null;}
  const source=report?.source||'missing';
  const weighted=get=>{let sum=0,time=0;for(const w of windows){const v=get(w),dt=w.end-w.start;if(Number.isFinite(v)){sum+=v*dt;time+=dt;}}return time?sum/time:null;};
  return {config,windows:windows.length,duration:summaries[0].duration,supported,enough,source,gains,groups,findings,fields,available:fields.filter(f=>f.value!==null).length,review:fields.filter(f=>f.state==='review').length,backupCompatible,configurationBlocked,qualityBlocked,coverage,capped:!!report?.capped,summaries,throttle:weighted(w=>w.throttle)};
}
export function recommendation(field){
  return ({missing:'Non disponibile',conflict:'Valori discordanti',version:'Versione da verificare',insufficient:'Dati insufficienti',blocked:'Proposte sospese',unchanged:'Nessuna modifica proposta',review:field.direction})[field.state];
}

export function nextTrial(model){
  if(model.configurationBlocked)return {title:'Verifica la configurazione associata',action:'Backup e log non coincidono, oppure firmware non verificabile. Nessuna modifica proposta finche la configurazione del volo non e chiarita.',kind:'blocked'};
  if(model.qualityBlocked)return {title:'Acquisisci un log piu completo',action:'Analisi troncata oppure meno dell\'80% dei campioni nativi utilizzabili. La soglia e un criterio prudenziale del tool, non uno standard Betaflight.',kind:'blocked'};
  if(!model.supported||!model.enough)return {title:'Dati insufficienti per una prova di tuning',action:!model.supported?'Firmware non verificato: parametri consultabili, suggerimenti sospesi.':'Servono almeno tre finestre complete e tre secondi analizzabili.',kind:'blocked'};
  const order=['saturation','motors','rate','noise','d-noise','tracking','bias'];
  const finding=order.map(id=>model.findings.find(f=>f.id===id)).find(Boolean);
  if(!finding)return {title:'Mantieni il setup come riferimento',action:'Nessuna modifica sufficientemente motivata dalle regole attuali. Non e una certificazione di tuning ottimale.',kind:'retain'};
  return {...finding,kind:'trial'};
}

export function compareSetups(before,after,beforeHeat,afterHeat){
  const warnings=[];
  if(!before.enough||!after.enough)warnings.push('Intervalli insufficienti.');
  if(before.configurationBlocked||after.configurationBlocked)warnings.push('Configurazioni da verificare.');
  if(before.qualityBlocked||after.qualityBlocked)warnings.push('Qualita del log insufficiente.');
  if(before.source!==after.source)warnings.push('Origini dei dati diverse; demo e voli reali non sono confrontabili.');
  if(beforeHeat.firmware!==afterHeat.firmware)warnings.push('Firmware diversi.');
  if(!before.supported||!after.supported)warnings.push('Firmware non verificato per il tuning.');
  if(beforeHeat.setup!==afterHeat.setup)warnings.push('Descrizioni del setup diverse.');
  if(Number.isFinite(before.throttle)&&Number.isFinite(after.throttle)&&Math.abs(before.throttle-after.throttle)>10)warnings.push('Throttle medio diverso di oltre 10 punti percentuali.');
  const changes=after.fields.flatMap(f=>{const b=before.fields.find(x=>x.id===f.id);return b&&b.value!==null&&f.value!==null&&b.value!==f.value?[{id:f.id,label:f.id.startsWith('ROLL')||f.id.startsWith('PITCH')||f.id.startsWith('YAW')?f.id:f.label,before:b.value,after:f.value,unit:f.unit||''}]:[];});
  const pairs=[];
  for(let axis=0;axis<3;axis++){
    const b=before.summaries[axis],a=after.summaries[axis];
    if(Number.isFinite(b.command)&&Number.isFinite(a.command)&&Math.abs(a.command-b.command)>Math.max(20,b.command*.25))warnings.push(`Manovre ${TUNING_AXES[axis]} di intensita diversa.`);
    const sameGrid=b.fs&&a.fs&&Math.abs(b.fs/a.fs-1)<=.01;
    if(!sameGrid)warnings.push('Frequenze di campionamento diverse o assenti: delta rumore non disponibile.');
    for(const [key,label,unit] of [['error','Tracking RMS','deg/s'],['hf','Residuo gyro >100 Hz','deg/s'],['lag','Ritardo apparente','ms']]){
      const valid=Number.isFinite(b[key])&&Number.isFinite(a[key]);
      pairs.push({label:`${TUNING_AXES[axis]} / ${label}`,before:b[key],after:a[key],unit,delta:valid&&(key!=='hf'||sameGrid)&&!warnings.some(w=>w.includes('demo'))?a[key]-b[key]:null});
    }
  }
  if(warnings.length)for(const p of pairs)p.delta=null;
  return {warnings:[...new Set(warnings)],changes,pairs};
}
