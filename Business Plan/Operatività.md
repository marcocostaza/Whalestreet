# Operatività

No.: 7
Status: Done

Aspetti pratici di gestione.

---

### Come gestisci clienti, sito, software, relazioni?

Notion è la piattaforma in cui si tiene traccia di tutta la nostra documentazione. Da cosa dobbiamo fare, ai processi, a come si struttura il brand.

Tutti questi documenti vengono poi esportati e caricati su una repository GitHub pubblico (con ovviamente alcune cartelle private) che è collegato a Cursor. Questo ci consente di dare tutto il contesto necessario all’AI per capire il progetto ed aiutarci nella costruzione dei nostri asset.

Il sito è l’esempio principale che viene creato proprio in questo modo. Sono stati acquistati 2 domini:

1. [whalestreet.website](http://whalestreet.website) che attualmente è il sito “prova” dove vengono fatti gli esperimenti e viene costruita tutta la struttura che una volta pronta sarà trasferita al dominio principale
2. [whalestreet.it](http://whalestreet.it) questo è il sito principale che al momento offre un semplice re-indirizzamento al sito dove tutto è operativo
3. [marcocostanza.it/whalestreet](http://marcocostanza.it/whalestreet) questo è il sito personale di uno dei fondatori che ha installato sopra Wordpress con diversi plugin che consentono agli studenti di iscriversi ad portale a pagamento ed usufruire di contenuti privati. Questi plugin sono essenzialmente Tutor LMS Pro e Woocommerce

I siti [whalestreet.website](http://whalestreet.website) e [whalestreet.it](http://whalestreet.it) sono creati interamente con Cursor che, una volta estratte tutte le informazioni necessarie dalla documentazione, sa esattamente cosa, come e dove inserire le informazioni (ovviamente sotto guida e modifiche in nostro possesso).

Al momento tutto è gestito da @Marco Costanza ma il setup è aggiornabile ad un sistema in cui il repository e accessibile da altri utenti con la possibilità di limitare i poteri al solo “commit” (cioè proposta di cambiamenti, senza pubblicazione effettiva) in modo che si possa collaborare in più persone o direttamente delegare.

C’è una forte integrazione anche con N8N con il quale gestiamo diverse automazioni, anche quelle che riguardano il mail marketing. Come piattaforma di appoggio abbiamo Brevo, poi tramite API spostiamo la creazione della campagna su N8N. Inoltre il collegamento MCP a Cursor ci consente di creare le campagne direttamente con l’AI.

Importante sottolineare anche la possibilità di utilizzare le API di Meta per poter leggere e rispondere agli utenti su Instagram tramite automazioni (basta creare la pagina Instagram di WhaleStreet e da lì prendere il token necessario).