import esbuild from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {renderGuide} from './src/guide-content.mjs';
const require=createRequire(import.meta.url);
const root=import.meta.dirname;
const nodeFiles={name:'node-files',setup(build){
  build.onResolve({filter:/.*/},args=>{
    if(args.path==='three')return {path:path.join(path.dirname(require.resolve('three')),'three.module.js'),namespace:'nodefs'};
    if(args.path==='stream')return {path:'empty',namespace:'browser-empty'};
    if(args.path==='vue')return {path:require.resolve('vue/dist/vue.runtime.esm-bundler.js'),namespace:'nodefs'};
    if(args.path==='pinia')return {path:path.join(path.dirname(require.resolve('pinia/package.json')),'dist/pinia.mjs'),namespace:'nodefs'};
    let filename;
    const from=args.resolveDir||root;
    try{filename=require.resolve(args.path.startsWith('.')||path.isAbsolute(args.path)?path.resolve(from,args.path):args.path,{paths:[from]});}
    catch(e){throw new Error(`Cannot resolve ${args.path} from ${from}: ${e.message}`)}
    return {path:filename,namespace:'nodefs'};
  });
  build.onLoad({filter:/.*/,namespace:'nodefs'},async args=>({contents:await fs.readFile(args.path,'utf8'),loader:args.path.endsWith('.json')?'json':'js',resolveDir:path.dirname(args.path)}));
  build.onLoad({filter:/.*/,namespace:'browser-empty'},()=>({contents:'export default {};',loader:'js'}));
}};
async function bundle(entry,out){const result=await esbuild.build({stdin:{contents:`import './${entry}';`,resolveDir:root},bundle:true,format:'iife',platform:'browser',target:'es2022',define:{'process.env.NODE_ENV':'"production"',__VUE_OPTIONS_API__:'false',__VUE_PROD_DEVTOOLS__:'false',__VUE_PROD_HYDRATION_MISMATCH_DETAILS__:'false'},write:false,plugins:[nodeFiles],logLevel:'warning',minify:true,legalComments:'linked',outfile:out});for(const f of result.outputFiles){await fs.mkdir(path.dirname(f.path),{recursive:true});await fs.writeFile(f.path,f.contents)}}
await bundle('src/app.mjs',path.join(root,'dist/app.js'));
await bundle('src/import-worker.mjs',path.join(root,'dist/import-worker.js'));
await bundle('src/guide.mjs',path.join(root,'dist/guide.js'));
await fs.writeFile(path.join(root,'dist/guida.html'),renderGuide());
await fs.mkdir(path.join(root,'dist/vendor'),{recursive:true});
await fs.copyFile(path.join(root,'node_modules/uplot/dist/uPlot.min.css'),path.join(root,'dist/vendor/uplot.css'));
console.log('GND Race build OK');
