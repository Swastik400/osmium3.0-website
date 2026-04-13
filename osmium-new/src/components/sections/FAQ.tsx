"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircleQuestion, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  { q: "What is Osmium?", a: "Osmium is an AI-powered education and career guidance platform built for Indian students. It offers smart mock tests, personalized learning, career mapping, and mental health support — all in one place." },
  { q: "How does Osmium predict exam questions?", a: "Osmium is trained on thousands of past papers and uses AI to analyze patterns, trends, and question frequencies. It generates mock tests that closely mirror real exam conditions." },
  { q: "Is Osmium available for individual students?", a: "Osmium is currently available for institutes. Access for individual students is on the way — stay tuned!" },
  { q: "What exams does Osmium support?", a: "Osmium supports a wide range of competitive and academic exams across India, with AI-powered preparation tailored to each exam's unique pattern." },
  { q: "How does the career guidance feature work?", a: "Osmium analyzes your skills, interests, and academic performance to build a personalized career roadmap — showing you where to begin, what to learn next, and how to reach your goals." },
  { q: "Who built Osmium?", a: "Osmium is built by Navchetna Technology (NINELLMS SOLUTIONS LLP), a passionate team of student innovators dedicated to transforming education through AI." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-warm-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Common Questions"
            title="Everything You Need to Know"
            description="Quick answers to help you get started with Osmium."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="flex flex-col items-center rounded-2xl border border-black/5 bg-white p-8 text-center lg:sticky lg:top-28 lg:self-start">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/5 bg-warm-50">
                <MessageCircleQuestion className="h-5 w-5 text-warm-600" />
              </span>
              <h3 className="mt-4 type-xl font-medium text-black">
                Need Help Getting Started?
              </h3>
              <p className="mt-2 max-w-sm type-sm text-warm-500">
                Our team is here to help your institute get set up with Osmium.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 type-sm font-medium transition-colors hover:bg-warm-50"
              >
                <Calendar className="h-3.5 w-3.5" />
                Contact Us
              </Link>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="rounded-xl border border-black/5 bg-white transition-colors hover:border-black/10">
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="type-sm font-medium">{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-warm-400 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openIdx === i ? "200px" : "0px" }}>
                    <p className="px-5 pb-5 type-sm text-warm-600">{faq.a}</p>
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
