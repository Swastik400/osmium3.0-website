"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WebGLBackground } from "@/components/ui/WebGLBackground";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LogoCarousel } from "@/components/ui/LogoCarousel";

const logos = [
  { name: "AWS", src: "/ref/aws.svg", imgStyle: { transform: "rotate(-2deg)" } },
  { name: "HomeGuru", src: "/ref/homeguru.svg" },
  { name: "NineOne15²", src: "/ref/nineone.svg" },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden selection:bg-brand/30">
      {/* ── Full background that covers hero + trusted by ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, #fff4e6 0%, #ffe0b2 35%, #ffcc80 55%, #f5e6d0 78%, #FDFCFC 100%)",
        }}
      />

      {/* ── Mountain WebGL — sits in the middle band ── */}
      <div className="absolute left-0 right-0 z-[1]" style={{ top: "45%", height: "30%" }}>
        <WebGLBackground />
      </div>


      {/* ── Hero content ── */}
      <div className="relative z-10 h-screen min-h-[700px] flex flex-col justify-center items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.25em] font-semibold mb-6"
          style={{ color: "rgba(100, 55, 20, 0.5)" }}
        >
          India&apos;s AI Exam Strategist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading leading-[1.05] tracking-tight select-none"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", color: "rgba(80, 40, 10, 0.9)" }}
        >
          We Don&apos;t Guess Exams.
          <br />
          <span style={{ color: "rgba(80, 40, 10, 0.55)" }}>We Predict Them.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-lg text-sm leading-relaxed"
          style={{ color: "rgba(100, 55, 20, 0.5)" }}
        >
          Osmium is your AI exam strategist, built from thousands of past papers,
          trained to predict what&apos;s coming next. Up to 50% of your real exam, decoded.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-8 flex items-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#6b3a1f] text-white px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-[#5a3018] active:scale-[0.98] shadow-lg"
          >
            Get started <ArrowRight size={14} />
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border text-sm font-medium px-6 py-2.5 transition-all duration-300 hover:border-[rgba(100,55,20,0.4)]"
            style={{ borderColor: "rgba(100, 55, 20, 0.2)", color: "rgba(100, 55, 20, 0.6)" }}
          >
            Explore features
          </Link>
        </motion.div>
      </div>

      {/* ── Trusted By — lives inside the same section ── */}
      <div className="relative z-10 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-8">
              <p className="font-semibold text-xs uppercase tracking-[3px]" style={{ color: "rgba(100, 55, 20, 0.35)" }}>
                Trusted by leading institutions and partners
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10">
              <LogoCarousel logos={logos} speed={30} logoWidth={160} gap={80} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
