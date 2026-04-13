"use client";

import { useEffect, useRef, useState } from "react";

const layers = [
  {
    id: "mock-tests",
    title: "Smart Mock Tests",
    description: "AI-generated tests trained on thousands of past papers. Adaptive difficulty that adjusts to your level, real exam patterns, instant scoring, and detailed analytics.",
    tags: ["Exam Prediction", "Adaptive", "Analytics"],
    image: "/Group 1712.png",
    bg: "/ref/gmhm1kxxzgd-Background7.jpeg",
  },
  {
    id: "ai-tutor",
    title: "AI Study Mentor",
    description: "Get crystal-clear answers in seconds with visual explanations, step-by-step logic, and real examples. Like having a personal tutor available 24/7 in 70+ languages.",
    tags: ["Doubt Solving", "Concepts", "Practice", "Languages"],
    image: "/Group 1713.png",
    bg: "/ref/green.jpeg",
  },
  {
    id: "career-path",
    title: "Career Path Intelligence",
    description: "No confusion, no guessing. Osmium builds a crystal-clear roadmap showing where to begin, what to learn next, and how to reach your goals.",
    tags: ["Skill Analysis", "Roadmap", "Jobs", "Mentorship"],
    image: "/Group 1708 1.png",
    bg: "/ref/redchdw2op-bento-orange-blue-2@3x.jpeg",
  },
  {
    id: "whatsapp",
    title: "Learn on WhatsApp",
    description: "Access Osmium directly from WhatsApp. Ask doubts, take quizzes, get career guidance, and receive daily study reminders \u2014 all without downloading an app.",
    tags: ["Instant Doubts", "Daily Practice", "Reminders", "No App Needed"],
    image: "/AI study mentor chat interface design.png",
    bg: "/ref/redchdw2op-bento-orange-blue-2@3x.jpeg",
  },
];

export function StackLayers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const totalScroll = sectionHeight - viewportHeight;
      const p = Math.max(0, Math.min(1, scrolled / totalScroll));
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = Math.min(Math.floor(progress * layers.length), layers.length - 1);
  const layerProgress = (progress * layers.length) - activeIndex;

  const getImageStyle = (i: number): React.CSSProperties => {
    const diff = i - activeIndex;
    if (diff === 0) {
      return {
        opacity: 1,
        transform: `scale(1) translateY(0px)`,
        zIndex: 10,
      };
    }
    if (diff === 1) {
      const delayed = Math.max(0, (layerProgress - 0.5) * 2);
      return {
        opacity: delayed * 0.5,
        transform: `scale(${0.92 + delayed * 0.08}) translateY(${20 - delayed * 20}px)`,
        zIndex: 5,
      };
    }
    if (diff === -1) {
      return {
        opacity: Math.max(0, 1 - layerProgress * 4),
        transform: `scale(${1 - layerProgress * 0.1}) translateY(${-layerProgress * 30}px)`,
        zIndex: 5,
      };
    }
    return { opacity: 0, transform: "scale(0.85) translateY(40px)", zIndex: 1 };
  };

  const getTextStyle = (i: number): { opacity: number; blur: number; translateY: number } => {
    if (i === activeIndex) return { opacity: 1, blur: 0, translateY: 0 };
    if (i === activeIndex + 1) {
      const delayed = Math.max(0, (layerProgress - 0.5) * 2);
      return { opacity: delayed * 0.4, blur: 6 - delayed * 6, translateY: 10 - delayed * 10 };
    }
    return { opacity: 0, blur: 6, translateY: 10 };
  };

  return (
    <div ref={sectionRef} style={{ height: `${layers.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-12 md:mb-16">
            <p className="font-medium text-warm-500 text-xs text-center uppercase tracking-[2px]">
              For Students | Institutes | Educators
            </p>
            <h2 className="type-5xl text-black text-center text-balance" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Everything you need to learn smarter
            </h2>
          </div>

          {/* Content: images + text */}
          <div className="flex flex-col md:flex-row items-stretch w-full">
            {/* Left — Product images with bg */}
            <div className="relative border border-warm-200 rounded-[32px] md:rounded-[48px] w-full md:w-1/2 h-[280px] md:h-[480px] overflow-hidden bg-warm-50">
              {/* Background images */}
              {layers.map((layer, i) => (
                <div
                  key={`bg-${layer.id}`}
                  className="absolute inset-0"
                  style={{
                    opacity: i === activeIndex ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={layer.bg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${layer.id === "whatsapp" ? "bg-black/10" : "bg-black/40"}`} />
                </div>
              ))}

              {/* Product images */}
              {layers.map((layer, i) => (
                <div
                  key={layer.id}
                  className="absolute inset-0 flex items-center justify-center p-6 md:p-10"
                  style={{
                    ...getImageStyle(i),
                    willChange: "transform, opacity",
                    transition: "none",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={layer.image}
                    alt={layer.title}
                    className="max-h-full max-w-full object-contain drop-shadow-2xl rounded-2xl"
                  />
                </div>
              ))}
            </div>

            {/* Right — Text blocks */}
            <div className="relative w-full md:w-1/2 min-h-[240px] md:min-h-0">
              {layers.map((layer, i) => {
                const textStyle = getTextStyle(i);
                return (
                  <div
                    key={layer.id}
                    className="absolute inset-0 flex flex-col gap-8 px-6 md:px-20 py-8 md:py-16 justify-center"
                    style={{ opacity: textStyle.opacity, transition: "opacity 0.1s ease" }}
                  >
                    <div className="flex flex-col gap-3 md:gap-4">
                      <h3 className="type-3xl text-black" style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}>
                        {layer.title.split(" ").map((word, wi) => (
                          <span
                            key={wi}
                            className="inline-block mr-[0.3em]"
                            style={{
                              opacity: textStyle.opacity,
                              filter: `blur(${textStyle.blur}px)`,
                              transition: `opacity 0.3s ease ${wi * 0.05}s, filter 0.3s ease ${wi * 0.05}s`,
                            }}
                          >
                            {word}
                          </span>
                        ))}
                      </h3>
                      <p
                        className="max-w-[480px] type-sm text-warm-500 leading-[1.55]"
                        style={{
                          opacity: textStyle.opacity,
                          transform: `translateY(${textStyle.translateY}px)`,
                          transition: "opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s",
                        }}
                      >
                        {layer.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {layer.tags.map((tag, ti) => (
                        <span
                          key={tag}
                          className="inline-flex items-center bg-warm-50 px-3 md:px-5 py-2 md:py-2.5 border border-warm-200 rounded-full type-xs text-warm-700"
                          style={{
                            opacity: textStyle.opacity,
                            transform: `scale(${0.8 + textStyle.opacity * 0.2})`,
                            transition: `opacity 0.3s ease ${0.15 + ti * 0.05}s, transform 0.3s ease ${0.15 + ti * 0.05}s`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
