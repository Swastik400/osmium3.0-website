import Link from "next/link";
import {
  Smartphone,
  Brain,
  Star,
  Megaphone,
  Palette,
  FileText,
  Video,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const pillars = [
  {
    title: "Product Development",
    desc: "Cross-platform design & development from start to finish. Android, iOS, Web, Desktop, and Game development.",
    icon: Smartphone,
    tags: ["Scalable", "Adaptive"],
  },
  {
    title: "AI & Automation",
    desc: "AI-driven automation, recommendation engines, custom LLMs — combined with engaging UI/UX and creative branding.",
    icon: Brain,
    tags: ["Optimized", "Intelligent"],
    highlight: true,
  },
  {
    title: "Strategy & Management",
    desc: "From project management and marketing to research, cloud, and IoT — we help you scale with confidence.",
    icon: Star,
    tags: ["Reliable", "Growth-focused"],
  },
];

const capabilities = [
  { icon: Megaphone, title: "Marketing & Outreach", desc: "Digital, print, & social reach strategies." },
  { icon: Palette, title: "Design & Branding", desc: "Impactful logos and visuals that build identity." },
  { icon: FileText, title: "Research & Documentation", desc: "Structured insights & technical writing." },
  { icon: Video, title: "Content Creation", desc: "Video, writing, and editing for growth." },
];

export function Platforms() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="How We Transform Your Business"
            title={
              <>
                Our Proven &{" "}
                <em className="font-[var(--font-dm-serif)] italic">
                  Intelligent
                </em>{" "}
                Approach
              </>
            }
            description="From analysis to implementation — everything you need to automate, optimize, and scale your operations."
          />
        </ScrollReveal>

        {/* Three pillars */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                  p.highlight
                    ? "border-black/10 bg-warm-50 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)]"
                    : "border-black/5 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <p.icon className="h-4 w-4 text-warm-700" />
                  <span className="text-sm text-warm-600">{p.title}</span>
                </div>
                <p className="mt-3 font-[var(--font-dm-serif)] text-xl tracking-tight">
                  {p.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-warm-600">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md border border-black/5 bg-white px-2 py-1 text-xs text-warm-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Capabilities row */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <div className="rounded-xl border border-black/5 bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/5 bg-warm-50">
                    <c.icon className="h-3.5 w-3.5 text-warm-700" />
                  </span>
                  <h4 className="text-sm font-medium">{c.title}</h4>
                </div>
                <p className="mt-2 text-sm text-warm-500">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Learn more link */}
        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-warm-700 transition-colors hover:text-black"
            >
              Learn more about our services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
