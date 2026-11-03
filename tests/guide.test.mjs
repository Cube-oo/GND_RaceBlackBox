import test from 'node:test';
import assert from 'node:assert/strict';
import {GUIDE_CHAPTERS,renderGuide} from '../src/guide-content.mjs';
import {SETUP_GROUPS} from '../src/setup-model.mjs';

test('guide has unique stable chapters and a fully rendered no-JS manual',()=>{
  assert.equal(GUIDE_CHAPTERS.length,19);
  assert.equal(new Set(GUIDE_CHAPTERS.map(c=>c.id)).size,19);
  const html=renderGuide();
  for(const chapter of GUIDE_CHAPTERS){
    assert.match(chapter.id,/^[a-z][a-z-]*$/);
    assert.ok(html.includes(`id="${chapter.id}"`));
    assert.ok(html.includes(`data-chapter-link="${chapter.id}"`));
    assert.ok(html.includes(chapter.html));
  }
  assert.ok(html.includes('<noscript>'));
  assert.ok(html.includes('19 CAPITOLI'));
});

test('guide parameter dictionary includes every current setting and alias',()=>{
  const dictionary=GUIDE_CHAPTERS.find(c=>c.id==='dizionario').html;
  for(const group of SETUP_GROUPS){
    assert.ok(dictionary.includes(group.title));
    for(const field of group.fields){
      assert.ok(dictionary.includes(field.label),field.label);
      for(const alias of field.keys)assert.ok(dictionary.includes(alias),alias);
    }
  }
});

test('all six figures have explicit synthetic labels and accessible descriptions',()=>{
  const html=renderGuide();
  assert.equal(html.split('ESEMPIO SINTETICO').length-1,6);
  for(const id of ['tracking','alignment','attitude','windows','spectrum','filter']){
    assert.ok(html.includes(`<canvas id="${id}-chart" role="img" aria-label="`));
  }
  assert.ok(html.includes('Modello analogico ideale PT1'));
  assert.ok(html.includes('non uno spettro decorativo'));
});

test('guide preserves relative deployment links and explicit tuning limitations',()=>{
  const html=renderGuide();
  for(const relative of ['./guide.css','./guide.js','./source.zip','./index.html#miglioramenti'])assert.ok(html.includes(`"${relative}"`));
  assert.ok(html.includes('Non e autotune'));
  assert.ok(html.includes('il valore numerico di destinazione non e calcolato'));
  assert.ok(html.includes('non calcola densita dell\'aria'));
  assert.ok(html.includes('1024 campioni nativi'));
  assert.ok(html.includes('almeno tre finestre e almeno tre secondi'));
});
