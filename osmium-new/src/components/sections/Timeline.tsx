"use client";

import { useState, useCallback } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const events = [
  { title: "Osmium Concept", desc: "The idea of AI-powered exam prediction born at Navchetna Technology", date: "Jan 2024" },
  { title: "First Prototype", desc: "Mock test engine trained on 10,000+ past papers across 5 subjects", date: "Apr 2024" },
  { title: "AI Tutor v1", desc: "Personalized doubt resolution with step-by-step explanations launched", date: "Jul 2024" },
  { title: "Institute Beta", desc: "First 50 institutes onboarded across Gujarat and Maharashtra", date: "Oct 2024" },
  { title: "Career Mapping", desc: "AI-powered career roadmaps analyzing skills, interests, and job market", date: "Jan 2025" },
  { title: "Osmium v2", desc: "Complete platform rebuild with wellness support and analytics dashboard", date: "Apr 2025" },
  { title: "Pan-India Launch", desc: "Osmium available to institutes across all Indian states", date: "Jul 2025" },
  { title: "Student Access", desc: "Individual student access opens — bringing Osmium to every learner", date: "Oct 2025" },
];

const TOTAL_TICKS = 80;
const EASE = "cubic-bezier(0.32, 0.72, 0, 1)";

function getEventTickIndex(i: number): number {
  const start = 5;
  const end = TOTAL_TICKS - 5;
  return Math.round(start + (i / (events.length - 1)) * (end - start));
}

export function Timeline() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= events.length || idx === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setTimeout(() => setFading(false), 50);
    }, 200);
  }, [active]);

  const eventTicks = events.map((_, i) => getEventTickIndex(i));
  const activePct = (eventTicks[active] / TOTAL_TICKS) * 100;

  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative border-l border-r border-black/[0.06]">
          <div className="px-2 md:px-4">
            <ScrollReveal>
              <div className="relative isolate bg-warm-50 pt-12 pb-10 sm:py-16 lg:py-24 px-6 sm:px-12 lg:px-16 rounded-3xl min-h-[31rem] flex items-center overflow-hidden">
                {/* Background image from reference */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ref/timeline@3x.png" alt="" className="absolute inset-0 size-full object-cover opacity-[0.04] pointer-events-none" />
                {/* Inset ring */}
                <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />

                <div className="w-full max-w-4xl mx-auto">
                  {/* ── Title ── */}
                  <div
                    className="mb-8"
                    style={{
                      paddingLeft: `${activePct}%`,
                      transition: `padding-left 600ms ${EASE}`,
                    }}
                  >
                    <div
                      className="max-w-64 -ml-2"
                      style={{
                        transition: `opacity 200ms, transform 200ms`,
                        transitionTimingFunction: EASE,
                        opacity: fading ? 0 : 1,
                        transform: fading ? "translateY(-4px)" : "none",
                      }}
                    >
                      <h3 className="type-base font-medium text-black text-balance">
                        {events[active].title}
                      </h3>
                    </div>
                  </div>

                  {/* ── Track row ── */}
                  <div className="flex items-center gap-4 sm:gap-7">
                    {/* Prev */}
                    <button
                      onClick={() => goTo(active - 1)}
                      disabled={active === 0}
                      className="flex-none inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-all duration-300 active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cream"
                      aria-label="Previous"
                    >
                      <svg width="16" height="16" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M10 4 6 8l4 4" /></svg>
                    </button>

                    {/* Track */}
                    <div className="relative flex-auto h-36">
                      {/* Ruler ticks */}
                      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between">
                        {Array.from({ length: TOTAL_TICKS + 1 }).map((_, i) => {
                          const isEvent = eventTicks.includes(i);
                          const eventIdx = eventTicks.indexOf(i);
                          const isActive = eventIdx === active;

                          return (
                            <div
                              key={i}
                              className="relative flex items-center justify-center"
                              style={{ width: 1 }}
                            >
                              {/* Base tick */}
                              <div
                                className="transition-all duration-500"
                                style={{
                                  width: 1,
                                  height: isEvent ? 9 : 5,
                                  backgroundColor: isEvent ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.12)",
                                  transitionTimingFunction: EASE,
                                  transform: isActive ? "scaleY(14) scaleX(1.5)" : "scaleY(1)",
                                  transformOrigin: "center",
                                }}
                              />

                              {/* Selection pill around active */}
                              {isEvent && (
                                <div
                                  className="absolute left-1/2 top-1/2 rounded-full border border-black/10 pointer-events-none transition-opacity duration-300"
                                  style={{
                                    width: "1.1875rem",
                                    height: "8.875rem",
                                    marginLeft: "-0.59375rem",
                                    marginTop: "-4.4375rem",
                                    opacity: isActive ? 1 : 0,
                                  }}
                                />
                              )}

                              {/* Clickable area for events */}
                              {isEvent && (
                                <button
                                  onClick={() => goTo(eventIdx)}
                                  className="absolute inset-0 -inset-x-2 -inset-y-8 z-10 cursor-pointer"
                                  aria-label={`${events[eventIdx].title}. ${events[eventIdx].date}`}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Next */}
                    <button
                      onClick={() => goTo(active + 1)}
                      disabled={active === events.length - 1}
                      className="flex-none inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-all duration-300 active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cream"
                      aria-label="Next"
                    >
                      <svg width="16" height="16" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="m6 12 4-4-4-4" /></svg>
                    </button>
                  </div>

                  {/* ── Description ── */}
                  <div
                    className="mt-8"
                    style={{
                      paddingLeft: `${activePct}%`,
                      transition: `padding-left 600ms ${EASE}`,
                    }}
                  >
                    <div className="max-w-64 -ml-2">
                      <p
                        className="type-xs text-black text-balance"
                        style={{
                          transition: `opacity 200ms ${EASE}, transform 200ms ${EASE}`,
                          transitionDelay: fading ? "0ms" : "100ms",
                          opacity: fading ? 0 : 1,
                          transform: fading ? "translateY(4px)" : "none",
                        }}
                      >
                        {events[active].desc}
                      </p>
                      <p
                        className="mt-4 type-xs text-warm-500"
                        style={{
                          transition: `opacity 200ms ${EASE}, transform 200ms ${EASE}`,
                          transitionDelay: fading ? "0ms" : "150ms",
                          opacity: fading ? 0 : 1,
                          transform: fading ? "translateY(4px)" : "none",
                        }}
                      >
                        {events[active].date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
