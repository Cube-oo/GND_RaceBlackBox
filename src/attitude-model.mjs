import {Quaternion,Euler,Vector3} from 'three';
import {IMU} from '../vendor/src/imu.js';

const RAD=Math.PI/180;
const valid=v=>typeof v==='number'&&Number.isFinite(v);
export const ATTITUDE_KEYS=['qx','qy','qz','qw'];
export const ATTITUDE_SOURCES=['recorded','estimated','relative','legacy-relative','demo'];
export const SOURCE_LABELS={recorded:'REGISTRATO',estimated:'STIMATO / GYRO + ACC',relative:'ROT. RELATIVA / GYRO','legacy-relative':'ROT. RELATIVA / ARCHIVIO',demo:'SIMULATO'};

export function quaternionFields(q,segment=0){return {qx:q.x,qy:q.y,qz:q.z,qw:q.w,attitudeSegment:segment};}
export function hasAttitude(p){return ATTITUDE_KEYS.every(k=>valid(p[k]))&&Math.abs(Math.hypot(p.qx,p.qy,p.qz,p.qw)-1)<.03;}
export function quaternionOf(p){return new Quaternion(p.qx,p.qy,p.qz,p.qw).normalize();}
export function fromRecorded(values){
  if(values.length!==3||!values.every(valid))return null;
  const xyz=values.map(v=>v/32767),m=xyz.reduce((s,v)=>s+v*v,0);
  if(m>1.001)return null;
  return new Quaternion(...xyz,Math.sqrt(Math.max(0,1-m))).normalize();
}
export function attitudeAngles(q){
  const e=new Euler().setFromQuaternion(q,'ZYX');
  return {roll:e.x/RAD,pitch:e.y/RAD,yaw:-e.z/RAD};
}
// Betaflight body coordinates: forward/right/down -> Three.js -Z/+X/-Y.
export function sceneQuaternion(q){return new Quaternion(q.y,-q.z,-q.x,q.w);}
export function fromAngles(roll,pitch,yaw){return new Quaternion().setFromEuler(new Euler(roll*RAD,pitch*RAD,-yaw*RAD,'ZYX'));}
export function angularDifference(a,b){return a.angleTo(b)/RAD;}

export class AttitudeEstimator {
  constructor(useAccelerometer=false){this.useAccelerometer=useAccelerometer;this.segment=0;this.reset(false);}
  reset(increment=true){this.q=new Quaternion();this.imu=new IMU();this.previous=null;this.initialized=false;this.needsReset=false;if(increment)this.segment++;}
  invalidate(){this.needsReset=true;}
  update(t,gyro,acc){
    if(!valid(t)||!gyro.every(valid)){this.invalidate();return null;}
    if(this.previous!==null&&t<=this.previous.t)return null;
    if(this.needsReset||(this.previous&&t-this.previous.t>.1))this.reset();
    let q;
    if(this.useAccelerometer){
      if(!acc?.every(valid)){this.invalidate();return null;}
      if(!this.initialized){
        const length=Math.hypot(...acc);
        if(length<.85||length>1.15)return null;
        this.imu.estimateGyro={X:acc[0],Y:acc[1],Z:acc[2]};
        this.initialized=true;
      }
      const a=this.imu.updateEstimatedAttitude(gyro,acc,t*1e6,1,RAD/1e6);
      q=fromAngles(a.roll/RAD,a.pitch/RAD,a.heading/RAD);
    }else{
      if(this.previous){
        const dt=t-this.previous.t,rotation=new Vector3(...gyro.map((v,i)=>(v+this.previous.gyro[i])*.5*RAD*dt));
        const angle=rotation.length();
        if(angle>0)this.q.multiply(new Quaternion().setFromAxisAngle(rotation.divideScalar(angle),angle)).normalize();
      }
      q=this.q.clone();
    }
    this.previous={t,gyro:[...gyro]};return quaternionFields(q,this.segment);
  }
}

const cache=new WeakMap();
export function replayData(heat){
  const cached=cache.get(heat.samples);if(cached)return cached;
  let rows=heat.samples,source=heat.attitudeSource;
  if(!rows.some(hasAttitude)){
    const estimator=new AttitudeEstimator(false);
    rows=rows.map(p=>({...p,...estimator.update(p.t,[p.gx,p.gy,p.gz])}));
    source='legacy-relative';
  }
  const data={rows,source:ATTITUDE_SOURCES.includes(source)?source:'relative',available:rows.some(hasAttitude)};
  cache.set(heat.samples,data);return data;
}
export function sampleAttitude(rows,t,trim){
  if(!valid(t)||!rows.length||t<trim[0]-1e-8||t>trim[1]+1e-8)return null;
  let lo=0,hi=rows.length-1;
  while(lo<hi){const mid=Math.floor((lo+hi)/2);if(rows[mid].t<t)lo=mid+1;else hi=mid;}
  const b=rows[lo];if(Math.abs(b.t-t)<1e-7)return hasAttitude(b)?{q:quaternionOf(b),sample:b,segment:b.attitudeSegment??0}:null;
  const a=rows[lo-1];
  if(!a||a.t>t||b.t<t||!hasAttitude(a)||!hasAttitude(b)||b.t-a.t>.1||(a.attitudeSegment??0)!==(b.attitudeSegment??0))return null;
  const u=(t-a.t)/(b.t-a.t),sample={t};
  for(const key of ['throttle','m0','m1','m2','m3'])sample[key]=valid(a[key])&&valid(b[key])?a[key]+(b[key]-a[key])*u:null;
  return {q:quaternionOf(a).slerp(quaternionOf(b),u),sample,segment:a.attitudeSegment??0};
}
export function replayRange(entries){
  if(!entries.length)return {min:0,max:1};
  return {min:Math.min(...entries.map(e=>e.heat.trim[0]-e.anchor)),max:Math.max(...entries.map(e=>e.heat.trim[1]-e.anchor))};
}
export function alignHeading(q,initial){
  if(!initial)return q.clone();
  const e=new Euler().setFromQuaternion(initial,'ZYX');
  return new Quaternion().setFromAxisAngle(new Vector3(0,0,1),-e.z).multiply(q);
}
