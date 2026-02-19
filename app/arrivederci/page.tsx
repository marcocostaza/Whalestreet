"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Waves, Mail, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ArrivederciPage() {
  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full mb-8"
        >
          <Link href="/" className="flex justify-center mb-8">
            <Image
              src="/images/WhaleStreet_Logo_Colored.png"
              alt="WhaleStreet – Torna alla home"
              width={200}
              height={125}
              className="w-full max-w-[200px] object-contain"
            />
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Waves className="w-4 h-4 text-accent" />
            <span className="text-sm text-text-primary/90">Ci vediamo in mare</span>
          </div>
        </motion.div>

        {/* Titolo */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-text-primary mb-6 leading-tight"
        >
          Arrivederci, navigatore
        </motion.h1>

        {/* Messaggio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-2 border-primary/20">
            <CardContent className="pt-6 text-center">
              <p className="text-text-primary/90 mb-4">
                Hai lasciato la nostra newsletter. Nessun problema: ogni viaggio ha le sue tappe e
                rispettiamo la tua.
              </p>
              <p className="text-text-primary/90 mb-4">
                Se un giorno vorrai rimetterti in rotta con noi, saremo qui. Il faro WhaleStreet
                resta acceso.
              </p>
              <p className="text-text-primary/80 text-sm mb-4">
                Qualcosa non è andato come volevi, o ti sei disiscritto per errore? Scrivici pure:
                siamo a disposizione.
              </p>
              <p className="mt-4">
                <a
                  href="mailto:info@whalestreet.it"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium underline underline-offset-2"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  info@whalestreet.it
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Link home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-primary/70 hover:text-text-primary transition-colors text-sm"
          >
            <Home className="w-4 h-4 shrink-0" />
            Torna alla home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
