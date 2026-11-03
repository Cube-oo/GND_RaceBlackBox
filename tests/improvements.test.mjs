import test from 'node:test';
import assert from 'node:assert/strict';
import {parseBackup,readBackupField,validateBackup,firmwareVersion,MAX_BACKUP_SIZE} from '../src/config-backup.mjs';
import {buildSetup,nextTrial,compareSetups} from '../src/setup-model.mjs';
import {validateSession} from '../src/model.mjs';
const text='# Betaflight / STM32F405 (S405) 4.5.0 Apr 1 2024\n# diff all\ndefaults nosave\nset gyro_lpf1_dyn_min_hz = 250\nprofile 0\nset p_roll = 46\nset i_roll = 80\nset simplified_pids_mode = RPY\nprofile 1\nset p_roll = 60\nrateprofile 0\nset p_roll = 99\nprofile 0\nsave';
const backup=(extra={})=>({text,profile:'0',confirmed:true,filename:'quad.txt',importedAt:'2026-11-02T12:00:00Z',...extra});
const report=()=>({version:1,source:'bbl',config:{rollPID:'46,80,38',pitchPID:'50,85,42',yawPID:'45,80,0',gyro_lpf1_dyn_hz:'250,500'},seen:4096,discarded:0,capped:false,windows:Array.from({length:4},(_,i)=>({start:i,end:i+1023/1024,fs:1024,throttle:50,saturation:0,axes:[0,1,2].map(()=>({error:1,command:20,bias:0,gyro:20,lag:null,terms:[5,4,3,2],filtered:Array(128).fill(1),raw:Array(128).fill(4),d:Array(128).fill(.01)}))}))});
const heat=(extra={})=>({firmware:'Betaflight 4.5.0',setup:'5 inch',...extra});
test('CLI scopes do not mix PID profiles, rates, commented defaults or commands',()=>{
  const p=parseBackup(text);assert.equal(p.profiles['0'].p_roll,'46');assert.equal(p.profiles['1'].p_roll,'60');assert.equal(p.globals.gyro_lpf1_dyn_min_hz,'250');assert.equal(p.firmware,'4.5.0');
  assert.equal(readBackupField(p,'1',{id:'ROLL-P',keys:['rollPID']}).value,60);
  assert.equal(readBackupField(p,'0',{id:'ROLL-D',keys:['rollPID']}).value,null);
  assert.equal(readBackupField(p,'0',{id:'mode',kind:'mode',keys:['simplified_pids_mode']}).value,2);
  assert.equal(parseBackup('# set p_roll = 60\nset p_roll = 0').globals.p_roll,'0');
  assert.equal(firmwareVersion('Betaflight 2025.12.1'),'2025.12.1');
});
test('backup validation requires explicit association/profile and bounded inputs',()=>{
  assert.deepEqual(validateBackup(backup()),backup());
  for(const patch of [{confirmed:false},{profile:'9'},{importedAt:'invalid'},{text:'a'.repeat(MAX_BACKUP_SIZE+1)}])assert.throws(()=>validateBackup(backup(patch)));
  assert.throws(()=>parseBackup('save\ndefaults nosave'));assert.throws(()=>parseBackup('profile 100\nset p_roll = 2'));
});
test('matching backup fills explicit missing values only and preserves the native log',()=>{
  const r=report(),m=buildSetup(heat({configBackup:backup()}),r);
  assert.equal(m.backupCompatible,true);assert.equal(m.fields.find(f=>f.id==='mode').value,2);assert.equal(m.fields.find(f=>f.id==='mode').origin,'CLI');
  assert.equal(m.fields.find(f=>f.id==='ROLL-P').origin,'LOG');assert.equal(m.fields.find(f=>f.id==='master').value,null);assert.equal(r.config.simplified_pids_mode,undefined);
});
test('conflicting profile, duplicate values and firmware mismatch suspend all proposals',()=>{
  for(const b of [backup({profile:'1'}),backup({text:text.replace('4.5.0','4.4.3')}),backup({text:text+'\nset p_roll = 70'})]){
    const m=buildSetup(heat({configBackup:b}),report());assert.equal(m.configurationBlocked,true);assert.equal(m.review,0);assert.equal(nextTrial(m).kind,'blocked');
    assert.equal(m.fields.find(f=>f.id==='ROLL-P').value,46);
  }
});
test('poor coverage or truncated processing suppresses tuning proposals',()=>{
  for(const patch of [{discarded:2000},{capped:true}]){const m=buildSetup(heat(),{...report(),...patch});assert.equal(m.qualityBlocked,true);assert.equal(m.review,0);assert.equal(nextTrial(m).kind,'blocked');}
});
test('comparison detects parameter changes and warns on non-equivalent flights',()=>{
  const b=buildSetup(heat(),report()),r=report();r.config.rollPID='50,80,38';const a=buildSetup(heat(),r);
  const c=compareSetups(b,a,heat(),heat());assert.equal(c.changes.length,1);assert.equal(c.changes[0].before,46);assert.equal(c.changes[0].after,50);assert.equal(c.warnings.length,0);
  assert.equal(compareSetups(b,{...a,throttle:80},heat(),heat()).warnings.length,1);
  assert.ok(compareSetups(b,{...a,source:'demo'},heat(),heat()).warnings.some(w=>w.includes('demo')));
});
test('session v4 roundtrips backup history and notes without trusting cached parsed data',()=>{
  const session={name:'Race',heats:[{name:'Heat',samples:[{t:0},{t:4}],trim:[0,4],configBackup:backup(),configHistory:[backup()],tuningNotes:'P roll 46 -> 50',tuning:report()}]};
  const restored=validateSession({format:'gnd-race',version:4,session});assert.equal(restored.heats[0].configBackup.text,text);assert.equal(restored.heats[0].configHistory.length,1);assert.equal(restored.heats[0].tuningNotes,'P roll 46 -> 50');
  session.heats[0].configHistory=Array(5).fill(backup());assert.throws(()=>validateSession({format:'gnd-race',version:4,session}));
});
