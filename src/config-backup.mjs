export const MAX_BACKUP_SIZE=128*1024;
export function firmwareVersion(text){return /Betaflight[^\r\n]*?\b(\d+\.\d+\.\d+(?:-[\w.]+)?)/i.exec(text||'')?.[1]||null;}

// Parse a backup as data only. No CLI command is executed, including defaults/save.
export function parseBackup(text){
  if(typeof text!=='string'||text.length>MAX_BACKUP_SIZE)throw Error('Backup troppo grande: massimo 128 KB.');
  const globals=Object.create(null),profiles=Object.create(null),conflicts=[];
  let profile=null,rates=false,count=0;
  for(const line of text.split(/\r?\n/)){
    const s=line.trim();if(!s||s.startsWith('#'))continue;
    const p=/^profile\s+(\d+)\s*$/.exec(s);
    if(p){profile=String(+p[1]);if(+profile>9)throw Error('Indice profilo non supportato.');profiles[profile]??=Object.create(null);rates=false;continue;}
    if(/^rateprofile\s+\d+\s*$/.test(s)){rates=true;continue;}
    const m=/^set\s+([a-z][a-z0-9_]*)\s*=\s*([^#\r\n]+?)(?:\s+#.*)?$/i.exec(s);
    if(!m||rates)continue;
    const key=m[1].toLowerCase(),value=m[2].trim();if(value.length>200)continue;
    const target=profile===null?globals:profiles[profile];
    if(Object.hasOwn(target,key)&&target[key]!==value)conflicts.push(`${profile??'master'}:${key}`);
    target[key]=value;count++;
  }
  if(!count)throw Error('Nessun parametro set riconosciuto nel backup.');
  return {globals,profiles,conflicts,count,firmware:firmwareVersion(text),kind:/^\s*#?\s*dump\b/im.test(text)?'dump':'diff / CLI'};
}
export function validateBackup(value){
  if(value===undefined||value===null)return undefined;
  if(typeof value!=='object'||value.confirmed!==true)throw Error('Associazione backup non confermata.');
  const parsed=parseBackup(value.text),profile=String(value.profile??'');
  if(Object.keys(parsed.profiles).length?!Object.hasOwn(parsed.profiles,profile):profile!=='unscoped')throw Error('Profilo backup non valido.');
  if(typeof value.filename!=='string'||typeof value.importedAt!=='string'||!Number.isFinite(Date.parse(value.importedAt)))throw Error('Metadati backup non validi.');
  return {text:value.text,profile,confirmed:true,filename:value.filename.slice(0,150),importedAt:value.importedAt};
}
const special={
  'gyro-min':['gyro_lpf1_dyn_min_hz','gyro_lowpass_dyn_min_hz'], 'gyro-max':['gyro_lpf1_dyn_max_hz','gyro_lowpass_dyn_max_hz'],
  'd-min':['dterm_lpf1_dyn_min_hz','dterm_lowpass_dyn_min_hz'], 'd-max':['dterm_lpf1_dyn_max_hz','dterm_lowpass_dyn_max_hz'],
  'rpm-harmonics':['rpm_filter_harmonics'], 'rpm-min':['rpm_filter_min_hz'], 'rpm-q':['rpm_filter_q'],
};
export function readBackupField(parsed,profile,def){
  if(!parsed)return {value:null,key:null};
  const gain=/^(ROLL|PITCH|YAW)-(P|I|D|ff|dynamic)$/.exec(def.id);
  let keys=special[def.id]||def.keys;
  if(gain){const axis=gain[1].toLowerCase(),term=gain[2];keys=[term==='ff'?`f_${axis}`:term==='dynamic'?`${def.keys[0]}_${axis}`:`${term.toLowerCase()}_${axis}`];}
  const global=def.id.startsWith('gyro')||def.id.startsWith('rpm')||def.id.startsWith('notch-')&&!def.id.startsWith('notch-d');
  const scope=global||profile==='unscoped'?parsed.globals:parsed.profiles[profile]||{};
  const matches=[];
  for(const key of keys){
    if(!Object.hasOwn(scope,key))continue;
    const raw=scope[key];let value=/^\d+(?:\.\d+)?$/.test(raw)?Number(raw):null;
    if(def.kind==='filter'&&['PT1','BIQUAD','PT2','PT3'].includes(raw))value=['PT1','BIQUAD','PT2','PT3'].indexOf(raw);
    if(def.kind==='mode'&&['OFF','RP','RPY'].includes(raw))value=['OFF','RP','RPY'].indexOf(raw);
    const conflict=parsed.conflicts.includes(`${global||profile==='unscoped'?'master':profile}:${key}`);
    matches.push({value,key,raw,conflict});
  }
  if(!matches.length)return {value:null,key:null};
  if(matches.some(x=>x.conflict||x.value!==matches[0].value))return {...matches[0],conflict:true};
  return matches[0];
}
