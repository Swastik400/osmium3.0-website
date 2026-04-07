"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  [
    {
      text: "I used Osmium for my JEE prep. It felt less like an app and more like a study partner. The mock tests were scarily close to the actual exam pattern.",
      name: "Priya Kumari",
      role: "Student",
      location: "Patna, Bihar",
    },
    {
      text: "We tried Natraj in our college for managing course content. Usually, software means headaches, but this one was surprisingly smooth.",
      name: "Dr. Mehul Shah",
      role: "Professor",
      location: "Ahmedabad, Gujarat",
    },
    {
      text: "Our startup needed a website that didn't look like it was built in the 90s. Navchetna delivered exactly that. Clean, modern, and easy to use.",
      name: "Raghav Malhotra",
      role: "Founder",
      location: "New Delhi",
    },
  ],
  [
    {
      text: "I asked Navchetna for branding help and they made a logo so good that even my mom finally understood what my company does.",
      name: "Arjun Nair",
      role: "Professional",
      location: "Bangalore",
    },
    {
      text: "My son spends hours on Osmium and for the first time, I don't have to worry it's a waste of time. He actually studies!",
      name: "Rajesh Yadav",
      role: "Parent",
      location: "Lucknow, UP",
    },
    {
      text: "Working with Navchetna felt refreshing. No overpromises, just consistent delivery. The AI recommendation system they built works smoothly.",
      name: "Lisa Wong",
      role: "International Client",
      location: "California, USA",
    },
  ],
];

export function Testimonials() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="bg-warm-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Client Success"
            title="What our partners say about driving growth."
            description="Real results from real brands. See how we've helped companies scale their acquisition and maximize ROI."
          />
        </ScrollReveal>

        <div className="mt-12">
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials[slide].map((t) => (
              <ScrollReveal key={t.name}>
                <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-700">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-black/5 pt-4">
                    <p className="text-sm font-medium">
                      {t.name} · {t.role}
                    </p>
                    <p className="mt-0.5 text-xs text-warm-500">{t.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Nav */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() =>
                setSlide((s) => (s - 1 + testimonials.length) % testimonials.length)
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-warm-600 transition-colors hover:bg-white hover:text-black"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    slide === i ? "bg-black" : "bg-black/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setSlide((s) => (s + 1) % testimonials.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-warm-600 transition-colors hover:bg-white hover:text-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
