import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-border bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image
              src="/images/WhaleStreet_Logo_Colored.png"
              alt="WhaleStreet Logo"
              width={140}
              height={46}
              className="h-10 w-auto dark:hidden"
            />
            <Image
              src="/images/WhaleStreet_Logo_White.png"
              alt="WhaleStreet Logo"
              width={140}
              height={46}
              className="h-10 w-auto hidden dark:block"
            />
          </Link>

          {/* Disclaimer legale */}
          <p className="text-sm text-text-primary/60 dark:text-text-dark/60 max-w-2xl leading-relaxed">
            WhaleStreet offre educazione operativa e tutoring. Non forniamo consulenza
            finanziaria abusiva n&eacute; consigli di investimento personalizzati su singoli strumenti.
          </p>

          {/* Link legali */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-text-primary/50 dark:text-text-dark/50 hover:text-primary dark:hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-text-primary/30 dark:text-text-dark/30">|</span>
            <Link
              href="/terms"
              className="text-text-primary/50 dark:text-text-dark/50 hover:text-primary dark:hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-text-primary/40 dark:text-text-dark/40">
            &copy; {new Date().getFullYear()} WhaleStreet. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
