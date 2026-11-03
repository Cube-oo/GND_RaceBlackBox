import {inspectCSV,parseCSV,parseBBL} from './import-core.mjs';
self.onmessage=async event=>{const {file,mode,options}=event.data;try{
  if(file.size>64*1024*1024)throw Error('File troppo grande: massimo 64 MB.');
  if(mode==='inspect'){const {csv,...info}=inspectCSV(await file.text());self.postMessage({ok:true,result:info});}
  else if(mode==='csv')self.postMessage({ok:true,result:{heats:[parseCSV(await file.text(),options,file.name)],errors:[]}});
  else self.postMessage({ok:true,result:parseBBL(await file.arrayBuffer(),file.name)});
}catch(e){self.postMessage({ok:false,error:String(e.message||e)})}};
