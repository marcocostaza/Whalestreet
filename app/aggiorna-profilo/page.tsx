"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AggiornaProfiloPage() {
  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          <span className="text-sm text-text-primary/90">Iscrizione completata</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-text-primary mb-4 leading-tight">
          Vuoi dirci qualcosa in più su di te?
        </h1>
        <p className="text-base sm:text-lg text-text-primary/70">
          È tutto <strong>opzionale</strong>. Puoi compilare il form per personalizzare le nostre
          comunicazioni, oppure saltare e iniziare subito a ricevere i contenuti.
        </p>
      </motion.header>

      {/* Form Brevo */}
      <section className="w-full max-w-2xl mb-10">
        <Card className="border-2 border-primary/20">
          <CardContent className="pt-8">
            <div className="sib-form" style={{ textAlign: "center" }}>
              <div
                id="sib-container"
                className="sib-container--large sib-container--vertical"
                style={{
                  textAlign: "center",
                  direction: "ltr",
                  borderRadius: "1.25rem",
                  border: "1px solid rgba(220, 233, 242, 0.5)",
                  background: "rgba(255, 255, 255, 0.98)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.12)",
                  overflow: "hidden",
                  padding: "1.5rem",
                }}
              >
                <form
                  id="sib-form"
                  method="POST"
                  action="https://8b8e18d7.sibforms.com/serve/MUIFAMv7FqB9JQm12aoadskvCx9VlK-XOFaC_mvqE1I0KT-KZ96Rk-_dCviKhBPMR6mQjGhywfN62MuMPM69Ikd8QedCTnnH9uGjAZBDIJcquL7kT4HCajyRlfqAAgXxHdIl6xWgpmHoJVtSbzITTVdEGLjgCEC9oxj-jns1vNOIYP8iMhHBJo6aiC8U038BRYr8cKL8fM_8gleFdw=="
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
                      <p>
                        <strong>Aggiorna i tuoi dati</strong>
                      </p>
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
                        <p>
                          Questi dati NON sono obbligatori. Puoi scegliere di inserirli per
                          ricevere comunicazioni più precise e sconti dedicati.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "8px 0" }}>
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
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
                            htmlFor="EMAIL"
                            data-required="*"
                          >
                            Email utilizzata durante l&apos;iscrizione
                          </label>
                          <div className="entry__field">
                            <input
                              className="input"
                              type="email"
                              id="EMAIL"
                              name="EMAIL"
                              autoComplete="email"
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
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
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
                            htmlFor="FIRSTNAME"
                          >
                            Come vuoi essere chiamato nelle nostre comunicazioni
                          </label>
                          <div className="entry__field">
                            <input
                              className="input"
                              maxLength={200}
                              type="text"
                              id="FIRSTNAME"
                              name="FIRSTNAME"
                              autoComplete="given-name"
                              placeholder="NOME"
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
                    <div className="sib-form-block" style={{ textAlign: "left" }}>
                      <button
                        className="sib-form-block__button sib-form-block__button-with-loader w-full"
                        style={{
                          fontSize: "16px",
                          fontWeight: "700",
                          fontFamily: "var(--font-inter), Helvetica, sans-serif",
                          color: "#FFFFFF",
                          background: "#3B95D9",
                          borderRadius: "0.75rem",
                          borderWidth: "0px",
                          padding: "0.75rem 1.5rem",
                          cursor: "pointer",
                        }}
                        form="sib-form"
                        type="submit"
                      >
                        Invia Dati Aggiornati
                      </button>
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
                  <input type="hidden" name="locale" value="it" />
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skip link */}
      <footer className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-primary/60 hover:text-text-primary/90 transition-colors text-sm"
        >
          Preferisci saltare?
          <span className="underline">Torna alla home</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </footer>
    </div>
  );
}
