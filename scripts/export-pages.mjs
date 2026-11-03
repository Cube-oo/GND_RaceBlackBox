import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
import {zip} from './zip.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const onlySources=process.argv.includes('--sources-only');
const output=path.resolve(process.argv.find((arg,i)=>i>1&&!arg.startsWith('--'))||path.join(root,'release'));
const stage=await fs.mkdtemp(path.join(os.tmpdir(),'gnd-pages-'));
const allowed=['.github','.gitignore','src','vendor','tests','scripts','dist','build.mjs','server.mjs','package.json','pnpm-lock.yaml','pnpm-workspace.yaml','README.md','GITHUB_PAGES.md','LICENSE'];
const omitted=new Set(['.git','.openai','node_modules','.sites-runtime','source.zip']);
async function copy(from,to){
  const stat=await fs.lstat(from);
  if(stat.isSymbolicLink())throw Error(`Unexpected symlink in release source: ${from}`);
  if(stat.isDirectory()){await fs.mkdir(to,{recursive:true});for(const entry of await fs.readdir(from))if(!omitted.has(entry))await copy(path.join(from,entry),path.join(to,entry));}
  else{await fs.mkdir(path.dirname(to),{recursive:true});await fs.copyFile(from,to);}
}
try{
  for(const item of allowed){
  try{
    await copy(path.join(root,item),path.join(stage,item));
  }catch(error){
    if(item!=='.gitignore'||error.code!=='ENOENT')throw error;
  }
}
  // Fresh temporary archives avoid retaining obsolete entries from a previous ZIP.
  const sourceArchive=path.join(os.tmpdir(),`${path.basename(stage)}-source.zip`);
  try{zip(stage,sourceArchive);await fs.copyFile(sourceArchive,path.join(root,'dist/source.zip'));}finally{await fs.rm(sourceArchive,{force:true});}
  if(!onlySources){
    await fs.mkdir(output,{recursive:true});
    await fs.copyFile(path.join(root,'dist/source.zip'),path.join(stage,'dist/source.zip'));
    const archive=path.join(os.tmpdir(),`${path.basename(stage)}-github.zip`);
    try{zip(stage,archive);await fs.copyFile(archive,path.join(output,'gnd-race-github-pages.zip'));}finally{await fs.rm(archive,{force:true});}
    console.log(path.join(output,'gnd-race-github-pages.zip'));
  }
  console.log('Matching source.zip generated; no hosting credentials or user logs included.');
}finally{
  // Only remove the unique directory created by this invocation.
  if(path.dirname(stage)===path.resolve(os.tmpdir())&&path.basename(stage).startsWith('gnd-pages-'))await fs.rm(stage,{recursive:true,force:true});
}
