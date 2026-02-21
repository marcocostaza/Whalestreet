# Piano 1: Sincronizzare Business Plan V.2 — Notion = Repo

## Obiettivo

Le pagine del database **Business Plan V.2** in Notion devono essere **identiche** ai file .md in `Business_Plan_2.0/` (GitHub). Ogni pagina va **rivista e sistemata per intero**: si sostituisce tutto il corpo della pagina con il contenuto del file corrispondente, non si aggiunge una sezione in fondo.

## Cosa fare (operativo)

1. **Per ogni documento** del BP V.2 in Notion (vedi tabella sotto):
   - Leggere il contenuto attuale della pagina (API-get-block-children sul `page_id`).
   - Eliminare **tutti** i blocchi figli della pagina (API-delete-a-block per ogni block_id restituito).
   - Convertire il file .md del repo corrispondente in blocchi Notion (paragraph, bulleted_list_item; i titoli ### come paragrafi distinti).
   - Aggiungere i nuovi blocchi al corpo della pagina (API-patch-block-children, a batch da max 100 se necessario).

2. **Mappatura pagina Notion ↔ file repo**

   | Nome pagina (Notion) | File repo | Page ID (Notion) |
   |----------------------|-----------|------------------|
   | Cos'è il progetto | Cos'è il progetto.md | 30e2f977-5b3f-819a-bb6c-f9142ef17cb3 |
   | Visione e posizionamento | Visione e posizionamento.md | 30e2f977-5b3f-8108-9c8c-fde9aa67fdba |
   | Identità del brand | Identità del brand.md | 30e2f977-5b3f-8125-a0d0-c5048ec6e874 |
   | Value proposition | Value proposition.md | 30e2f977-5b3f-816a-b584-e7b2d9ee16af |
   | Servizi | Servizi.md | 30e2f977-5b3f-81fc-b88a-ed441ee84ab3 |
   | Piano contenuti e funnel | Piano contenuti e funnel.md | 30e2f977-5b3f-81b6-8cb4-e8d8ac3d1720 |
   | Operatività | Operatività.md | 30e2f977-5b3f-819d-886c-d20fa3d27580 |
   | Analisi dei competitor | Analisi dei competitor.md | 30e2f977-5b3f-81c8-b028-f9f2a1bc9002 |
   | Analisi SWOT | Analisi SWOT.md | 30e2f977-5b3f-81e7-8887-f0835da68647 |
   | Revenue Share | Revenue Share.md | 30e2f977-5b3f-8179-8377-fb9977a8c1b3 |
   | MVP | MVP.md | 30e2f977-5b3f-81c4-acdc-e7710f67f9ab |
   | Roadmap | Roadmap.md | 30e2f977-5b3f-8131-9e06-f6a51e40b520 |

3. **Boutique_MVP_e_funnel.md**: è il doc operativo nel repo. In Notion non esiste una pagina dedicata; il suo contenuto è già riflesso in MVP, Piano contenuti e funnel, Value proposition, Servizi. Nessuna pagina Notion da creare per questo file; eventualmente si può aggiungere una pagina “Boutique MVP e funnel” nel DB BP V.2 in seguito se si vuole una copia 1:1.

4. **Formato blocchi**: l’API MCP espone `paragraph` e `bulleted_list_item` con `rich_text` (content string). Le righe che nel .md sono titoli (### …) diventano paragrafi; le liste (- …) diventano bulleted_list_item; il resto paragrafi. Il testo in **grassetto** può essere lasciato come testo normale nel content se l’API non gestisce annotazioni, oppure formattato secondo la doc Notion se disponibile.

5. **Proprietà della pagina (No., Status)**: non vanno modificate da questo piano; restano quelle già impostate in Notion. Si aggiorna solo il **contenuto** (body) della pagina.

## Ordine consigliato

Eseguire le sostituzioni nell’ordine della tabella (Cos'è il progetto → … → Roadmap). Dopo ogni pagina verificare in Notion che il risultato sia leggibile e allineato al .md.

## Fine del Piano 1

Quando tutte le 12 pagine sono allineate al repo, si passa al **Piano 2** (creazione pagine to-do / task per portare avanti il progetto).
