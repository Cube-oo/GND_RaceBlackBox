# GND Race su GitHub Pages

Questo pacchetto contiene il progetto completo e il sito gia compilato, inclusa
la guida `dist/guida.html`. Non richiede backend, API key o servizi Sites.
La cartella `.openai` e la storia Git del precedente hosting sono escluse.

## Metodo consigliato: GitHub Actions

1. Estrai `gnd-race-github-pages.zip` in una cartella dedicata.
2. Crea un repository GitHub con branch `main`. Pubblica soltanto questi file:
   non aggiungere Blackbox, backup FC, sessioni personali o credenziali.
3. La radice del repository deve contenere `package.json`, `src`, `dist`,
   `scripts` e `.github/workflows/pages.yml`. Non caricare la cartella contenitore
   come ulteriore livello e non dimenticare `.github` perche e nascosta.
4. In Settings > Pages > Build and deployment > Source scegli GitHub Actions.
5. Il workflow parte a ogni push su `main`. In Actions puoi anche selezionare
   Publish GND Race to GitHub Pages > Run workflow. Se usi un altro branch,
   aggiorna `branches` nel workflow e le regole dell'ambiente github-pages.
6. Il job build installa da lockfile, esegue i test, compila app e guida,
   rigenera i sorgenti GPL scaricabili e carica esclusivamente `dist`.
   Il job deploy ha i soli permessi Pages e OIDC necessari. Non servono PAT
   o chiavi aggiunte ai file. La disponibilita di Actions/Pages dipende dal piano
   e dalle policy del tuo account o organizzazione.
7. Attendi entrambi i job verdi. L'URL e mostrato dal deployment, generalmente
   `https://NOMEUTENTE.github.io/NOMEREPOSITORY/` per un project site.

Percorsi di script, CSS, worker, guida e sorgenti sono relativi. Il nome del
repository non va inserito nel codice. Non e necessario un router server-side:
`#miglioramenti`, `#pid` e `#assetto` sono hash della stessa index.html.
La guida e una pagina separata `guida.html`, con i propri link ai capitoli.

## Alternativa: solo i file compilati

Pubblica tutto il contenuto di `dist` nella radice di un branch dedicato oppure
in `/docs`. Include `.nojekyll`, tutti i JS/CSS, `vendor/uplot.css`, `guida.html`,
`guide.js`, `guide.css`, i file `.LEGAL.txt` e `source.zip`.
Seleziona Deploy from a branch in Pages e quel branch/cartella.
Non attivare anche il workflow di build sullo stesso sito: scegli un metodo.
Questo metodo non ricompila eventuali successive modifiche in `src`.

## Dati e accesso

- Prima della migrazione, esporta ogni sessione dal dominio precedente e
  reimportala nel nuovo. IndexedDB/localStorage non attraversano i domini.
- Non esiste sincronizzazione cloud. Un altro browser/dispositivo non eredita
  le tue heat. L'archivio JSON non contiene il BBL originale completo:
  conserva anche il file originale separatamente.
- Non assumere che un repository privato renda privato il sito Pages.
  Verifica accesso, piano e policy GitHub. L'accesso del precedente hosting
  non viene trasferito.
- La guida e il sito non dipendono da ChatGPT. Gli eventuali tool WebMCP
  sono opzionali e non impediscono l'uso da un browser normale.

## Sviluppo

Requisiti: Node.js 24, pnpm 10. Per creare ZIP: `tar.exe` su Windows,
`zip` su Linux/macOS. Il workflow usa un runner Ubuntu con zip disponibile.

```sh
pnpm install --frozen-lockfile
pnpm test
pnpm build
pnpm dev
```

Apri l'URL stampato dal server. Il server sceglie una porta libera se la
predefinita e occupata. Non usare file:// per verificare worker e importazione.

Per generare un pacchetto aggiornato, dopo build e test:

```sh
node scripts/export-pages.mjs ./release
```

Per aggiornare soltanto i sorgenti scaricabili, come fa Actions:

```sh
node scripts/export-pages.mjs --sources-only
```

Il packaging copia un elenco esplicito di file del progetto, esclude
`.openai`, `.git`, `node_modules`, file temporanei e il precedente source.zip.
L'archivio finale contiene anche il nuovo source.zip; non c'e ricorsione.
Non inserire dati personali in src/dist/tests: le cartelle pubblicabili
sono intenzionalmente incluse nel pacchetto.

## Controlli dopo il deploy

1. Index e guida aprono senza 404 anche sotto il percorso del repository.
2. Demo, grafici e replay 3D sono visibili; WebGL2 deve essere disponibile.
3. Importazione di un file di prova funziona senza errori del Web Worker.
4. Il link Sorgenti scarica lo ZIP e non una pagina HTML.
5. Esporta e ripristina una sessione di prova; verifica le configurazioni.
6. In guida, ricerca, grafici interattivi e stampa funzionano su desktop/mobile.

I test locali non equivalgono a un deployment GitHub eseguito sul tuo account
ne alla validazione con una Blackbox reale del tuo mezzo.

## Errori comuni

- Nessun workflow: manca `.github/workflows/pages.yml` o il progetto e annidato.
- Pages non configurato: scegli GitHub Actions in Settings > Pages.
- Deploy negato: verifica permessi Actions, ambiente github-pages e branch.
- Installazione frozen-lockfile fallita: package.json e lockfile non coincidono;
  aggiorna insieme i due file, senza eliminare la verifica dal workflow.
- Modifiche alla guida non visibili: modifica `src/guide-content.mjs` e ricompila.
  `dist/guida.html` e generato. CSS e asset statici risiedono invece in dist.
- Pagina senza stile o worker 404: hai pubblicato solo index.html oppure hai
  alterato i percorsi relativi. Pubblica la cartella statica completa.
- Heat scomparse: controlla dominio/browser e ripristina il JSON esportato.

## Licenze e riferimenti

Mantieni LICENSE, vendor/LICENSE, gli avvisi dei bundle e i sorgenti
corrispondenti al sito distribuito: GND Race e GPL-3.0-or-later.
Le dipendenze mantengono le rispettive licenze; dettagli nel README.

- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
