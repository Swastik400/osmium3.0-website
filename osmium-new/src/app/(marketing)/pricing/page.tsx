"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check, X, Minus, Plus } from "lucide-react";

/* ── Types & Data ── */

const BILLING_OPTIONS = ["Monthly", "Annual"] as const;
type Billing = (typeof BILLING_OPTIONS)[number];

interface Plan {
  name: string;
  tagline: string;
  badge?: string;
  monthlyPrice: number;
  annualPrice: number;
  cta: string;
  ctaHref: string;
  features: string[];
  highlighted?: boolean;
  bg: string;
}

const plans: Plan[] = [
  {
    name: "Free",
    tagline: "For curious learners getting started",
    monthlyPrice: 0,
    annualPrice: 0,
    cta: "Register Free",
    ctaHref: "/contact",
    bg: "/download.webp",
    features: [
      "2 mock tests per month",
      "Basic personalization level",
      "Courses & skills access",
      "PDF resources included",
      "AI career guidance",
      "Community support",
    ],
  },
  {
    name: "Pro",
    tagline: "For serious students aiming higher",
    badge: "Most Popular",
    monthlyPrice: 499,
    annualPrice: 4990,
    cta: "Get Pro",
    ctaHref: "/contact",
    highlighted: true,
    bg: "/pro-bg.jpeg",
    features: [
      "15 mock tests per month",
      "High personalization level",
      "Full courses & skills access",
      "Complete PDF resources",
      "Advanced AI career guidance",
      "Advance personalized learning",
    ],
  },
  {
    name: "Premium",
    tagline: "For those who want everything",
    monthlyPrice: 1199,
    annualPrice: 11990,
    cta: "Go Premium",
    ctaHref: "/contact",
    bg: "/premium-bg.jpeg",
    features: [
      "30 mock tests per month",
      "Highest personalization level",
      "Premium courses & skills access",
      "Exclusive PDF resources",
      "Expert AI career guidance",
      "Fully tailored learning experience",
    ],
  },
];

const comparisonFeatures = [
  { name: "Mock tests per month", free: "2", pro: "15", premium: "30" },
  { name: "AI personalization", free: "Basic", pro: "Advanced", premium: "Highest" },
  { name: "Course access", free: true, pro: true, premium: true },
  { name: "PDF resources", free: true, pro: true, premium: true },
  { name: "AI career guidance", free: true, pro: true, premium: true },
  { name: "Personalized learning paths", free: false, pro: true, premium: true },
  { name: "Priority support", free: false, pro: true, premium: true },
  { name: "Detailed analytics", free: false, pro: true, premium: true },
  { name: "Exclusive content", free: false, pro: false, premium: true },
  { name: "1-on-1 mentorship access", free: false, pro: false, premium: true },
];

const faqs = [
  {
    q: "What is Osmium?",
    a: "Osmium is an AI-powered education and career guidance platform designed to help students excel in their exams and make informed career decisions through personalized learning paths and expert guidance.",
  },
  {
    q: "How does AI personalization work?",
    a: "Our AI analyzes your performance, learning patterns, and goals to create customized study plans, recommend relevant content, and provide targeted practice questions that adapt to your strengths and weaknesses.",
  },
  {
    q: "Can I switch plans anytime?",
    a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. All payments are processed securely through our trusted payment partners.",
  },
  {
    q: "Do you offer student discounts?",
    a: "Yes! We offer special pricing for students. Contact our support team with your student ID to learn about available discounts and educational offers.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely! You can cancel your subscription at any time. You'll continue to have access to premium features until the end of your billing period.",
  },
];

/* ── Page ── */

export default function PricingPage() {
  const [billing, setBilling] = useState<Billing>("Monthly");

  return (
    <>
      {/* ━━━ HERO ━━━ */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="type-sm text-brand font-semibold uppercase tracking-wider mb-4">
                Pricing
              </p>
              <h1
                className="type-6xl text-black text-balance"
                style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)" }}
              >
                Simple pricing, powerful learning
              </h1>
              <p className="mt-5 type-base text-warm-500 text-pretty">
                Start free. Upgrade when you&apos;re ready. Cancel anytime.
                Every plan includes our core AI features.
              </p>

              {/* Billing toggle */}
              <div className="mt-8 inline-flex items-center rounded-full ring-[0.5px] ring-inset ring-black/[0.075] bg-warm-50 p-1">
                {BILLING_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setBilling(option)}
                    className={`relative rounded-full px-6 py-2.5 type-sm font-medium transition-all duration-200 cursor-pointer ${
                      billing === option
                        ? "bg-white text-black shadow-[0_0_1px_rgba(0,0,0,0.4),0_4px_4px_rgba(0,0,0,0.04)]"
                        : "text-black/40 hover:text-black/60"
                    }`}
                  >
                    {option}
                  </button>
                ))}
             
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ PLAN CARDS ━━━ */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <PlanCard plan={plan} billing={billing} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FEATURE COMPARISON ━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="type-5xl text-black">Compare all features</h2>
              <p className="mt-3 type-sm text-warm-500">
                See exactly what you get with each plan
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-black/[0.06]">
                    <th className="text-left py-4 pr-4 type-sm font-medium text-warm-400 w-2/5">
                      Feature
                    </th>
                    <th className="text-center py-4 px-4 type-sm font-medium text-warm-400">
                      Free
                    </th>
                    <th className="text-center py-4 px-4">
                      <span className="type-sm font-semibold text-brand">Pro</span>
                    </th>
                    <th className="text-center py-4 pl-4 type-sm font-medium text-warm-400">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((f) => (
                    <tr key={f.name} className="border-b border-black/[0.04]">
                      <td className="py-4 pr-4 type-sm text-black">{f.name}</td>
                      <td className="py-4 px-4 text-center">
                        <CellValue value={f.free} />
                      </td>
                      <td className="py-4 px-4 text-center bg-brand/[0.02]">
                        <CellValue value={f.pro} highlight />
                      </td>
                      <td className="py-4 pl-4 text-center">
                        <CellValue value={f.premium} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
              {/* Left */}
              <div>
                <p className="type-sm text-warm-500 font-medium mb-4">FAQ</p>
                <h2 className="type-5xl text-black text-balance max-w-sm">
                  Frequently asked questions
                </h2>
                <p className="mt-4 type-sm text-warm-400 text-pretty max-w-sm">
                  Can&apos;t find what you&apos;re looking for? Reach out to our
                  support team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-6 type-sm font-medium text-brand hover:text-brand-dark transition-colors"
                >
                  Contact us
                  <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
                    <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Right */}
              <FAQAccordion />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-black text-center">
              <div className="absolute inset-0">
                <Image
                  src="/ref/qrihua4053-nvida-bg.jpeg"
                  alt=""
                  fill
                  className="object-cover opacity-30"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.075]" />

              <div className="relative z-10 px-6 sm:px-10 md:px-14 py-16 md:py-20 max-w-2xl mx-auto">
                <h2
                  className="type-5xl text-balance"
                  style={{ color: "#ffffff" }}
                >
                  Still not sure? Start free today.
                </h2>
                <p className="mt-5 type-base text-white/60 text-pretty">
                  No credit card required. Upgrade anytime. Join thousands of
                  students already learning smarter with Osmium.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black transition-all duration-300 active:scale-[0.98] hover:bg-warm-100 h-12 px-7 type-base font-medium"
                  >
                    Get started free
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 text-white transition-all duration-300 active:scale-[0.98] hover:bg-white/20 h-12 px-7 type-base font-medium ring-[0.5px] ring-inset ring-white/20"
                  >
                    Talk to sales
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* ── Plan Card ── */

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const price = billing === "Monthly" ? plan.monthlyPrice : plan.annualPrice;
  const period = billing === "Monthly" ? "/mo" : "/yr";

  return (
    <div
      className={`relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 ${
        plan.highlighted
          ? "ring-2 ring-brand shadow-[0_0_40px_-8px_rgba(125,72,53,0.2)] lg:scale-[1.03]"
          : "ring-[0.5px] ring-inset ring-black/[0.075]"
      }`}
    >
      {/* Card image header */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={plan.bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 p-6 flex flex-col justify-end h-full">
          <div className="flex items-center gap-2.5">
            <h3 className="type-3xl" style={{ color: "#ffffff" }}>{plan.name}</h3>
            {plan.badge && (
              <span className="type-2xs font-bold uppercase tracking-wider text-white bg-brand px-2.5 py-1 rounded-md">
                {plan.badge}
              </span>
            )}
          </div>
          <p className="type-2xs text-white/60 mt-1">{plan.tagline}</p>
        </div>
      </div>

      {/* Price + CTA + Features */}
      <div className="flex flex-col flex-1 bg-cream p-6">
        {/* Price */}
        <div className="flex items-baseline gap-1 mb-5">
          <span className="type-4xl text-black font-bold">
            {price === 0 ? "Free" : `₹${price}`}
          </span>
          {price > 0 && (
            <span className="type-xs text-warm-400">{period}</span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={plan.ctaHref}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full w-full h-11 type-sm font-medium transition-all duration-300 active:scale-[0.98] mb-6 ${
            plan.highlighted
              ? "bg-brand text-white hover:bg-brand-dark"
              : "bg-black text-white hover:bg-warm-800"
          }`}
          style={
            plan.highlighted
              ? { boxShadow: "0 0 20px -4px rgba(125,72,53,0.3)" }
              : undefined
          }
        >
          {plan.cta}
        </Link>

        {/* Features */}
        <ul className="flex-1 space-y-0">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 py-2.5">
              <Check className="h-4 w-4 text-brand flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <span className="type-xs text-warm-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Comparison cell ── */

function CellValue({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (typeof value === "string") {
    return (
      <span className={`type-sm font-medium ${highlight ? "text-brand" : "text-black"}`}>
        {value}
      </span>
    );
  }
  if (value) {
    return (
      <Check
        className={`h-4 w-4 mx-auto ${highlight ? "text-brand" : "text-warm-400"}`}
        strokeWidth={2.5}
      />
    );
  }
  return <X className="h-4 w-4 mx-auto text-warm-200" strokeWidth={2} />;
}

/* ── FAQ Accordion ── */

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-black/[0.06]">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex items-center justify-between w-full py-5 text-left gap-4 cursor-pointer"
          >
            <span className="type-base text-black font-medium">{faq.q}</span>
            <span className="flex-shrink-0 flex items-center justify-center size-7 rounded-full bg-black/[0.04] text-warm-500">
              {openIndex === i ? (
                <Minus className="h-3.5 w-3.5" />
              ) : (
                <Plus className="h-3.5 w-3.5" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              openIndex === i ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="type-sm text-warm-500 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
