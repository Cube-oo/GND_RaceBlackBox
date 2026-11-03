import test from 'node:test';
import assert from 'node:assert/strict';
import {readSetting,buildSetup,recommendation} from '../src/setup-model.mjs';
function report(){return {source:'bbl',config:{rollPID:'46,80,38',pitchPID:'50,85,42',yawPID:'45,80,0',feedforward_weight:'120,125,0',d_min:'27,30,0',gyro_lpf1_dyn_hz:'250,500',gyro_lpf2_static_hz:'0'},windows:Array.from({length:4},(_,i)=>({start:i,end:i+1023/1024,fs:1024,throttle:50,saturation:0,axes:[0,1,2].map(()=>({error:1,command:20,bias:0,gyro:20,lag:null,terms:[5,4,3,2],filtered:Array(128).fill(1),raw:Array(128).fill(4),d:Array(128).fill(.01)}))}))};}
test('header aliases retain zero, reject conflicts and never invent defaults',()=>{
  assert.equal(readSetting({a:'0'},['a']).value,0);assert.equal(readSetting({},['a']).value,null);assert.equal(readSetting({a:'2',b:'3'},['a','b']).conflict,true);assert.equal(readSetting({a:'100,200'},['a'],1).value,200);assert.equal(readSetting({a:''},['a']).value,null);
});
test('gains, feedforward and D min map to their own axes',()=>{
  const m=buildSetup({firmware:'Betaflight 4.5.0'},report());assert.deepEqual(m.gains[1].fields.map(f=>f.value),[50,85,42,30,125]);assert.equal(m.gains[2].fields[2].value,0);assert.equal(m.gains[2].fields[4].value,0);assert.equal(m.fields.find(f=>f.id==='mode').state,'missing');assert.equal(m.fields.find(f=>f.id==='gyro2').value,0);
});
test('directions retain evidence and never invent a numeric tuned value',()=>{
  const m=buildSetup({firmware:'Betaflight 4.5.0'},report()),f=m.fields.find(f=>f.id==='gyro-min');assert.equal(f.state,'review');assert.equal(f.value,250);assert.ok(f.evidence.length);assert.match(recommendation(f),/filtraggio/);
});
test('unknown firmware, missing log and short intervals suppress proposals',()=>{
  assert.equal(buildSetup({firmware:'Betaflight 4.6.0'},report()).review,0);assert.equal(buildSetup({},null).available,0);assert.equal(buildSetup({firmware:'Betaflight 4.5.0'},report(),{start:0,end:.5}).review,0);
});
