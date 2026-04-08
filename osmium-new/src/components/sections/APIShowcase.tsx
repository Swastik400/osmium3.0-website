"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "Osmium Mock Engine",
    desc: "AI-generated tests with 50% real exam prediction accuracy",
  },
  {
    title: "Osmium Tutor API",
    desc: "Instant doubt resolution with step-by-step explanations",
  },
  {
    title: "Osmium Career API",
    desc: "Personalized career roadmaps based on skills and interests",
  },
];

/* ── Code lines with syntax tokens ── */

type Token = { text: string; role: "keyword" | "plain" | "func" | "string" | "comment" };

const lightColors: Record<Token["role"], string> = {
  keyword: "#F41A2F",
  plain: "#000",
  func: "#0A59D2",
  string: "#052F70",
  comment: "#8A8A8A",
};

const darkColors: Record<Token["role"], string> = {
  keyword: "#FF7B72",
  plain: "#E6EDF3",
  func: "#79C0FF",
  string: "#A5D6FF",
  comment: "#8B949E",
};

const codeLines: Token[][] = [
  [
    { text: "import", role: "keyword" },
    { text: " { OsmiumClient } ", role: "plain" },
    { text: "from", role: "keyword" },
    { text: ' "@osmium/sdk"', role: "string" },
    { text: ";", role: "plain" },
  ],
  [],
  [
    { text: "const", role: "keyword" },
    { text: " client", role: "func" },
    { text: " = new OsmiumClient({ ", role: "plain" },
    { text: "apiKey:", role: "func" },
    { text: ' "YOUR_API_KEY"', role: "string" },
    { text: " });", role: "plain" },
  ],
  [],
  [{ text: "// Generate a mock test", role: "comment" }],
  [
    { text: "const", role: "keyword" },
    { text: " test", role: "func" },
    { text: " = ", role: "plain" },
    { text: "await", role: "keyword" },
    { text: " client.mockTests.generate({", role: "plain" },
  ],
  [
    { text: "  subject:", role: "func" },
    { text: ' "physics"', role: "string" },
    { text: ",", role: "plain" },
  ],
  [
    { text: "  exam:", role: "func" },
    { text: ' "jee_mains_2025"', role: "string" },
    { text: ",", role: "plain" },
  ],
  [
    { text: "  difficulty:", role: "func" },
    { text: ' "adaptive"', role: "string" },
    { text: ",", role: "plain" },
  ],
  [
    { text: "  questions:", role: "func" },
    { text: " 30", role: "string" },
    { text: ",", role: "plain" },
  ],
  [{ text: "});", role: "plain" }],
  [],
  [{ text: "// Ask the AI tutor", role: "comment" }],
  [
    { text: "const", role: "keyword" },
    { text: " answer", role: "func" },
    { text: " = ", role: "plain" },
    { text: "await", role: "keyword" },
    { text: " client.tutor.ask({", role: "plain" },
  ],
  [
    { text: "  question:", role: "func" },
    { text: ' "Explain Faraday\'s law"', role: "string" },
    { text: ",", role: "plain" },
  ],
  [
    { text: "  format:", role: "func" },
    { text: ' "step_by_step"', role: "string" },
    { text: ",", role: "plain" },
  ],
  [{ text: "});", role: "plain" }],
];

/* ── Typewriter component ── */

function TypewriterCode({ dark }: { dark: boolean }) {
  const colors = dark ? darkColors : lightColors;
  const ref = useRef<HTMLPreElement>(null);
  const hasStarted = useRef(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  // Start animation on scroll into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          setVisibleLines(1);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Type characters then advance to next line
  useEffect(() => {
    if (visibleLines === 0) return;
    const lineIdx = visibleLines - 1;
    if (lineIdx >= codeLines.length) {
      setDone(true);
      return;
    }

    const currentLine = codeLines[lineIdx];
    const totalChars = currentLine.reduce((sum, t) => sum + t.text.length, 0);

    // Empty line — skip quickly
    if (totalChars === 0) {
      const timer = setTimeout(() => {
        setCharIndex(0);
        setVisibleLines((v) => v + 1);
      }, 80);
      return () => clearTimeout(timer);
    }

    if (charIndex < totalChars) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), 22);
      return () => clearTimeout(timer);
    }

    // Line done, move to next
    const timer = setTimeout(() => {
      setCharIndex(0);
      setVisibleLines((v) => v + 1);
    }, 120);
    return () => clearTimeout(timer);
  }, [visibleLines, charIndex]);

  // Render a line with partial characters
  const renderLine = (tokens: Token[], maxChars: number) => {
    let remaining = maxChars;
    return tokens.map((token, i) => {
      if (remaining <= 0) return null;
      const visible = token.text.slice(0, remaining);
      remaining -= visible.length;
      return (
        <span key={i} style={{ color: colors[token.role] }}>
          {visible}
        </span>
      );
    });
  };

  return (
    <pre ref={ref} className="text-xs leading-6 font-mono">
      <code>
        {codeLines.map((line, i) => {
          if (i >= visibleLines) return null;
          const isCurrentLine = i === visibleLines - 1 && !done;
          const totalChars = line.reduce((sum, t) => sum + t.text.length, 0);
          const chars = isCurrentLine ? charIndex : totalChars;

          return (
            <span key={i} className="block">
              {line.length === 0 ? (
                "\u00A0"
              ) : (
                <>
                  {renderLine(line, chars)}
                  {isCurrentLine && (
                    <span className="inline-block w-[2px] h-[14px] bg-brand/70 align-middle ml-px animate-pulse" />
                  )}
                </>
              )}
            </span>
          );
        })}
      </code>
    </pre>
  );
}

/* ── Code block with theme toggle ── */

function CodeBlock() {
  const [dark, setDark] = useState(false);

  const bg = dark ? "#0D1117" : "rgb(243 243 241)";
  const fadeBg = dark
    ? "linear-gradient(to right, #0D1117 0%, transparent 100%)"
    : "linear-gradient(to right, rgb(243 243 241) 0%, rgb(243 243 241 / 0) 100%)";
  const fadeBgR = dark
    ? "linear-gradient(to left, #0D1117 0%, transparent 100%)"
    : "linear-gradient(to left, rgb(243 243 241) 0%, rgb(243 243 241 / 0) 100%)";
  const ringColor = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.075)";

  return (
    <div className="px-4 pb-4 lg:pt-4 flex">
      <div
        className="relative flex w-full rounded-[1.25rem] transition-colors duration-500"
        style={{ backgroundColor: bg }}
      >
        {/* Theme toggle */}
        <button
          onClick={() => setDark((d) => !d)}
          className="absolute top-3 right-3 z-20 flex items-center justify-center size-8 rounded-lg transition-colors duration-300 cursor-pointer"
          style={{
            backgroundColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
          }}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? (
            <svg viewBox="0 0 20 20" fill="none" className="size-4" style={{ color: "#E6EDF3" }}>
              <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="none" className="size-4" style={{ color: "#000" }}>
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.003 8.003 0 1010.586 10.586z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <div className="w-full overflow-auto py-5 rounded-[1.25rem] flex scrollbar-none">
          <div className="sticky left-0 w-6 flex-none transition-all duration-500" style={{ background: fadeBg }} />
          <TypewriterCode dark={dark} />
          <div className="sticky right-0 w-6 flex-none transition-all duration-500" style={{ background: fadeBgR }} />
        </div>

        {/* Inset ring */}
        <div
          className="absolute inset-0 rounded-[1.25rem] ring-[0.5px] ring-inset pointer-events-none transition-all duration-500"
          style={{ boxShadow: `inset 0 0 0 0.5px ${ringColor}` }}
        />
      </div>
    </div>
  );
}

/* ── Section ── */

export function APIShowcase() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative border-l border-r border-black/[0.06]">
          {/* Top divider */}
          <div className="relative">
            <div className="mt-0.5 h-[1px] w-full bg-black/[0.06]" />
          </div>

          {/* Content */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
              {/* Left — description + features */}
              <div className="relative px-4 md:px-12 text-pretty py-12 flex flex-col justify-between">
                <div>
                  <h3 className="type-xl text-black">Osmium Integration API</h3>
                  <div className="mt-4 type-base text-warm-500">
                    <p>
                      Integrate Osmium&apos;s AI-powered exam prediction, personalized
                      tutoring, and career mapping directly into your institute&apos;s
                      existing platform. Built for scale, designed for India.
                    </p>
                  </div>

                  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mt-12">
                    {features.map((f) => (
                      <div key={f.title}>
                        <h4 className="type-sm text-black">{f.title}</h4>
                        <p className="type-sm mt-3 text-warm-500">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden w-px lg:block bg-black/[0.06]" />

              {/* Right — code snippet with typewriter */}
              <CodeBlock />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
