"use client";

import Link from "next/link";
import Image from "next/image";
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
                  <Link href="#newsletter">
                    Iscriviti alla newsletter
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary/20 dark:border-accent/20">
                <Image
                  src="/IMG/Home_Computer.webp"
                  alt="Interfaccia trading su MacBook in ambiente elegante"
                  width={1200}
                  height={670}
                  sizes="(min-width: 1024px) 488px, 90vw"
                  quality={100}
                  className="h-full w-full object-cover"
                />
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
                text: "Chiavi perse o indirizzi sbagliati rendono i fondi irrecuperabili. La custodia sicura e protocolli operativi precisi dipendono da te.",
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE G: NEWSLETTER */}
      {/* ============================================= */}
      <section
        id="newsletter"
        className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-border dark:border-border bg-background-light dark:bg-background-dark"
        aria-label="Newsletter"
      >
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-text-primary dark:text-text-dark">
              Resta aggiornato
            </h2>
            <p className="text-text-primary/70 dark:text-text-dark/70">
              Ricevi analisi, guide operative e approfondimenti.
            </p>
          </motion.div>

          <div className="sib-form" style={{ textAlign: "center" }}>
            <div
              id="sib-container"
              className="sib-container--large sib-container--vertical"
              style={{
                textAlign: "center",
                maxWidth: "540px",
                margin: "0 auto",
                direction: "ltr",
                borderRadius: "1.25rem",
                border: "1px solid rgba(220, 233, 242, 0.5)",
                background: "rgba(255, 255, 255, 0.96)",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.15)",
                overflow: "hidden",
                padding: "1.5rem",
              }}
            >
              <form
                id="sib-form"
                method="POST"
                action="https://8b8e18d7.sibforms.com/serve/MUIFAFIuxtZsDR3Ol5BAtSxYNIxPcwo0DyFFNhqRjFdYll_o0dig1t4C-8k2XY1yBMhHEY-9thETBvdOx_Lx2j9n-uaQZVa6zrv1f-HikKsi6iivVeIyJBLawxZrE2L0rXawT-SSj_k829cjq-Tv5WVIxCWJAYv5MWgPyjR1O20X9JMO3OqotqV0OKnfiINMqT9ljfniiaKUgSjJ7w=="
                data-type="subscription"
              >
                <div style={{ padding: "8px 0" }}>
                  <div
                    className="sib-form-block"
                    style={{
                      fontSize: "32px",
                      textAlign: "left",
                      fontWeight: "700",
                      fontFamily: "var(--font-inter), Helvetica, sans-serif",
                      color: "#3C4858",
                      background: "transparent",
                    }}
                  >
                    <p>Resta aggiornato</p>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div
                    className="sib-form-block"
                    style={{
                      fontSize: "16px",
                      textAlign: "left",
                      fontFamily: "var(--font-inter), Helvetica, sans-serif",
                      color: "#3C4858",
                      background: "transparent",
                    }}
                  >
                    <div className="sib-text-form-block">
                      <p>Ricevi analisi, guide operative e approfondimenti.</p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div className="sib-input sib-form-block">
                    <div className="form__entry entry_block">
                      <div className="form__label-row">
                        <div className="entry__field">
                          <input
                            className="input"
                            type="text"
                            id="EMAIL"
                            name="EMAIL"
                            autoComplete="off"
                            placeholder="EMAIL"
                            data-required="true"
                            required
                            style={{
                              borderRadius: "0.75rem",
                              padding: "0.75rem",
                              border: "1px solid #DCE9F2",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div className="sib-checkbox-group sib-form-block" data-required="true">
                    <div className="form__entry entry_mcq">
                      <div className="form__label-row">
                        <label
                          className="entry__label"
                          style={{
                            fontWeight: "700",
                            textAlign: "left",
                            fontSize: "16px",
                            fontFamily: "var(--font-inter), Helvetica, sans-serif",
                            color: "#3c4858",
                          }}
                          data-required="*"
                        >
                          Seleziona le e-mail che ti piacerebbe ricevere
                        </label>
                        <div>
                          <div className="entry__choice">
                            <label className="checkbox__label">
                              <input
                                type="checkbox"
                                className="input_replaced"
                                name="TIPOLOGIA_DI_NEWS[]"
                                data-value="🎓 Guide e approfondimenti"
                                value="🎓 Guide e approfondimenti"
                                data-required="true"
                              />
                              <span className="checkbox checkbox_tick_positive"></span>
                              <span style={{ fontSize: "16px", textAlign: "left", fontFamily: "var(--font-inter), Helvetica, sans-serif", color: "#3C4858" }}>
                                🎓 Guide e approfondimenti
                              </span>
                            </label>
                          </div>
                          <div className="entry__choice">
                            <label className="checkbox__label">
                              <input
                                type="checkbox"
                                className="input_replaced"
                                name="TIPOLOGIA_DI_NEWS[]"
                                data-value="🎁 Offerte, sconti e bonus"
                                value="🎁 Offerte, sconti e bonus"
                                data-required="true"
                              />
                              <span className="checkbox checkbox_tick_positive"></span>
                              <span style={{ fontSize: "16px", textAlign: "left", fontFamily: "var(--font-inter), Helvetica, sans-serif", color: "#3C4858" }}>
                                🎁 Offerte, sconti e bonus
                              </span>
                            </label>
                          </div>
                          <div className="entry__choice">
                            <label className="checkbox__label">
                              <input
                                type="checkbox"
                                className="input_replaced"
                                name="TIPOLOGIA_DI_NEWS[]"
                                data-value="📰 News e consigli di attualità"
                                value="📰 News e consigli di attualità"
                                data-required="true"
                              />
                              <span className="checkbox checkbox_tick_positive"></span>
                              <span style={{ fontSize: "16px", textAlign: "left", fontFamily: "var(--font-inter), Helvetica, sans-serif", color: "#3C4858" }}>
                                📰 News e consigli di attualità
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div className="sib-optin sib-form-block" data-required="true">
                    <div className="form__entry entry_mcq">
                      <div className="form__label-row">
                        <div className="entry__choice">
                          <label>
                            <input type="checkbox" className="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                            <span className="checkbox checkbox_tick_positive"></span>
                            <span style={{ fontSize: "14px", textAlign: "left", fontFamily: "var(--font-inter), Helvetica, sans-serif", color: "#3C4858" }}>
                              <p>Accetto l&apos;informativa sulla privacy dei dati.</p>
                              <span data-required="*" style={{ display: "inline" }}></span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <label className="entry__specification" style={{ fontSize: "12px", textAlign: "left", fontFamily: "var(--font-inter), Helvetica, sans-serif", color: "#8390A4" }}>
                        Puoi annullare l&apos;iscrizione in qualsiasi momento utilizzando il link nella newsletter.
                      </label>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div className="sib-form-block" style={{ textAlign: "left" }}>
                    <button
                      className="sib-form-block__button sib-form-block__button-with-loader"
                      style={{ fontSize: "16px", textAlign: "left", fontWeight: "700", fontFamily: "var(--font-inter), Helvetica, sans-serif", color: "#FFFFFF", background: "#3B95D9", borderRadius: "0.75rem", borderWidth: "0px", padding: "0.75rem 1.5rem", width: "100%", cursor: "pointer" }}
                      form="sib-form"
                      type="submit"
                    >
                      ISCRIVITI
                    </button>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div className="sib-form__declaration" style={{ direction: "ltr" }}>
                    <div style={{ fontSize: "14px", textAlign: "left", fontFamily: "var(--font-inter), Helvetica, sans-serif", color: "#687484", background: "transparent" }}>
                      <p>
                        We use Brevo as our marketing platform. By submitting this form you agree that the personal data you provided will be transferred to Brevo for processing in accordance with{" "}
                        <a href="https://www.brevo.com/en/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" style={{ color: "#3B95D9" }}>
                          Brevo&apos;s Privacy Policy.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div className="g-recaptcha" data-sitekey="6LeGQVwsAAAAAJfpAc4_DywDxMdzyRxlR8M5hMVr" data-callback="invisibleCaptchaCallback" data-size="invisible"></div>
                </div>
                <input type="text" name="email_address_check" value="" className="input--hidden" />
                <input type="hidden" name="locale" value="en" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
