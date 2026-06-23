"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { Shield, Award, FileCheck, Flame, Cog } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Kalite Yönetim Sistemi",
    details: "Tüm süreçlerimizde uluslararası kalite standartlarını uyguluyoruz.",
  },
  {
    icon: Shield,
    title: "CE İşareti",
    description: "Avrupa Uygunluk Belgesi",
    details: "Ürünlerimiz Avrupa Birliği güvenlik ve performans standartlarına uygundur.",
  },
  {
    icon: FileCheck,
    title: "TSE Belgeleri",
    description: "Türk Standartları Enstitüsü",
    details: "Ulusal standartlara tam uyumlu üretim ve hizmet.",
  },
  {
    icon: Cog,
    title: "ATEX",
    description: "Patlayıcı Ortam Sertifikası",
    details: "Patlayıcı ortamlarda güvenli kullanım için ATEX uyumlu ekipmanlar.",
  },
  {
    icon: Flame,
    title: "GAR / UKCA",
    description: "Gaz Yakan Cihaz Yönetmeliği",
    details: "Brülör ve yakma sistemlerimiz GAR/UKCA regülasyonlarına uygundur.",
  },
];

const partners = [
  "Avrupa ve Uzak Doğu menşeli lider üreticiler",
  "Türkiye'nin önde gelen sanayi kuruluşları",
  "Enerji sektöründe global tedarik zinciri",
];

export function CertificationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-warm-50">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <SectionHeading
            label="Kalite & Sertifikalar"
            title="Uluslararası Standartlarda Kalite"
            description="Ürün ve hizmetlerimiz uluslararası standartlara uygun olarak tasarlanır, üretilir ve test edilir."
          />
        </ScrollReveal>

        <StaggerReveal
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
          staggerDelay={0.08}
        >
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group rounded-2xl bg-white border border-warm-200 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-navy-100 transition-colors">
                <cert.icon className="h-7 w-7 text-navy-600" />
              </div>
              <h3 className="font-semibold text-navy-800 text-sm">
                {cert.title}
              </h3>
              <p className="text-xs text-flame-500 font-medium mt-1">
                {cert.description}
              </p>
              <p className="text-xs text-warm-500 mt-2 leading-relaxed">
                {cert.details}
              </p>
            </div>
          ))}
        </StaggerReveal>

        {/* Partners */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-900 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-5">
              <Shield className="h-6 w-6 text-flame-400" />
              <h3 className="text-lg font-semibold text-white">
                Tedarik Zinciri ve İş Ortakları
              </h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Global tedarik ağımız ve güçlü iş ortaklarımız sayesinde, en kaliteli
              ekipman ve hizmeti rekabetçi fiyatlarla sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-3">
              {partners.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs text-white/60"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
