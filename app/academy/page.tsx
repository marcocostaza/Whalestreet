"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  MessageSquare,
  Users,
  BookOpen,
  Sparkles,
  Bot,
  Calculator,
  Video,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background-light to-background-light-alt dark:from-background-dark dark:to-background-dark-alt">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 text-text-primary dark:text-text-dark"
          >
            Whale Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-text-primary/70 dark:text-text-dark/70 mb-8"
          >
            Formazione Crypto Potenziata dall&apos;Intelligenza Artificiale
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-primary/60 dark:text-text-dark/60 max-w-2xl mx-auto"
          >
            Un&apos;accademia ad abbonamento annuale che combina supporto umano costante e
            tecnologie AI per un percorso formativo personalizzato e interattivo.
          </motion.p>
        </div>
      </section>

      {/* Servizi Inclusi */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-heading font-bold text-center mb-12 text-text-primary dark:text-text-dark"
          >
            Cosa è incluso nell&apos;Academy
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Lezione Teorica Mensile",
                description:
                  "60 minuti al mese con Marco su finanza personale, gestione del rischio, analisi tecnica. Con slide, quiz e documentazione.",
              },
              {
                icon: FileText,
                title: "Report Mensile",
                description:
                  "Analisi completa di Mattia (tecnica, fondamentale, on-chain) per muoverti nel mercato crypto. Disponibile in versione scritta e video.",
              },
              {
                icon: MessageSquare,
                title: "Q&A Mensile",
                description:
                  "Sessione di 30-60 minuti con Marco e Mattia per risolvere problemi e rispondere alle domande su temi evergreen e attualità.",
              },
              {
                icon: Users,
                title: "Chat Telegram 24/7",
                description:
                  "Supporto costante tramite chat dove gli studenti si confrontano tra loro e con noi in tempo reale.",
              },
              {
                icon: BookOpen,
                title: "Accesso Materiali Storici",
                description:
                  "Tutte le lezioni, analisi e strumenti operativi condivisi nei mesi precedenti. Archivio completo sempre disponibile.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 dark:hover:border-primary/70 transition-colors bg-card dark:bg-card">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary dark:text-accent" />
                    </div>
                    <CardTitle className="text-lg font-heading text-foreground dark:text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light-alt dark:bg-background-dark-alt">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 mb-4">
              <Sparkles className="w-5 h-5 text-secondary dark:text-accent-purple" />
              <span className="text-sm font-semibold text-secondary dark:text-accent-purple">AI Powered</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-text-primary dark:text-text-dark">
              Strumenti AI Personalizzati
            </h2>
            <p className="text-lg text-text-primary/70 dark:text-text-dark/70 max-w-2xl mx-auto">
              La nostra proposta formativa si differenzia per la presenza di supporti AI che
              rendono lo studio più interattivo rispetto al classico &quot;video-corso&quot;.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Calculator,
                title: "Applicativi Personalizzati",
                description:
                  "Piani di trading, risparmio e spesa creati su misura per ogni studente in base alle sue necessità specifiche.",
                color: "secondary",
              },
              {
                icon: Bot,
                title: "ChatBOT e Piattaforme di Studio",
                description:
                  "Sistemi basati sulle nostre fonti che insegnano e creano contenuti multimediali in tempo reale (slide, video, podcast).",
                color: "secondary",
              },
              {
                icon: Video,
                title: "NotebookLM Integration",
                description:
                  "Chatbot che integra le nostre fonti e genera podcast e video riassuntivi dei singoli temi trattati.",
                color: "accent-purple",
              },
              {
                icon: Sparkles,
                title: "Piattaforma Proprietaria (Futuro)",
                description:
                  "Lo studente creerà il materiale didattico che preferisce. Forniremo le fonti affidabili e applicativi on-demand.",
                color: "accent-purple",
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full border-2 bg-card dark:bg-card ${
                    tool.color === "secondary"
                      ? "border-secondary/30 hover:border-secondary/50 dark:border-secondary/40 dark:hover:border-secondary/60"
                      : "border-accent-purple/30 hover:border-accent-purple/50 dark:border-accent-purple/40 dark:hover:border-accent-purple/60"
                  } transition-colors`}
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        tool.color === "secondary"
                          ? "bg-secondary/10 dark:bg-secondary/20"
                          : "bg-accent-purple/10 dark:bg-accent-purple/20"
                      }`}
                    >
                      <tool.icon
                        className={`w-6 h-6 ${
                          tool.color === "secondary" ? "text-secondary dark:text-accent-purple" : "text-accent-purple"
                        }`}
                      />
                    </div>
                    <CardTitle className="text-lg font-heading text-foreground dark:text-foreground">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                      {tool.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalità di Accesso */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-heading font-bold text-center mb-12 text-text-primary dark:text-text-dark"
          >
            Come Accedere all&apos;Academy
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Opzione 1: Pagamento Standard */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-primary/30 dark:border-primary/40 bg-card dark:bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-foreground dark:text-foreground">Abbonamento Annuale</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary dark:text-accent mt-2">
                    500€/anno
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary dark:text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-primary/70 dark:text-text-dark/70">
                        Accesso immediato a tutti i servizi
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary dark:text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-primary/70 dark:text-text-dark/70">
                        Materiali storici inclusi
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary dark:text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-primary/70 dark:text-text-dark/70">
                        Supporto AI completo
                      </span>
                    </li>
                  </ul>
                  <Button variant="default" className="w-full mt-6" asChild>
                    <Link href="#">
                      Iscriviti Ora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Opzione 2: 1 Mese Gratis XTB */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-accent/30 dark:border-accent/40 bg-card dark:bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-foreground dark:text-foreground">1 Mese Gratis</CardTitle>
                  <CardDescription className="text-lg font-semibold text-accent mt-2">
                    Tramite Partner XTB
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-primary/70 dark:text-text-dark/70 mb-4">
                    Sblocca il primo mese di Academy gratuitamente aprendo un conto tramite il nostro
                    partner XTB.
                  </p>
                  <ol className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm text-text-primary/70 dark:text-text-dark/70">
                      <span className="font-semibold text-accent">1.</span>
                      <span>Apri conto XTB tramite link affiliato</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-primary/70 dark:text-text-dark/70">
                      <span className="font-semibold text-accent">2.</span>
                      <span>Deposita minimo 400€</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-primary/70 dark:text-text-dark/70">
                      <span className="font-semibold text-accent">3.</span>
                      <span>Esegui prima operazione (FX/IND/CMD)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-primary/70 dark:text-text-dark/70">
                      <span className="font-semibold text-accent">4.</span>
                      <span>Invia prova deposito tramite form</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-primary/70 dark:text-text-dark/70">
                      <span className="font-semibold text-accent">5.</span>
                      <span>Sblocco automatico mese gratuito</span>
                    </li>
                  </ol>
                  <Button variant="accent" className="w-full" asChild>
                    <Link href="/promo-xtb">
                      Ottieni 1 Mese Gratis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabella Prezzi */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light-alt dark:bg-background-dark-alt">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-heading font-bold text-center mb-12 text-text-primary dark:text-text-dark"
          >
            Prezzi
          </motion.h2>

          <Card className="border-2 border-primary/30 dark:border-primary/40 bg-card dark:bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-center text-foreground dark:text-foreground">
                Whale Academy
              </CardTitle>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold text-primary dark:text-accent">500€</span>
                <span className="text-text-primary/70 dark:text-text-dark/70 ml-2">/anno</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border dark:border-border">
                  <span className="text-text-primary dark:text-text-dark">Abbonamento Annuale</span>
                  <span className="font-semibold text-text-primary dark:text-text-dark">500€</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border dark:border-border">
                  <span className="text-text-primary dark:text-text-dark">1 Mese Gratis (XTB)</span>
                  <span className="font-semibold text-accent">Gratis</span>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-text-primary/70 dark:text-text-dark/70 mb-4">
                    * Dopo il mese gratuito, l&apos;abbonamento continuerà al prezzo standard di
                    500€/anno se non disdetti.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="default" className="flex-1" asChild>
                      <Link href="#">
                        Acquista Abbonamento
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="accent" className="flex-1" asChild>
                      <Link href="/promo-xtb">
                        Prova Gratis 1 Mese
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
