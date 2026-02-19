"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-light dark:bg-background-dark px-4">
      <div className="text-center">
        <h1 className="text-2xl font-heading font-bold text-text-primary dark:text-text-dark mb-4">
          Qualcosa è andato storto
        </h1>
        <p className="text-text-primary/70 dark:text-text-dark/70 mb-6">
          {error.message || "Si è verificato un errore imprevisto"}
        </p>
        <button
          onClick={reset}
          className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
        >
          Riprova
        </button>
      </div>
    </div>
  );
}
