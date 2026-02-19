import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Promo XTB – Ottieni 1 Mese Gratis di Whale Academy | WhaleStreet",
  description:
    "Apri un conto XTB, deposita 400€ e ottieni 1 mese gratuito di Whale Academy. Formazione Crypto potenziata dall'AI.",
};

export default function PromoXTBLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
