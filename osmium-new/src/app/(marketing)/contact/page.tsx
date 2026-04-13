"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

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

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@osmium.co.in", href: "mailto:hello@osmium.co.in" },
  { icon: Phone, label: "Phone", value: "+91 91291 39145", href: "tel:+919129139145" },
  { icon: MapPin, label: "Office", value: "New Delhi, India", href: null },
  { icon: Clock, label: "Response time", value: "Within 24–48 hours", href: null },
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
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left — Details panel (hidden on mobile) */}
      <div className="relative hidden md:flex w-full md:w-[45%] flex-none">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/contact-bg.png"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 100%)" }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full px-8 sm:px-12 md:px-14 py-12 md:py-16">
        </div>
      </div>

      {/* Right — Form */}
      <div className="w-full md:w-[55%] overflow-y-auto flex flex-col justify-center bg-white">
        <div className="px-6 sm:px-10 md:px-14 lg:px-16 py-10 md:py-14">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center min-h-[50vh]">
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

              <h2 className="type-3xl text-black mb-1">Contact Sales</h2>
              <p className="type-sm text-warm-400 mb-8">
                Fill in the details below and we&apos;ll reach out shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    Work email <span className="text-brand">*</span>
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
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="eg. 9129139145"
                    className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                  />
                </div>

                {/* Designation + Institute */}
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

                {/* Type + Students */}
                <div className="grid grid-cols-2 gap-x-6">
                  <div>
                    <label className="type-2xs font-medium text-black">
                      Institute type <span className="text-brand">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={form.type}
                        aria-label="Type of institute"
                        onChange={(e) => update("type", e.target.value)}
                        className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none appearance-none cursor-pointer focus:border-black transition-colors"
                      >
                        <option value="" disabled>Please select</option>
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
                        <option value="" disabled>Please select</option>
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
                    Requirements &amp; goals
                  </label>
                  <textarea
                    rows={3}
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
                    <ArrowRight className="size-3.5" />
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
