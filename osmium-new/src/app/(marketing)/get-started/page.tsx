"use client";

import { useState } from "react";
import Link from "next/link";

const examTypes = [
  "JEE (Main / Advanced)",
  "NEET",
  "CUET",
  "UPSC",
  "CAT",
  "Board Exams (CBSE / State)",
  "Other",
];

export default function GetStartedPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    exam: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Left — Branding (hidden on mobile) */}
      <div className="relative hidden md:flex w-full md:w-1/2 h-screen flex-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}
        />


      </div>

      {/* Right — Waitlist form */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto flex flex-col justify-center">
        <div className="px-6 sm:px-10 md:px-14 lg:px-16 py-6 md:py-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[60vh]">
              <div className="size-14 rounded-full bg-brand/10 flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="size-7 text-brand">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="type-3xl text-black">You&apos;re on the list!</h2>
              <p className="mt-2 type-sm text-warm-500 max-w-xs">
                We&apos;ll notify you as soon as early access opens. Meanwhile, try Osmium on WhatsApp!
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2 text-sm font-medium active:scale-95 transition-transform"
                >
                  Back to home
                </Link>
                <a
                  href="https://wa.me/919129139145?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2 text-sm font-medium active:scale-95 transition-transform"
                  style={{ boxShadow: "inset 0 0 12px rgba(0,0,0,0.06), 0px 0px 1px rgba(0,0,0,0.2)" }}
                >
                  Try on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-1.5 mb-6 type-xs text-warm-400 hover:text-black transition-colors cursor-pointer"
              >
                <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
                  <path d="M12.667 8H3.333M7.333 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
              </button>

              <h1 className="type-3xl text-black">Get started with Osmium</h1>
              <p className="mt-2 type-sm text-warm-400 max-w-sm">
                Join the waitlist for early access. We&apos;ll let you know when it&apos;s your turn.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    Full name <span className="text-brand">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="eg. Rahul Sharma"
                    className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    Email <span className="text-brand">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="eg. rahul@gmail.com"
                    className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    WhatsApp number <span className="text-brand">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="eg. 9876543210"
                    className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                  />
                </div>

                {/* Exam type */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    Preparing for <span className="text-brand">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={form.exam}
                      aria-label="Exam type"
                      onChange={(e) => update("exam", e.target.value)}
                      className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none appearance-none cursor-pointer focus:border-black transition-colors"
                    >
                      <option value="" disabled>Select your exam</option>
                      {examTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-0 bottom-2 size-3.5 text-warm-400" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#131313] text-white px-7 py-2.5 text-sm font-medium transition-all duration-300 active:scale-95 hover:bg-warm-800 gap-2"
                    style={{ boxShadow: "inset 0 0 12px rgba(255,255,255,0.15), 0px 0px 2px 0 rgba(0,0,0,0.1)" }}
                  >
                    Join waitlist
                    <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
                      <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="mt-8 pt-6 border-t border-warm-100">
                <p className="type-2xs text-warm-400">
                  Are you an institute or school?{" "}
                  <Link href="/contact" className="text-brand hover:underline font-medium">
                    Talk to our sales team →
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
