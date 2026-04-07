import Link from "next/link";
import { Brain, Zap, TrendingUp, ShieldCheck, Eye, Network, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const products = [
  {
    name: "Osmium",
    tag: "Deep Learning",
    icon: Brain,
    color: "bg-amber-50",
    desc: "AI-powered education & career guidance platform for Indian students.",
  },
  {
    name: "Natraj",
    tag: "AI + AR",
    icon: Zap,
    color: "bg-blue-50",
    desc: "AR/AI-based anatomy learning with realistic 3D models.",
  },
  {
    name: "Aegis Auth",
    tag: "Agentic AI",
    icon: TrendingUp,
    color: "bg-green-50",
    desc: "Intelligent authentication and security platform.",
  },
  {
    name: "Kriya",
    tag: "Organizational AI",
    icon: ShieldCheck,
    color: "bg-purple-50",
    desc: "AI-powered organizational management and workflow automation.",
  },
  {
    name: "LM Lens",
    tag: "Vision AI",
    icon: Eye,
    color: "bg-orange-50",
    desc: "Computer vision and visual intelligence platform.",
  },
  {
    name: "NSL",
    tag: "Neural Systems",
    icon: Network,
    color: "bg-cyan-50",
    desc: "Neural system architecture for distributed computing.",
  },
];

export function Products() {
  return (
    <section className="bg-warm-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left copy */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-28">
              <span className="text-sm text-warm-500">
                From learning to living, innovation that awakens possibilities.
              </span>
              <h2 className="mt-2 font-[var(--font-dm-serif)] text-4xl leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Powered by Conscious Intelligence.
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium">
                    Experience the future today
                  </p>
                  <p className="mt-1 text-sm text-warm-500">
                    Discover how conscious intelligence and advanced technology
                    unlock growth, creativity, and transformation.
                  </p>
                  <Link
                    href="/products"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-warm-900"
                  >
                    Explore all products
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <p className="text-sm leading-relaxed text-warm-600 sm:text-right">
                  Our breakthrough AI powers adaptive solutions that grow with
                  learners, creators, communities, and enterprises.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right product grid */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 80}>
                <div
                  className={`group relative flex h-48 flex-col justify-between overflow-hidden rounded-2xl border border-black/5 ${p.color} p-4 transition-shadow hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.06)]`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm">
                      <p.icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="rounded-md bg-white/60 px-2 py-1 text-[11px] text-warm-600 backdrop-blur-sm">
                      {p.tag}
                    </span>
                  </div>
                  <div>
                    <p className="font-[var(--font-dm-serif)] text-lg tracking-tight">
                      {p.name}
                    </p>
                    <p className="mt-0.5 text-xs text-warm-600 opacity-0 transition-opacity group-hover:opacity-100">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
