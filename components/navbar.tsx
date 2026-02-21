"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
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

          {/* CTA + Theme Toggle */}
          <div className="flex items-center space-x-3">
            <Button variant="accent" size="sm" asChild>
              <Link href="#applica">Applica ora</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
