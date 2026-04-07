"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircleQuestion, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "What is Navchetna and who do you work with?",
    a: "Navchetna is a creative tech company that blends design, innovation, and engineering to solve real problems. We work with students, startups, institutions, and enterprises.",
  },
  {
    q: "What services do you provide?",
    a: "We cover Android, iOS, and web apps, AI/ML, UI/UX design, branding, marketing, SEO, cloud, IoT, automation, content creation, servers, and even games or desktop software.",
  },
  {
    q: "What is Osmium and how does it help students?",
    a: "Osmium is our AI-powered learning platform. It helps students prepare smarter by generating personalized study material, quizzes, mock tests, and career guidance.",
  },
  {
    q: "What is Natraj and who can use it?",
    a: "Natraj is an AR/AI-based product for learning anatomy. By pointing your phone's camera at a body part, you can view realistic 3D models. Medical students and educators can use it.",
  },
  {
    q: "What makes Navchetna different?",
    a: "We focus on affordability, transparency, and long-term support — customization, maintenance, and guidance even after launch.",
  },
  {
    q: "How do you charge for services?",
    a: "Pricing depends on the scope and type of project. We keep it flexible so clients only pay for what they really need.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Common Questions"
            title={
              <>
                Everything You{" "}
                <em className="font-[var(--font-dm-serif)] italic">
                  Need to Know
                </em>
              </>
            }
            description="Quick answers to help you get started with confidence."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Support card */}
          <ScrollReveal>
            <div className="flex flex-col items-center rounded-2xl border border-black/5 bg-warm-50 p-8 text-center lg:sticky lg:top-28 lg:self-start">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/5 bg-white">
                <MessageCircleQuestion className="h-5 w-5 text-warm-600" />
              </span>
              <h3 className="mt-4 font-[var(--font-dm-serif)] text-xl tracking-tight">
                Need Personal Guidance?
              </h3>
              <p className="mt-2 max-w-sm text-sm text-warm-500">
                Our experts are here to help you find the perfect solution for
                your specific needs.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-medium transition-colors hover:bg-warm-50"
              >
                <Calendar className="h-3.5 w-3.5" />
                Schedule Consultation
              </Link>
            </div>
          </ScrollReveal>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="rounded-xl border border-black/5 bg-white transition-colors hover:border-black/10">
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-warm-400 transition-transform ${
                        openIdx === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: openIdx === i ? "200px" : "0px",
                    }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-warm-600">
                      {faq.a}
                    </p>
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
