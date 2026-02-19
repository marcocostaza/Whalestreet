"use client";

import { motion } from "framer-motion";
import { FileText, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ReportGratuitoPage() {
  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
              <FileText className="w-10 h-10 text-accent" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 text-text-primary"
          >
            Report Gratuito: Whale Watch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-primary/70 mb-8 max-w-2xl mx-auto"
          >
            Ricevi analisi complete su Bitcoin e Crypto: tecnica, fondamentale e on-chain. Tutto
            quello che ti serve per muoverti nel mercato nelle prossime settimane.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              "Analisi Tecnica",
              "Analisi Fondamentale",
              "Analisi On-Chain",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-sm font-semibold text-text-primary">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-accent/30">
            <CardContent className="pt-8">
              {/* Mock-up Report */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border-2 border-primary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <FileText className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-text-primary/50 font-semibold">Report Whale Watch</p>
                    <p className="text-sm text-text-primary/40 mt-2">
                      Anteprima visiva del report
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Brevo Form */}
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
                          fontSize: "24px",
                          textAlign: "center",
                          fontWeight: "700",
                          fontFamily: "var(--font-inter), Helvetica, sans-serif",
                          color: "#3C4858",
                          background: "transparent",
                          marginBottom: "1rem",
                        }}
                      >
                        <p>Scarica il Report Gratuito</p>
                      </div>
                    </div>
                    <div style={{ padding: "8px 0" }}>
                      <div className="sib-input sib-form-block">
                        <div className="form__entry entry_block">
                          <div className="form__label-row">
                            <div className="entry__field">
                              <input
                                className="input"
                                type="email"
                                id="EMAIL"
                                name="EMAIL"
                                autoComplete="email"
                                placeholder="La tua email"
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
                                  Accetto l&apos;informativa sulla privacy
                                </span>
                              </label>
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
                            textAlign: "center",
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
                          <Download className="inline-block w-5 h-5 mr-2" />
                          Scarica il Report Gratuito
                        </button>
                      </div>
                    </div>
                    <div style={{ padding: "8px 0" }}>
                      <div className="sib-form__declaration" style={{ direction: "ltr" }}>
                        <div
                          style={{
                            fontSize: "12px",
                            textAlign: "center",
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
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
