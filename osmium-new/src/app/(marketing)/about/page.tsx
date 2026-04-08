"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Crosshair, GlobeHemisphereWest, Brain, Flag, ChatCircleDots, Flame, LinkedinLogo } from "@phosphor-icons/react";

/* ── Data ── */

const team = [
  {
    name: "Ayushmaan Soni",
    role: "Founder",
    desc: "Tech entrepreneur driving AI innovation with projects like Osmium. From childhood experiments with electronics to leading AI-driven solutions.",
    avatar: "/ref/voice-bg-04.png",
    linkedin: "https://www.linkedin.com/in/422h52219hsuya/",
  },
  {
    name: "Varun Yadav",
    role: "Co-Founder",
    desc: "Skilled backend developer passionate about building scalable systems. Lead backend developer for Osmium\u2019s AI-powered infrastructure.",
    avatar: "/ref/voice-bg-01.png",
    linkedin: "https://www.linkedin.com/in/varun-yadav-navchetna/",
  },
  {
    name: "Swastik Khatua",
    role: "Co-Founder",
    desc: "Frontend developer passionate about UI/UX and AI-driven EdTech solutions. Instrumental in crafting seamless user experiences with modern web technologies.",
    avatar: "/ref/voice-bg-03.png",
    linkedin: "https://www.linkedin.com/in/swastik-khatua-84798631b/",
  },
  {
    name: "Suman Yadav",
    role: "Co-Founder",
    desc: "Head of Design with passion for technology and creativity. The mind behind Osmium\u2019s UI/UX, ensuring seamless and engaging user experiences.",
    avatar: "/ref/voice-bg-05.png",
    linkedin: "https://www.linkedin.com/in/suman-yadav-bb5516322/",
  },
  {
    name: "Dhraval Narsinha",
    role: "Co-Founder",
    desc: "Frontend developer passionate about building seamless user experiences. Instrumental in shaping Osmium\u2019s interface with focus on UI/UX and frontend technologies.",
    avatar: "/ref/voice-bg-07.png",
    linkedin: "https://www.linkedin.com/in/dhraval-narsinha-navchetna125/",
  },
];

const milestones = [
  { date: "Sep 2024", title: "The idea sparks in a hostel room after surviving JEE" },
  { date: "Oct 2024", title: "Smart India Hackathon, first prototype built in 7 days" },
  { date: "Oct 2024", title: "Mock test engine trained on 10,000+ past papers" },
  { date: "Dec 2024", title: "AI Tutor v1 launched with step-by-step explanations" },
  { date: "Jan 2025", title: "First 50 institutes onboarded across Gujarat & Maharashtra" },
  { date: "Feb 2025", title: "Career Mapping feature goes live" },
  { date: "Apr 2025", title: "Osmium v2, complete platform rebuild" },
  { date: "2025+", title: "Becoming the Operating System of India\u2019s Education" },
];

const values = [
  { label: "Student-First", Icon: Crosshair },
  { label: "Accessible", Icon: GlobeHemisphereWest },
  { label: "AI-Powered", Icon: Brain },
  { label: "Made in India", Icon: Flag },
  { label: "Open & Honest", Icon: ChatCircleDots },
  { label: "Relentless", Icon: Flame },
];

const stats = [
  { value: "5", label: "Institutes onboarded" },
  { value: "1K+", label: "Past papers analyzed" },
  { value: "7", label: "Days to build first prototype" },
  { value: "5", label: "Co-founders, 1 dream" },
];

/* ── Animated counter hook ── */

function useCountUp(target: string, duration = 1800) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const numeric = parseInt(target.replace(/\D/g, ""), 10);
          const suffix = target.replace(/[\d]/g, "");
          if (isNaN(numeric)) {
            setDisplay(target);
            return;
          }
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numeric);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, display };
}

function StatCard({ value, label }: { value: string; label: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="type-6xl text-brand font-bold">{display}</p>
      <p className="type-sm text-warm-500 mt-2">{label}</p>
    </div>
  );
}

/* ── Page ── */

export default function AboutPage() {
  return (
    <>
      {/* ━━━ HERO — cinematic full-width ━━━ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <Image
            src="/ref/qrihua4053-nvida-bg.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pb-16 md:pb-24 pt-40">
          <ScrollReveal>
            <p className="inline-block type-sm font-semibold uppercase tracking-[0.15em] mb-5 px-4 py-1.5 rounded-full bg-white/10 text-white/80 ring-[0.5px] ring-inset ring-white/20 backdrop-blur-sm">
              About Osmium Ai
            </p>
            <h1 className="type-6xl max-w-3xl" style={{ fontSize: "clamp(1.875rem, 5vw, 3.25rem)", color: "#ffffff" }}>
              Learning should feel like having a mentor who truly understands you.
            </h1>
            <p className="mt-6 type-base text-white/70 max-w-xl text-pretty leading-relaxed">
              We believe every student deserves an AI that knows how they think,
              where they struggle, and what dreams they quietly hold onto.
            </p>
          </ScrollReveal>

        </div>

        {/* Scroll indicator — centered bottom */}
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center gap-2 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="type-2xs uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">
            Scroll to explore
          </span>
          <div className="relative w-5 h-9 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-colors">
            <div className="absolute left-1/2 top-1.5 w-1 h-2 -translate-x-1/2 rounded-full bg-white/70 animate-[scrollDot_1.8s_ease-in-out_infinite]" />
          </div>
          <svg viewBox="0 0 16 16" fill="none" className="size-3.5 text-white/40 group-hover:text-white/70 animate-bounce transition-colors">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      {/* ━━━ VALUES MARQUEE ━━━ */}
      <section className="py-10 border-b border-black/[0.06] overflow-hidden">
        <div className="flex whitespace-nowrap ticker-track">
          {[...values, ...values, ...values].map((v, i) => {
            const IconComp = v.Icon;
            return (
              <span
                key={i}
                className="inline-flex items-center gap-2.5 px-8 type-base text-warm-400 font-medium"
              >
                <IconComp size={18} weight="duotone" className="text-brand" />
                {v.label}
                <span className="text-warm-200 mx-4">·</span>
              </span>
            );
          })}
        </div>
      </section>

      {/* ━━━ MISSION — large centered statement ━━━ */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="type-sm text-brand font-semibold uppercase tracking-wider mb-6">
                Our Mission
              </p>
              <h2
                className="type-5xl text-black text-balance leading-snug"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                To become the operating system of India&apos;s education,
                ensuring no learner, no matter where they come from, ever feels
                lost or left behind.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ STATS BAR ━━━ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 rounded-2xl bg-warm-50 px-8 py-12 md:py-14 ring-[0.5px] ring-inset ring-black/[0.06]">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ OUR STORY — immersive alternating blocks ━━━ */}
      <section id="our-story" className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="type-sm text-warm-500 font-medium mb-4">Our Story</p>
            <h2 className="type-5xl text-black max-w-lg mb-12">
              From hostel rooms to building India&apos;s future
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {/* Block 1 */}
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06]">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                    <span className="type-2xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md w-fit mb-5">
                      The Spark
                    </span>
                    <p className="type-base text-warm-600 leading-relaxed text-pretty">
                      We met in college, right after surviving the intensity of our
                      JEE journey. In hostel rooms filled with late-night
                      conversations, we often shared where we stumbled, what we
                      wished we had, and how just a bit more guidance could have
                      made all the difference. Those raw, honest talks sparked
                      something, a feeling that maybe we could build what we
                      once needed so badly.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src="/ref/gmhm1kxxzgd-Background7.jpeg"
                      alt="The beginning"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 2 */}
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06]">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                    <Image
                      src="/ref/9dzqkp3d2u4-app-creative.jpeg"
                      alt="Building the prototype"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center order-1 lg:order-2">
                    <span className="type-2xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md w-fit mb-5">
                      The Hustle
                    </span>
                    <p className="type-base text-warm-600 leading-relaxed text-pretty">
                      When the Smart India Hackathon arrived, we decided to take a
                      chance on that idea. It was our first time working together,
                      and honestly, some of us didn&apos;t even own laptops. During
                      SIH, a teacher joked, &ldquo;<span className="text-brand/80 font-medium">Kaam ek karta hai aur laptop
                      teen pakadte hain.</span>&rdquo; Everyone laughed, except us.
                      Somewhere inside, that moment pushed us harder.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 3 */}
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06]">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                    <span className="type-2xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md w-fit mb-5">
                      The Culture
                    </span>
                    <p className="type-base text-warm-600 leading-relaxed text-pretty">
                      Hostel life became our startup culture before we even knew the
                      word. Nights meant tea, coffee, loud chants of Hanuman Chalisa
                      and Sundar Kand for strength, and long hours of building
                      things we weren&apos;t even sure would work. Mornings meant
                      grabbing breakfast together and crashing into bed. Within 7
                      chaotic, beautiful days, our first prototype was alive.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src="/ref/rlartawee0i-app-agents.jpeg"
                      alt="Hostel culture"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 4 */}
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden bg-black ring-[0.5px] ring-inset ring-white/[0.06]">
                <div className="absolute inset-0">
                  <Image
                    src="/ref/purpleblue.jpeg"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover opacity-30"
                  />
                </div>
                <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-3xl mx-auto text-center">
                  <span className="type-2xs font-bold uppercase tracking-wider text-white/60 bg-white/10 px-2.5 py-1 rounded-md inline-block mb-5">
                    The Vision
                  </span>
                  <p className="type-base text-white/80 leading-relaxed text-pretty">
                    From those hostel nights to today, one thing has stayed the
                    same: the fire to make learning in India smarter,
                    simpler, and deeply personal. We&apos;re still building, still
                    dreaming, and still believing that one day, Osmium will be the
                    Operating System of India&apos;s Education Ecosystem,
                    ensuring every student has the support we once wished we had.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ JOURNEY — vertical timeline ━━━ */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="type-sm text-warm-500 font-medium mb-4">Our Journey</p>
              <h2 className="type-5xl text-black text-balance max-w-lg mx-auto">
                From a hostel idea to India&apos;s education OS
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-black/10 md:-translate-x-px" />

            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={`${m.date}-${i}`} delay={i * 60}>
                  <div className={`relative flex items-start mb-10 last:mb-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-brand ring-4 ring-warm-50 -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                    }`}>
                      <p className="type-2xs font-bold uppercase tracking-wider text-brand">{m.date}</p>
                      <p className="type-sm text-black mt-1 text-pretty">{m.title}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ TEAM — hover-reveal cards ━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="type-sm text-warm-500 font-medium mb-4">Our Team</p>
                <h2 className="type-5xl text-black text-balance max-w-xl">
                  The people building the future of education in India
                </h2>
              </div>
              <p className="type-sm text-warm-400 max-w-sm text-pretty lg:text-right">
                Five friends from a hostel room, united by one mission: making
                learning personal for every student in India.
              </p>
            </div>
          </ScrollReveal>

          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.slice(0, 3).map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom row: 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:px-[calc(100%/6)]">
            {team.slice(3).map((member, i) => (
              <ScrollReveal key={member.name} delay={(i + 3) * 80}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-black text-center">
              <div className="absolute inset-0">
                <Image
                  src="/ref/green.jpeg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.075]" />

              <div className="relative z-10 px-6 sm:px-10 md:px-14 py-16 md:py-24 max-w-2xl mx-auto">
                <h2
                  className="type-5xl text-balance"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "#ffffff" }}
                >
                  Ready to transform how India learns?
                </h2>
                <p className="mt-6 type-base text-white/60 text-pretty">
                  Join thousands of students and institutes already using Osmium
                  to learn smarter, grow faster, and achieve more.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black transition-all duration-300 active:scale-[0.98] hover:bg-warm-100 h-12 px-7 type-base font-medium"
                  >
                    Get started
                    <svg viewBox="0 0 16 16" fill="none" className="size-4 ml-2">
                      <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <a
                    href="https://navchetna.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 text-white transition-all duration-300 active:scale-[0.98] hover:bg-white/20 h-12 px-7 type-base font-medium ring-[0.5px] ring-inset ring-white/20"
                  >
                    Visit NAVCHETNA
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* ── Team card component ── */

function TeamCard({ member }: { member: (typeof team)[number] }) {
  return (
    <div className="group relative isolate h-full overflow-hidden rounded-2xl bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06] transition-all duration-500 hover:ring-black/[0.12] hover:shadow-lg">
      {/* Avatar area */}
      <div className="relative h-52 sm:h-60 overflow-hidden bg-warm-100">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 mb-1.5">
          <h3 className="type-xl text-black">{member.name}</h3>
          <span className="type-2xs font-bold uppercase tracking-wider text-brand shrink-0">
            {member.role}
          </span>
        </div>
        <p className="type-sm text-warm-500 text-pretty">{member.desc}</p>
        <div className="mt-4 flex justify-end">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-9 rounded-lg bg-black/[0.04] text-warm-400 transition-colors hover:bg-brand/10 hover:text-brand"
            aria-label={`${member.name} LinkedIn`}
          >
            <LinkedinLogo size={20} weight="fill" />
          </a>
        </div>
      </div>
    </div>
  );
}
