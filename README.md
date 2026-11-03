# GND Race Telemetry

Prima versione funzionante del confronto heat FPV da Betaflight Blackbox.
Interfaccia MS-DOS nera, gialla e ciano con titolo `C:\GND\RACE>`.

## Avvio

La cartella `dist` contiene la pagina compilata, senza dipendenze esterne in rete.
Richiede HTTP per eseguire il decoder in un Web Worker:

```sh
node server.mjs
```

Aprire l'indirizzo stampato dal server, normalmente http://127.0.0.1:4173.
Per modificare e ricompilare: installare le dipendenze dal lockfile con pnpm,
quindi eseguire `node build.mjs`. Test del modello: `node --test tests/*.test.mjs`.
Il risolutore Node nel build evita l'accesso alle directory superiori da parte
del binario esbuild nel sandbox Windows.

## Funzioni

- GUIDA: manuale tecnico integrato in `guida.html`, 19 capitoli, sei figure
  scientifiche e controlli interattivi per tracking, lowpass e allineamento.
  Ricerca nei capitoli, formule, soglie, dizionario parametri e stampa/PDF.
- Pubblicazione GitHub Pages con `.github/workflows/pages.yml` e pacchetto
  esportabile senza identita dell'hosting precedente. Vedi `GITHUB_PAGES.md`.

- Sessioni e heat: creazione, modifica, eliminazione e ricerca nell'archivio.
- Tempo ufficiale manuale in secondi oppure mm:ss.mmm, batteria, setup e note.
- Importazione BBL/BFL/TXT usando il decoder originale Betaflight; piu voli
  nello stesso file diventano heat separate. Supporto diretto Betaflight >=3.1.
- CSV con riconoscimento intestazioni, mappatura dei canali e conferma delle scale.
- Confronto fino a quattro heat, riferimento selezionabile, cursori sincronizzati,
  zoom per trascinamento, assi roll/pitch/yaw, motori singoli o media e batteria.
- Scala temporale in secondi o percentuale, ritaglio e offset manuale.
- Throttle medio, tempo ad alto throttle, variazione throttle, tracking RMS,
  motori prossimi al limite, tensione minima, consumo e copertura del dato.
- Salvataggio IndexedDB locale, esportazione/ripristino sessioni JSON e metriche CSV.
- Demo sintetica etichettata e WebMCP opzionale per lettura e selezione heat.
- ASSETTO: fino a quattro voli da sessioni diverse, quad-X 3D sovrapposti a colori
  o separati, opacita e visibilita individuali, viste camera e grafici angolari.
- Riproduzione rallentata, timeline comune, punti di allineamento manuali,
  allineamento iniziale yaw opzionale e differenza angolare dal volo A.
- PID / FILTRI: intestazioni originali PID, D dinamico, Feedforward, TPA e filtri;
  tracking RMS, ritardo apparente, contributi P/I/D/F, PSD gyro filtrato/non
  filtrato e D-term, spettrogramma, selezione del tratto e fascia throttle.
- Suggerimenti deterministici con evidenze e limiti, report JSON esportabile.
  Nessun collegamento alla FC, nessuna applicazione automatica dei parametri.
- MIGLIORAMENTI: vista di confronto ispirata al Configurator, schede PID,
  Filtri e Prima/dopo, matrice P/I/D/D Min o Max/Feedforward, slider
  registrati e gruppi filtri. Attuale e consigliato sono distinti, con fonte
  e motivazione per parametro, filtro delle voci da valutare e report JSON.
  I suggerimenti restano direzioni di prova: nessun nuovo valore numerico viene
  inventato. Invariato significa nessuna modifica proposta, non tuning validato.
  Le versioni fuori Betaflight 4.3-4.5 mostrano i valori senza proposte; i campi
  mancanti o gli alias discordanti non vengono sostituiti con valori predefiniti.

Tempi sul giro, settori e posizione in classifica non sono inclusi.

## Limiti della prima versione

I log e i campioni restano nel browser del dispositivo. Non c'e sincronizzazione
tra dispositivi. Cancellare i dati del browser cancella l'archivio: usare gli export.
Massimo 64 MB per log. Campioni conservati fino a 200 Hz; la selezione non e un
filtro antialias. Questa versione non e adatta ad analisi di vibrazioni, filtri
o picchi piu brevi di 5 ms. I grafici mostrano fino a circa 1800 punti per traccia;
le metriche usano tutti i campioni conservati nel ritaglio.
Le pause >100 ms sono escluse dall'integrazione e riportate nella copertura.
Le unita e la disponibilita dipendono dai canali registrati: nessun canale mancante
viene sostituito con dati simulati. Scale CSV da verificare nell'esportatore.
Motori normalizzati sui limiti dichiarati nel log; non sono una misura di spinta.
Tracking e variazione throttle descrivono il segnale, non un punteggio del pilota.
L'allineamento percentuale non allinea la posizione sul percorso.

L'assetto usa i quaternioni registrati quando presenti; altrimenti e stimato
da giroscopio e accelerometro oppure integrato dal solo giroscopio. La fonte
e indicata per ogni volo. La ricostruzione avviene prima della riduzione a 200 Hz.
Senza un riferimento assoluto lo yaw puo derivare; il solo giroscopio fornisce
un orientamento relativo, non un'inclinazione assoluta. I vecchi import senza
quaternioni sono integrati dai campioni conservati: reimportare il log originale
per una ricostruzione migliore. La demo ha assetto sintetico esplicitamente marcato.
L'interpolazione quaternionica non attraversa dati mancanti, pause oltre 100 ms
o riavvii della stima. Il modello quad-X e generico, non ricostruisce traiettorie
o posizione sul circuito. La scena richiede WebGL2; grafici e valori restano
disponibili quando il 3D non e supportato. I backup v2 conservano l'assetto;
i backup v1 restano importabili.

La nuova analisi PID usa finestre non sovrapposte di 1024 frame nativi prima
della decimazione. FFT fft.js, finestra Hann, rimozione della media, PSD
monolaterale: quattro bin adiacenti mediati per banda, preservando la potenza.
Minimo 500 Hz per gli spettri; display limitato a min(1000 Hz, 0.45 * fs).
Irregolarita temporali oltre 5%, frame corrotti e code incomplete sono escluse.
Massimo 2048 finestre per volo, con segnalazione quando raggiunto. Gli aggregati
sono salvati, non i campioni nativi: il ritaglio include solo finestre complete.
Frequenze di campionamento diverse oltre 1% non vengono mescolate nello spettro.
gyroUnfilt usa solo il canale dedicato: i campi debug non vengono indovinati.
Un segnale gia aliasato dalla FC non puo essere recuperato. I CSV richiedono
scale gyro confermate e contributi PID nelle unita originali del log.
La scala blackbox_high_resolution viene compensata per gyro, setpoint e RC.

Le soglie dei suggerimenti sono esplorative, non limiti Betaflight: saturazione
almeno 5% dei campioni, gyro HF >=5 deg/s RMS e >=30% della potenza, D HF >=40%
con RMS D >max(5, 1.5*P). Il ritardo apparente usa correlazione 0-60 ms >=0.7
e un miglioramento >=0.02 rispetto allo zero per ritardi non nulli. Non misura
la sola latenza filtro. Le proposte di incremento P richiedono guadagni
registrati, contributo P, margine motori, residuo gyro basso e almeno tre
finestre correlate. Un log non permette di stabilire temperatura motori,
stabilita garantita o un tuning ottimale. Una modifica alla volta, con backup
e verifica in prova breve; non alleggerire filtri o aumentare D alla cieca.

I vecchi import non hanno analisi nativa: reimportare il BBL originale.
Backup v3 conserva l'analisi; v1/v2 restano compatibili. La demo PID aggiunge
segnali sintetici alla telemetria demo, non simula il comportamento di una FC.

Verificato nel browser Edge con log BBL sintetico a valori noti e CSV, import,
ritaglio, salvataggio/riapertura, esportazione/ripristino e cancellazione.
La compatibilita con i log reali dell'utente richiede una prova sui suoi file.
Test aggiuntivi coprono convenzioni degli assi, interpolazione, pause,
backup, ricostruzione da log sintetici a 1 kHz e confronto 3D fra sessioni.
L'analisi PID e verificata con sinusoidi a potenza/frequenza note, ritardi,
finestre irregolari, canali assenti, log BBL normali e high-resolution,
CSV nativo e backup/ripristino. Non validata su un log reale dell'utente.

## Miglioramenti

La pagina `#miglioramenti` (alias precedente `#setup`) affianca attuale e
consigliato per PID e filtri, con fonte LOG/CLI e motivazioni. La prossima
prova e ordinata per priorita; nessun nuovo valore numerico viene inventato.
Le proposte rimangono esplorative e limitate alle versioni gia verificate
(Betaflight 4.3-4.5). Firmware successivi mostrano valori senza suggerimenti.

Importazione locale di backup CLI `diff all` o `dump`, massimo 128 KB, con
selezione esplicita del profilo e conferma del pilota. I comandi non vengono
eseguiti. I valori omessi dal diff restano sconosciuti; i rateprofile sono
separati dai PID. Solo valori espliciti riconosciuti vengono integrati.
La Blackbox resta la fonte primaria. Firmware discordante, duplicati
conflittuali o parametri diversi sospendono le proposte. L'associazione al
volo e dichiarata dal pilota, non verificabile automaticamente dal backup.
Sono conservati il backup corrente e quattro precedenti, scaricabili originali.

La qualita mostra finestre, frequenza, campioni scartati e troncamento.
Copertura nativa inferiore all'80% o analisi troncata sospendono i suggerimenti
nella pagina Miglioramenti: soglia prudenziale del tool, non di Betaflight.
Prima/dopo confronta intervalli indipendenti e parametri presenti in entrambi
i voli. I delta richiedono conferma di comparabilita e assenza di avvisi
(firmware, origini, setup, intensita dei comandi, throttle e frequenza).
Nessun delta e interpretato come prova causale dell'effetto del tuning.
Note di prova/condizioni e backup sono persistiti ed esportati nelle sessioni
v4, con compatibilita d'importazione v1-v3. Nessuna modifica automatica alla FC.

## Sorgenti e licenze

GND Race e distribuito sotto GPL-3.0-or-later, senza garanzia.
Il codice originale Betaflight e conservato in `vendor/src` con la sua licenza
in `vendor/LICENSE`, scaricato il 2026-09-15 dal ramo master tramite jsDelivr:
https://github.com/betaflight/blackbox-log-viewer
Gli hash dei file vendorizzati sono in `vendor/SHA256SUMS.json`.
Il decoder non e stato modificato; `src/import-core.mjs` ne adatta l'uscita.

Altre librerie: uPlot (MIT), Papa Parse (MIT), Semver (ISC), Vue/Pinia (MIT),
Lucide (ISC), jQuery, Lodash, Three.js e fft.js (MIT). Versioni bloccate in pnpm-lock.yaml.
Il pacchetto sorgente scaricabile include sorgenti, decoder, lockfile, build,
test e asset necessari. Le librerie terze sono ottenibili con pnpm dal lockfile.
