import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {sceneQuaternion} from './attitude-model.mjs';

function createQuad(color){
  const group=new THREE.Group(),materials=[];
  const fill=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.18,depthWrite:false,side:THREE.DoubleSide});
  const line=new THREE.LineBasicMaterial({color,transparent:true,opacity:.85,depthWrite:false});materials.push(fill,line);
  function body(geometry,position,rotation){const mesh=new THREE.Mesh(geometry,fill);if(position)mesh.position.set(...position);if(rotation)mesh.rotation.set(...rotation);mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry,25),line));group.add(mesh);return mesh;}
  body(new THREE.BoxGeometry(.53,.19,.87),[0,.08,0]);
  body(new THREE.BoxGeometry(.34,.16,.53),[0,.25,.05]);
  const motorMaterials=[];
  // Generic quad-X silhouette. Motor order is Betaflight's default quad-X order.
  for(const [i,x,z] of [[0,1.12,1.12],[1,1.12,-1.12],[2,-1.12,1.12],[3,-1.12,-1.12]]){
    const length=Math.hypot(x,z);
    body(new THREE.BoxGeometry(length,.095,.12),[x/2,0,z/2],[0,-Math.atan2(z,x),0]);
    body(new THREE.CylinderGeometry(.16,.16,.19,16),[x,.1,z]);
    const rim=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.85,depthWrite:false});motorMaterials[i]=rim;materials.push(rim);
    const ring=new THREE.Mesh(new THREE.TorusGeometry(.46,.022,5,48),rim);ring.rotation.x=Math.PI/2;ring.position.set(x,.23,z);group.add(ring);
    body(new THREE.BoxGeometry(.69,.017,.075),[x,.23,z],[0,Math.PI/5,0]);
  }
  const nose=new THREE.Mesh(new THREE.ConeGeometry(.13,.35,3),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.95,depthWrite:false}));
  nose.rotation.x=-Math.PI/2;nose.position.set(0,.22,-.64);group.add(nose);materials.push(nose.material);
  group.userData={materials,motorMaterials,fill,line,nose};return group;
}

export function createAttitudeScene(host,onError){
  let renderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true});}catch{onError('La vista 3D richiede WebGL 2. Grafici e valori restano disponibili.');return {update(){},resize(){},camera(){},dispose(){}};}
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0x000000);host.prepend(renderer.domElement);
  renderer.domElement.setAttribute('aria-label','Assetto 3D dei voli selezionati');renderer.domElement.setAttribute('role','img');
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,1,.1,120);
  const controls=new OrbitControls(camera,renderer.domElement);controls.enablePan=false;controls.enableDamping=false;controls.minDistance=3;controls.maxDistance=35;
  const floor=new THREE.GridHelper(18,24,0x5d643a,0x1d271d);floor.position.y=-2.1;scene.add(floor);
  const axes=new THREE.Group();
  for(const [end,color] of [[[0,0,-3.1],0x65f7ff],[[3.1,0,0],0xed4038]]){
    const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,-2.09,0),new THREE.Vector3(end[0],-2.09,end[2])]),new THREE.LineBasicMaterial({color}));axes.add(line);
  }scene.add(axes);
  const groups=Array.from({length:4},(_,i)=>{const g=createQuad(['#fff200','#65f7ff','#ed4038','#dfdfdf'][i]);scene.add(g);return g;});
  let lastLayout='',view='iso',lastItems=[],layout='overlay',disposed=false;
  function setCamera(next=view){view=next;const n=lastItems.filter(Boolean).length;const scale=layout==='split'?n>2?1.9:1.6:1;
    const pos={iso:[5,4,-7],front:[0,.5,-8],side:[8,.5,0],top:[0,8,.001]}[view]||[5,4,-7];
    camera.position.set(...pos.map(v=>v*scale));controls.target.set(0,0,0);controls.update();render();}
  function render(){if(!disposed)renderer.render(scene,camera);}
  function update(items,nextLayout){lastItems=items;layout=nextLayout;const occupied=items.map((x,i)=>x?i:-1).filter(i=>i>=0);const layoutKey=`${layout}/${occupied.join(',')}`;
    for(let i=0;i<4;i++){const group=groups[i],item=items[i];group.visible=!!item?.visible&&!!item.q;
      if(!item)continue;if(item.q)group.quaternion.copy(sceneQuaternion(item.q));const index=occupied.indexOf(i);
      if(layout==='split'){const columns=occupied.length>2?2:occupied.length;const rows=Math.ceil(occupied.length/columns);group.position.set(((index%columns)-(columns-1)/2)*4.1,0,(Math.floor(index/columns)-(rows-1)/2)*4.1);}else group.position.set(0,0,0);
      group.userData.fill.opacity=item.opacity*.4;group.userData.line.opacity=item.opacity;group.userData.nose.material.opacity=item.opacity;
      group.userData.motorMaterials.forEach((m,k)=>m.opacity=item.opacity*(.3+.7*(Number.isFinite(item.sample?.[`m${k}`])?Math.max(0,Math.min(100,item.sample[`m${k}`]))/100:1)));
    }
    renderer.domElement.dataset.activeModels=String(groups.filter(g=>g.visible).length);
    if(layoutKey!==lastLayout){lastLayout=layoutKey;setCamera(view)}else render();
  }
  function resize(){const {width,height}=host.getBoundingClientRect();if(width<1||height<1)return;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();render();}
  controls.addEventListener('change',render);
  const observer=new ResizeObserver(resize);observer.observe(host);resize();setCamera();
  const lost=e=>{e.preventDefault();onError('Le risorse 3D non sono disponibili. Riapri la scheda ASSETTO per riprovare.');};renderer.domElement.addEventListener('webglcontextlost',lost);
  return {update,resize,camera:setCamera,dispose(){disposed=true;observer.disconnect();controls.dispose();renderer.domElement.removeEventListener('webglcontextlost',lost);const geometries=new Set(),materials=new Set();scene.traverse(obj=>{if(obj.geometry)geometries.add(obj.geometry);if(obj.material)(Array.isArray(obj.material)?obj.material:[obj.material]).forEach(m=>materials.add(m));});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();}};
}
