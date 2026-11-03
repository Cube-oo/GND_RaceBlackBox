import test from 'node:test';
import assert from 'node:assert/strict';
import {TuningCollector,spectrum,bandPower,frequencies,selectWindows,summarizeTuning,tuningAdvice,tuningHeaders,validateTuning} from '../src/tuning.mjs';
const close=(a,b,tolerance)=>assert.ok(Math.abs(a-b)<tolerance,`${a} vs ${b}`);
function collect({fs=1024,delay=0,noise=0,sat=false,missing=false,gap=false}={}){
  const c=new TuningCollector({config:{rollPID:'46,80,38'}});for(let i=0;i<8192;i++){const t=i/fs+(gap&&i>=2048?.2:0),sp=200*Math.sin(t*2*Math.PI*4)+70*Math.sin(t*2*Math.PI*7),gy=200*Math.sin((t-delay)*2*Math.PI*4)+70*Math.sin((t-delay)*2*Math.PI*7)+noise*Math.sin(t*2*Math.PI*200);const p={t,throttle:i<4096?20:80};for(let a=0;a<3;a++){p[['roll','pitch','yaw'][a]]=sp;p[['gx','gy','gz'][a]]=missing?null:gy;p[`raw${a}`]=gy;p[`p${a}`]=sp-gy;p[`i${a}`]=5;p[`d${a}`]=noise*Math.sin(t*2*Math.PI*200);p[`f${a}`]=3;}for(let j=0;j<4;j++)p[`m${j}`]=sat?98:50;c.push(p);}return c.finish();
}
test('Hann PSD preserves sine power and finds native high-frequency peak',()=>{
  const fs=1024,a=Array.from({length:1024},(_,i)=>20*Math.sin(2*Math.PI*200*i/fs)),p=spectrum(a,fs),power=bandPower(p,fs,100,400);close(power,200,.01);const max=p.indexOf(Math.max(...p));close(frequencies(fs)[max],200,4);assert.equal(spectrum(a,200),null);
});
test('native windows retain tracking lag, throttle selection and finite summaries',()=>{
  const r=collect({delay:.02});assert.equal(r.windows.length,8);const s=summarizeTuning(r.windows,0);close(s.lag,20,3);assert.ok(s.error>20);assert.equal(selectWindows(r,{throttle:'high'}).length,4);assert.equal(selectWindows(r,{start:1,end:3}).length,2);assert.ok(tuningAdvice(r,s,0).some(a=>a.id==='tracking'));
});
test('saturation prevents gain-increase advice; missing and short data are explicit',()=>{
  const r=collect({delay:.02,sat:true}),s=summarizeTuning(r.windows,0),a=tuningAdvice(r,s,0);assert.ok(a.some(x=>x.id==='saturation'));assert.ok(!a.some(x=>x.id==='tracking'));assert.equal(tuningAdvice(undefined,s,0)[0].id,'missing');assert.equal(tuningAdvice(r,summarizeTuning([],0),0)[0].id,'short');const m=collect({missing:true});assert.equal(summarizeTuning(m.windows,0).error,null);
});
test('timestamp gaps do not contaminate spectra; low rates have no spectra',()=>{
  const c=new TuningCollector();for(let i=0;i<1024;i++)c.push({t:i/1000+(i>500?.1:0),gx:1});assert.equal(c.finish().windows.length,0);const r=collect({fs:200});assert.equal(r.windows[0].axes[0].filtered,null);
});
test('backup validation preserves v1 analysis and rejects malformed spectra',()=>{
  const r=collect({noise:15});assert.deepEqual(validateTuning(r,8),r);r.windows[0].axes[0].filtered[0]=null;assert.throws(()=>validateTuning(r,8));
});
test('header extraction preserves explicit zero and never supplies defaults',()=>{
  const c=tuningHeaders('H rollPID:46,80,38\nH dterm_lpf2_static_hz:0\nH name:untrusted\nH unrelated:12');assert.equal(c.dterm_lpf2_static_hz,'0');assert.equal(c.rollPID,'46,80,38');assert.equal(c.gyro_lpf2_static_hz,undefined);assert.equal(c.name,undefined);
});
