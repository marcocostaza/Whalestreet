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
  title: "WhaleStreet – Protezione e Rendimento per Capitali Importanti",
  description:
    "Boutique di consulenza sartoriale 1-to-1 e tutoring operativo su Bitcoin e Asset Digitali per HNWI e Tesorerie Aziendali. Oltre il sistema bancario.",
  keywords: [
    "bitcoin",
    "asset allocation",
    "HNWI",
    "consulenza bitcoin",
    "corporate treasury",
    "self-custody",
    "protezione capitale",
    "tutoring bitcoin",
    "high net worth",
  ],
  authors: [{ name: "WhaleStreet" }],
  openGraph: {
    title: "WhaleStreet – Protezione e Rendimento per Capitali Importanti",
    description:
      "Boutique di consulenza sartoriale 1-to-1 su Bitcoin e Asset Digitali per HNWI e Tesorerie Aziendali.",
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
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
