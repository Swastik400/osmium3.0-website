import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Team() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-black/5 bg-white">
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center p-8 md:p-14">
                <h2 className="type-4xl text-black text-balance">
                  Meet the Team Behind Osmium
                </h2>
                <p className="mt-4 type-base text-warm-500">
                  Osmium is powered by a passionate team of innovators dedicated
                  to transforming education through AI. We believe in making
                  quality learning accessible to every student across India.
                </p>
                <a
                  href="https://navchetna.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-warm-950 px-5 py-3 type-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 3 3 9-3 9 19-9Z" /></svg>
                  Navchetna Technology
                </a>
              </div>
              <div className="relative flex items-center justify-center bg-cream p-10 overflow-hidden">
                <div className="relative w-full max-w-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/team.jpeg"
                    alt="Osmium Team"
                    className="w-full rounded-xl object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20 shadow-[inset_0_0_30px_rgba(255,255,255,0.3)] backdrop-blur-[0.5px] [mask-image:linear-gradient(to_center,black,transparent_40%)]" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 60%, black 100%)' }} />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
