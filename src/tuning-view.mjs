import uPlot from 'uplot';
import {createIcons,Download,Check,RotateCcw,Upload} from 'lucide';
import {TuningCollector,TUNING_AXES,selectWindows,summarizeTuning,tuningAdvice,frequencies} from './tuning.mjs';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=(v,suffix='',digits=1)=>typeof v==='number'&&Number.isFinite(v)?v.toFixed(digits)+suffix:'--';
const demoCache=new WeakMap();
function demoReport(h){
  if(demoCache.has(h.samples))return demoCache.get(h.samples);
  const collector=new TuningCollector({source:'demo',config:{rollPID:'46,80,38',pitchPID:'50,85,42',yawPID:'45,80,0',d_min:'27,30,0',feedforward_weight:'120,125,120',gyro_lpf1_static_hz:'0',gyro_lpf1_dyn_hz:'250,500',gyro_lpf2_static_hz:'500',dterm_lpf1_dyn_hz:'75,150',dterm_lpf2_static_hz:'150',dyn_notch_count:'3',dyn_notch_min_hz:'100',dyn_notch_max_hz:'600',rpm_filter_harmonics:'3',debug_mode:'0'}});
  let index=0;
  for(let i=0;i<h.samples.at(-1).t*1000;i++){
    const t=i/1000;while(index<h.samples.length-2&&h.samples[index+1].t<t)index++;
    const a=h.samples[index],b=h.samples[index+1],u=(t-a.t)/(b.t-a.t),p={t};
    for(const k of ['throttle','roll','pitch','yaw','m0','m1','m2','m3'])p[k]=a[k]+u*(b[k]-a[k]);
    for(let axis=0;axis<3;axis++){
      const sp=p[['roll','pitch','yaw'][axis]],signal=Math.sin(2*Math.PI*(210+axis*35)*t),noise=(axis===2?2:7+p.throttle*.22)*signal;
      p[['gx','gy','gz'][axis]]=sp+noise;p[`raw${axis}`]=sp+noise*3;p[`p${axis}`]=-noise*.5;p[`i${axis}`]=8*Math.sin(t*.5);p[`d${axis}`]=axis===2?0:noise*.7;p[`f${axis}`]=15*Math.cos(t*2);
    }
    collector.push(p);
  }
  const report=collector.finish();demoCache.set(h.samples,report);return report;
}
export function tuningReportFor(heat){
  if(heat?.tuning)return heat.tuning;
  if(heat?.demo&&heat.source==='SIMULATED'&&heat.samples.length>1)return demoReport(heat);
  return null;
}
export function mountTuning(root,{sessions,heat,onSelect,toast}){
  let axis=0,throttle='all',signal='filtered',start=heat?.trim[0]||0,end=heat?.trim[1]||0,plots=[],observer,report=heat?.tuning,selected=[],summary,advice,disposed=false;
  report=tuningReportFor(heat);
  const logEnd=Math.max(heat?.samples.at(-1)?.t||0,report?.windows.at(-1)?.end||0);
  if(end===(heat?.samples.at(-1)?.t||0))end=logEnd;
  const $=s=>root.querySelector(s),color=['#fff200','#65f7ff','#ed4038','#f3f3f3'];
  function cleanup(){observer?.disconnect();plots.forEach(p=>p.destroy());plots=[];}
  function render(){
    cleanup();selected=selectWindows(report,{start,end,throttle});summary=summarizeTuning(selected,axis);advice=tuningAdvice(report,summary,axis);
    const sessionName=sessions.find(s=>s.heats.some(h=>h.id===heat?.id))?.name||'',config=report?.config||{},limit=summary.fs?Math.min(1000,summary.fs*.45):null;
    root.innerHTML=`<div class="tune-title"><div><h2>PID / FILTRI</h2><p>${esc(sessionName)} / ${esc(heat?.name||'Nessun volo')}</p></div><div class="actions"><span class="tune-source ${report?.source==='demo'?'demo':''}">${report?.source==='demo'?'DATI SINTETICI':report?.source==='bbl'?'BLACKBOX ORIGINALE':report?.source==='csv'?'CSV / SCALE CONFERMATE':'NUOVA IMPORTAZIONE RICHIESTA'}</span><button id="tune-export" ${!report?'disabled':''}><i data-lucide="download"></i> Report</button></div></div>
    <form id="tune-controls" class="tune-controls"><label class="field">SESSIONE / VOLO<select id="tune-heat">${sessions.map(s=>`<optgroup label="${esc(s.name)}">${s.heats.map(h=>`<option value="${h.id}" ${heat?.id===h.id?'selected':''}>${esc(h.name)}</option>`).join('')}</optgroup>`).join('')}</select></label><label class="field">ASSE<select id="tune-axis">${TUNING_AXES.map((a,i)=>`<option value="${i}" ${axis===i?'selected':''}>${a}</option>`).join('')}</select></label><label class="field">THROTTLE MEDIO<select id="tune-throttle">${[['all','Tutto'],['low','Basso / <35%'],['mid','Medio / 35-70%'],['high','Alto / >=70%']].map(([k,v])=>`<option value="${k}" ${throttle===k?'selected':''}>${v}</option>`).join('')}</select></label><label class="field">DA / s<input id="tune-start" type="number" min="0" step=".001" required value="${start}"></label><label class="field">A / s<input id="tune-end" type="number" min="0" step=".001" required value="${end}"></label><button class="primary icon-button" type="submit" title="Analizza intervallo" aria-label="Analizza intervallo"><i data-lucide="check"></i></button><button id="tune-reset" class="icon-button" type="button" title="Intero log" aria-label="Intero log"><i data-lucide="rotate-ccw"></i></button></form>
    <div class="tune-quality" role="status"><span>${selected.length} FINESTRE / ${fmt(summary.duration,' s',2)} ANALIZZATI</span><span>LOG ${fmt(summary.fs,' Hz',0)} / BANDA FINO A ${fmt(limit,' Hz',0)}</span><span>${report?`${report.discarded.toLocaleString('it-IT')} CAMPIONI ESCLUSI${report.capped?' / LIMITE RAGGIUNTO':''}`:'SPETTRI NON DISPONIBILI'}</span></div>
    ${!report?`<div class="tune-empty"><h3>DATI PID E SPETTRI NON PRESENTI</h3><p>Questo volo non contiene l'analisi nativa. I campioni della telemetria non vengono usati per stimare il rumore.</p><button class="primary" type="button" data-action="import"><i data-lucide="upload"></i> Importa Blackbox originale</button></div>`:''}
    <section class="kpis tune-kpis"><div class="kpi"><h3>TRACKING ${TUNING_AXES[axis]}</h3><strong>${fmt(summary.error,' deg/s')}</strong><small>Errore RMS setpoint - gyro</small></div><div class="kpi"><h3>RITARDO APPARENTE</h3><strong>${fmt(summary.lag,' ms',0)}</strong><small>${summary.lagWindows} finestre correlate / non ritardo filtro</small></div><div class="kpi"><h3>GYRO &gt;100 Hz</h3><strong>${fmt(summary.hf,' deg/s')}</strong><small>RMS nella banda osservabile</small></div><div class="kpi"><h3>MOTORI &gt;=95%</h3><strong>${fmt(summary.saturation,'%')}</strong><small>Quota campioni / almeno un motore</small></div></section>
    <div class="tune-work"><div class="tune-plots"><div class="tune-section-head"><h3>SPETTRO / ${TUNING_AXES[axis]}</h3><label>Segnale <select id="tune-signal"><option value="filtered" ${signal==='filtered'?'selected':''}>Gyro filtrato + non filtrato</option><option value="d" ${signal==='d'?'selected':''}>D-term</option></select></label></div><div class="tune-legend">${signal==='d'?'<span style="color:#ed4038">D-term / unita log</span>':'<span style="color:#fff200">Gyro filtrato</span><span style="color:#65f7ff">Gyro non filtrato</span>'}<span>dB / PSD, non dB acustici</span></div><div id="tune-spectrum" class="tune-chart"></div><div class="tune-section-head"><h3>SPETTRO NEL TEMPO</h3><span>Hz / secondi log</span></div><canvas id="tune-map" aria-label="Spettrogramma del segnale selezionato nel tratto di volo" role="img"></canvas><p id="tune-map-readout" class="tune-map-readout">${selected.length?'':'Nessuna finestra completa nel tratto selezionato.'}</p><div class="tune-section-head"><h3>ERRORE DI TRACKING / RMS</h3><span>deg/s / finestre native</span></div><div id="tune-tracking" class="tune-chart"></div></div>
    <section class="tune-advice"><h3>MODIFICHE DA VALUTARE</h3>${report?.source==='demo'?'<p class="tune-warning">Esempio sintetico, non un tuning del tuo mezzo.</p>':''}${advice.map((a,i)=>`<article class="tune-finding" data-finding="${a.id}"><div><b>${String(i+1).padStart(2,'0')}</b><span>${a.confidence}</span></div><h4>${esc(a.title)}</h4><p class="tune-evidence">${esc(a.evidence)}</p><p>${esc(a.action)}</p></article>`).join('')}<p class="tune-warning">Nessuna modifica applicata alla FC. Salva un backup del setup; varia un parametro alla volta. Dopo ogni prova breve controlla temperatura motori e oscillazioni. Interrompi in caso di comportamento anomalo.</p></section></div>
    <section class="tune-config"><div><h3>GUADAGNI REGISTRATI</h3><div class="table-wrap"><table><thead><tr><th>ASSE</th><th>P</th><th>I</th><th>D</th></tr></thead><tbody>${TUNING_AXES.map(a=>{const v=config[a.toLowerCase()+'PID']?.split(',')||[];return `<tr><td>${a}</td>${[0,1,2].map(i=>`<td>${esc(v[i]??'--')}</td>`).join('')}</tr>`;}).join('')}</tbody></table></div><h3 class="tune-subhead">CONTRIBUTI RMS / ${TUNING_AXES[axis]}</h3><div class="tune-terms">${['P','I','D','FF'].map((t,i)=>`<div><span>${t}</span><strong>${fmt(summary.terms[i])}</strong></div>`).join('')}</div><p class="tune-small">Unita di uscita registrate, non guadagni e non percentuali di spinta.</p></div><div><h3>FILTRI E PARAMETRI DEL LOG</h3>${Object.keys(config).length?`<div class="tune-header-table"><table><tbody>${Object.entries(config).filter(([k])=>!['rollPID','pitchPID','yawPID'].includes(k)).map(([k,v])=>`<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table>`:'<p class="tune-small">Configurazione non registrata o non disponibile nel CSV. Nessun valore predefinito viene attribuito al volo.</p>'}</div></section>
    <details class="tune-method"><summary>METODO, LIMITI E FONTI</summary><p>Finestre non sovrapposte di 1024 campioni originali. Sono incluse solo finestre interamente comprese nel tratto; il throttle e la media di ogni finestra. Finestre con intervalli irregolari oltre il 5%, interruzioni o campioni incompleti sono escluse. Massimo 2048 finestre per volo.</p><p>FFT con finestra Hann e rimozione della media; PSD monolaterale aggregata in 128 bande. Spettri disponibili da 500 Hz di logging; banda visualizzata fino al minore fra 1000 Hz e il 45% del sample rate. Il campionamento della FC puo avere gia introdotto aliasing. Non sono ricostruiti segnali precedenti ai filtri se assenti. Le scale D-term e gyro non sono confrontabili.</p><p>Le soglie di 5% saturazione, 5 deg/s RMS ad alta frequenza e 30% di potenza sono criteri esplorativi di questa applicazione, non limiti di sicurezza Betaflight. Il ritardo usa correlazione del comando e del gyro (0-60 ms, correlazione >=0.7), non identifica la sola latenza dei filtri. Non vengono stimati margini di stabilita, temperatura motori o un PID ottimale. Le oscillazioni possono dipendere anche da meccanica, vento o manovra.</p><p>I parametri sono copie delle intestazioni, con nomi e valori del firmware originale; 0 non significa campo assente. D dinamico, Feedforward e TPA rendono i guadagni dipendenti dalle condizioni. La demo PID aggiunge segnali sintetici e non simula una FC reale.</p><p>Fonti: <a href="https://betaflight.com/docs/wiki/app/pid-tuning-tab" target="_blank" rel="noopener">Betaflight PID e filtri</a>, <a href="https://betaflight.com/docs/wiki/guides/current/DSHOT-RPM-Filtering" target="_blank" rel="noopener">RPM Filtering</a>, <a href="https://github.com/betaflight/betaflight/blob/4.5.0/src/main/blackbox/blackbox.c" target="_blank" rel="noopener">Campi Blackbox</a>.</p></details>`;
    createIcons({root,icons:{Download,Check,RotateCcw,Upload}});
    $('#tune-heat').onchange=e=>onSelect(e.target.value);
    $('#tune-axis').onchange=e=>{axis=Number(e.target.value);render();};
    $('#tune-throttle').onchange=e=>{throttle=e.target.value;render();};
    $('#tune-signal').onchange=e=>{signal=e.target.value;render();};
    $('#tune-controls').onsubmit=e=>{e.preventDefault();const a=Number($('#tune-start').value),b=Number($('#tune-end').value);if(!Number.isFinite(a)||!Number.isFinite(b)||a<0||b<=a||b>logEnd){toast('Intervallo non valido. Usa i secondi del log selezionato.');return;}start=a;end=b;render();};
    $('#tune-reset').onclick=()=>{start=0;end=logEnd;throttle='all';render();};
    $('#tune-export').onclick=exportReport;
    drawPlots();observer=new ResizeObserver(()=>{if(disposed)return;plots.forEach(p=>p.setSize({width:p.root.parentElement.clientWidth,height:220}));drawMap();});observer.observe($('.tune-plots'));drawMap();
  }
  function plot(target,series,data,unit){
    const host=$(target);if(data.length<2||data[0].length<2||!data.slice(1).some(a=>a.some(v=>v!==null))){host.innerHTML='<p class="tune-no-data">Canale o finestre sufficienti non disponibili.</p>';return;}
    const p=new uPlot({width:host.clientWidth,height:220,legend:{show:false},scales:{x:{time:false}},series:[{},...series],axes:[{stroke:'#a5acab',grid:{stroke:'#292d26'},font:'12px Consolas'},{stroke:'#a5acab',grid:{stroke:'#292d26'},size:60,font:'12px Consolas',label:unit}],cursor:{drag:{x:false,y:false}},select:{show:false}},data,host);plots.push(p);
  }
  function drawPlots(){
    const keys=signal==='d'?['d']:['filtered','raw'],fs=summary.fs,x=fs?frequencies(fs):[],n=x.filter(f=>f<=Math.min(1000,fs*.45)).length;
    plot('#tune-spectrum',keys.map((key,i)=>({label:key,stroke:signal==='d'?color[2]:color[i],width:1.5,spanGaps:false})),[x.slice(0,n),...keys.map(k=>Array.from({length:n},(_,i)=>summary[k]?10*Math.log10(Math.max(1e-12,summary[k][i])):null))],signal==='d'?'dB [log^2/Hz]':'dB [(deg/s)^2/Hz]');
    const xs=[],ys=[];let prev=null;for(const w of selected){if(prev!==null&&w.start-prev>.01){xs.push((prev+w.start)/2);ys.push(null);}xs.push((w.start+w.end)/2);ys.push(w.axes[axis].error);prev=w.end;}
    plot('#tune-tracking',[{label:'RMS',stroke:color[0],width:1.5,spanGaps:false}],[xs,ys],'deg/s');
  }
  function drawMap(){
    const canvas=$('#tune-map'),width=canvas.clientWidth,height=220,dpr=Math.min(2,window.devicePixelRatio||1);canvas.width=Math.round(width*dpr);canvas.height=height*dpr;
    const ctx=canvas.getContext('2d');ctx.scale(dpr,dpr);ctx.fillStyle='#030504';ctx.fillRect(0,0,width,height);
    const left=48,top=12,w=Math.max(1,width-left-12),h=170,fs=summary.fs,maxHz=Math.min(1000,(fs||0)*.45),range=end-start;
    const windows=selected.filter(v=>v.axes[axis][signal]?.some(p=>p>1e-12)&&Math.abs(v.fs/fs-1)<=.01);
    if(!windows.length||range<=0){ctx.fillStyle='#a5acab';ctx.font='13px Consolas';ctx.fillText('Spettro assente o potenza nulla',16,110);return;}
    const freq=frequencies(fs),dbs=windows.flatMap(win=>win.axes[axis][signal].filter((_,i)=>freq[i]<=maxHz).map(p=>10*Math.log10(Math.max(1e-12,p))));
    const max=Math.max(...dbs.slice(0,20000));const high=windows.reduce((m,win)=>Math.max(m,...win.axes[axis][signal].map((p,i)=>freq[i]<=maxHz?10*Math.log10(Math.max(1e-12,p)):-120)),max),low=high-60;
    for(const win of windows){const x=left+(win.start-start)/range*w,ww=Math.max(1,(win.end-win.start)/range*w);win.axes[axis][signal].forEach((p,i)=>{if(freq[i]>maxHz)return;const v=Math.max(0,Math.min(1,(10*Math.log10(Math.max(1e-12,p))-low)/60));ctx.fillStyle=v<.5?`rgb(0,${Math.round(v*360)},${Math.round(v*400)})`:`rgb(${Math.round((v-.5)*510)},${Math.round(180+(v-.5)*150)},${Math.round(200*(1-(v-.5)*2))})`;const dh=fs/256/maxHz*h;ctx.fillRect(x,top+h-freq[i]/maxHz*h,ww,dh+1);});}
    ctx.fillStyle='#a5acab';ctx.font='12px Consolas';ctx.fillText(`${Math.round(maxHz)}`,2,top+8);ctx.fillText('0',27,top+h);ctx.fillText(`${start.toFixed(1)} s`,left,207);ctx.textAlign='right';ctx.fillText(`${end.toFixed(1)} s`,width-12,207);ctx.textAlign='left';
    $('#tune-map-readout').textContent=`Scala relativa ${low.toFixed(0)} ... ${high.toFixed(0)} dB / zone vuote: dati esclusi`;
    canvas.onpointermove=e=>{const t=start+(e.offsetX-left)/w*range,win=windows.find(v=>v.start<=t&&v.end>=t);if(win)$('#tune-map-readout').textContent=`${win.start.toFixed(3)} - ${win.end.toFixed(3)} s / throttle ${fmt(win.throttle,'%')} / RMS ${fmt(win.axes[axis].error,' deg/s')}`;};
  }
  function exportReport(){
    const data={format:'gnd-pid-report',version:1,createdAt:new Date().toISOString(),session:sessions.find(s=>s.heats.some(h=>h.id===heat.id))?.name,heat:heat.name,firmware:heat.firmware,source:report.source,interval:{start,end,throttle},axis:TUNING_AXES[axis],config:report.config,summary,advice,limits:'Analisi esplorativa, non autotune. Finestre native da 1024 campioni. Verificare meccanica e temperatura motori; una modifica alla volta.'};
    const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=`${heat.name.replace(/[^a-zA-Z0-9_-]+/g,'-')}-pid-report.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Report PID esportato con evidenze, parametri e limiti.');
  }
  render();return {dispose(){disposed=true;cleanup();}};
}
