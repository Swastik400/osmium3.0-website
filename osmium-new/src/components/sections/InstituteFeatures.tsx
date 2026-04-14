"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "AI Notes Generator",
    desc: "Teachers can create structured, curriculum-aligned notes in seconds. Just pick the topic and Osmium generates clean, ready-to-share study material.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
      </svg>
    ),
  },
  {
    title: "Study Material Builder",
    desc: "Generate worksheets, summaries, revision sheets, and topic guides tailored to any subject, class, or exam pattern, all powered by Osmium AI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    title: "Research Paper Assistant",
    desc: "Helps teachers draft, structure, and refine research papers with AI-powered writing, citation suggestions, and academic formatting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    ),
  },
  {
    title: "Student Analytics Dashboard",
    desc: "Track every student\u2019s progress, identify weak areas, monitor attendance patterns, and generate performance reports for parents and management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
      </svg>
    ),
  },
  {
    title: "Auto Mock Test Creation",
    desc: "Generate exam-ready mock tests from any syllabus in minutes. Set difficulty, question count, and exam pattern. Osmium handles the rest.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "AI Teaching Assistant",
    desc: "Osmium acts as a co-teacher, answering student doubts 24/7, grading assignments, and suggesting personalized learning paths for each student.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M9 13a4.5 4.5 0 0 0 3-4" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M12 13h4" />
        <path d="M12 18h6a2 2 0 0 1 2 2v1" />
        <path d="M12 8h8" />
        <path d="M16 8V5a2 2 0 0 1 2-2" />
        <circle cx="16" cy="13" r=".5" />
        <circle cx="18" cy="3" r=".5" />
        <circle cx="20" cy="21" r=".5" />
        <circle cx="20" cy="8" r=".5" />
      </svg>
    ),
  },
];

export function InstituteFeatures() {
  const [activeIdx, setActiveIdx] = useState(2);
  const active = features[activeIdx];

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative border-l border-r border-black/[0.06]">
          {/* Top dots */}
          <div className="relative">
            <div className="absolute left-0 top-0 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream">
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <div className="absolute right-0 top-0 z-20 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-cream">
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <div className="h-px w-full bg-black/[0.06]" />
          </div>

          <div className="px-4 sm:px-6 py-12 md:py-16">
            {/* Heading */}
            <ScrollReveal>
              <div className="flex flex-col md:grid md:grid-cols-12 md:gap-x-12 mb-12">
                <div className="md:col-span-6">
                  <p className="type-xs text-brand font-medium uppercase tracking-wider mb-3">
                    For Teachers & Institutes
                  </p>
                  <h2 className="type-5xl text-black text-balance max-w-lg lg:max-w-none">
                    Make every teacher&apos;s work effortless with AI
                  </h2>
                </div>
                <div className="mt-6 md:mt-0 md:col-span-6 flex flex-col justify-end">
                  <p className="type-sm text-warm-500 text-pretty">
                    From creating notes and study material to analyzing student
                    performance and generating mock tests, Osmium AI handles
                    the heavy lifting so teachers can focus on what matters most:
                    teaching.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Interactive grid */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.2fr] gap-0">
                {/* Left — feature list */}
                <div className="flex flex-col">
                  {features.map((f, i) => (
                    <button
                      key={f.title}
                      onClick={() => setActiveIdx(i)}
                      className={`flex items-center gap-4 px-5 py-4 text-left transition-all duration-200 border-b border-black/[0.04] cursor-pointer ${
                        activeIdx === i ? "bg-warm-50" : "hover:bg-warm-50/50"
                      }`}
                    >
                      <div
                        className={`flex-none flex items-center justify-center size-9 rounded-lg transition-all duration-200 [&>svg]:size-4 [&>svg]:transition-colors [&>svg]:duration-200 ${
                          activeIdx === i
                            ? "bg-black [&>svg]:text-white"
                            : "bg-warm-50 ring-1 ring-inset ring-black/10 [&>svg]:text-black"
                        }`}
                      >
                        {f.icon}
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`type-sm font-medium transition-colors duration-200 ${
                            activeIdx === i ? "text-black" : "text-warm-500"
                          }`}
                        >
                          {f.title}
                        </p>
                      </div>
                      {activeIdx === i && (
                        <div className="ml-auto flex-none">
                          <svg viewBox="0 0 24 24" fill="none" className="size-4 text-warm-400">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="hidden md:flex items-center">
                  <div
                    className="w-px self-stretch"
                    style={{
                      background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent 100%)",
                    }}
                  />
                </div>
                <div
                  className="md:hidden h-px mx-4 my-2"
                  style={{
                    background: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent 100%)",
                  }}
                />

                {/* Right — active feature detail */}
                <div
                  className="flex flex-col justify-center px-5 md:px-10 py-8 md:py-12"
                  style={{ backgroundColor: "#f5f3f1", borderRadius: "0 1.25rem 1.25rem 0" }}
                >
                  <div key={activeIdx} className="animate-fade-up">
                    <div className="flex items-center justify-center size-14 rounded-2xl bg-white ring-1 ring-inset ring-black/[0.06] mb-6 [&>svg]:size-7 [&>svg]:text-black">
                      {active.icon}
                    </div>
                    <h3 className="type-2xl text-black mb-3">{active.title}</h3>
                    <p className="type-sm text-warm-500 leading-relaxed text-pretty">
                      {active.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom dots */}
          <div className="relative">
            <div className="absolute left-0 bottom-0 z-20 flex h-10 w-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-cream">
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <div className="absolute right-0 bottom-0 z-20 flex h-10 w-10 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-cream">
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <div className="h-px w-full bg-black/[0.06]" />
          </div>
        </div>
      </div>
    </section>
  );
}
