# Prompt da incollare in Claude — stesse regole del progetto

Copia tutto il blocco sotto (dal primo "---" incluso) e incollalo in una chat con Claude quando lavori su questo progetto (o su un altro sito con le stesse convenzioni). Così Claude segue le stesse regole di Cursor.

---

**Quando lavori con me su questo progetto (sito statico HTML/CSS/JS, deploy su Vercel via GitHub), segui queste regole.**

## Lingua
- Rispondi sempre in **italiano** se scrivo in italiano. Messaggi di commit e suggerimenti in italiano.

## Git: commit e push
- **Commit:** dopo **ogni** modifica ai file del progetto fai (o proponi) sempre il **commit** con un messaggio chiaro e descrittivo in italiano (es. "Aggiungi logo", "Aggiorna testo hero", "Correggi link footer"). Un commit per ogni modifica logica; messaggi da evitare: "fix", "update", "modifiche".
- **Push:** fai (o proponi) il **push** su GitHub **solo quando io ti dico che sono pronto** (es. "pusha", "sono contento pusha", "pubblica", "ok vai"). Non fare push dopo ogni modifica: i commit restano sul mio PC finché non pusho. Quando dico che sono soddisfatto, allora pusha.
- I commit sono il mio backup; non servono cartelle "backup" a mano.

## URL e struttura file
- **Mai** usare l’estensione `.html` nei link. URL puliti sempre.
- Struttura: una pagina = una cartella con `index.html` dentro (es. `conferma-iscrizione/index.html` → URL `/conferma-iscrizione`).
- Link corretti: `/aggiorna-profilo`, `/#newsletter`. Link sbagliati: `aggiorna-profilo.html`, `conferma-iscrizione.html`.
- La home è `index.html` nella root, accessibile come `/`.

## Dominio di questo progetto (WhaleStreet)
- Sito di lavoro: **https://whalestreet.website**
- Usa sempre **whalestreet.website** per link, redirect, form (es. Brevo), documentazione. Non usare whalestreet.it né marcocostanza.it/whalestreet.
- Esempi: home `https://whalestreet.website/`, conferma iscrizione `https://whalestreet.website/conferma-iscrizione`, aggiorna profilo `https://whalestreet.website/aggiorna-profilo`.

*(Se stai lavorando su un altro sito, sostituisci questo paragrafo con il dominio di quel progetto.)*

## Riferimenti nel progetto
- Segui le indicazioni di **GUIDA.md** e **README.md** se presenti nella root del progetto.
- Per modifiche rilevanti (nuove sezioni, cambio struttura, contenuti importanti), suggerisci di aggiornare **CHANGELOG.md** con data e breve descrizione.

## Anteprima in locale (per me)
- Per vedere le modifiche senza push: dalla cartella del progetto eseguo `npx serve` (porta 3000) o `npx serve -l 3001` se ho già un altro server sulla 3000. Apro il browser su localhost. Ricarico la pagina dopo ogni modifica.
- Non è necessario che tu esegua il server; è solo per ricordare che lavoro in locale e pusho quando sono contento.

---

*Fine del prompt. Dopo averlo incollato, puoi chiedere a Claude di lavorare sul sito: rispetterà commit sempre, push solo quando dici che sei pronto, URL senza .html e dominio whalestreet.website.*
