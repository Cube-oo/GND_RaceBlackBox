import {readdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';

export function zip(directory,destination){
  const command=process.platform==='win32'?'tar.exe':'zip';
  // Named root entries avoid tar's ./ folder, which Explorer can show as empty.
  const entries=readdirSync(directory);
  if(!entries.length)throw Error('Cannot package an empty directory.');
  const args=process.platform==='win32'?['-a','-cf',destination,'-C',directory,'--',...entries]:['-q','-r',destination,'--',...entries];
  const result=spawnSync(command,args,{cwd:directory,stdio:'inherit',windowsHide:true});
  if(result.error||result.status!==0)throw Error(`ZIP packaging failed. ${command} must be on PATH.`);
}
