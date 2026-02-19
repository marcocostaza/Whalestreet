import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-light dark:bg-background-dark px-4">
      <div className="text-center">
        <h1 className="text-4xl font-heading font-bold text-text-primary dark:text-text-dark mb-4">
          404
        </h1>
        <h2 className="text-2xl font-heading font-semibold text-text-primary dark:text-text-dark mb-4">
          Pagina non trovata
        </h2>
        <p className="text-text-primary/70 dark:text-text-dark/70 mb-8">
          La pagina che stai cercando non esiste.
        </p>
        <Button asChild>
          <Link href="/">Torna alla Home</Link>
        </Button>
      </div>
    </div>
  );
}
