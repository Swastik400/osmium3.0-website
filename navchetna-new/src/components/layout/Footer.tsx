import Link from "next/link";
import { ExternalLink, Globe, Code, Heart } from "lucide-react";

const productLinks = [
  { href: "/products", label: "All Products" },
  { href: "#", label: "Osmium" },
  { href: "#", label: "Natraj" },
  { href: "#", label: "Aegis Auth" },
  { href: "#", label: "Kriya" },
  { href: "#", label: "LM Lens" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/career", label: "Careers" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Product Development" },
  { href: "/services", label: "AI & Automation" },
  { href: "/services", label: "Design & Branding" },
  { href: "/services", label: "Strategy & Management" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

const socials = [
  { href: "#", icon: ExternalLink, label: "LinkedIn" },
  { href: "#", icon: Globe, label: "Twitter" },
  { href: "#", icon: Code, label: "GitHub" },
  { href: "#", icon: Heart, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-eggshell">
      {/* CTA band */}
      <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <h2 className="font-[var(--font-dm-serif)] text-3xl tracking-tight sm:text-4xl md:text-5xl">
          Ready to transform your vision?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-warm-600">
          Book a consultation and discover how conscious innovation can
          revolutionize your workflows.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-warm-900"
          >
            Talk to us
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition-colors hover:bg-warm-50"
          >
            Explore products
          </Link>
        </div>
      </div>

      {/* Links grid */}
      <div className="border-t border-black/5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 sm:px-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <span className="font-[var(--font-dm-serif)] text-lg tracking-tight">
              NAVCHETNA
            </span>
            <p className="mt-3 max-w-xs text-sm text-warm-600">
              Technology with Awareness, Built for Everyone.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-warm-600 transition-colors hover:bg-warm-50 hover:text-black"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Products" links={productLinks} />
          <FooterCol title="Services" links={serviceLinks} />
          <FooterCol title="Company" links={companyLinks} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 text-xs text-warm-500 sm:px-8">
          <span>© 2025 NINELLMS SOLUTIONS LLP. All rights reserved.</span>
          <div className="flex gap-4">
            {legalLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-black">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-400">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-warm-600 transition-colors hover:text-black"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
