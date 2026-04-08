"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Priya Kumari",
    role: "JEE Aspirant, Patna",
    color: "#3b82f6",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Priya",
    quote: "I used Osmium for my JEE prep. It felt less like an app and more like a study partner. The mock tests were scarily close to the actual exam pattern. I improved 40% in just 3 weeks.",
  },
  {
    name: "Dr. Mehul Shah",
    role: "Professor, Ahmedabad",
    color: "#8b5cf6",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Mehul",
    quote: "We integrated Osmium into our college for managing course content. Usually, software means headaches, but this one was surprisingly smooth. Students actually enjoy using it.",
  },
  {
    name: "Rajesh Yadav",
    role: "Parent, Lucknow",
    color: "#22c55e",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Rajesh",
    quote: "My son spends hours on Osmium and for the first time, I don't have to worry it's a waste of time. He actually studies! The career mapping feature gave him real direction.",
  },
  {
    name: "Ananya Reddy",
    role: "NEET Student, Hyderabad",
    color: "#f59e0b",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Ananya",
    quote: "The AI tutor is incredible. I asked about organic chemistry at 2 AM and got a better explanation than my coaching class. Step-by-step, with diagrams. Game changer.",
  },
  {
    name: "Arjun Nair",
    role: "Teacher, Bangalore",
    color: "#ef4444",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Arjun",
    quote: "As a teacher, I can see exactly where each student struggles. The analytics dashboard saves me hours of manual assessment. Osmium is what edtech should have been from the start.",
  },
];

const INTERVAL = 5000;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setProgress(0);
      setFading(false);
    }, 200);
  }, []);

  useEffect(() => {
    const tick = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          goTo((active + 1) % testimonials.length);
          return 0;
        }
        return p + 100 / (INTERVAL / 50);
      });
    }, 50);
    return () => clearInterval(tick);
  }, [active, goTo]);

  const t = testimonials[active];

  return (
    <section className="pt-8 pb-4 md:pt-10 md:pb-6">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative border-l border-r border-black/[0.06]">
          <div className="px-4 py-8 sm:px-6 md:py-10">
            <ScrollReveal>
              <div className="mb-6">
                <p className="type-sm text-warm-500 font-medium mb-2">Testimonials</p>
                <h2 className="type-4xl text-black text-balance max-w-lg">
                  Hear from those who use Osmium
                </h2>
              </div>

              <div className="relative flex flex-col gap-x-10 gap-y-6 sm:flex-row sm:justify-between">
                <div className="flex flex-auto flex-col gap-x-5 gap-y-3 sm:flex-auto md:flex-row md:items-start">
                  {/* Avatar tabs with progress ring */}
                  <div className="flex flex-none gap-5 items-center py-2">
                    {testimonials.map((person, i) => {
                      const isActive = active === i;
                      const ringProgress = isActive ? progress : 0;
                      const r = 22;
                      const circumference = 2 * Math.PI * r;
                      const dashOffset = circumference - (ringProgress / 100) * circumference;

                      return (
                        <button
                          key={person.name}
                          onClick={() => goTo(i)}
                          className={`group relative cursor-pointer outline-none transition-all duration-300 ease-out ${
                            isActive
                              ? "scale-[1.25] z-10 drop-shadow-lg"
                              : "scale-100 opacity-60 hover:opacity-90 hover:scale-110"
                          }`}
                          aria-label={person.name}
                        >
                          <svg
                            viewBox="0 0 54 54"
                            aria-hidden="true"
                            style={{ width: "3.375rem", height: "3.375rem", margin: "-0.3125rem" }}
                          >
                            <defs>
                              <clipPath id={`clip-${i}`}>
                                <rect width="44" height="44" x="5" y="5" rx="12" />
                              </clipPath>
                            </defs>
                            <rect
                              width="44" height="44" x="5" y="5" rx="12"
                              fill={isActive ? person.color : "#E0DFDD"}
                              className="transition-colors duration-300"
                            />
                            {/* DiceBear avatar */}
                            <image
                              href={person.avatar}
                              x="5" y="5" width="44" height="44"
                              clipPath={`url(#clip-${i})`}
                            />
                            {/* Progress ring */}
                            {isActive && (
                              <rect
                                x="3" y="3" width="48" height="48" rx="14"
                                fill="none"
                                stroke={person.color}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={dashOffset}
                                style={{ transition: "stroke-dashoffset 50ms linear" }}
                              />
                            )}
                          </svg>

                        </button>
                      );
                    })}
                  </div>

                  {/* Text panel */}
                  <div className="grid flex-auto min-h-[7rem]">
                    <div
                      className="col-start-1 row-start-1 py-1 transition-opacity duration-200"
                      style={{ opacity: fading ? 0 : 1 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <p className="type-sm font-medium text-black">{t.name}</p>
                        <span className="type-xs text-warm-400">{t.role}</span>
                      </div>
                      <p className="mt-2 type-sm text-warm-500 text-pretty max-w-xl">
                        {"\u201C"}{t.quote}{"\u201D"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-none flex-wrap gap-2 flex-row-reverse justify-end sm:flex-row sm:justify-start sm:absolute sm:-top-0.5 sm:right-0 md:static md:-my-0.5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50 w-fit h-12 px-5 type-base"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
