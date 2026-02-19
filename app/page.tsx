"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Brain, GraduationCap, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background-light to-background-light-alt">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <Image
              src="/images/WhaleStreet_Logo_Colored.png"
              alt="WhaleStreet – Logo del brand"
              width={320}
              height={200}
              className="w-full max-w-xs mx-auto object-contain"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-text-primary mb-6 leading-tight"
          >
            WhaleStreet: Il Tuo Faro nella Navigazione Verso l&apos;Indipendenza Finanziaria
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-text-primary/80 max-w-2xl mx-auto mb-10"
          >
            Formazione avanzata su Bitcoin e Crypto potenziata dall&apos;Intelligenza Artificiale.
            Inizia il tuo percorso di crescita attraverso una rotta guidata.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="accent" size="lg" asChild>
              <Link href="/academy">
                Inizia il tuo percorso
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#newsletter">Iscriviti alla newsletter</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* I due Pilastri */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-heading font-bold text-center mb-12 text-text-primary"
          >
            I due Pilastri
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">Supporto Umano</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Supporto presente e costante attraverso chat, live ed eventi che forniscono
                    assistenza diretta allo studente. Un contatto stretto con la community tramite
                    live e canali Telegram per risolvere problemi e rispondere alle domande.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 hover:border-secondary/50 transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <Brain className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-heading">Formazione AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Eliminiamo il classico &quot;videocorso registrato&quot; con strumenti di formazione
                    personalizzata. Creazione di contenuti testuali, audio e video ad hoc in base
                    alle necessità dello studente, con chatbot e applicativi personalizzati.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chi Siamo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light-alt">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-text-primary">
              Chi Siamo
            </h2>
            <p className="text-lg text-text-primary/70 max-w-3xl mx-auto">
              WhaleStreet è una realtà formativa italiana fondata e gestita da professionisti ed
              amatori del settore che operano personalmente sugli asset digitali. Il progetto nasce
              verticale nel comparto Crypto e si rivolge ad un pubblico di interessati agli
              investimenti di breve, medio e lungo periodo focalizzato su Bitcoin e Cryptovalute.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Marco</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    5 anni di esperienza nell&apos;educazione finanziaria e profonda conoscenza
                    dell&apos;ecosistema Bitcoin. Gode di una certa autorevolezza nell&apos;ambiente
                    ed ha già una base di persone che lo segue costantemente sui suoi social. Ha
                    parecchi contatti nell&apos;ambiente crypto.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Mattia</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    5 anni di esperienza attiva nel mercato crypto con oltre 1.000 operazioni
                    eseguite e centinaia di migliaia di dollari investiti. Ha previsto la bull run
                    di Bitcoin da inizio 2023 e identificato correttamente il cambio di trend nel
                    Q4 2025. Ha analizzato oltre 200 progetti crypto a livello fondamentale.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="newsletter"
        className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background-light"
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
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-text-primary">
              Resta aggiornato
            </h2>
            <p className="text-text-primary/70">
              Ricevi analisi, guide operative e approfondimenti.
            </p>
          </motion.div>

          {/* Brevo Form - mantenuto dall'HTML esistente */}
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
                              <span
                                style={{
                                  fontSize: "16px",
                                  textAlign: "left",
                                  fontFamily: "var(--font-inter), Helvetica, sans-serif",
                                  color: "#3C4858",
                                }}
                              >
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
                              <span
                                style={{
                                  fontSize: "16px",
                                  textAlign: "left",
                                  fontFamily: "var(--font-inter), Helvetica, sans-serif",
                                  color: "#3C4858",
                                }}
                              >
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
                              <span
                                style={{
                                  fontSize: "16px",
                                  textAlign: "left",
                                  fontFamily: "var(--font-inter), Helvetica, sans-serif",
                                  color: "#3C4858",
                                }}
                              >
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
                            <input
                              type="checkbox"
                              className="input_replaced"
                              value="1"
                              id="OPT_IN"
                              name="OPT_IN"
                              required
                            />
                            <span className="checkbox checkbox_tick_positive"></span>
                            <span
                              style={{
                                fontSize: "14px",
                                textAlign: "left",
                                fontFamily: "var(--font-inter), Helvetica, sans-serif",
                                color: "#3C4858",
                              }}
                            >
                              <p>Accetto l&apos;informativa sulla privacy dei dati.</p>
                              <span data-required="*" style={{ display: "inline" }}></span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <label
                        className="entry__specification"
                        style={{
                          fontSize: "12px",
                          textAlign: "left",
                          fontFamily: "var(--font-inter), Helvetica, sans-serif",
                          color: "#8390A4",
                        }}
                      >
                        Puoi annullare l&apos;iscrizione in qualsiasi momento utilizzando il link
                        nella newsletter.
                      </label>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div className="sib-form-block" style={{ textAlign: "left" }}>
                    <button
                      className="sib-form-block__button sib-form-block__button-with-loader"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: "700",
                        fontFamily: "var(--font-inter), Helvetica, sans-serif",
                        color: "#FFFFFF",
                        background: "#3B95D9",
                        borderRadius: "0.75rem",
                        borderWidth: "0px",
                        padding: "0.75rem 1.5rem",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      form="sib-form"
                      type="submit"
                    >
                      ISCRIVITI
                    </button>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div className="sib-form__declaration" style={{ direction: "ltr" }}>
                    <div
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        fontFamily: "var(--font-inter), Helvetica, sans-serif",
                        color: "#687484",
                        background: "transparent",
                      }}
                    >
                      <p>
                        We use Brevo as our marketing platform. By submitting this form you agree
                        that the personal data you provided will be transferred to Brevo for
                        processing in accordance with{" "}
                        <a
                          href="https://www.brevo.com/en/legal/privacypolicy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#3B95D9" }}
                        >
                          Brevo&apos;s Privacy Policy.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LeGQVwsAAAAAJfpAc4_DywDxMdzyRxlR8M5hMVr"
                    data-callback="invisibleCaptchaCallback"
                    data-size="invisible"
                  ></div>
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
