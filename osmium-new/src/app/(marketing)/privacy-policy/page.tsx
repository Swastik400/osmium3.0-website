import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-28 sm:pt-36 md:pt-44 pb-10 md:pb-14">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="type-xs text-warm-400 mb-4">August 6, 2025</p>
            <h1 className="type-6xl text-black text-balance">
              Privacy Policy
            </h1>
            <p className="mt-6 type-base text-warm-600 text-pretty">
              Osmium (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) is committed to protecting your privacy and
              ensuring transparency in how we collect, use, and store your data.
              This Privacy Policy explains what information we collect, why we
              collect it, and how you can manage your information.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-warm-50">
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />

              <article className="p-6 sm:p-10 md:p-14 space-y-10">
                <div>
                  <h2 className="type-2xl text-black mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="type-sm text-warm-600 mb-4">
                    When you use the Osmium platform, we may collect the
                    following types of information:
                  </p>
                  <ul className="space-y-3">
                    {[
                      ["Account Details", "Email address, full name, and authentication credentials."],
                      ["Educational Data", "Learning activity, test results, quiz interactions, and study analytics."],
                      ["Camera Input", "Images taken through your device\u2019s camera for document scanning, answer sheet uploads, or profile pictures."],
                      ["Device & Usage Data", "Browser type, IP address, app version, and usage logs to improve our services."],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3">
                        <span className="mt-1.5 size-1.5 rounded-full bg-brand flex-none" />
                        <p className="type-sm text-warm-600">
                          <span className="font-medium text-black">{title}:</span>{" "}
                          {desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="type-2xl text-black mb-4">
                    2. Why We Use Camera Permissions
                  </h2>
                  <p className="type-sm text-warm-600 mb-4">
                    Osmium requests camera access strictly for user-initiated
                    educational features:
                  </p>
                  <ul className="space-y-3">
                    {[
                      ["Document Scanning", "To digitize physical test papers, notes, and educational material."],
                      ["Answer Sheet Upload", "For submitting handwritten responses in exams or assignments."],
                      ["Profile Pictures", "Allowing users to personalize their accounts with profile images."],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3">
                        <span className="mt-1.5 size-1.5 rounded-full bg-brand flex-none" />
                        <p className="type-sm text-warm-600">
                          <span className="font-medium text-black">{title}:</span>{" "}
                          {desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="type-sm text-warm-600 mt-4">
                    Camera access is granted only when explicitly initiated by
                    the user. We never access your camera in the background or
                    without consent.
                  </p>
                </div>

                <div>
                  <h2 className="type-2xl text-black mb-4">
                    3. How We Use Your Information
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "To personalize learning paths and provide targeted academic support.",
                      "To process scanned documents and convert them into interactive assessments.",
                      "To generate performance insights and academic progress reports.",
                      "To improve platform features, fix bugs, and enhance overall user experience.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 size-1.5 rounded-full bg-brand flex-none" />
                        <p className="type-sm text-warm-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="type-2xl text-black mb-4">
                    4. Data Security &amp; Storage
                  </h2>
                  <p className="type-sm text-warm-600 mb-4">
                    All user data is stored securely on AWS infrastructure with
                    industry-grade encryption and protection. We implement best
                    practices to prevent unauthorized access, data breaches, and
                    misuse.
                  </p>
                  <p className="type-sm text-warm-600">
                    Captured images and user-generated content are processed only
                    for educational use and never shared with third parties for
                    advertising or unrelated purposes.
                  </p>
                </div>

                <div>
                  <h2 className="type-2xl text-black mb-4">
                    5. Data Sharing &amp; Third Parties
                  </h2>
                  <p className="type-sm text-warm-600">
                    We do not sell or rent your personal data. We may share
                    necessary data with third-party service providers (such as
                    AWS) only to support core functionalities like hosting,
                    storage, and analytics. All third parties comply with strict
                    data privacy standards.
                  </p>
                </div>

                <div className="h-px bg-black/[0.06]" />

                <div>
                  <h2 className="type-2xl text-black mb-4">Contact Us</h2>
                  <p className="type-sm text-warm-600 mb-4">
                    If you have any questions, concerns, or data access requests,
                    please reach out to our support team at:
                  </p>
                  <a
                    href="mailto:info@osmium.co.in"
                    className="type-sm text-brand font-medium hover:underline"
                  >
                    info@osmium.co.in
                  </a>
                </div>

                <div className="h-px bg-black/[0.06]" />

                <div className="text-center py-4">
                  <p className="type-sm text-warm-600 text-pretty max-w-lg mx-auto">
                    Thank you for trusting Osmium with your learning journey.
                    Your privacy is our priority, and we&apos;re committed to
                    creating a safe, secure, and empowering educational
                    experience for every student across India.
                  </p>
                  <div className="mt-8 space-y-1">
                    <p className="type-sm font-medium text-black">
                      Team Osmium
                    </p>
                    <p className="type-xs text-warm-400">
                      Founders, Navchetna Technology
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
