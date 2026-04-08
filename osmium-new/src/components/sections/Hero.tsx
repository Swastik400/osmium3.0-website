"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TAB_ICONS = ["/ref/eleven-creative.png", "/ref/eleven-agents.png", "/ref/eleven-api.png", "/ref/voice-bg-05.png"];

const tabs = [
  {
    id: "mock-tests",
    label: "Mock Tests",
    shortLabel: "Tests",
    heading: "Predict Your Exam",
    desc: "Our AI analyzes thousands of past papers to generate mock tests that mirror your real exam. Adaptive difficulty, instant scoring, and deep performance insights.",
    image: "/ref/mock test.png",
    subtabs: [
      { label: "Paper Generate", text: "Upload any 5 previous year question papers from JEE, NEET, CUET, or any competitive exam — our AI analyzes patterns and generates a predicted paper with up to 50% accuracy." },
      { label: "Adaptive", text: "Difficulty adjusts in real-time based on your performance. Stronger in mechanics? We push harder. Weak in optics? We reinforce." },
      { label: "Scoring", text: "Instant results with detailed breakdowns — subject-wise, topic-wise, and question-wise. Know exactly where you stand." },
      { label: "Analytics", text: "Track your progress over time with visual dashboards. Spot weak areas, monitor consistency, and see your growth trajectory." },
    ],
  },
  {
    id: "ai-tutor",
    label: "AI Tutor",
    shortLabel: "Tutor",
    heading: "Your Personal Tutor",
    desc: "Get instant, step-by-step answers to any question. Visual explanations, concept breakdowns, and practice problems across 70+ languages.",
    image: "/ref/AI MENTOR.png",
    subtabs: [
      { label: "Doubt Solving", text: "Ask any question and get crystal-clear answers instantly. No waiting, no scheduling — just type and learn." },
      { label: "Concepts", text: "Deep concept breakdowns with visual diagrams, analogies, and real-world examples that make complex topics click." },
      { label: "Practice", text: "AI-generated practice problems tailored to your weak areas. Each question builds on what you got wrong before." },
      { label: "Languages", text: "Learn in your language. Osmium supports 70+ languages so every student can understand concepts in their mother tongue." },
    ],
  },
  {
    id: "career-path",
    label: "Career Path",
    shortLabel: "Career",
    heading: "Map Your Future",
    desc: "Discover the right career path based on your skills, interests, and goals. AI-powered roadmaps with step-by-step guidance.",
    image: "/ref/MOCKUP1.png",
    subtabs: [
      { label: "Skill Analysis", text: "AI evaluates your academic strengths, interests, and aptitude to identify the career paths where you'll thrive." },
      { label: "Roadmap", text: "A clear, step-by-step plan from where you are today to your dream career. Every milestone mapped out." },
      { label: "Jobs", text: "Real-time job market data showing demand, salaries, and growth trends for every career path in India." },
      { label: "Mentorship", text: "Connect with mentors and alumni who've walked the path you're exploring. Real guidance from real people." },
    ],
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    shortLabel: "WhatsApp",
    heading: "Learn on WhatsApp",
    desc: "Access Osmium directly from WhatsApp. Ask doubts, take quizzes, get career guidance, and receive daily study reminders — all without downloading an app.",
    image: "/AI study mentor chat interface design.png",
    subtabs: [
      { label: "Instant Doubts", text: "Send any question on WhatsApp and get step-by-step solutions in seconds. Works with text, images, and voice messages." },
      { label: "Daily Practice", text: "Receive daily quiz questions and practice problems on WhatsApp. Build consistency without opening another app." },
      { label: "Study Reminders", text: "Smart reminders based on your study schedule. Never miss a revision session or mock test deadline." },
      { label: "No App Needed", text: "Zero downloads, zero storage. Everything runs on WhatsApp — perfect for students with limited data or older devices." },
    ],
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubtab, setActiveSubtab] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [subtabFadeKey, setSubtabFadeKey] = useState(0);
  const current = tabs[activeTab];

  const switchTab = (i: number) => {
    setActiveTab(i);
    setActiveSubtab(0);
    setFadeKey((k) => k + 1);
    setSubtabFadeKey((k) => k + 1);
  };

  const switchSubtab = (i: number) => {
    setActiveSubtab(i);
    setSubtabFadeKey((k) => k + 1);
  };

  return (
    <section className="pt-28 sm:pt-36 md:pt-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Two-column hero text */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="contents lg:block lg:col-span-6">
            <h1 className="block max-w-lg text-balance text-black type-6xl lg:max-w-none">
              We Don&apos;t Guess Exams
              <span className="table"> We Predict Them.</span>
            </h1>
            <div className="mt-8 order-last lg:order-none">
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-900 h-12 px-5 type-base"
                >
                  Get started
                </Link>
                <Link
                  href="/#features"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("features")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50 h-12 px-5 type-base"
                >
                  Explore features
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col lg:col-span-6 lg:mt-0 lg:max-w-none max-w-2xl">
            <p className="block mt-auto text-balance lg:text-pretty type-base text-black">
              Osmium is your AI exam strategist, built from thousands of past
              papers, trained to predict what&apos;s coming next. Up to 50% of
              your real exam, decoded. No luck. No stress. Just results.
            </p>
            <div className="h-0 flex-auto" style={{ maxHeight: "5rem" }} />
          </div>
        </div>

        {/* Tabbed showcase card */}
        <ScrollReveal delay={200}>
          <div className="relative isolate mt-10 sm:mt-14">
            <div
              className="relative isolate rounded-3xl grid gap-x-6 grid-cols-1 lg:grid-cols-[1fr_auto] grid-rows-[auto_1fr_auto] px-4 sm:px-6 lg:pt-6 overflow-hidden"
              style={{ backgroundColor: "#f5f3f1", minHeight: "37rem" }}
            >
              {/* Inset ring */}
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />

              {/* ── Product tabs (top) ── */}
              <div className="z-50 col-span-full row-start-1 pt-4 sm:pt-6 lg:pt-0 lg:pb-6 w-full lg:w-fit">
                <div className="overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
                  <div className="flex w-fit rounded-full h-11 ring-[0.5px] ring-inset ring-black/[0.075] mx-auto">
                    {tabs.map((tab, i) => (
                      <button
                        key={tab.id}
                        onClick={() => { switchTab(i); }}
                        className="isolate relative flex items-center justify-center cursor-pointer outline-none rounded-full h-11 px-3 sm:px-5 flex-none"
                      >
                        <div className="relative flex items-center gap-1.5" style={{ color: activeTab === i ? "#000" : "#57534e" }}>
                          <div className="mr-0.5 size-3 rounded-full relative overflow-hidden hidden sm:block">
                            <Image src={TAB_ICONS[i]} alt="" fill sizes="100vw" className="object-cover" />
                          </div>
                          <span className="type-xs sm:type-base hidden sm:block">{tab.label}</span>
                          <span className="type-xs sm:hidden">{tab.shortLabel}</span>
                        </div>
                        <div
                          className="absolute -z-10 rounded-full inset-0"
                          style={{
                            background: activeTab === i ? "#fff" : "transparent",
                            boxShadow: activeTab === i ? "0 0 1px rgba(0,0,0,0.4), 0 4px 4px rgba(0,0,0,0.04)" : "none",
                            transition: "all 300ms cubic-bezier(0.32,0.72,0,1)",
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Main content: left text + right image ── */}
              <div className="col-span-full lg:col-span-1 row-start-2">
                <div className="h-full flex items-center">
                  <div className="w-full flex flex-col lg:flex-row items-stretch gap-0 my-4">

                    {/* Left — heading/desc + divider + subtab text */}
                    <div className="flex flex-col sm:flex-row flex-1 min-w-0">
                      {/* Part 1: Heading + Description */}
                      <div key={`tab-${fadeKey}`} className="flex-1 px-2 sm:px-4 py-4 flex flex-col justify-center animate-fade-up">
                        <p className="type-2xl text-black">{current.heading}</p>
                        <p className="type-sm text-warm-500 mt-3 leading-relaxed text-pretty">{current.desc}</p>
                      </div>

                      {/* Vertical divider — short with faded ends */}
                      <div className="hidden sm:flex items-center">
                        <div
                          className="w-px self-stretch my-8"
                          style={{
                            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 70%, transparent 100%)",
                          }}
                        />
                      </div>
                      <div
                        className="sm:hidden mx-8"
                        style={{
                          height: "1px",
                          background: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 70%, transparent 100%)",
                        }}
                      />

                      {/* Part 2: Subtab description — changes on subtab click */}
                      <div key={`subtab-${subtabFadeKey}`} className="flex-1 px-2 sm:px-4 py-4 flex flex-col justify-center animate-fade-up">
                        <p className="type-sm font-medium text-black">{current.subtabs[activeSubtab].label}</p>
                        <p className="type-sm text-warm-500 mt-2 leading-relaxed text-pretty">{current.subtabs[activeSubtab].text}</p>
                      </div>
                    </div>

                    {/* Right — Image in white card */}
                    <div key={`img-${fadeKey}`} className="relative isolate bg-white rounded-2xl ring-[0.5px] ring-inset ring-black/10 w-fit flex-none ml-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
                      <div className="flex items-center justify-center p-2 md:p-3">
                        <div className="rounded-xl overflow-hidden max-w-[26rem]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={current.image}
                            alt={current.heading}
                            className="w-full max-h-[22rem] object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* ── Bottom sub-tabs (pill buttons) ── */}
              <div className="col-span-full row-start-3 pt-4 sm:pt-6 lg:pt-0 lg:pb-6 w-full lg:w-fit">
                <div className="overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
                  <div className="flex w-fit rounded-full h-10 mx-auto">
                    {current.subtabs.map((st, i) => (
                      <button
                        key={st.label}
                        onClick={() => switchSubtab(i)}
                        className="isolate relative flex items-center justify-center cursor-pointer outline-none rounded-full h-10 px-3 sm:px-4 flex-none"
                      >
                        <span className="relative type-xs sm:type-base whitespace-nowrap" style={{ color: activeSubtab === i ? "#000" : "#57534e" }}>{st.label}</span>
                        <div
                          className="absolute -z-10 rounded-full inset-0"
                          style={{
                            background: activeSubtab === i ? "#fff" : "transparent",
                            boxShadow: activeSubtab === i ? "0 0 1px rgba(0,0,0,0.4), 0 4px 4px rgba(0,0,0,0.04)" : "none",
                            transition: "all 300ms cubic-bezier(0.32,0.72,0,1)",
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
