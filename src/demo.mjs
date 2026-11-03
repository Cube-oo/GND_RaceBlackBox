import {fromAngles,quaternionFields} from './attitude-model.mjs';
export function demoAttitude(t,duration,h){
  const u=t/duration;
  return quaternionFields(fromAngles((24+h*6)*Math.sin(u*42+h*.16),22+h*5+14*Math.sin(u*27),(35+h*8)*Math.sin(u*17+h*.08)));
}
export function addDemoAttitude(heat){
  const h=Math.max(0,[89.48,85.31,82.64].indexOf(heat.officialTime));
  for(const p of heat.samples)Object.assign(p,demoAttitude(p.t,heat.samples.at(-1)?.t||1,h));
  heat.attitudeSource='demo';return heat;
}
export function demoSession(){
  return {id:crypto.randomUUID(),name:'RACE DAY / DEMO',demo:true,heats:[0,1,2].map((h)=>{
    const duration=[89.48,85.31,82.64][h],samples=[];
    for(let i=0;i<=duration*100;i++){
      const t=i/100,u=t/duration,q=Math.sin(u*91)+.45*Math.sin(u*223);
      const throttle=Math.max(8,Math.min(98,52+h*3+20*Math.sin(u*71)+10*Math.sin(u*179)));
      const roll=260*q,pitch=185*Math.cos(u*64)+70*Math.sin(u*170),yaw=150*Math.sin(u*52);
      const noise=(3-h)*12*Math.sin(u*521);
      samples.push({t,throttle,roll,pitch,yaw,gx:roll+noise,gy:pitch+noise*.6,gz:yaw-noise*.7,m0:Math.min(100,throttle+q*14+7),m1:Math.min(100,throttle-q*12+7),m2:Math.min(100,throttle+Math.sin(u*64)*17+7),m3:Math.min(100,throttle-Math.sin(u*64)*17+7),voltage:25.1-u*2.2-throttle*.023,current:8+throttle*.75});
    }
    return addDemoAttitude({id:crypto.randomUUID(),name:`Heat 0${h+1}`,officialTime:duration,battery:h?'6S 1300 / PACK A':'6S 1250 / PACK B',setup:'5" / Betaflight 4.5',notes:'Dati sintetici dimostrativi.',source:'SIMULATED',firmware:'DEMO',demo:true,samples,trim:[0,samples.at(-1).t],offset:0,warnings:[],channels:Object.keys(samples[0]).filter(x=>x!=='t')});
  })};
}
