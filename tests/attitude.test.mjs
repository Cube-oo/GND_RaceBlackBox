import test from 'node:test';
import assert from 'node:assert/strict';
import {Vector3} from 'three';
import {AttitudeEstimator,fromRecorded,attitudeAngles,fromAngles,quaternionFields,quaternionOf,sceneQuaternion,sampleAttitude,alignHeading,angularDifference,replayRange,replayData} from '../src/attitude-model.mjs';
import {validateSession} from '../src/model.mjs';
const near=(a,b,t=1e-5)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
test('gyro integration uses time and body axes; one-second roll is 90 degrees',()=>{
  const e=new AttitudeEstimator();let result;for(let i=0;i<=1000;i++)result=e.update(i/1000,[90,0,0]);near(attitudeAngles(quaternionOf(result)).roll,90);
  const right=new Vector3(1,0,0).applyQuaternion(sceneQuaternion(quaternionOf(result)));near(right.y,-1);
});
test('recorded fixed-point quaternion and nose-up scene agree with gyro',()=>{
  const q=fromRecorded([0,Math.round(Math.sin(Math.PI/4)*32767),0]);near(attitudeAngles(q).pitch,90,.1);
  const nose=new Vector3(0,0,-1).applyQuaternion(sceneQuaternion(q));near(nose.y,1,.001);assert.equal(fromRecorded([32767,32767,0]),null);
});
test('gyro and accelerometer estimate is initialized from gravity',()=>{
  const e=new AttitudeEstimator(true);const a=e.update(0,[0,0,0],[0,.5,Math.sqrt(.75)]);near(attitudeAngles(quaternionOf(a)).roll,30);
});
test('yaw alignment preserves tilt, removes the common heading',()=>{
  const q=fromAngles(20,30,75),a=attitudeAngles(alignHeading(q,q));near(a.roll,20);near(a.pitch,30);near(a.yaw,0);near(angularDifference(q,q),0);
});
test('interpolation takes the short path through yaw wrap and refuses gaps',()=>{
  const rows=[{t:0,...quaternionFields(fromAngles(0,0,179))},{t:.02,...quaternionFields(fromAngles(0,0,-179))}];const mid=sampleAttitude(rows,.01,[0,.02]);near(Math.abs(attitudeAngles(mid.q).yaw),180);
  rows[1].attitudeSegment=1;assert.equal(sampleAttitude(rows,.01,[0,.02]),null);rows[1].attitudeSegment=0;rows[1].t=1;assert.equal(sampleAttitude(rows,.5,[0,1]),null);assert.equal(sampleAttitude(rows,2,[0,1]),null);
});
test('missing gyro invalidates estimation and restarts with explicit segment',()=>{
  const e=new AttitudeEstimator();e.update(0,[90,0,0]);e.update(.01,[90,0,0]);assert.equal(e.update(.02,[null,0,0]),null);const result=e.update(.03,[90,0,0]);assert.equal(result.attitudeSegment,1);near(attitudeAngles(quaternionOf(result)).roll,0);
});
test('alignment range includes negative lead-in across different durations',()=>{
  assert.deepEqual(replayRange([{heat:{trim:[2,12]},anchor:5},{heat:{trim:[0,20]},anchor:8}]),{min:-8,max:12});
});
test('v2 export retains attitude provenance; legacy imports remain usable',()=>{
  const session={name:'Race',heats:[{name:'A',attitudeSource:'recorded',samples:[{t:0,...quaternionFields(fromAngles(0,0,0))},{t:1,...quaternionFields(fromAngles(10,20,30))}],trim:[0,1]}]};
  const restored=validateSession({format:'gnd-race',version:2,session});assert.equal(restored.heats[0].attitudeSource,'recorded');near(restored.heats[0].samples[1].qw,session.heats[0].samples[1].qw);
  const legacy={samples:[{t:0,gx:90,gy:0,gz:0},{t:.05,gx:90,gy:0,gz:0}]};assert.equal(replayData(legacy).source,'legacy-relative');assert.equal(replayData(legacy).available,true);
  session.heats[0].samples[0].qw=42;assert.throws(()=>validateSession({format:'gnd-race',version:2,session}));
});
