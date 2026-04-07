"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/career", label: "Career" },
  { href: "/news", label: "News" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-eggshell/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[var(--font-dm-serif)] text-xl tracking-tight">
            NAVCHETNA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-warm-700 transition-colors hover:text-black"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-warm-900 sm:inline-flex"
          >
            <Rocket className="h-3.5 w-3.5" />
            Contact Us
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-eggshell px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-warm-700 transition-colors hover:text-black"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white"
            >
              <Rocket className="h-3.5 w-3.5" />
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
