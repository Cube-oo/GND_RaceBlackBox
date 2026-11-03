import uPlot from 'uplot';
import {createIcons,Play,Pause,SkipBack,SkipForward,RotateCcw,Layers,Columns2,Focus} from 'lucide';
import {createAttitudeScene} from './attitude-scene.mjs';
import {replayData,sampleAttitude,replayRange,alignHeading,attitudeAngles,angularDifference,hasAttitude,quaternionOf,SOURCE_LABELS} from './attitude-model.mjs';

const colors=['#fff200','#65f7ff','#ed4038','#dfdfdf'];
const letters=['A','B','C','D'];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=(n,d=1)=>Number.isFinite(n)?n.toFixed(d):'--';
const icons=()=>createIcons({icons:{Play,Pause,SkipBack,SkipForward,RotateCcw,Layers,Columns2,Focus}});

export function mountAttitude(root,{sessions,suggested,toast}){
  const catalog=sessions.flatMap(s=>s.heats.map(h=>({key:`${s.id}/${h.id}`,session:s,heat:h})));
  let prefs;try{prefs=JSON.parse(localStorage.getItem('gnd-attitude-v1'))}catch{}
  const initial=suggested.map(id=>catalog.find(e=>e.heat.id===id)).filter(Boolean).slice(0,4);
  const slots=Array.from({length:4},(_,i)=>{
    const stored=prefs?.slots?.[i],entry=catalog.find(e=>e.key===stored?.key)||(!prefs?initial[i]:null);
    return {key:entry?.key||'',visible:stored?.visible!==false,opacity:Math.max(.2,Math.min(1,Number(stored?.opacity)||.8)),anchor:entry?Math.max(entry.heat.trim[0],Math.min(entry.heat.trim[1],Number.isFinite(stored?.anchor)?stored.anchor:entry.heat.trim[0])):0};
  });
  if(!slots.some(s=>s.key))initial.forEach((e,i)=>Object.assign(slots[i],{key:e.key,anchor:e.heat.trim[0]}));
  let layout=prefs?.layout==='split'?'split':'overlay',heading=prefs?.heading!==false,speed=1,time=0,playing=false,loop=false,frame,lastStamp,plots=[],chartObserver,scene,entries=[],range={min:0,max:1},dead=false;
  const $=s=>root.querySelector(s);
  function save(){try{localStorage.setItem('gnd-attitude-v1',JSON.stringify({slots,layout,heading}))}catch{}}
  root.innerHTML=`<section class="attitude-heading"><div><span class="eyebrow">FLIGHT REPLAY / MULTI SESSION</span><h2>ASSETTO<span> / OVERLAY</span></h2></div><div class="segmented"><button data-layout="overlay" title="Modelli sovrapposti"><i data-lucide="layers"></i> Sovrapposti</button><button data-layout="split" title="Modelli affiancati"><i data-lucide="columns-2"></i> Affiancati</button></div></section><div class="replay-layout"><section class="replay-primary"><div class="attitude-stage"><div class="stage-top"><span class="stage-origin">ORIZZONTE DI RIFERIMENTO</span><div class="camera-buttons"><button data-camera="iso" title="Vista prospettica" aria-label="Vista prospettica"><i data-lucide="focus"></i></button><button data-camera="front">Fronte</button><button data-camera="side">Lato</button><button data-camera="top">Alto</button></div></div><div id="scene-error" class="scene-message" hidden></div><div id="scene-empty" class="scene-message" hidden>Nessun assetto disponibile in questo istante</div><div class="stage-bottom"><span>QUAD X / FRONTE BIANCO</span><span id="models-count"></span></div></div><div class="replay-transport"><div class="transport-buttons"><button id="replay-back" class="icon-button" title="Indietro di 20 ms" aria-label="Indietro di 20 ms"><i data-lucide="skip-back"></i></button><button id="replay-play" class="icon-button primary" title="Riproduci" aria-label="Riproduci"><i data-lucide="play"></i></button><button id="replay-forward" class="icon-button" title="Avanti di 20 ms" aria-label="Avanti di 20 ms"><i data-lucide="skip-forward"></i></button><button id="replay-zero" class="icon-button" title="Vai al punto comune" aria-label="Vai al punto comune"><i data-lucide="rotate-ccw"></i></button></div><label class="transport-time">TEMPO COMUNE / s<input id="replay-time" type="number" step=".001" value="0" aria-label="Tempo comune in secondi"></label><label class="speed-label">Velocita<select id="replay-speed" aria-label="Velocita replay"><option value=".25">0.25x</option><option value=".5">0.5x</option><option value="1" selected>1x</option><option value="2">2x</option></select></label><label class="loop-label"><input type="checkbox" id="replay-loop"> Loop</label><input type="range" id="replay-timeline" step=".001" value="0" aria-label="Timeline assetto"><div class="timeline-extents"><span id="range-start"></span><span>0 = PUNTO COMUNE DI OGNI VOLO</span><span id="range-end"></span></div></div><div id="attitude-charts" class="attitude-charts"></div></section><section class="replay-flights"><div class="section-head"><h2>VOLI A CONFRONTO</h2><span class="sample-count">MAX 4</span></div><label class="heading-toggle"><input id="align-heading" type="checkbox" ${heading?'checked':''}> Allinea yaw al punto comune</label><div id="flight-slots"></div><p class="note">Il punto comune e un istante del log scelto per ogni volo. I modelli condividono un centro, non una posizione sul percorso.</p><p class="note">La rotazione relativa parte da un orientamento convenzionale e puo accumulare deriva. I log gia in archivio richiedono una nuova importazione per recuperare assetto e accelerometro originali.</p></section></div>`;
  function slotMarkup(slot,i){
    const entry=catalog.find(e=>e.key===slot.key),h=entry?.heat;
    return `<section class="flight-slot" style="--flight-color:${colors[i]}"><div class="slot-title"><strong>${letters[i]}${i===0?' / RIF':''}</strong><label><input type="checkbox" data-visible="${i}" ${slot.visible?'checked':''} aria-label="Mostra volo ${letters[i]}"> Visibile</label></div><label class="field">SESSIONE / HEAT<select data-flight="${i}" aria-label="Volo ${letters[i]}"><option value="">Nessun volo</option>${sessions.map(s=>`<optgroup label="${esc(s.name)}">${s.heats.map(h=>{const key=`${s.id}/${h.id}`;return `<option value="${esc(key)}" ${key===slot.key?'selected':''}>${esc(h.name)}</option>`}).join('')}</optgroup>`).join('')}</select></label><div class="slot-settings"><label class="field">PUNTO COMUNE / s LOG<input type="number" data-anchor="${i}" aria-label="Punto comune volo ${letters[i]}" min="${h?.trim[0]||0}" max="${h?.trim[1]||0}" step=".001" value="${slot.anchor}" ${!h?'disabled':''}></label><label class="field">OPACITA<input type="range" data-opacity="${i}" aria-label="Opacita volo ${letters[i]}" min=".2" max="1" step=".05" value="${slot.opacity}"></label></div><div class="slot-source" id="source-${i}"></div><div id="readout-${i}" class="attitude-readout"></div></section>`;
  }
  function fillSlots(){$('#flight-slots').innerHTML=slots.map(slotMarkup).join('');}
  function refreshEntries(){
    entries=slots.map(slot=>{const e=catalog.find(e=>e.key===slot.key);if(!e)return null;const data=replayData(e.heat);const atAnchor=sampleAttitude(data.rows,slot.anchor,e.heat.trim);return {...e,...data,anchor:slot.anchor,initial:atAnchor?.q,initialSegment:atAnchor?.segment};});
    range=replayRange(entries.filter(e=>e&&e.available));if(range.max-range.min<.001)range.max=range.min+1;
    time=Math.max(range.min,Math.min(range.max,time));
    for(const id of ['#replay-timeline','#replay-time']){$(id).min=range.min;$(id).max=range.max;}
    $('#range-start').textContent=`${fmt(range.min,2)} s`;$('#range-end').textContent=`${fmt(range.max,2)} s`;
    $('#replay-play').disabled=!entries.some(e=>e?.available);
    entries.forEach((e,i)=>{$(`#source-${i}`).textContent=e?e.available?SOURCE_LABELS[e.source]:'ASSETTO NON DISPONIBILE':'--';const select=$(`[data-flight="${i}"]`);select.title=e?`${e.session.name} / ${e.heat.name}`:'Nessun volo';let label=select.parentElement.querySelector('.slot-session');if(!label){label=document.createElement('span');label.className='slot-session';select.parentElement.append(label)}label.textContent=e?.session.name||'';});
    document.querySelectorAll('[data-layout]').forEach(b=>{b.classList.toggle('active',b.dataset.layout===layout);b.setAttribute('aria-pressed',String(b.dataset.layout===layout));});
  }
  function drawCharts(){
    plots.forEach(p=>p.destroy());plots=[];chartObserver?.disconnect();
    $('#attitude-charts').innerHTML=['roll','pitch','yaw'].map(k=>`<div class="attitude-chart-row"><h3>${k.toUpperCase()} / deg</h3><div id="att-chart-${k}" class="attitude-chart"></div></div>`).join('');
    const active=entries.map((e,i)=>({e,i})).filter(({e})=>e?.available);
    for(const channel of ['roll','pitch','yaw']){
      const host=$(`#att-chart-${channel}`);
      if(!active.length){host.innerHTML='<span class="muted">Nessun canale assetto</span>';continue;}
      const data=active.map(({e})=>{const xs=[],ys=[],rows=e.rows,step=Math.max(1,Math.ceil(rows.length/850));let previous=null;
        for(let i=0;i<rows.length;i++){const p=rows[i];if(p.t<e.heat.trim[0]||p.t>e.heat.trim[1])continue;
          const gap=i>0&&(p.t-rows[i-1].t>.1||(p.attitudeSegment??0)!==(rows[i-1].attitudeSegment??0));
          if(i%step&&i!==rows.length-1&&!gap)continue;
          const q=hasAttitude(p)?quaternionOf(p):null;const value=q?attitudeAngles(heading?alignHeading(q,e.initial):q)[channel]:null;
          const x=p.t-e.anchor;
          if(gap||(previous!==null&&value!==null&&Math.abs(value-previous)>180)){xs.push(x-.000001);ys.push(null);}
          xs.push(x);ys.push(value);previous=value;
        }return [xs,ys];});
      const plot=new uPlot({width:Math.max(220,host.clientWidth),height:95,padding:[5,10,0,0],legend:{show:false},scales:{x:{time:false},y:{range:channel==='pitch'?[-90,90]:[-180,180]}},axes:[{stroke:'#939d9a',grid:{stroke:'#20271f'},ticks:{stroke:'#20271f'},font:'12px Consolas',size:26},{stroke:'#939d9a',grid:{stroke:'#20271f'},ticks:{stroke:'#20271f'},font:'12px Consolas',size:43}],series:[{},...active.map(({i})=>({stroke:colors[i],width:1.25,spanGaps:false,points:{show:false}}))],cursor:{y:false,drag:{setScale:false}},select:{show:false}},uPlot.join(data),host);
      plot.setScale('x',{min:range.min,max:range.max});plot.over.addEventListener('click',e=>{pause();setTime(plot.posToVal(e.clientX-plot.over.getBoundingClientRect().left,'x'));});plots.push(plot);
    }
    chartObserver=new ResizeObserver(()=>plots.forEach(p=>p.setSize({width:Math.max(220,p.root.parentElement.clientWidth),height:95})));root.querySelectorAll('.attitude-chart').forEach(e=>chartObserver.observe(e));
  }
  function update(){
    const results=entries.map(e=>e?sampleAttitude(e.rows,time+e.anchor,e.heat.trim):null);
    const adjusted=results.map((r,i)=>r?heading?alignHeading(r.q,entries[i].initial):r.q:null);
    const ref=adjusted[0];
    entries.forEach((e,i)=>{const out=$(`#readout-${i}`);if(!e){out.textContent='Seleziona un volo';return;}const r=results[i],q=adjusted[i],local=time+e.anchor;
      if(!r){out.innerHTML=`<span class="readout-status">${local<e.heat.trim[0]||local>e.heat.trim[1]?'FUORI INTERVALLO':'DATI ASSETTO ASSENTI'}</span>`;return;}
      const a=attitudeAngles(q);out.innerHTML=`<span>LOG <b>${fmt(local,3)} s</b></span><span>ROLL <b>${fmt(a.roll)}&deg;</b></span><span>PITCH <b>${fmt(a.pitch)}&deg;</b></span><span>YAW <b>${fmt(a.yaw)}&deg;</b></span><span>THR <b>${fmt(r.sample.throttle)}%</b></span><span>DELTA A <b>${ref?fmt(angularDifference(ref,q))+'&deg;':'--'}</b></span>${r.segment>0?'<span class="readout-status">RIFERIMENTO RIAVVIATO DOPO INTERRUZIONE</span>':''}${heading&&!e.initial?'<span class="readout-status">YAW NON ALLINEATO: DATO ASSENTE AL PUNTO COMUNE</span>':''}`;
    });
    scene?.update(entries.map((e,i)=>e?{q:adjusted[i],sample:results[i]?.sample,visible:slots[i].visible,opacity:slots[i].opacity}:null),layout);
    const count=results.filter((r,i)=>r&&slots[i].visible).length;$('#models-count').textContent=`${count} / ${entries.filter(Boolean).length} VISIBILI`;
    $('#scene-empty').hidden=count>0||!$('#scene-error').hidden;
    $('#replay-timeline').value=time;if(document.activeElement!==$('#replay-time'))$('#replay-time').value=time.toFixed(3);
    for(const p of plots)p.setCursor({left:p.valToPos(time,'x'),top:20},false);
  }
  function setTime(t){if(!Number.isFinite(t))return;time=Math.max(range.min,Math.min(range.max,t));update();}
  function playButton(){$('#replay-play').innerHTML=`<i data-lucide="${playing?'pause':'play'}"></i>`;$('#replay-play').setAttribute('aria-label',playing?'Pausa':'Riproduci');$('#replay-play').title=playing?'Pausa':'Riproduci';icons();}
  function pause(){playing=false;playButton();}
  function animate(stamp){if(dead)return;if(playing&&lastStamp!==undefined){let next=time+Math.min((stamp-lastStamp)/1000,.1)*speed;if(next>=range.max){if(loop)next=range.min;else{next=range.max;pause();}}setTime(next);}lastStamp=stamp;frame=requestAnimationFrame(animate);}
  function rebuild(){pause();refreshEntries();drawCharts();update();save();}
  const onInput=e=>{const t=e.target;if(t.id==='replay-timeline'){pause();setTime(Number(t.value));}if(t.dataset.opacity!==undefined){slots[+t.dataset.opacity].opacity=Number(t.value);update();save();}};
  const onChange=e=>{const t=e.target;
    if(t.dataset.flight!==undefined){const slot=slots[+t.dataset.flight],entry=catalog.find(e=>e.key===t.value);slot.key=entry?.key||'';slot.anchor=entry?.heat.trim[0]||0;fillSlots();rebuild();}
    if(t.dataset.anchor!==undefined){const slot=slots[+t.dataset.anchor],entry=catalog.find(e=>e.key===slot.key),v=Number(t.value);if(!entry||!Number.isFinite(v)||v<entry.heat.trim[0]||v>entry.heat.trim[1]){t.value=slot.anchor;toast('Scegli un punto comune compreso nel tratto di volo.');return;}slot.anchor=v;time=0;rebuild();}
    if(t.dataset.visible!==undefined){slots[+t.dataset.visible].visible=t.checked;update();save();}
    if(t.id==='align-heading'){heading=t.checked;rebuild();}
    if(t.id==='replay-speed')speed=Number(t.value);
    if(t.id==='replay-loop')loop=t.checked;
    if(t.id==='replay-time'){pause();setTime(Number(t.value));t.value=time.toFixed(3);}
  };
  const onClick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.layout){layout=b.dataset.layout;refreshEntries();update();save();}
    if(b.dataset.camera)scene.camera(b.dataset.camera);
    if(b.id==='replay-play'){if(time>=range.max)time=range.min;playing=!playing;lastStamp=undefined;playButton();}
    if(b.id==='replay-back'){pause();setTime(time-.02)}if(b.id==='replay-forward'){pause();setTime(time+.02)}if(b.id==='replay-zero'){pause();setTime(0)}
  };
  root.addEventListener('input',onInput);root.addEventListener('change',onChange);root.addEventListener('click',onClick);
  const visibility=()=>{if(document.hidden)pause()};document.addEventListener('visibilitychange',visibility);
  fillSlots();refreshEntries();
  scene=createAttitudeScene($('.attitude-stage'),message=>{$('#scene-error').hidden=false;$('#scene-error').textContent=message;$('#scene-empty').hidden=true;});
  drawCharts();update();icons();frame=requestAnimationFrame(animate);
  return {dispose(){dead=true;cancelAnimationFrame(frame);scene.dispose();chartObserver?.disconnect();plots.forEach(p=>p.destroy());root.removeEventListener('input',onInput);root.removeEventListener('change',onChange);root.removeEventListener('click',onClick);document.removeEventListener('visibilitychange',visibility);save();}};
}
