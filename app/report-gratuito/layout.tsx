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
  title: "Report Gratuito – Whale Watch | WhaleStreet",
  description:
    "Scarica il report gratuito Whale Watch con analisi complete su Bitcoin e Crypto: tecnica, fondamentale e on-chain.",
};

export default function ReportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
        <script src="https://www.google.com/recaptcha/api.js?hl=en" async defer></script>
      </head>
      <body>
        <main>{children}</main>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
              window.LOCALE = 'en';
              window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Le informazioni fornite non sono valide. Si prega di rivedere il formato del campo e riprovare.";
              window.REQUIRED_ERROR_MESSAGE = "Questo campo non può essere lasciato vuoto. ";
              window.GENERIC_INVALID_MESSAGE = "Le informazioni fornite non sono valide. Si prega di rivedere il formato del campo e riprovare.";
              window.translation = { common: { selectedList: '{quantity} list selected', selectedLists: '{quantity} lists selected', selectedOption: '{quantity} selected', selectedOptions: '{quantity} selected' } };
              var AUTOHIDE = Boolean(1);
            `,
          }}
        />
        <script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
      </body>
    </html>
  );
}
