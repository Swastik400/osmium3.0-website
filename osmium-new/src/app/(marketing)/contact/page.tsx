"use client";

import { useState } from "react";
import Link from "next/link";

const instituteTypes = [
  "School (K-12)",
  "Coaching Institute",
  "College / University",
  "EdTech Company",
  "Government Body",
  "Corporate Training",
  "Other",
];

const studentRanges = [
  "Under 500",
  "500 – 2,000",
  "2,000 – 10,000",
  "10,000 – 50,000",
  "50,000+",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    designation: "",
    institute: "",
    type: "",
    students: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Left — Image (fixed height, no scroll) */}
      <div className="relative w-full lg:w-1/2 h-[30vh] lg:h-screen flex-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ref/redchdw2op-bento-orange-blue-2@3x.jpeg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
        />
      </div>

      {/* Right — Form (scrollable within viewport) */}
      <div className="w-full lg:w-1/2 h-[70vh] lg:h-screen overflow-y-auto flex flex-col justify-center">
        <div className="px-6 sm:px-10 md:px-14 lg:px-16 py-6 lg:py-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[60vh]">
              <div className="size-14 rounded-full bg-brand/10 flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="size-7 text-brand">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="type-3xl text-black">Thank you!</h2>
              <p className="mt-2 type-sm text-warm-500 max-w-xs">
                Our team will get back to you within 24–48 hours.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2 text-sm font-medium active:scale-95 transition-transform"
              >
                Back to home
              </Link>
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
              <h1 className="type-3xl text-black mb-8">Contact Sales</h1>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First + Last name */}
                <div className="grid grid-cols-2 gap-x-6">
                  <div>
                    <label className="type-2xs font-medium text-black">
                      First name <span className="text-brand">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      placeholder="eg. John"
                      className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="type-2xs font-medium text-black">
                      Last name <span className="text-brand">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      placeholder="eg. Doe"
                      className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    Work Email <span className="text-brand">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="eg. john.doe@institute.edu"
                    className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    Mobile phone number <span className="text-brand">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="eg: 9129139145"
                    className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                  />
                </div>

                {/* Designation + Institute (side by side) */}
                <div className="grid grid-cols-2 gap-x-6">
                  <div>
                    <label className="type-2xs font-medium text-black">
                      Job title <span className="text-brand">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.designation}
                      onChange={(e) => update("designation", e.target.value)}
                      placeholder="eg. Principal"
                      className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="type-2xs font-medium text-black">
                      Institute name <span className="text-brand">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.institute}
                      onChange={(e) => update("institute", e.target.value)}
                      placeholder="eg. Delhi Public School"
                      className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Type + Students (side by side) */}
                <div className="grid grid-cols-2 gap-x-6">
                  <div>
                    <label className="type-2xs font-medium text-black">
                      Institute type <span className="text-brand">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={form.type}
                        aria-label="Type of inquiry"
                        onChange={(e) => update("type", e.target.value)}
                        className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none appearance-none cursor-pointer focus:border-black transition-colors"
                      >
                        <option value="" disabled>Please Select</option>
                        {instituteTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <svg className="pointer-events-none absolute right-0 bottom-2 size-3.5 text-warm-400" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="type-2xs font-medium text-black">
                      Number of students
                    </label>
                    <div className="relative">
                      <select
                        value={form.students}
                        onChange={(e) => update("students", e.target.value)}
                        aria-label="Number of students"
                        className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none appearance-none cursor-pointer focus:border-black transition-colors"
                      >
                        <option value="" disabled>Please Select</option>
                        {studentRanges.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      <svg className="pointer-events-none absolute right-0 bottom-2 size-3.5 text-warm-400" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    Requirements &amp; Goals
                  </label>
                  <textarea
                    rows={2}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your needs..."
                    className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#131313] text-white px-7 py-2.5 text-sm font-medium transition-all duration-300 active:scale-95 hover:bg-warm-800 gap-2"
                    style={{ boxShadow: "inset 0 0 12px rgba(255,255,255,0.15), 0px 0px 2px 0 rgba(0,0,0,0.1)" }}
                  >
                    Send Request
                    <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
                      <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
