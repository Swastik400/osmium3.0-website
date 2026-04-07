"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Search, Handshake, Rocket, Zap, CheckCircle, HeartHandshake } from "lucide-react";

const tabs = [
  {
    id: "plan",
    label: "Plan",
    title: "Plan",
    desc: "Every project begins with understanding. We listen, research, and map out a practical strategy. Together, we align on timelines, budgets, and goals.",
    items: [
      { icon: Search, title: "Research", desc: "Deep research and brainstorming help us understand your needs." },
      { icon: Handshake, title: "Best Services", desc: "Reliable service and transparent communication from day one." },
    ],
  },
  {
    id: "development",
    label: "Development",
    title: "Development",
    desc: "Our team brings ideas to life. From design to coding, we follow a structured approach that balances creativity with precision.",
    items: [
      { icon: Zap, title: "Agile Process", desc: "Flexible and adaptive to your needs." },
      { icon: CheckCircle, title: "Quality Focus", desc: "Every feature is tested for reliability." },
    ],
  },
  {
    id: "release",
    label: "Release",
    title: "Release",
    desc: "The final stage is all about delivery and impact. We launch with care, monitor performance, and provide ongoing support.",
    items: [
      { icon: Rocket, title: "Smooth Launch", desc: "A hassle-free transition from build to live." },
      { icon: HeartHandshake, title: "Ongoing Support", desc: "We stand by your side post-release." },
    ],
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="How We Power Your Vision"
            title={
              <>
                Simple,{" "}
                <em className="font-[var(--font-dm-serif)] italic">Secure</em>,
                Effective
              </>
            }
            description="At Navchetna, every project deserves a thoughtful start, a strong build, and a confident launch."
          />
        </ScrollReveal>

        {/* Tab toggle */}
        <ScrollReveal delay={100}>
          <div className="mt-10 flex justify-center">
            <div className="relative inline-flex items-center rounded-full border border-black/10 bg-white p-1">
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`relative z-10 rounded-full px-5 py-2 text-sm transition-colors ${
                    active === i
                      ? "bg-black text-white"
                      : "text-warm-600 hover:text-black"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={200}>
          <div className="mt-12 rounded-[2rem] border border-black/5 bg-white p-8 md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h3 className="font-[var(--font-dm-serif)] text-3xl tracking-tight md:text-4xl">
                  {current.title}
                </h3>
                <p className="mt-4 text-warm-600">{current.desc}</p>
                <ul className="mt-6 space-y-4">
                  {current.items.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black/5 bg-warm-50">
                        <item.icon className="h-4 w-4 text-warm-700" />
                      </span>
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="mt-0.5 text-sm text-warm-500">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Placeholder visual */}
              <div className="flex items-center justify-center">
                <div className="aspect-[4/3] w-full max-w-md rounded-2xl bg-warm-50 border border-black/5" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
