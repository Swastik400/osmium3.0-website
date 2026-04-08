"use client";

import { Brain, Target, MessageCircle, TrendingUp, Map, Heart, BookOpen, Smartphone } from "lucide-react";
import { MagnifyZone } from "@/components/ui/MagnifyImage";

const features = [
  {
    icon: Target,
    tag: "Exam Prediction",
    title: "Smart Mock Tests",
    desc: "AI-generated tests trained on thousands of past papers. Adaptive difficulty that adjusts to your level, real exam patterns, instant scoring, and detailed analytics.",
    image: "/mock.png",
    color: "#E8D5C4",
  },
  {
    icon: MessageCircle,
    tag: "AI Tutor",
    title: "Ask. Understand. Master.",
    desc: "Get crystal-clear answers in seconds with visual explanations, step-by-step logic, and real examples. Like having a personal tutor available 24/7.",
    image: "/chat.png",
    color: "#D5E0E8",
  },
  {
    icon: Map,
    tag: "Career Guidance",
    title: "Your Career Path, Mapped by AI",
    desc: "No confusion, no guessing. Osmium builds a crystal-clear roadmap showing where to begin, what to learn next, and how to reach your goals.",
    image: "/careerPath.png",
    color: "#E0D5E8",
  },
  {
    icon: BookOpen,
    tag: "Interactive Learning",
    title: "5 Learning Modes in Every Lesson",
    desc: "Video lectures, AI podcasts, interactive quizzes, flip flashcards, and question banks. Every lesson comes with multiple ways to learn.",
    image: "/learn.png",
    color: "#D5E8D8",
  },
  {
    icon: TrendingUp,
    tag: "Analytics",
    title: "Progress You Can Feel",
    desc: "Topic mastery tracking, consistency streaks, weak area detection, and AI-generated improvement roadmaps. Know exactly where you stand.",
    image: "/test attempt.png",
    color: "#E8E0D5",
  },
  {
    icon: Brain,
    tag: "AI Chat",
    title: "Osmium AI Study Mentor",
    desc: "An intelligent study companion that understands your learning style, remembers your progress, and adapts its teaching approach.",
    image: "/iphone mockup.png",
    color: "#D8D5E8",
  },
  {
    icon: Smartphone,
    tag: "Mobile",
    title: "Learn Anywhere, Anytime",
    desc: "Full Osmium experience on your phone. Study on the bus, revise before bed, or take a quick quiz during lunch break.",
    image: "/AI study mentor chat interface design.png",
    color: "#E8D5D8",
  },
  {
    icon: Heart,
    tag: "Wellness",
    title: "Mental Health & Wellness",
    desc: "Stress management tools, motivation check-ins, and wellness resources built right into your learning journey.",
    image: "/mental and career.png",
    color: "#D5E0D8",
  },
];

export function FeatureShowcase() {
  return (
    <section id="features" className="pt-0 pb-16 md:pb-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="type-xs font-medium text-warm-500 uppercase tracking-wider mb-4">
            Everything you need
          </p>
          <h2 className="type-5xl text-black">
            Every feature, designed for you
          </h2>
          <p className="mt-4 type-base text-warm-500">
            From exam prediction to mental wellness, Osmium covers every aspect of a student{"'"}s journey.
          </p>
        </div>

        {/* Stacking cards */}
        <div className="relative">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="sticky mb-6 last:mb-0"
              style={{
                top: `${80 + i * 20}px`,
                zIndex: i + 1,
              }}
            >
              <div
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[1.25rem] overflow-hidden border border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                style={{
                  background: "#fff",
                  transform: `scale(${1 - i * 0.01})`,
                  transformOrigin: "top center",
                }}
              >
                {/* Image */}
                <MagnifyZone
                  className={`relative flex items-center justify-center p-8 sm:p-10 min-h-[18rem] ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                  style={{ backgroundColor: f.color }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.image}
                    alt={f.title}
                    loading="lazy"
                    className="max-h-80 w-auto object-contain drop-shadow-lg"
                  />
                </MagnifyZone>

                {/* Content */}
                <div className={`flex flex-col justify-center p-6 sm:p-10 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="flex items-center justify-center size-8 rounded-lg"
                      style={{ backgroundColor: f.color }}
                    >
                      <f.icon className="size-4 text-black/60" />
                    </span>
                    <span className="type-xs font-medium text-warm-500 uppercase tracking-wider">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="type-3xl text-black">{f.title}</h3>
                  <p className="mt-3 type-sm text-warm-500 text-pretty max-w-md">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
