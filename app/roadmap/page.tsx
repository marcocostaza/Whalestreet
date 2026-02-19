"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Rocket, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const quarters = [
  {
    id: "q1",
    period: "Gennaio - Marzo",
    title: "Setup & Beta Launch",
    objective: "Raggiungere i primi 15 iscritti tramite canali organici",
    icon: Rocket,
    color: "primary",
    milestones: [
      "Finalizzare il sito con Header, Footer, Homepage",
      "Focus su studio con AI e strumenti interattivi",
      "Sezioni: Chi Siamo (Marco e Mattia), Whale Academy",
      "Configurazione N8N per automazione mail marketing (Brevo) e Telegram Bot",
      "Creazione del primo 'Report Whale Watch' ad alto impatto grafico (Marzo)",
      "Rilascio MVP",
    ],
  },
  {
    id: "q2",
    period: "Aprile - Giugno",
    title: "Integrazione IA & Funnel",
    objective: "Raggiungere il target dei 50 utenti Founder",
    icon: Target,
    color: "accent",
    milestones: [
      "Apertura dei profili social LinkedIn e X",
      "Inizio delle lezioni 'teoriche' di Marco in live",
      "Inizio delle live fatte insieme di Q&A",
      "Conversione delle video-lezioni esistenti in lezione AI",
      "Rilascio della prima versione di 'piattaforma Whale Street'",
    ],
  },
  {
    id: "q3",
    period: "Luglio - Settembre",
    title: "Autorità & Revenue Share",
    objective: "Espansione e partnership",
    icon: TrendingUp,
    color: "secondary",
    milestones: [
      "Apertura dei profili social Instagram e YouTube",
      "Attivazione del sistema di codici sconto (es: 'ANDREA' 10%) per i docenti partner",
    ],
  },
  {
    id: "q4",
    period: "Ottobre - Dicembre",
    title: "Consolidamento & HNW",
    objective: "100 iscritti totali in Accademia e 3 percorsi privati attivi",
    icon: Users,
    color: "accent-purple",
    milestones: [
      "Creazione del pacchetto 'Percorso Privato' per profili High Net Worth",
      "Report annuale dei risultati e testimonianze dei 50 Founders",
      "Tutte le lezioni con AI e servizi a pieno regime",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 text-text-primary"
          >
            Roadmap 2026
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-text-primary/70"
          >
            Il percorso di crescita di WhaleStreet attraverso i quattro trimestri del 2026
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {/* Quarters */}
            {quarters.map((quarter, index) => {
              const Icon = quarter.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={quarter.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative mb-12 md:mb-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 md:translate-x-0">
                    <div
                      className={`w-4 h-4 rounded-full border-4 border-background-light ${
                        quarter.color === "primary"
                          ? "bg-primary"
                          : quarter.color === "accent"
                          ? "bg-accent"
                          : quarter.color === "secondary"
                          ? "bg-secondary"
                          : "bg-accent-purple"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className={`ml-12 md:ml-24 ${isEven ? "md:mr-0" : "md:ml-0 md:mr-24"}`}>
                    <Card
                      className={`border-2 ${
                        quarter.color === "primary"
                          ? "border-primary/30"
                          : quarter.color === "accent"
                          ? "border-accent/30"
                          : quarter.color === "secondary"
                          ? "border-secondary/30"
                          : "border-accent-purple/30"
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              quarter.color === "primary"
                                ? "bg-primary/10"
                                : quarter.color === "accent"
                                ? "bg-accent/10"
                                : quarter.color === "secondary"
                                ? "bg-secondary/10"
                                : "bg-accent-purple/10"
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                quarter.color === "primary"
                                  ? "text-primary"
                                  : quarter.color === "accent"
                                  ? "text-accent"
                                  : quarter.color === "secondary"
                                  ? "text-secondary"
                                  : "text-accent-purple"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`text-sm font-semibold uppercase ${
                                  quarter.color === "primary"
                                    ? "text-primary"
                                    : quarter.color === "accent"
                                    ? "text-accent"
                                    : quarter.color === "secondary"
                                    ? "text-secondary"
                                    : "text-accent-purple"
                                }`}
                              >
                                {quarter.id.toUpperCase()}
                              </span>
                              <span className="text-sm text-text-primary/60">
                                {quarter.period}
                              </span>
                            </div>
                            <CardTitle className="text-xl font-heading mb-2">
                              {quarter.title}
                            </CardTitle>
                            <CardDescription className="text-base font-medium">
                              {quarter.objective}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {quarter.milestones.map((milestone, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2
                                className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                  quarter.color === "primary"
                                    ? "text-primary"
                                    : quarter.color === "accent"
                                    ? "text-accent"
                                    : quarter.color === "secondary"
                                    ? "text-secondary"
                                    : "text-accent-purple"
                                }`}
                              />
                              <span className="text-sm text-text-primary/70 leading-relaxed">
                                {milestone}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
