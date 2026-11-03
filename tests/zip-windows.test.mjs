import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {zip} from '../scripts/zip.mjs';

test('Windows ZIP has Explorer-compatible root paths and retains dotfiles', {skip:process.platform!=='win32'},async()=>{
  const temp=await fs.mkdtemp(path.join(os.tmpdir(),'gnd-zip-test-'));
  try{
    const source=path.join(temp,'source'),archive=path.join(temp,'release.zip');
    const fixture={'index.html':'GND Race','.github/workflows/pages.yml':'name: Pages','dist/.nojekyll':''};
    for(const [name,value] of Object.entries(fixture)){
      await fs.mkdir(path.dirname(path.join(source,name)),{recursive:true});
      await fs.writeFile(path.join(source,name),value);
    }
    zip(source,archive);
    const inspected=spawnSync('powershell.exe',['-NoProfile','-NonInteractive','-Command',
      'Add-Type -AssemblyName System.IO.Compression.FileSystem; $z=[IO.Compression.ZipFile]::OpenRead($env:GND_TEST_ZIP); try { @($z.Entries | Where-Object { $_.Name } | ForEach-Object { $reader=[IO.StreamReader]::new($_.Open()); try { @{name=$_.FullName; value=$reader.ReadToEnd()} } finally { $reader.Dispose() } }) | ConvertTo-Json -Compress } finally { $z.Dispose() }'],
    {env:{...process.env,GND_TEST_ZIP:archive},encoding:'utf8',windowsHide:true});
    assert.equal(inspected.status,0,inspected.stderr);
    const entries=JSON.parse(inspected.stdout);
    assert.equal(entries.length,Object.keys(fixture).length);
    for(const entry of entries){
      assert.ok(!entry.name.startsWith('./'));
      assert.ok(!entry.name.startsWith('.\\'));
      assert.equal(entry.value,fixture[entry.name.replaceAll('\\','/')]);
    }
  }finally{
    if(path.dirname(temp)===path.resolve(os.tmpdir())&&path.basename(temp).startsWith('gnd-zip-test-'))await fs.rm(temp,{recursive:true,force:true});
  }
});
