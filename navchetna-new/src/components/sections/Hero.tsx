"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const tabs = [
  {
    id: "products",
    label: "Products",
    color: "#E8D5C4",
    icon: Sparkles,
    heading: "AI-Powered Products",
    desc: "From Osmium for education to Natraj for AR anatomy — our products transform how people learn, work, and grow.",
    features: ["Osmium", "Natraj", "Aegis Auth", "Kriya", "LM Lens", "NSL"],
  },
  {
    id: "services",
    label: "Services",
    color: "#D5E0E8",
    icon: Zap,
    heading: "End-to-End Development",
    desc: "Cross-platform apps, AI automation, branding, and cloud — we build scalable solutions from concept to launch.",
    features: ["App Development", "AI & ML", "UI/UX Design", "Cloud & IoT", "Marketing", "Branding"],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    color: "#E0D5E8",
    icon: ShieldCheck,
    heading: "Enterprise Solutions",
    desc: "Custom AI workflows, organizational tools, and strategic consulting for businesses ready to scale.",
    features: ["Custom LLMs", "Workflow Automation", "Analytics", "Consulting", "Support", "Training"],
  },
];

const logos = [
  "AWS", "Sarvam", "SSIP", "NexTech", "TantriX", "Plenora",
  "NineOne152", "Aegis Auth", "Plaur", "Kriya", "LM Lens", "NSL",
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <>
      {/* ── Hero heading ── */}
      <section className="pt-28 sm:pt-36 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
            {/* Left — heading + CTAs */}
            <div className="contents lg:block lg:col-span-6">
              <h1
                className="block max-w-lg text-balance text-black lg:max-w-none"
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontWeight: 300,
                  fontSize: "clamp(3rem, 6vw, 6.25rem)",
                  lineHeight: "95%",
                  letterSpacing: "-0.03em",
                }}
              >
                Technology with
                <span className="table"> Awareness, Built for Everyone</span>
              </h1>

              <div className="mt-8 order-last lg:order-none">
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-900"
                    style={{
                      height: "3rem",
                      paddingLeft: "1.25rem",
                      paddingRight: "1.25rem",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      lineHeight: "140%",
                    }}
                  >
                    Get started
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50"
                    style={{
                      height: "3rem",
                      paddingLeft: "1.25rem",
                      paddingRight: "1.25rem",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      lineHeight: "140%",
                    }}
                  >
                    Explore products
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — description pushed to bottom */}
            <div className="mt-8 flex flex-col lg:col-span-6 lg:mt-0 lg:max-w-none max-w-2xl">
              <p
                className="block mt-auto text-balance lg:text-pretty"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "1.0625rem",
                  lineHeight: "140%",
                  color: "#000",
                }}
              >
                Powering the best enterprises, creators, and developers. From
                Osmium for education, Natraj for immersive learning, to
                enterprise-grade AI solutions and creative services.
              </p>
              <div className="h-0 flex-auto" style={{ maxHeight: "5rem" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabbed product showcase card ── */}
      <section className="mt-10 sm:mt-0">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className="relative isolate overflow-hidden rounded-3xl transition-colors duration-500"
            style={{ backgroundColor: current.color }}
          >
            <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />

            {/* Tabs */}
            <div className="relative z-10 px-4 pt-4 sm:px-6 sm:pt-6">
              <div className="flex items-center gap-1.5">
                <div className="inline-flex rounded-full bg-[inherit] ring-[0.5px] ring-inset ring-black/[0.075]">
                  {tabs.map((tab, i) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(i)}
                      className={`relative isolate flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-medium transition-all duration-200 sm:px-5 sm:text-sm ${
                        activeTab === i
                          ? "bg-white text-black shadow-sm"
                          : "text-black/60 hover:text-black/80"
                      }`}
                    >
                      <span
                        className="hidden h-3 w-3 rounded-full sm:block"
                        style={{
                          backgroundColor: activeTab === i ? current.color : "transparent",
                        }}
                      />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Card content */}
            <div className="relative z-10 grid grid-cols-1 gap-6 px-4 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <current.icon className="h-4 w-4 text-black/50" />
                    <span
                      className="uppercase tracking-wider text-black/50"
                      style={{
                        fontFamily: "var(--font-dm-serif), Georgia, serif",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        lineHeight: "110%",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {current.label}
                    </span>
                  </div>
                  <h2
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      fontWeight: 300,
                      fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                      lineHeight: "120%",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {current.heading}
                  </h2>
                  <p
                    className="mt-3 max-w-md text-black/60"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontWeight: 400,
                      fontSize: "1rem",
                      lineHeight: "140%",
                    }}
                  >
                    {current.desc}
                  </p>
                </div>
                <Link
                  href={`/${current.id === "products" ? "products" : current.id === "services" ? "services" : "contact"}`}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-black/80 transition-colors hover:text-black"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                  }}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="flex flex-col justify-center">
                <div className="rounded-2xl bg-white/40 p-5 ring-[0.5px] ring-inset ring-black/[0.05] backdrop-blur-sm sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    {current.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center rounded-full bg-white/80 px-3 py-1.5 shadow-sm ring-[0.5px] ring-inset ring-black/[0.05]"
                        style={{
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 400,
                          color: "rgba(0,0,0,0.7)",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 aspect-[16/7] w-full rounded-xl bg-white/50 ring-[0.5px] ring-inset ring-black/[0.05]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted by ── */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative border-l border-r border-black/[0.06]">
            {/* Divider with dots */}
            <div className="relative">
              <div className="absolute left-0 top-0 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-eggshell">
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
              <div className="absolute right-0 top-0 z-20 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-eggshell">
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
              <div className="h-px w-full bg-black/[0.06]" />
            </div>

            <div className="py-16 md:py-20">
              {/* Header row — same 12-col grid */}
              <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12 px-4 sm:px-6">
                <div className="lg:col-span-6">
                  <h2
                    style={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      fontWeight: 300,
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      lineHeight: "105%",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Trusted by leading developers and enterprises
                  </h2>
                </div>
                <div className="mt-8 lg:mt-0 lg:col-span-6 lg:text-right relative">
                  <div className="lg:absolute lg:right-0" style={{ top: "max(-1.14rem, calc(100% - 3rem))" }}>
                    <Link
                      href="/news"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50"
                      style={{
                        height: "3rem",
                        paddingLeft: "1.25rem",
                        paddingRight: "1.25rem",
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontSize: "1rem",
                        fontWeight: 400,
                      }}
                    >
                      Read all stories
                    </Link>
                  </div>
                </div>
              </div>

              {/* Logo grid */}
              <div className="mt-10 px-4 sm:px-6">
                <ul className="mx-auto grid w-fit grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-10">
                  {logos.map((name) => (
                    <li key={name} className="flex items-center justify-center">
                      <span
                        className="transition-colors duration-200 hover:text-black/70"
                        style={{
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "rgba(0,0,0,0.3)",
                        }}
                      >
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
