import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Rotermi Energy privacy policy.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://rotermi.com.tr/en/gizlilik",
    languages: { "tr-TR": "https://rotermi.com.tr/gizlilik" },
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-navy-900 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Privacy Policy
          </h1>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="max-w-none space-y-6 text-warm-700 leading-relaxed">
            <p>
              As Rotermi Energy, we respect your privacy and care about the security of your personal data. This privacy policy explains how the information collected when you visit our website is used.
            </p>
            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Information Collected
            </h2>
            <p>
              Your name-surname, email, phone, and company information shared through the contact form are collected and processed solely to fulfill your request.
            </p>
            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Information Security
            </h2>
            <p>
              Your personal data is protected with appropriate technical and administrative security measures against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Contact
            </h2>
            <p>
              For questions about our privacy policy, you can contact us at{" "}
              <strong>info@rotermi.com.tr</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
