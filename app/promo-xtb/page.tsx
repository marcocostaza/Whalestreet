"use client";

import { motion } from "framer-motion";
import {
  Gift,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  TrendingUp,
  FileCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Apri Conto XTB",
    description: "Usa il link affiliato per aprire il tuo conto su XTB",
    icon: CreditCard,
  },
  {
    number: 2,
    title: "Deposita Minimo 400€",
    description: "Effettua il deposito minimo richiesto sul tuo conto",
    icon: TrendingUp,
  },
  {
    number: 3,
    title: "Prima Operazione",
    description: "Esegui la tua prima operazione su FX, IND o CMD",
    icon: FileCheck,
  },
  {
    number: 4,
    title: "Invia Prova Deposito",
    description: "Compila il form e invia la prova del deposito",
    icon: FileCheck,
  },
  {
    number: 5,
    title: "Sblocco Automatico",
    description: "Ricevi l'accesso gratuito al primo mese di Academy",
    icon: Sparkles,
  },
];

export default function PromoXTBPage() {
  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background-light to-background-light-alt">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
              <Gift className="w-10 h-10 text-accent" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 text-text-primary"
          >
            Ottieni 1 Mese di Whale Academy Gratis
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-primary/70 mb-8 max-w-2xl mx-auto"
          >
            Apri un conto su XTB tramite il nostro link partner, deposita il minimo richiesto e
            ottieni l&apos;accesso gratuito al primo mese di Academy. Dopo il mese gratuito,
            potrai decidere se rinnovare pagando l&apos;abbonamento standard.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-heading font-bold text-center mb-12 text-text-primary"
          >
            Come Funziona
          </motion.h2>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                            <span className="text-lg font-bold text-accent">{step.number}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-5 h-5 text-accent" />
                            <h3 className="text-lg font-heading font-semibold text-text-primary">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-sm text-text-primary/70">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light-alt">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-text-primary">
              Pronto a Iniziare?
            </h2>
            <p className="text-lg text-text-primary/70 mb-8">
              Clicca sul pulsante qui sotto per aprire il tuo conto XTB e iniziare il processo.
            </p>
            <Button variant="accent" size="lg" className="mb-8" asChild>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  // Link affiliato XTB da inserire
                  alert("Link affiliato XTB da configurare");
                }}
              >
                Apri Conto XTB
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-accent/30">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-center">
                Invia Prova Deposito
              </CardTitle>
              <CardDescription className="text-center">
                Dopo aver completato i passaggi precedenti, compila questo form per inviare la
                prova del deposito e sbloccare il mese gratuito.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="la.tua@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label
                    htmlFor="file"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Prova Deposito (Screenshot o PDF)
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/*,.pdf"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <Button type="submit" variant="accent" className="w-full">
                  Invia Richiesta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-heading font-bold text-center mb-12 text-text-primary"
          >
            Domande Frequenti
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: "Quanto tempo ci vuole per sbloccare il mese gratuito?",
                a: "Dopo aver inviato la prova del deposito, sblocchiamo l'accesso entro 24-48 ore lavorative.",
              },
              {
                q: "Cosa succede dopo il mese gratuito?",
                a: "Dopo il mese gratuito, potrai decidere se rinnovare pagando l'abbonamento standard di 500€/anno. Se non rinnovi, l'accesso scadrà automaticamente.",
              },
              {
                q: "Devo depositare esattamente 400€?",
                a: "Il deposito minimo è di 400€. Puoi depositare di più se preferisci.",
              },
              {
                q: "Quali operazioni contano per il requisito?",
                a: "Devi eseguire almeno una operazione su Forex (FX), Indici (IND) o Commodities (CMD).",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{faq.a}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
