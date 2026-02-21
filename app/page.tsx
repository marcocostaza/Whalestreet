"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Wallet,
  Building2,
  Users,
  Brain,
  KeyRound,
  ShieldAlert,
  Receipt,
  Ban,
  Handshake,
  Landmark,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BitcoinSimulator from "@/components/bitcoin-simulator";

const fadeInView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ============================================= */}
      {/* SEZIONE A: HERO */}
      {/* ============================================= */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background-light to-primary-lighter dark:from-background-dark dark:to-background-dark-alt">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-text-primary dark:text-text-dark mb-6 leading-tight"
              >
                Impara a Diversificare il Tuo Patrimonio con{" "}
                <span className="text-primary dark:text-accent">Bitcoin</span>
                <span className="text-text-primary dark:text-text-dark"> e </span>
                <span className="text-primary dark:text-accent">Asset Digitali</span>
                <span className="text-text-primary dark:text-text-dark">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg sm:text-xl text-text-primary/80 dark:text-text-dark/80 mb-10 leading-relaxed"
              >
                Formazione premium e tutoring operativo 1-to-1 su Bitcoin e
                Crypto. La tua porta d&apos;ingresso sicura per comprendere
                l&apos;asset class che sta ridefinendo la finanza globale.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  variant="accent"
                  size="lg"
                  className="text-base px-8 py-6"
                  asChild
                >
                  <Link href="#applica">
                    Prenota una chiamata conoscitiva gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-2xl bg-background-dark-alt dark:bg-[#0A1A29] border border-primary/20 dark:border-accent/20 flex items-center justify-center p-8">
                <p className="text-center text-text-dark/60 font-sans text-sm leading-relaxed">
                  [Placeholder: Interfaccia trading pulita su MacBook in
                  ambiente elegante]
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE B: INSTITUTIONAL ADOPTION */}
      {/* ============================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#152C42] dark:bg-[#152C42]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeInView}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white text-center mb-4"
          >
            Bitcoin nel 2026: da asset di nicchia a standard istituzionale.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-white/60 mb-2 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Le pi&ugrave; grandi istituzioni finanziarie del mondo hanno preso
            posizione. Ignorare la migliore asset class dell&apos;ultimo
            decennio non &egrave; prudenza, &egrave; un rischio certo.
          </motion.p>
          <p className="text-center text-white/40 text-sm mb-14">
            Dati aggiornati a Febbraio 2026.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Landmark,
                title: "Assorbimento Istituzionale",
                stat: "1.3+ Milioni di BTC ($130B+ AUM)",
                text: "Oltre 1.3 Milioni di BTC assorbiti. I fondi ETF globali gestiscono oggi più di 130 miliardi di dollari, rendendo Bitcoin l'asset con la più rapida adozione istituzionale della storia.",
              },
              {
                icon: TrendingUp,
                title: "Corporate Standard",
                stat: "1.1+ Milioni di BTC nei bilanci",
                text: "Oltre 1.1 Milioni di BTC nelle tesorerie aziendali. Dalla Silicon Valley al Giappone, le aziende pubbliche e private hanno trasformato Bitcoin nel nuovo standard di riserva per le tesorerie.",
              },
              {
                icon: Building2,
                title: "Integrazione Sistemica",
                stat: "$50B+ dal risparmio gestito",
                text: "Il futuro del risparmio generazionale. Con oltre 50 miliardi di dollari di allocazione globale, i grandi fondi pensione e le banche d'affari hanno reso Bitcoin un pilastro dei portafogli tradizionali.",
              },
              {
                icon: Globe,
                title: "Riserve Geopolitiche",
                stat: "~600.000 BTC detenuti dagli Stati",
                text: "L'Oro Digitale degli Stati sovrani. Con circa 600.000 BTC detenuti a livello globale, governi e nazioni hanno ufficialmente integrato Bitcoin nelle loro riserve strategiche.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl bg-white/[0.06] border border-white/10 p-6 hover:bg-white/[0.08] transition-colors"
              >
                <item.icon className="w-10 h-10 text-accent mb-3" aria-hidden />
                <p className="text-xs text-accent font-bold uppercase tracking-wider mb-1">
                  {item.stat}
                </p>
                <h4 className="font-heading font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-white/55 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE C: SIMULATORE DI PORTAFOGLIO */}
      {/* ============================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A1A29] dark:bg-[#0A1A29]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeInView}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center mb-4 text-white"
          >
            Quanto impatta una piccola allocazione in Bitcoin?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-white/50 mb-12 max-w-2xl mx-auto"
          >
            Anche l&apos;1-5% del portafoglio dedicato a Bitcoin pu&ograve;
            avere un impatto significativo. Esplora i dati storici con il
            nostro simulatore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BitcoinSimulator />
          </motion.div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE D: IL COSTO DELL'INAZIONE + ERRORI */}
      {/* ============================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-lighter dark:bg-background-dark">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeInView}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center mb-4 text-text-primary dark:text-text-dark"
          >
            Il costo di non agire e di farlo senza conoscenza
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-text-primary/70 dark:text-text-dark/70 mb-14 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Non avere nessuna esposizione a Bitcoin &egrave; un costo
            opportunit&agrave; misurabile. Ma entrare senza le giuste
            competenze pu&ograve; costare ancora di pi&ugrave;.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: KeyRound,
                title: "Chiavi private e errori operativi",
                text: "Circa il 20% di tutti i Bitcoin esistenti risulta perso per sempre: le chiavi non si recuperano. Un indirizzo sbagliato o una rete errata rendono i fondi irrecuperabili. La sicurezza della custodia e protocolli operativi precisi dipendono da te.",
              },
              {
                icon: ShieldAlert,
                title: "Truffe, phishing e sicurezza",
                text: "Miliardi persi ogni anno in scam. Senza le competenze giuste si è esposti. Privacy e sicurezza dei dati vanno protette con metodo.",
              },
              {
                icon: Receipt,
                title: "Errori fiscali",
                text: "In Italia la mancata dichiarazione di cripto-attività può comportare sanzioni fino al 240% dell'imposta dovuta.",
              },
              {
                icon: Shield,
                title: "Privacy e sicurezza",
                text: "Self-custody e uso di strumenti adeguati proteggono identità e patrimonio. Operare senza competenza espone a furti, perdite e violazioni della privacy.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-card dark:bg-card border hover:border-primary/40 dark:hover:border-accent/40 transition-colors">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 text-primary dark:text-accent mb-3" />
                    <h4 className="font-heading font-bold text-foreground dark:text-foreground mb-2 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10 text-primary dark:text-accent font-heading font-bold text-lg sm:text-xl"
          >
            La formazione &egrave; l&apos;unica protezione reale.
            <br />
            <span className="text-text-primary/60 dark:text-text-dark/60 font-sans font-normal text-base">
              Ti insegniamo a operare con metodo, evitando errori tecnici,
              operativi e fiscali e proteggendo privacy e sicurezza.
            </span>
          </motion.p>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE E: I NOSTRI SERVIZI */}
      {/* ============================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark-alt">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInView}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center mb-4 text-text-primary dark:text-text-dark"
          >
            Cosa facciamo per te
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-text-primary/70 dark:text-text-dark/70 mb-12 max-w-2xl mx-auto"
          >
            Supporto tecnico-educativo personalizzato, disponibile 24 ore su 24 e 7 giorni su 7. Non gestiamo il tuo
            capitale: ti formiamo per operare in totale autonomia e con
            consapevolezza.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 dark:hover:border-accent/50 transition-all duration-300 bg-card dark:bg-card hover:shadow-glow-sm">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-accent/20 flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-primary dark:text-accent" />
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground dark:text-foreground">
                    Private Tutoring Pathway
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    Affiancamento 1-to-1 su chat privata, videochiamate e
                    webinar privati. Nessun corso di gruppo: tutoring operativo
                    diretto per comprendere i mercati, ragionare sulle strategie
                    e operare in piena autonomia.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 dark:hover:border-accent/50 transition-all duration-300 bg-card dark:bg-card hover:shadow-glow-sm">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-accent/20 flex items-center justify-center mb-4">
                    <Wallet className="w-7 h-7 text-primary dark:text-accent" />
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground dark:text-foreground">
                    Formazione su Bitcoin e Self-Custody
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    Impara a ragionare sulla costruzione di portafogli
                    orientati a BTC. Ti guidiamo nella self-custody sicura,
                    nella gestione delle chiavi private e nelle operazioni su
                    exchange.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <Card className="h-full border-2 hover:border-primary/50 dark:hover:border-accent/50 transition-all duration-300 bg-card dark:bg-card hover:shadow-glow-sm">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-accent/20 flex items-center justify-center mb-4">
                    <Building2 className="w-7 h-7 text-primary dark:text-accent" />
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground dark:text-foreground">
                    Formazione Corporate Treasury (B2B)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    Percorsi formativi per aziende che vogliono comprendere
                    come diversificare la tesoreria in Bitcoin e stablecoin.
                    Supporto tecnico e operativo per le prime allocazioni.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Partnership OCF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 rounded-2xl bg-card dark:bg-card border border-border dark:border-border p-8"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center">
                  <Handshake className="w-7 h-7 text-secondary dark:text-accent-purple" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground dark:text-foreground mb-3">
                  Supporto Fiscale e Rete di Professionisti Abilitati
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground dark:text-muted-foreground mb-4">
                  Oltre alla formazione tecnica, ti supportiamo sulla parte
                  fiscale relativa alla dichiarazione di cripto-attivit&agrave;.
                  Abbiamo una rete di partner per un supporto a 360&deg;:{" "}
                  <strong className="text-foreground dark:text-foreground">
                    commercialisti
                  </strong>
                  {" "}e{" "}
                  <strong className="text-foreground dark:text-foreground">
                    consulenti finanziari abilitati e iscritti all&apos;Albo OCF
                  </strong>
                  , indipendenti dal nostro servizio di formazione.
                </p>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground italic">
                  WhaleStreet si occupa esclusivamente di formazione e
                  tutoring. Consulenza fiscale e finanziaria personalizzata
                  &egrave; erogata da professionisti terzi abilitati, con
                  contratti e pagamenti separati.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE F: COME OPERIAMO */}
      {/* ============================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-lighter dark:bg-background-dark">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInView}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center mb-4 text-text-primary dark:text-text-dark"
          >
            Come operiamo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-text-primary/70 dark:text-text-dark/70 mb-12 max-w-3xl mx-auto"
          >
            Non siamo solo tecnici: siamo analisti che studiano quotidianamente
            le strutture macroeconomiche di questi mercati.
            Esclusivamente verticali su Bitcoin e asset digitali.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Pilastro 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-primary dark:text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary dark:text-text-dark">
                  Team con Esperienza Diretta
                </h3>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-text-primary/80 dark:text-text-dark/80">
                Marco e Mattia operano direttamente sui mercati crypto da oltre
                5 anni, con 1.000+ operazioni eseguite. Non insegniamo teoria
                da manuali: trasferiamo competenza maturata sul campo,
                nell&apos;analisi macroeconomica e nelle operazioni reali.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-text-primary/80 dark:text-text-dark/80">
                Ci poniamo come la tua porta d&apos;ingresso sicura: ti
                accompagniamo a partire da allocazioni piccole ma strategiche,
                costruendo competenza e fiducia passo dopo passo.
              </p>

              {/* Placeholder */}
              <div className="aspect-[16/9] rounded-xl bg-background-dark-alt dark:bg-[#0A1A29] border border-primary/20 dark:border-accent/20 flex items-center justify-center p-6 mt-4">
                <p className="text-center text-text-dark/60 font-sans text-sm">
                  [Placeholder: Ritratti professionali dei founder Marco e
                  Mattia in ambiente ufficio moderno]
                </p>
              </div>
            </motion.div>

            {/* Pilastro 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-7 h-7 text-secondary dark:text-accent-purple" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary dark:text-text-dark">
                  Tecnologia AI su Misura
                </h3>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-text-primary/80 dark:text-text-dark/80">
                Utilizziamo Oracoli AI interni per standardizzare il metodo e
                garantire risposte coerenti, basate su fonti verificate e sul
                nostro framework operativo.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-text-primary/80 dark:text-text-dark/80">
                Creiamo dashboard e script personalizzati (es. TradingView)
                costruiti per il singolo cliente. Non tool generici: strumenti
                su misura per le tue esigenze specifiche.
              </p>

              {/* Placeholder */}
              <div className="aspect-[16/9] rounded-xl bg-background-dark-alt dark:bg-[#0A1A29] border border-secondary/20 dark:border-accent-purple/20 flex items-center justify-center p-6 mt-4">
                <p className="text-center text-text-dark/60 font-sans text-sm">
                  [Placeholder: Grafico Bitcoin con sovrapposizione di nodi
                  neurali AI]
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE G: CTA FINALE */}
      {/* ============================================= */}
      <section
        id="applica"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1E1636] dark:bg-[#1E1636] relative overflow-hidden"
      >
        {/* Glow decorativo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.h2
            {...fadeInView}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-6"
          >
            Pronto ad affacciarti a questo mercato con criterio?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 mb-4 leading-relaxed"
          >
            Lavoriamo solo con un numero selezionato di clienti per garantire
            un affiancamento reale e personalizzato.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base text-white/60 mb-10 leading-relaxed"
          >
            Compila il breve questionario per capire se il nostro percorso
            formativo &egrave; adatto alle tue esigenze e sbloccare il
            calendario per una Discovery Call gratuita.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              variant="accent"
              size="lg"
              className="text-base sm:text-lg px-10 py-7 shadow-glow hover:shadow-[0_0_80px_-15px_rgba(59,149,217,0.5)] transition-shadow duration-300"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Inizia il Questionario
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-sm text-white/40"
          >
            Tempo stimato: 2 minuti. Nessun dato finanziario richiesto. I tuoi
            dati sono trattati con massima riservatezza.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
