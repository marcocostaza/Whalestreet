"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Wallet, Building2, Users, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

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
                {...fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-text-primary dark:text-text-dark mb-6 leading-tight"
              >
                Protezione e Rendimento per Capitali Importanti.{" "}
                <span className="text-primary dark:text-accent">
                  Oltre il Sistema Bancario.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg sm:text-xl text-text-primary/80 dark:text-text-dark/80 mb-10 leading-relaxed"
              >
                Boutique di consulenza sartoriale 1-to-1 e tutoring operativo su
                Bitcoin e Asset Digitali per HNWI e Tesorerie Aziendali.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button variant="accent" size="lg" className="text-base px-8 py-6" asChild>
                  <Link href="#applica">
                    Prenota una Discovery Call
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
                  [Placeholder: Interfaccia trading pulita su MacBook in ambiente elegante]
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE B: IL PROBLEMA & COSTO OPPORTUNITA */}
      {/* ============================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#152C42] dark:bg-[#152C42]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            {...fadeInView}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-8"
          >
            Il costo del denaro fermo.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed">
              L&apos;inflazione erode il tuo potere d&apos;acquisto. I rendimenti bancari
              tradizionali non coprono le perdite reali.
            </p>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed">
              Non allocare correttamente il tuo capitale significa perdere opportunit&agrave;
              matematiche in termini di yield e protezione.
            </p>
            <div className="pt-4">
              <p className="text-accent font-heading font-bold text-xl sm:text-2xl">
                Non allocare correttamente 50.000&euro; costa migliaia di euro all&apos;anno
                in mancate performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE C: I NOSTRI SERVIZI */}
      {/* ============================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-lighter dark:bg-background-dark">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInView}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center mb-4 text-text-primary dark:text-text-dark"
          >
            I nostri servizi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-text-primary/70 dark:text-text-dark/70 mb-12 max-w-2xl mx-auto"
          >
            Soluzioni sartoriali per chi cerca protezione e rendimento
            su capitali importanti.
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
                    Affiancamento 1-to-1 su chat privata. Nessun corso di gruppo, solo
                    consulenza operativa diretta e riservata.
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
                    Bitcoin Asset Allocation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    Creazione di portafogli su misura fortemente sbilanciati su BTC.
                    Istruzioni operative per la self-custody sicura.
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
                    Corporate Treasury (B2B)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    Diversificazione della tesoreria aziendale in Bitcoin e stablecoin
                    per yield passivo istituzionale e protezione del capitale.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE D: IL NOSTRO METODO */}
      {/* ============================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark-alt">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInView}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center mb-12 text-text-primary dark:text-text-dark"
          >
            Come operiamo
          </motion.h2>

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
                  Supporto Umano Sartoriale
                </h3>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-text-primary/80 dark:text-text-dark/80">
                Marco e Mattia trasferiscono competenza operativa reale,
                con oltre 5 anni di esperienza e 1.000+ operazioni a mercato.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-text-primary/80 dark:text-text-dark/80">
                Nessun intermediario, nessun corso pre-registrato. Ogni cliente
                ha un percorso personalizzato con affiancamento diretto su chat privata,
                chiamate strategiche e protocolli operativi chiari.
              </p>

              {/* Placeholder immagine */}
              <div className="aspect-[16/9] rounded-xl bg-background-dark-alt dark:bg-[#0A1A29] border border-primary/20 dark:border-accent/20 flex items-center justify-center p-6 mt-4">
                <p className="text-center text-text-dark/60 font-sans text-sm">
                  [Placeholder: Ritratti professionali dei founder Marco e Mattia in ambiente ufficio moderno]
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
                Utilizziamo Oracoli AI interni per standardizzare il metodo e garantire
                risposte coerenti, basate su fonti verificate e sul nostro Business Plan.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-text-primary/80 dark:text-text-dark/80">
                Creiamo dashboard e script personalizzati (es. TradingView) costruiti
                unicamente per il singolo cliente. Non tool generici, ma strumenti
                su misura per le tue esigenze specifiche.
              </p>

              {/* Placeholder immagine */}
              <div className="aspect-[16/9] rounded-xl bg-background-dark-alt dark:bg-[#0A1A29] border border-secondary/20 dark:border-accent-purple/20 flex items-center justify-center p-6 mt-4">
                <p className="text-center text-text-dark/60 font-sans text-sm">
                  [Placeholder: Grafico Bitcoin con sovrapposizione di nodi neurali AI]
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE E: CASI STUDIO */}
      {/* ============================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-lighter dark:bg-background-dark">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            {...fadeInView}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center mb-12 text-text-primary dark:text-text-dark"
          >
            Casi Studio
          </motion.h2>

          <div className="space-y-8">
            {/* Caso 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card dark:bg-card border-l-4 border-l-accent">
                <CardContent className="p-8">
                  <p className="text-sm font-medium text-accent dark:text-accent mb-2 font-heading uppercase tracking-wider">
                    Caso Studio #1
                  </p>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground dark:text-foreground mb-4">
                    Imprenditore tech alloca 50k in self-custody
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    Imprenditore nel settore tecnologico, 42 anni, con liquidit&agrave; ferma in
                    conto corrente. Attraverso il Private Tutoring Pathway ha costruito
                    un portafoglio Bitcoin in self-custody con protocollo di sicurezza
                    personalizzato, raggiungendo autonomia operativa completa in 8 settimane.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Caso 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-card dark:bg-card border-l-4 border-l-accent">
                <CardContent className="p-8">
                  <p className="text-sm font-medium text-accent dark:text-accent mb-2 font-heading uppercase tracking-wider">
                    Caso Studio #2
                  </p>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground dark:text-foreground mb-4">
                    Professionista diversifica 30k tra BTC e yield su stablecoin
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    Libero professionista, 55 anni, preoccupato dall&apos;erosione del capitale
                    in banca. Con il servizio di Bitcoin Asset Allocation ha strutturato
                    un piano bilanciato tra BTC per la rivalutazione a lungo termine e
                    stablecoin per generare yield passivo, superando i rendimenti dei
                    classici strumenti bancari.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SEZIONE F: CTA FINALE (FUNNEL) */}
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
            Pronto a proteggere il tuo patrimonio?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed"
          >
            Lavoriamo solo con clienti selezionati con un capitale da allocare
            superiore a 30.000&euro;. Compila il questionario per verificare
            l&apos;idoneit&agrave; e sbloccare il calendario.
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
                Inizia il Questionario di Pre-Qualificazione
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-sm text-white/50"
          >
            Tempo stimato: 2 minuti. I tuoi dati sono trattati con massima riservatezza.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
