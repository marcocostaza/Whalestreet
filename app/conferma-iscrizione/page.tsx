"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ConfermaIscrizionePage() {
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
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm text-text-primary/90">Controlla la tua email</span>
          </div>
        </motion.div>

        {/* Titolo e messaggio */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-text-primary mb-6 leading-tight"
        >
          Conferma la tua iscrizione
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-2 border-primary/20">
            <CardContent className="pt-6 text-center">
              <p className="text-text-primary/90 mb-4">
                Dobbiamo confermare il tuo indirizzo email per completare il processo di iscrizione.
              </p>
              <p className="text-text-primary/90 mb-4">
                Clicca sul link presente nell&apos;e-mail che ti abbiamo appena inviato.
              </p>
              <p className="text-text-primary/90 font-medium">
                Non ti iscriverai se non fai clic sul link di conferma.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Suggerimenti */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 space-y-6 flex flex-col items-center"
        >
          <p className="text-sm text-text-primary/70 text-center">
            Non hai ricevuto l&apos;email? Controlla la cartella <strong>Spam</strong> o{" "}
            <strong>Promozioni</strong>.
          </p>
          <p className="text-sm text-text-primary/60 text-center">
            Hai sbagliato indirizzo?
            <Link
              href="/#newsletter"
              className="inline-flex items-center justify-center gap-1.5 text-accent hover:text-accent/80 underline underline-offset-2 font-medium mt-2 ml-1"
            >
              Iscriviti di nuovo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </motion.div>

        {/* Link home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-primary/70 hover:text-text-primary transition-colors text-sm"
          >
            Torna alla home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
