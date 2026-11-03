import {ATTITUDE_SOURCES,ATTITUDE_KEYS,hasAttitude} from './attitude-model.mjs';
import {validateTuning} from './tuning.mjs';
import {validateBackup} from './config-backup.mjs';
export const CHANNELS=['throttle','roll','pitch','yaw','gx','gy','gz','m0','m1','m2','m3','voltage','current','ax','ay','az','qx','qy','qz','qw','attitudeSegment'];
export const finite=v=>typeof v==='number'&&Number.isFinite(v);
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function parseTime(text){
  text=String(text).trim().replace(',','.');if(!text)return null;
  if(!/^(?:\d+:)?\d+(?:\.\d{1,3})?$/.test(text))throw Error('Tempo non valido. Usa mm:ss.mmm oppure secondi.');
  const parts=text.split(':');if(parts.length===2&&+parts[1]>=60)throw Error('I secondi dopo i due punti devono essere inferiori a 60.');
  const value=parts.length===2?+parts[0]*60+ +parts[1]:+text;
  if(value<=0||value>86400)throw Error('Inserisci un tempo maggiore di zero e inferiore a 24 ore.');return value;
}
export function formatTime(v){if(!finite(v))return '--';const ms=Math.round(v*1000),m=Math.floor(ms/60000);return `${m}:${((ms%60000)/1000).toFixed(3).padStart(6,'0')}`;}
export function samplesFor(h){return h?.samples.filter(p=>p.t>=h.trim[0]&&p.t<=h.trim[1])||[];}
export function metrics(h){
  const rows=samplesFor(h),duration=rows.length>1?rows.at(-1).t-rows[0].t:0;
  let total=0,throttle=0,throttleTime=0,high=0,variation=0,variationTime=0,sat=0,motorTime=0,energy=0,currentTime=0,voltageMin=null,gaps=0;
  const error=[0,0,0],errorTime=[0,0,0];
  for(let i=0;i<rows.length;i++){
    const p=rows[i];if(finite(p.voltage))voltageMin=voltageMin===null?p.voltage:Math.min(voltageMin,p.voltage);
    if(!i)continue;const a=rows[i-1],dt=p.t-a.t;if(dt<=0)continue;if(dt>.1){gaps+=dt;continue}total+=dt;
    if(finite(a.throttle)&&finite(p.throttle)){throttle+=(a.throttle+p.throttle)/2*dt;throttleTime+=dt;high+=(a.throttle>=80?dt:0);variation+=Math.abs(p.throttle-a.throttle);variationTime+=dt;}
    for(let axis=0;axis<3;axis++){const sp=['roll','pitch','yaw'][axis],gy=['gx','gy','gz'][axis];if([a[sp],p[sp],a[gy],p[gy]].every(finite)){error[axis]+=((a[sp]-a[gy])**2+(p[sp]-p[gy])**2)/2*dt;errorTime[axis]+=dt;}}
    const motors=['m0','m1','m2','m3'].map(k=>a[k]);if(motors.every(finite)){motorTime+=dt;if(Math.max(...motors)>=95)sat+=dt;}
    if(finite(a.current)&&finite(p.current)){energy+=(a.current+p.current)/2*dt/3.6;currentTime+=dt;}
  }
  const rms=error.map((e,i)=>errorTime[i]?Math.sqrt(e/errorTime[i]):null);
  return {duration,coverage:duration?total/duration*100:null,gaps,throttle:throttleTime?throttle/throttleTime:null,high:throttleTime?high/throttleTime*100:null,variation:variationTime?variation/variationTime:null,rms,saturation:motorTime?sat/motorTime*100:null,voltageMin,mah:currentTime?energy:null,count:rows.length};
}
export function validateSession(input){
  if(!input||input.format!=='gnd-race'||![1,2,3,4].includes(input.version)||!input.session)throw Error('File sessione GND Race non valido o versione non supportata.');
  const s=input.session;if(typeof s.name!=='string'||!Array.isArray(s.heats)||s.heats.length>100)throw Error('Sessione non valida (massimo 100 heat).');
  let count=0;const id=()=>crypto.randomUUID();
  return {id:id(),name:s.name.slice(0,100),demo:!!s.demo,heats:s.heats.map(h=>{
    if(!h||!Array.isArray(h.samples)||typeof h.name!=='string')throw Error('Heat non valida.');count+=h.samples.length;if(count>2000000)throw Error('Sessione troppo grande (massimo 2 milioni di campioni).');
    let prev=-1;
    const samples=h.samples.map(p=>{if(!p||!finite(p.t)||p.t<0||p.t<=prev||p.t>86400)throw Error('Timestamp non validi nella sessione.');prev=p.t;const o={t:p.t};for(const k of CHANNELS){if(p[k]!==undefined&&p[k]!==null&&!finite(p[k]))throw Error(`Valori non validi: ${k}`);o[k]=p[k]??null;}if(ATTITUDE_KEYS.some(k=>finite(o[k]))&&!hasAttitude(o))throw Error('Orientamento non valido nella sessione.');if(o.attitudeSegment!==null&&(!Number.isInteger(o.attitudeSegment)||o.attitudeSegment<0))throw Error('Segmento assetto non valido.');return o;});
    const duration=samples.at(-1)?.t||0;
    const tuning=validateTuning(h.tuning,duration);
    const configBackup=validateBackup(h.configBackup);
    if(h.configHistory!==undefined&&(!Array.isArray(h.configHistory)||h.configHistory.length>4||h.configHistory.some(b=>!b)))throw Error('Storico backup non valido.');
    const configHistory=(h.configHistory||[]).map(validateBackup);
    if(h.officialTime!==null&&h.officialTime!==undefined&&(!finite(h.officialTime)||h.officialTime<=0||h.officialTime>86400))throw Error('Tempo ufficiale non valido.');
    const trim=h.trim??[0,duration];if(!Array.isArray(trim)||trim.length!==2||!trim.every(finite)||trim[0]<0||trim[1]>duration||trim[1]<trim[0]||(samples.length>1&&trim[1]===trim[0]))throw Error('Intervallo di volo non valido.');
    return {id:id(),name:h.name.slice(0,100),officialTime:h.officialTime??null,battery:String(h.battery||'').slice(0,200),setup:String(h.setup||'').slice(0,200),notes:String(h.notes||'').slice(0,5000),tuningNotes:String(h.tuningNotes||'').slice(0,2000),configBackup,configHistory,source:String(h.source||'').slice(0,200),firmware:String(h.firmware||'').slice(0,100),demo:!!h.demo,attitudeSource:ATTITUDE_SOURCES.includes(h.attitudeSource)?h.attitudeSource:undefined,tuning,samples,trim,offset:finite(h.offset)?clamp(h.offset,-600,600):0,warnings:Array.isArray(h.warnings)?h.warnings.filter(x=>typeof x==='string').slice(0,20):[],channels:CHANNELS.filter(k=>samples.some(p=>finite(p[k])))};
  })};
}
