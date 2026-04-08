"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");

      if (pathname === "/") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        router.push("/");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 500);
      }
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-[10000] w-full">
      {/* Top fade gradient */}
      <div
        className="absolute top-0 right-0 left-0 h-8 lg:h-10 pointer-events-none"
        style={{
          background: "linear-gradient(rgb(253 252 252) 40%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      />

      {/* Floating container */}
      <div className="relative mx-auto w-full max-w-[1400px] px-3 pt-2.5 lg:px-8 lg:pt-3">
        <div
          className="rounded-[34px] overflow-hidden"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.55)",
            border: "1px solid rgba(220, 220, 220, 0.4)",
            backdropFilter: "blur(24px) saturate(1.3) brightness(1.04)",
            WebkitBackdropFilter: "blur(24px) saturate(1.3) brightness(1.04)",
            boxShadow: "rgba(0, 0, 0, 0.02) 0px 2px 24px, rgba(0, 0, 0, 0.04) 0px 1px 3px inset",
          }}
        >
          {/* Desktop nav */}
          <nav className="hidden lg:flex justify-between items-center py-2.5 pr-2.5 pl-9 w-full">
            <div className="flex flex-1 justify-between items-center mx-auto">
              {/* Logo */}
              <Link href="/" className="flex flex-1 items-center gap-2 transition-opacity hover:opacity-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Osmium" className="w-auto h-5" />
              </Link>

              {/* Center links */}
              <div className="hidden lg:flex flex-2 justify-center items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-black/5"
                  >
                    <span className="font-medium text-xs uppercase tracking-[1px] text-black">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Right CTA */}
              <div className="hidden md:flex flex-1 justify-end items-center gap-3">
                <Link
                  href="/get-started"
                  className="group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#131313] text-white overflow-hidden transition-all duration-500 active:scale-95 whitespace-nowrap"
                  style={{ boxShadow: "inset 0 0 12px rgba(255,255,255,0.2), 0px 0px 2px 0 rgba(0,0,0,0.1)" }}
                >
                  <span className="z-10 relative">Get Started</span>
                </Link>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-white text-black overflow-hidden transition-all duration-500 active:scale-95 whitespace-nowrap"
                  style={{ boxShadow: "inset 0 0 12px rgba(0,0,0,0.06), 0px 0px 1px rgba(0,0,0,0.2)" }}
                >
                  <span className="z-10 relative">Talk to Sales</span>
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile nav */}
          <div className="lg:hidden flex flex-col">
            <div className="flex justify-between items-center px-6 py-2.5">
              <Link href="/" className="relative flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Osmium" className="w-auto h-4" />
              </Link>

              <button
                className="flex flex-col justify-center items-center space-y-[3px] focus:outline-none w-7 h-7"
                aria-label="Toggle menu"
                onClick={() => setOpen(!open)}
              >
                <span className={`w-[18px] h-[1.5px] bg-black transition-all duration-300 ease-out origin-center ${open ? "rotate-45 translate-y-[4.5px]" : ""}`} />
                <span className={`w-[18px] h-[1.5px] bg-black transition-all duration-300 ease-out ${open ? "opacity-0" : ""}`} />
                <span className={`w-[18px] h-[1.5px] bg-black transition-all duration-300 ease-out origin-center ${open ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
              </button>
            </div>

            {/* Mobile dropdown */}
            <div
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{ maxHeight: open ? "400px" : "0px" }}
            >
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { handleNavClick(e, link.href); setOpen(false); }}
                      className="block py-2.5 px-3 text-xs uppercase tracking-[1px] font-medium text-black rounded-lg hover:bg-black/[0.04] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-black/[0.06] flex gap-2">
                  <Link
                    href="/get-started"
                    onClick={() => setOpen(false)}
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-[#131313] text-white px-5 py-2.5 text-sm font-medium active:scale-95 transition-transform"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium active:scale-95 transition-transform"
                    style={{ boxShadow: "inset 0 0 12px rgba(0,0,0,0.06), 0px 0px 1px rgba(0,0,0,0.2)" }}
                  >
                    Talk to Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
