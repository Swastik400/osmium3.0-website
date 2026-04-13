"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TabbedShowcase } from "@/components/ui/TabbedShowcase";

const heroTabs = [
  { label: "Mock Tests", stat: "50%", statLabel: "Prediction Accuracy" },
  { label: "AI Tutor", stat: "24/7", statLabel: "Instant Doubt Solving" },
  { label: "Career Path", stat: "100+", statLabel: "Career Roadmaps" },
  { label: "WhatsApp", stat: "0", statLabel: "Apps to Download" },
];

const logos = [
  { name: "AWS", src: null },
  { name: "Sarvam AI", src: null },
  { name: "SSIP", src: null },
  { name: "NVIDIA", src: "/ref/nvidia.svg" },
  { name: "NexTech", src: null },
  { name: "TantriX", src: null },
  { name: "Plenora", src: null },
  { name: "Duolingo", src: "/ref/duolingo.svg" },
  { name: "NineOne15²", src: null },
  { name: "Aegis Auth", src: null },
  { name: "Cars24", src: "/ref/cars24.svg" },
  { name: "Meesho", src: "/ref/meesho.svg" },
];

const smallFeatures = [
  { icon: "🎧", title: "AI Podcasts", desc: "AI-generated audio lessons with multi-speaker voices and word-by-word highlights." },
  { icon: "❓", title: "Interactive Quizzes", desc: "10-question MCQs with instant feedback and detailed solution breakdowns." },
  { icon: "🃏", title: "Flashcards", desc: "Animated flip-cards with question on front, answer on back for quick revision." },
  { icon: "📋", title: "Question Bank", desc: "Expandable question cards with detailed answers for every lesson and topic." },
];

const features = [
  {
    tag: "Exam Prediction",
    title: "Smart Mock Tests",
    desc: "AI-generated tests trained on thousands of past papers. Adaptive difficulty that adjusts to your level, real exam patterns, instant scoring, and detailed analytics.",
    image: "/mock.png",
    color: "#E8D5C4",
  },
  {
    tag: "AI Tutor",
    title: "Ask. Understand. Master.",
    desc: "Get crystal-clear answers in seconds with visual explanations, step-by-step logic, and real examples. Like having a personal tutor available 24/7.",
    image: "/chat.png",
    color: "#D5E0E8",
  },
  {
    tag: "Career Guidance",
    title: "Your Career Path, Mapped by AI",
    desc: "No confusion, no guessing. Osmium builds a crystal-clear roadmap showing where to begin, what to learn next, and how to reach your goals.",
    image: "/careerPath.png",
    color: "#E0D5E8",
  },
  {
    tag: "Interactive Learning",
    title: "5 Learning Modes in Every Lesson",
    desc: "Video lectures, AI podcasts, interactive quizzes, flip flashcards, and question banks. Every lesson comes with multiple ways to learn.",
    image: "/learn.png",
    color: "#D5E8D8",
  },
  {
    tag: "Analytics",
    title: "Progress You Can Feel",
    desc: "Topic mastery tracking, consistency streaks, weak area detection, and AI-generated improvement roadmaps. Know exactly where you stand.",
    image: "/test attempt.png",
    color: "#E8E0D5",
  },
  {
    tag: "AI Chat",
    title: "Osmium AI Study Mentor",
    desc: "An intelligent study companion that understands your learning style, remembers your progress, and adapts its teaching approach.",
    image: "/iphone mockup.png",
    color: "#D8D5E8",
  },
];

const testimonials = [
  {
    name: "Priya Kumari",
    role: "JEE Aspirant, Patna",
    quote: "I used Osmium for my JEE prep. It felt less like an app and more like a study partner. The mock tests were scarily close to the actual exam pattern. I improved 40% in just 3 weeks.",
    avatar: "/ref/voice-bg-01.png",
  },
  {
    name: "Dr. Mehul Shah",
    role: "Professor, Ahmedabad",
    quote: "We integrated Osmium into our college for managing course content. Usually, software means headaches, but this one was surprisingly smooth. Students actually enjoy using it.",
    avatar: "/ref/voice-bg-03.png",
  },
  {
    name: "Rajesh Yadav",
    role: "Parent, Lucknow",
    quote: "My son spends hours on Osmium and for the first time, I don't have to worry it's a waste of time. He actually studies! The career mapping feature gave him real direction.",
    avatar: "/ref/voice-bg-05.png",
  },
  {
    name: "Ananya Reddy",
    role: "NEET Student, Hyderabad",
    quote: "The AI tutor is incredible. I asked about organic chemistry at 2 AM and got a better explanation than my coaching class. Step-by-step, with diagrams. Game changer.",
    avatar: "/ref/voice-bg-07.png",
  },
];

const comparisons = [
  { feature: "Exam Prediction", traditional: "Study everything, hope for the best", osmium: "AI predicts up to 50% of real exam questions" },
  { feature: "Doubt Resolution", traditional: "Wait for next class or tuition", osmium: "Instant AI tutor available 24/7" },
  { feature: "Study Plan", traditional: "One-size-fits-all syllabus", osmium: "Personalized roadmap adapting to your pace" },
  { feature: "Mock Tests", traditional: "Generic question papers", osmium: "AI-generated tests mirroring real exam patterns" },
  { feature: "Progress Tracking", traditional: "Monthly report cards", osmium: "Real-time analytics with weak area detection" },
  { feature: "Career Guidance", traditional: "Ask parents or relatives", osmium: "AI maps your skills to ideal career paths" },
  { feature: "Mental Health", traditional: "Ignored completely", osmium: "Built-in wellness check-ins and stress support" },
  { feature: "Accessibility", traditional: "Limited to classroom hours", osmium: "Learn anywhere, anytime, on any device" },
];

const faqs = [
  { q: "What is Osmium?", a: "Osmium is an AI-powered education and career guidance platform built for Indian students. It offers smart mock tests, personalized learning, career mapping, and mental health support." },
  { q: "How does Osmium predict exam questions?", a: "Osmium is trained on thousands of past papers and uses AI to analyze patterns, trends, and question frequencies to generate mock tests that closely mirror real exams." },
  { q: "Is Osmium available for individual students?", a: "Osmium is currently available for institutes. Access for individual students is on the way!" },
  { q: "What exams does Osmium support?", a: "Osmium supports a wide range of competitive and academic exams across India, with AI-powered preparation tailored to each exam's unique pattern." },
  { q: "How does the career guidance feature work?", a: "Osmium analyzes your skills, interests, and academic performance to build a personalized career roadmap." },
  { q: "Who built Osmium?", a: "Osmium is built by Navchetna Technology (NINELLMS SOLUTIONS LLP), a passionate team of student innovators dedicated to transforming education through AI." },
];

export default function TestingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActiveTab((t) => (t + 1) % heroTabs.length);
          return 0;
        }
        return p + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
          <Image
            src="/ref/qrihua4053-nvida-bg.jpeg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto w-full max-w-7xl px-5 sm:px-8 pt-32 pb-24">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="inline-block type-sm font-semibold uppercase tracking-[0.15em] mb-6 px-4 py-1.5 rounded-full bg-white/10 text-white/80 ring-[0.5px] ring-inset ring-white/20 backdrop-blur-sm">
                India&apos;s AI Exam Strategist
              </p>

              <h1
                className="type-6xl max-w-2xl"
                style={{ fontSize: "clamp(2rem, 5.5vw, 3.5rem)", color: "#ffffff", lineHeight: "1.05" }}
              >
                We Don&apos;t Guess Exams.
                <br />
                <span className="text-brand" style={{ color: "#c4856f" }}>We Predict Them.</span>
              </h1>

              <p className="mt-6 type-base text-white/60 max-w-lg text-pretty leading-relaxed">
                Osmium is your AI exam strategist, built from thousands of past
                papers, trained to predict what&apos;s coming next. Up to 50% of
                your real exam, decoded.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black transition-all duration-300 active:scale-[0.98] hover:bg-warm-100 h-12 px-7 type-base font-medium"
                >
                  Get started
                </Link>
                <Link
                  href="/#features"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 text-white transition-all duration-300 active:scale-[0.98] hover:bg-white/20 h-12 px-7 type-base font-medium ring-[0.5px] ring-inset ring-white/20 backdrop-blur-sm"
                >
                  Explore features
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Animated tab stats at bottom */}
          <div className="mt-auto pt-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {heroTabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => { setActiveTab(i); setProgress(0); }}
                  className={`relative text-left rounded-2xl p-5 transition-all duration-300 cursor-pointer overflow-hidden ${activeTab === i
                      ? "bg-white/15 ring-[0.5px] ring-inset ring-white/20 backdrop-blur-md"
                      : "bg-white/5 ring-[0.5px] ring-inset ring-white/10 hover:bg-white/10"
                    }`}
                >
                  {/* Progress bar */}
                  {activeTab === i && (
                    <div className="absolute bottom-0 left-0 h-[2px] bg-white/50 transition-all duration-100" style={{ width: `${progress}%` }} />
                  )}
                  <p className="type-2xs uppercase tracking-wider text-white/40 mb-2">{tab.label}</p>
                  <p className="type-4xl font-bold" style={{ color: activeTab === i ? "#ffffff" : "rgba(255,255,255,0.3)" }}>
                    {tab.stat}
                  </p>
                  <p className="type-2xs text-white/40 mt-1">{tab.statLabel}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ━━━ TABBED SHOWCASE ━━━ */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <TabbedShowcase />
        </div>
      </section>

      {/* ━━━ TRUSTED BY ━━━ */}
      <section className="py-14 md:py-20 border-b border-black/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="type-sm text-warm-400 text-center mb-10">
              Trusted by leading institutions and partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {logos.map((item, i) => (
                <span key={i} className="flex items-center justify-center h-8">
                  {item.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-5 w-auto opacity-25 grayscale transition-all duration-200 hover:opacity-60 hover:grayscale-0"
                    />
                  ) : (
                    <span className="type-sm font-medium text-black/20 transition-colors duration-200 hover:text-black/60">
                      {item.name}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ PLATFORM INTRO ━━━ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="type-sm text-brand font-semibold uppercase tracking-wider mb-5">
                What&apos;s Inside Osmium
              </p>
              <h2
                className="type-5xl text-black text-balance"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                One lesson, five ways to master it
              </h2>
              <p className="mt-5 type-base text-warm-500 max-w-2xl mx-auto text-pretty">
                Every lesson comes with video lectures, AI-generated podcasts,
                interactive quizzes, flip flashcards, and a full question bank.
                Pick the mode that fits your style, or use them all.
              </p>
              <div className="mt-8">
                <Link
                  href="/#features"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white transition-all duration-300 active:scale-[0.98] hover:bg-warm-900 h-12 px-7 type-base font-medium"
                >
                  Explore all features
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ BENTO GRID ━━━ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Large card — Interactive Learning */}
            <ScrollReveal>
              <div className="relative isolate rounded-3xl overflow-hidden h-full min-h-[28rem]">
                <img
                  src="/ref/redchdw2op-bento-orange-blue-2@3x.jpeg"
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative z-10 flex flex-col justify-between h-full p-7 sm:p-9">
                  <div className="rounded-2xl overflow-hidden shadow-2xl max-w-sm">
                    <img src="/learn.png" alt="Learning platform" className="w-full h-auto" />
                  </div>
                  <div className="mt-auto">
                    <h3 className="type-3xl" style={{ color: "#ffffff" }}>Interactive Course Learning</h3>
                    <p className="mt-3 type-sm text-white/70 max-w-md text-pretty">
                      5 learning modes in every lesson — video lectures, AI podcasts, quizzes, flashcards, and question banks.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />
              </div>
            </ScrollReveal>

            {/* Right column — 2 stacked cards */}
            <div className="grid grid-rows-2 gap-5">
              {/* AI Tutor card */}
              <ScrollReveal delay={100}>
                <div className="relative isolate rounded-3xl overflow-hidden h-full bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06]">
                  <div className="grid sm:grid-cols-2 h-full">
                    <div className="p-7 sm:p-8 flex flex-col justify-center">
                      <span className="type-2xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md w-fit mb-4">
                        AI Tutor
                      </span>
                      <h3 className="type-2xl text-black">Ask. Understand. Master.</h3>
                      <p className="mt-2 type-sm text-warm-500 text-pretty">
                        Crystal-clear answers in seconds with step-by-step logic. Like a personal tutor, 24/7.
                      </p>
                    </div>
                    <div className="relative h-48 sm:h-auto">
                      <Image src="/chat.png" alt="AI Tutor" fill className="object-contain object-bottom p-4" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Mock Tests card */}
              <ScrollReveal delay={200}>
                <div className="relative isolate rounded-3xl overflow-hidden h-full bg-black ring-[0.5px] ring-inset ring-white/[0.06]">
                  <div className="grid sm:grid-cols-2 h-full">
                    <div className="p-7 sm:p-8 flex flex-col justify-center">
                      <span className="type-2xs font-bold uppercase tracking-wider text-white/60 bg-white/10 px-2.5 py-1 rounded-md w-fit mb-4">
                        Exam Prediction
                      </span>
                      <h3 className="type-2xl" style={{ color: "#ffffff" }}>Smart Mock Tests</h3>
                      <p className="mt-2 type-sm text-white/50 text-pretty">
                        AI-generated tests trained on thousands of past papers. Adaptive difficulty, instant scoring.
                      </p>
                    </div>
                    <div className="relative h-48 sm:h-auto">
                      <Image src="/mock.png" alt="Mock Tests" fill className="object-contain object-bottom p-4" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom row — 4 small feature cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {smallFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="rounded-2xl bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06] p-6 h-full flex flex-col">
                  <div className="size-10 rounded-xl bg-white ring-1 ring-inset ring-black/[0.06] flex items-center justify-center mb-12">
                    <span className="text-lg">{f.icon}</span>
                  </div>
                  <h4 className="type-sm font-medium text-black mt-auto">{f.title}</h4>
                  <p className="mt-2 type-xs text-warm-500 text-pretty">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FEATURE SHOWCASE ━━━ */}
      <section id="features" className="py-16 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="type-sm text-brand font-semibold uppercase tracking-wider mb-4">Everything you need</p>
              <h2 className="type-5xl text-black">Every feature, designed for you</h2>
              <p className="mt-4 type-base text-warm-500">
                From exam prediction to mental wellness, Osmium covers every aspect of a student&apos;s journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden ring-[0.5px] ring-inset ring-black/[0.06] bg-white hover:shadow-lg transition-shadow duration-300">
                  <div
                    className={`relative flex items-center justify-center p-8 sm:p-12 min-h-[16rem] ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                    style={{ backgroundColor: f.color }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.image} alt={f.title} loading="lazy" className="max-h-72 w-auto object-contain drop-shadow-lg" />
                  </div>
                  <div className={`flex flex-col justify-center p-8 sm:p-12 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <span className="type-2xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md w-fit mb-4">
                      {f.tag}
                    </span>
                    <h3 className="type-3xl text-black">{f.title}</h3>
                    <p className="mt-3 type-sm text-warm-500 text-pretty max-w-md">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ TESTIMONIALS ━━━ */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="type-sm text-warm-500 font-medium mb-4">Testimonials</p>
              <h2 className="type-5xl text-black text-balance max-w-lg mx-auto">
                Hear from those who use Osmium
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
                <div className="rounded-2xl bg-white ring-[0.5px] ring-inset ring-black/[0.06] p-7 sm:p-8 h-full flex flex-col">
                  <p className="type-sm text-warm-600 text-pretty leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-black/[0.06]">
                    <div className="relative size-10 rounded-full overflow-hidden ring-2 ring-warm-100">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="type-sm font-medium text-black">{t.name}</p>
                      <p className="type-2xs text-warm-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ COMPARISON ━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="type-sm text-brand font-semibold uppercase tracking-wider mb-4">Why Osmium</p>
              <h2 className="type-5xl text-black">Traditional learning vs Osmium</h2>
              <p className="mt-4 type-base text-warm-500">
                See how Osmium transforms every aspect of the learning experience.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] rounded-2xl overflow-hidden ring-[0.5px] ring-inset ring-black/[0.06]">
                <thead>
                  <tr className="bg-warm-50">
                    <th className="text-left py-4 px-5 type-xs font-medium text-warm-400 uppercase tracking-wider w-1/3">Feature</th>
                    <th className="text-left py-4 px-5 type-xs font-medium text-warm-400 uppercase tracking-wider w-1/3 border-l border-black/[0.06]">Traditional</th>
                    <th className="text-left py-4 px-5 type-xs font-medium uppercase tracking-wider w-1/3 border-l border-black/[0.06] bg-black text-white">Osmium AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((c, i) => (
                    <tr key={c.feature} className={`${i !== comparisons.length - 1 ? "border-b border-black/[0.04]" : ""} hover:bg-warm-50/50 transition-colors`}>
                      <td className="py-4 px-5 type-sm font-medium text-black">{c.feature}</td>
                      <td className="py-4 px-5 type-xs text-warm-500 border-l border-black/[0.04]">
                        <span className="inline-flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">✕</span>
                          {c.traditional}
                        </span>
                      </td>
                      <td className="py-4 px-5 type-xs text-black font-medium border-l border-black/[0.04] bg-black/[0.02]">
                        <span className="inline-flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          {c.osmium}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ ALL DEVICES ━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="type-sm text-warm-500 font-medium uppercase tracking-wider mb-4">Available everywhere</p>
              <h2 className="type-5xl text-black">One platform, every device</h2>
              <p className="mt-4 type-base text-warm-500">
                Osmium works seamlessly across desktop, tablet, and mobile.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="relative rounded-3xl overflow-hidden bg-warm-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/HERO IMAGE.png" alt="Osmium on all devices" loading="lazy" className="w-full h-auto object-contain" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
              <div>
                <p className="type-sm text-warm-500 font-medium mb-4">FAQ</p>
                <h2 className="type-5xl text-black text-balance max-w-sm">
                  Everything you need to know
                </h2>
                <p className="mt-4 type-sm text-warm-400 text-pretty max-w-sm">
                  Quick answers to help you get started with Osmium.
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
                <Image src="/ref/green.jpeg" alt="" fill className="object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.075]" />
              <div className="relative z-10 px-6 sm:px-10 md:px-14 py-16 md:py-24 max-w-2xl mx-auto">
                <h2 className="type-5xl text-balance" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "#ffffff" }}>
                  Ready to learn smarter?
                </h2>
                <p className="mt-5 type-base text-white/60 text-pretty">
                  Join thousands of students and institutes already using Osmium to achieve more.
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
              <svg viewBox="0 0 16 16" fill="none" className={`size-3.5 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}>
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === i ? "max-h-96 pb-5" : "max-h-0"}`}>
            <p className="type-sm text-warm-500 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
