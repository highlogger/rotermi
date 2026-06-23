import type { Metadata } from "next";
import { ContactSection } from "@/components/home/contact-section";
import { CtaSection } from "@/components/home/cta-section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Rotermi Energy: Phone +90 850 532 50 85, info@rotermi.com.tr, Deluxia Palace Barbaros Mah. Mor Sümbül Sok. No:5A/88 Floor:3 Ataşehir / İstanbul.",
  alternates: {
    canonical: "https://rotermi.com.tr/en/iletisim",
    languages: { "tr-TR": "https://rotermi.com.tr/iletisim" },
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <span className="text-flame-400 text-sm font-semibold tracking-widest uppercase">
              Contact
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-warm-200/80 max-w-2xl mx-auto">
              Contact us today for your project and we&apos;ll get back to you as soon as possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
      <CtaSection />
    </>
  );
}
