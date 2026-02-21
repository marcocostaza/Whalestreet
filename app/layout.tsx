import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "WhaleStreet – Formazione Premium su Bitcoin e Asset Digitali",
  description:
    "Formazione e tutoring operativo 1-to-1 su Bitcoin e Asset Digitali per professionisti e aziende. Impara a proteggere il tuo patrimonio, operare in autonomia e comprendere i mercati crypto.",
  keywords: [
    "formazione bitcoin",
    "tutoring crypto",
    "bitcoin italia",
    "self-custody",
    "asset digitali",
    "corporate treasury bitcoin",
    "formazione crypto professionale",
    "bitcoin per aziende",
  ],
  authors: [{ name: "WhaleStreet" }],
  openGraph: {
    title: "WhaleStreet – Formazione Premium su Bitcoin e Asset Digitali",
    description:
      "Formazione e tutoring operativo 1-to-1 su Bitcoin e Asset Digitali per professionisti e aziende.",
    type: "website",
    locale: "it_IT",
    url: "https://whalestreet.website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const theme = savedTheme || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
        <script src="https://www.google.com/recaptcha/api.js?hl=en" async defer></script>
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
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
