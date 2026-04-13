import Link from "next/link";

const productLinks = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about#our-story", label: "Our Story" },
  { href: "https://navchetna.tech/", label: "Navchetna Technology", external: true },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/navchetna/", label: "LinkedIn" },
  { href: "https://www.instagram.com/osmium_ai/", label: "Instagram" },
];

const legalLinks = [
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="bg-warm-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:grid-cols-4 md:py-20">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ref/Group 180.svg"
              alt="Osmium"
              className="h-8"
            />
            <p className="mt-5 type-sm text-white/40 leading-relaxed">
              Made in India, For India,
              <br />
              By Students of India
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {l.label === "LinkedIn" ? (
                    <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169H6.29c.032.678 0 7.225 0 7.225h2.36z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.203.166 1.485.276.374.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.276 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.036.78-.166 1.203-.276 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="type-2xs font-semibold uppercase tracking-wider text-white/30 mb-4">
              Product
            </p>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="type-sm text-white/60 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="type-2xs font-semibold uppercase tracking-wider text-white/30 mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="type-sm text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="type-sm text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="type-2xs font-semibold uppercase tracking-wider text-white/30 mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="type-sm text-white/60 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 py-6 type-2xs text-white/30">
          <span>© 2025 NINELLMS SOLUTIONS LLP. All rights reserved.</span>
          <a
            href="https://nineone152.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white/60"
          >
            Co-Brand with NINEONE15²
          </a>
        </div>
      </div>
    </footer>
  );
}
