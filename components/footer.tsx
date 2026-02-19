import Link from "next/link";
import { Youtube, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-heading font-bold text-primary mb-4">
              WhaleStreet
            </h3>
            <p className="text-sm text-text-primary/70">
              Il tuo faro nella navigazione verso l&apos;indipendenza finanziaria
              attraverso formazione avanzata potenziata dall&apos;Intelligenza
              Artificiale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-text-primary mb-4">
              Navigazione
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/academy"
                  className="text-sm text-text-primary/70 hover:text-primary transition-colors"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-sm text-text-primary/70 hover:text-primary transition-colors"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="/report-gratuito"
                  className="text-sm text-text-primary/70 hover:text-primary transition-colors"
                >
                  Report Gratuito
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-text-primary mb-4">
              Seguici
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@WhaleStreetAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary/70 hover:text-accent transition-colors"
                aria-label="YouTube WhaleStreet Academy"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/whalestreet.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary/70 hover:text-accent transition-colors"
                aria-label="Instagram WhaleStreet Academy"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/whalestreet_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary/70 hover:text-accent transition-colors"
                aria-label="Telegram WhaleStreet"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-text-primary/50 text-center">
            Note legali e disclaimer: i contenuti sono a scopo informativo.
            Nessuna consulenza finanziaria. Investi con consapevolezza.
          </p>
        </div>
      </div>
    </footer>
  );
}
