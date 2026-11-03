import FFT from 'fft.js';

const N=1024,BINS=128,fft=new FFT(N),finite=Number.isFinite;
const valid=v=>typeof v==='number'&&finite(v);
const mean=a=>a.reduce((s,v)=>s+v,0)/a.length;
const rms=a=>Math.sqrt(mean(a.map(v=>v*v)));
const rounded=v=>valid(v)?Number(v.toPrecision(7)):null;
const hann=Array.from({length:N},(_,i)=>.5-.5*Math.cos(2*Math.PI*i/(N-1)));
const windowPower=hann.reduce((s,v)=>s+v*v,0);
export const TUNING_AXES=['ROLL','PITCH','YAW'];
export const TUNING_CHANNELS=Object.fromEntries(['P','I','D','F'].flatMap(term=>[0,1,2].map(i=>[`${term.toLowerCase()}${i}`,[`axis${term}[${i}]`]] )).concat([0,1,2].map(i=>[`raw${i}`,[`gyroUnfilt[${i}]`]])));
const acceptedHeader=/^(?:rollPID|pitchPID|yawPID|pid.*|d_min.*|d_max.*|feedforward.*|ff_.*|gyro.*|dterm.*|dyn_notch.*|rpm_filter.*|motor_poles|dshot_bidir|debug_mode|looptime|blackbox.*|simplified.*|tpa.*|iterm.*|anti_gravity.*)$/;
export function tuningHeaders(header){
  const entries=[];
  for(const line of header.split(/\r?\n/)){
    const m=/^H ([a-zA-Z0-9_.]+):\s*([^\r\n]*)$/.exec(line);
    if(m&&acceptedHeader.test(m[1])&&entries.length<180)entries.push([m[1],m[2].trim().slice(0,200)]);
  }
  return Object.fromEntries(entries);
}
export function spectrum(values,fs){
  if(values.length!==N||!values.every(valid)||fs<500)return null;
  const avg=mean(values),input=values.map((v,i)=>(v-avg)*hann[i]),out=fft.createComplexArray();
  fft.realTransform(out,input);
  // One-sided Hann periodogram; four adjacent bins are averaged, preserving power.
  return Array.from({length:BINS},(_,j)=>{
    let p=0;for(let k=1+j*4;k<=4+j*4;k++)p+=(out[2*k]**2+out[2*k+1]**2)*(k===N/2?1:2)/(fs*windowPower);
    return rounded(p/4);
  });
}
export function frequencies(fs){return Array.from({length:BINS},(_,j)=>(2.5+4*j)*fs/N);}
export function bandPower(psd,fs,lo=100,hi=Math.min(1000,fs*.45)){
  if(!psd||hi<=lo)return null;
  return psd.reduce((s,p,i)=>s+(frequencies(fs)[i]>=lo&&frequencies(fs)[i]<=hi?p*fs/256:0),0);
}
function series(rows,key){const a=rows.map(p=>p[key]);return a.every(valid)?a:null;}
function lagEstimate(sp,gy,fs){
  if(!sp||!gy||fs<500)return null;
  const mu=mean(sp),sd=rms(sp.map(v=>v-mu));if(sd<30)return null;
  const stride=Math.max(1,Math.floor(N/128)),max=Math.min(Math.round(.06*fs),N/4),step=Math.max(1,Math.round(.002*fs));
  let best={correlation:-1,ms:0},zeroCorrelation=-1;
  for(let lag=0;lag<=max;lag+=step){let a=[],b=[];for(let i=0;i<N-max;i+=stride){a.push(sp[i]);b.push(gy[i+lag]);}const ma=mean(a),mb=mean(b);let ab=0,aa=0,bb=0;for(let i=0;i<a.length;i++){ab+=(a[i]-ma)*(b[i]-mb);aa+=(a[i]-ma)**2;bb+=(b[i]-mb)**2;}const r=ab/Math.sqrt(aa*bb);if(lag===0)zeroCorrelation=r;if(r>best.correlation)best={correlation:r,ms:lag/fs*1000};}
  if(best.ms>0&&best.correlation-zeroCorrelation<.02)return null;
  return best.correlation>=.7&&best.ms<max/fs*1000-2?{ms:rounded(best.ms),correlation:rounded(best.correlation)}:null;
}
export class TuningCollector{
  constructor({source='bbl',config={}}={}){this.source=source;this.config=config;this.rows=[];this.windows=[];this.seen=0;this.discarded=0;this.capped=false;}
  invalidate(){this.discarded+=this.rows.length;this.rows=[];}
  push(row){
    this.seen++;if(this.windows.length>=2048){this.capped=true;this.discarded++;return;}
    this.rows.push(row);if(this.rows.length!==N)return;
    const rows=this.rows;this.rows=[];const start=rows[0].t,end=rows.at(-1).t,dt=(end-start)/(N-1),fs=1/dt;
    if(!(fs>=10&&fs<=32000)||rows.slice(1).some((p,i)=>Math.abs((p.t-rows[i].t)/dt-1)>.05)){this.discarded+=N;return;}
    const thr=series(rows,'throttle'),motors=rows.map(p=>[0,1,2,3].map(i=>p[`m${i}`]));
    const saturation=motors.every(m=>m.every(valid))?mean(motors.map(m=>Math.max(...m)>=95?100:0)):null;
    const axes=[0,1,2].map(axis=>{
      const sp=series(rows,['roll','pitch','yaw'][axis]),gy=series(rows,['gx','gy','gz'][axis]),raw=series(rows,`raw${axis}`),d=series(rows,`d${axis}`);
      const error=sp&&gy?sp.map((v,i)=>v-gy[i]):null;
      const terms=['p','i','d','f'].map(k=>{const a=series(rows,`${k}${axis}`);return a?rounded(rms(a)):null;});
      const quiet=sp&&Math.max(...sp.map(Math.abs))<30;
      return {error: error?rounded(rms(error)):null,bias:quiet&&error?rounded(mean(error)):null,command:sp?rounded(rms(sp)):null,gyro:gy?rounded(rms(gy)):null,terms,lag:lagEstimate(sp,gy,fs),filtered:spectrum(gy||[],fs),raw:spectrum(raw||[],fs),d:spectrum(d||[],fs)};
    });
    this.windows.push({start,end,fs:rounded(fs),throttle:thr?rounded(mean(thr)):null,saturation:rounded(saturation),axes});
  }
  finish(){this.invalidate();return {version:1,source:this.source,config:this.config,seen:this.seen,discarded:this.discarded,capped:this.capped,windows:this.windows};}
}
export function selectWindows(report,{start=0,end=Infinity,throttle='all'}={}){
  return (report?.windows||[]).filter(w=>w.start>=start-1e-6&&w.end<=end+1e-6&&(throttle==='all'||valid(w.throttle)&&(throttle==='low'?w.throttle<35:throttle==='mid'?w.throttle>=35&&w.throttle<70:w.throttle>=70)));
}
export function summarizeTuning(windows,axis){
  const duration=windows.reduce((s,w)=>s+w.end-w.start,0);
  const avg=get=>{let total=0,t=0;for(const w of windows){const v=get(w);if(valid(v)){const dt=w.end-w.start;total+=v*dt;t+=dt;}}return t?total/t:null;};
  const weightedRms=get=>{const v=avg(w=>{const n=get(w);return valid(n)?n*n:null;});return v===null?null:Math.sqrt(v);};
  const fs=windows.length?Math.min(...windows.map(w=>w.fs)):null;
  // Never combine spectra whose frequency grids differ by more than 1 percent.
  const spectraWindows=windows.filter(w=>fs&&Math.abs(w.fs/fs-1)<=.01);
  const psd=key=>{const ws=spectraWindows.filter(w=>w.axes[axis][key]);if(!ws.length)return null;const t=ws.reduce((s,w)=>s+w.end-w.start,0);return Array.from({length:BINS},(_,i)=>ws.reduce((s,w)=>s+w.axes[axis][key][i]*(w.end-w.start),0)/t);};
  const filtered=psd('filtered'),raw=psd('raw'),d=psd('d'),hf=bandPower(filtered,fs),total=bandPower(filtered,fs,0,fs*.45);
  const peak=filtered&&hf>0?frequencies(fs).map((f,i)=>({f,p:filtered[i]})).filter(x=>x.f>=100&&x.f<=Math.min(1000,fs*.45)).sort((a,b)=>b.p-a.p)[0]?.f:null;
  const dHigh=bandPower(d,fs),dTotal=bandPower(d,fs,0,fs*.45);
  return {windows:windows.length,duration,fs,error:weightedRms(w=>w.axes[axis].error),command:weightedRms(w=>w.axes[axis].command),bias:avg(w=>w.axes[axis].bias),saturation:avg(w=>w.saturation),lag:avg(w=>w.axes[axis].lag?.ms),lagWindows:windows.filter(w=>w.axes[axis].lag).length,terms:[0,1,2,3].map(i=>weightedRms(w=>w.axes[axis].terms[i])),filtered,raw,d,hf:hf===null?null:Math.sqrt(hf),hfPercent:total>0?100*hf/total:null,dHfPercent:dTotal>0?100*dHigh/dTotal:null,peak,spectralWindows:spectraWindows.filter(w=>w.axes[axis].filtered).length};
}
export function tuningAdvice(report,summary,axis){
  const a=[],add=(id,title,evidence,action,confidence='INDIZIO')=>a.push({id,title,evidence,action,confidence});
  if(!report){add('missing','Reimporta la Blackbox originale','L\'archivio contiene solo la telemetria ridotta.','Serve una nuova importazione per recuperare PID, filtri e spettri a frequenza nativa.','DATI MANCANTI');return a;}
  if(summary.duration<3||summary.windows<3){add('short','Campione insufficiente',`${summary.windows} finestre complete, ${summary.duration.toFixed(2)} s analizzati.`,'Estendi il tratto o registra un volo piu lungo. Nessuna modifica PID consigliabile da questo intervallo.','DATI INSUFFICIENTI');return a;}
  if(summary.saturation===null)add('motors','Margine motori non verificabile','Canali motore o scala mancanti.','Registra tutti i motori con i limiti di uscita. Gli aumenti di guadagno non sono valutabili.','DATI MANCANTI');
  else if(summary.saturation>=5)add('saturation','Prima recupera margine sui motori',`${summary.saturation.toFixed(1)}% del tratto con almeno un motore >=95%.`,'Non aumentare P, I o D per inseguire questo errore. Confronta batteria, eliche, peso e limiti di uscita in una prova equivalente.');
  if(!summary.filtered)add('rate','Rumore non valutabile','Gyro assente oppure frequenza di log inferiore a 500 Hz.','Registra gyro e D-term a frequenza maggiore, compatibile con la FC. Non alleggerire i filtri sulla base di questi dati.','DATI MANCANTI');
  else if(summary.hf>=5&&summary.hfPercent>=30)add('noise','Residuo ad alta frequenza da verificare',`Gyro ${TUNING_AXES[axis]}: ${summary.hf.toFixed(1)} deg/s RMS sopra 100 Hz, ${summary.hfPercent.toFixed(0)}% della potenza osservata; picco circa ${summary.peak.toFixed(0)} Hz.`,'Controlla prima eliche, motori e fissaggio FC. Se il residuo si ripete, prova un piccolo passo verso maggiore filtraggio gyro nel Configurator. Mantieni D invariato; confronta un nuovo log. Non e una diagnosi di risonanza.');
  if(!summary.raw)add('raw','Confronto prima/dopo filtri incompleto','gyroUnfilt non disponibile nelle finestre selezionate.','Registra gyroUnfilt se supportato dal firmware. I canali debug non vengono interpretati automaticamente e il gyro filtrato non dimostra quanto rumore e stato rimosso.','DATI MANCANTI');
  if(summary.terms[2]===null)add('dterm','D-term non registrato','Contributo D assente per questo asse.','Verifica se D e disabilitato oppure non registrato. Nessuna proposta di aumento D o riduzione del filtraggio D.','DATI MANCANTI');
  else if(summary.dHfPercent>=40&&summary.terms[0]!==null&&summary.terms[2]>Math.max(5,summary.terms[0]*1.5))add('d-noise','D-term dominato dalle alte frequenze',`${summary.dHfPercent.toFixed(0)}% della potenza D osservata sopra 100 Hz; RMS D ${summary.terms[2].toFixed(1)}, P ${summary.terms[0].toFixed(1)} unita log.`,'Dopo il controllo meccanico, valuta un piccolo passo verso maggiore filtraggio D. Mantieni i guadagni invariati nella prova e controlla temperatura motori e risposta alle manovre. Non aumentare D per compensare il rumore.','IPOTESI DA TESTARE');
  const margin=summary.saturation!==null&&summary.saturation<5;
  const knownPID=typeof report.config?.[TUNING_AXES[axis].toLowerCase()+'PID']==='string';
  if(!knownPID)add('config','Configurazione PID non disponibile','I guadagni di questo asse non sono presenti nelle intestazioni.','Importa un BBL originale che includa i parametri. I grafici restano consultabili, ma non e proposta una variazione di guadagno.','DATI MANCANTI');
  if(knownPID&&summary.terms[0]!==null&&margin&&summary.filtered&&summary.hf!==null&&summary.hf<5&&summary.error>Math.max(20,.2*(summary.command||0))&&summary.lag>=10&&summary.lagWindows>=3){
    add('tracking','Risposta in ritardo rispetto al comando',`Errore RMS ${summary.error.toFixed(1)} deg/s; ritardo apparente ${summary.lag.toFixed(0)} ms su ${summary.lagWindows} finestre correlate.`,'Ipotesi P/Feedforward da distinguere con manovre ripetibili. A parita di rates, prova un piccolo incremento del solo P nel Configurator; poi controlla errore, sovraelongazioni e temperatura motori. Non modificare insieme FF, D e filtri. Il ritardo include la dinamica del mezzo.','IPOTESI DA TESTARE');
  }
  if(margin&&valid(summary.bias)&&Math.abs(summary.bias)>10)add('bias','Errore persistente con comandi piccoli',`Bias medio setpoint - gyro: ${summary.bias.toFixed(1)} deg/s nelle finestre con setpoint sempre <30 deg/s.`,'Verifica vento, bilanciamento e orientamento FC. Prima di variare I, ripeti tratti stabili e controlla I-term e margine motori; il bias da solo non identifica I insufficiente.');
  if(!a.some(x=>['noise','d-noise','tracking','saturation','bias'].includes(x.id)))add('retain','Mantieni il setup come riferimento','Nessun criterio esplorativo ha isolato una modifica utile in questo tratto.','Non equivale a un tuning ottimale o sicuro. Confronta un altro tratto e un volo equivalente, cambiando un solo parametro alla volta.','NESSUNA MODIFICA MOTIVATA');
  return a;
}
export function validateTuning(r,duration){
  if(r===undefined||r===null)return undefined;
  if(r.version!==1||!['bbl','csv','demo'].includes(r.source)||!Array.isArray(r.windows)||r.windows.length>2048)throw Error('Analisi PID non valida.');
  const number=(v,lo=-1e12,hi=1e12)=>{if(v===null)return null;if(!valid(v)||v<lo||v>hi)throw Error('Valore analisi PID non valido.');return v;};
  const vector=(v,size,lo)=>{if(v===null&&size!==4)return null;if(!Array.isArray(v)||v.length!==size)throw Error('Spettro PID non valido.');return v.map(n=>{if(n===null&&size!==4)throw Error('Spettro PID incompleto.');return number(n,lo);});};
  const config={};for(const [k,v] of Object.entries(r.config||{}).slice(0,180)){if(acceptedHeader.test(k)&&typeof v==='string')config[k.slice(0,100)]=v.slice(0,200);}
  let previous=-1;
  const windows=r.windows.map(w=>{if(!w||!valid(w.start)||!valid(w.end)||w.start<previous||w.end<=w.start||w.end>duration+.02||!Array.isArray(w.axes)||w.axes.length!==3)throw Error('Finestra PID non valida.');previous=w.end;
    const axes=w.axes.map(a=>({error:number(a.error,0),bias:number(a.bias),command:number(a.command,0),gyro:number(a.gyro,0),terms:vector(a.terms,4,0),lag:a.lag?{ms:number(a.lag.ms,0,60),correlation:number(a.lag.correlation,.7,1.001)}:null,filtered:vector(a.filtered,BINS,0),raw:vector(a.raw,BINS,0),d:vector(a.d,BINS,0)}));
    if(!valid(w.fs)||Math.abs((w.end-w.start)*w.fs-1023)>2)throw Error('Frequenza analisi PID non valida.');
    return {start:number(w.start,0),end:number(w.end,0),fs:number(w.fs,10,32000),throttle:number(w.throttle,0,100),saturation:number(w.saturation,0,100),axes};});
  if(!valid(r.seen)||!valid(r.discarded)||r.discarded>r.seen)throw Error('Conteggio analisi PID non valido.');
  return {version:1,source:r.source,config,seen:number(r.seen,0,1e9),discarded:number(r.discarded,0,1e9),capped:!!r.capped,windows};
}
