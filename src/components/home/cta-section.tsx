"use client";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden gradient-energy">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Enerji Çözümünüz İçin{" "}
            <span className="text-flame-400">Harekete Geçin</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-4 text-lg text-warm-200/80 max-w-2xl mx-auto leading-relaxed">
            Endüstriyel yakma sistemleri, enerji verimliliği ve mühendislik
            çözümlerimizle ilgili detaylı bilgi almak, teklif istemek veya
            projenizi görüşmek için hemen bizimle iletişime geçin.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3} distance={30}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-xl bg-flame-500 px-8 py-4 text-base font-semibold text-white hover:bg-flame-600 active:bg-flame-700 transition-all shadow-lg hover:shadow-xl hover:shadow-flame-500/25 active:scale-[0.97] group"
            >
              Teklif Al
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+908505325085"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 active:bg-white/15 transition-all group"
            >
              <Phone className="h-5 w-5" />
              0 850 532 50 85
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
