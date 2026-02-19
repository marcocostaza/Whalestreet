"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background-light/95 dark:bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background-light/80 dark:supports-[backdrop-filter]:bg-background-dark/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/WhaleStreet_Logo_Colored.png"
              alt="WhaleStreet Logo"
              width={120}
              height={40}
              className="h-8 w-auto dark:hidden"
              priority
            />
            <Image
              src="/images/WhaleStreet_Logo_White.png"
              alt="WhaleStreet Logo"
              width={120}
              height={40}
              className="h-8 w-auto hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/"
              className="text-sm font-medium text-text-primary dark:text-text-dark transition-colors hover:text-primary dark:hover:text-accent"
            >
              Home
            </Link>
            <Link
              href="/academy"
              className="text-sm font-medium text-text-primary dark:text-text-dark transition-colors hover:text-primary dark:hover:text-accent"
            >
              Academy
            </Link>
            <Link
              href="/roadmap"
              className="text-sm font-medium text-text-primary dark:text-text-dark transition-colors hover:text-primary dark:hover:text-accent"
            >
              Roadmap
            </Link>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/report-gratuito">Report Gratuito</Link>
              </Button>
              <Button variant="accent" size="sm" asChild>
                <Link href="/promo-xtb">Promo XTB</Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-text-primary dark:text-text-dark" />
              ) : (
                <Menu className="h-6 w-6 text-text-primary dark:text-text-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-border px-2 pb-3 pt-2">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-text-primary dark:text-text-dark hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/academy"
                className="block rounded-md px-3 py-2 text-base font-medium text-text-primary dark:text-text-dark hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Academy
              </Link>
              <Link
                href="/roadmap"
                className="block rounded-md px-3 py-2 text-base font-medium text-text-primary dark:text-text-dark hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Roadmap
              </Link>
              <div className="space-y-2 pt-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/report-gratuito" onClick={() => setIsOpen(false)}>
                    Report Gratuito
                  </Link>
                </Button>
                <Button variant="accent" size="sm" className="w-full" asChild>
                  <Link href="/promo-xtb" onClick={() => setIsOpen(false)}>
                    Promo XTB
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
