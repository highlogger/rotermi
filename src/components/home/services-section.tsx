"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { ShineOverlay } from "@/components/animations/shine-overlay";
import { CheckCircle, ArrowRight, Lightbulb, Wrench, BarChart3, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Lightbulb,
    title: "Mühendislik ve Projeler",
    description:
      "Anahtar teslim proje yönetimi, fizibilite çalışmaları, proses tasarımı ve teknik şartname hazırlama hizmetleri.",
    features: [
      "Fizibilite ve konsept tasarım",
      "Proses mühendisliği",
      "Proje yönetimi ve saha denetimi",
      "Devreye alma ve performans testleri",
    ],
  },
  {
    icon: Wrench,
    title: "Özel İmalatlar",
    description:
      "Müşteri ihtiyaçlarına özel tasarım ve üretim. Standart dışı ekipman ve sistemlerde uzman kadro.",
    features: [
      "İhtiyaca özel tasarım",
      "Tersine mühendislik",
      "Malzeme seçimi ve kalite kontrol",
      "Yerli üretim avantajı",
    ],
  },
  {
    icon: BarChart3,
    title: "Enerji Verimliliği",
    description:
      "Enerji analizi, optimizasyon ve dönüşüm hizmetleriyle işletme maliyetlerinizi %40'a varan oranda düşürüyoruz.",
    features: [
      "Enerji etüdü ve analiz",
      "Yakıt dönüşüm projeleri",
      "Atık ısı geri kazanımı",
      "Emisyon optimizasyonu",
    ],
  },
  {
    icon: Users,
    title: "Danışmanlık",
    description:
      "Teknik danışmanlık, eğitim ve sürekli destek hizmetleriyle işletmenizin yanındayız.",
    features: [
      "Teknik danışmanlık",
      "Operatör eğitimi",
      "Periyodik bakım programları",
      "7/24 teknik destek",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <SectionHeading
            label="Hizmetlerimiz"
            title="Sadece Ürün Değil, Çözüm Sunuyoruz"
            description="Mühendislikten devreye almaya, enerji verimliliğinden danışmanlığa kadar kapsamlı hizmet portföyümüzle yanınızdayız."
          />
        </ScrollReveal>

        <StaggerReveal className="mt-14 grid sm:grid-cols-2 gap-8" staggerDelay={0.1}>
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-warm-200 bg-white p-6 sm:p-8 hover:border-navy-200 hover:shadow-xl transition-all duration-300"
            >
              <ShineOverlay />
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0 group-hover:bg-navy-100 transition-colors">
                  <service.icon className="h-6 w-6 text-navy-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-navy-800 group-hover:text-navy-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-warm-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-warm-600"
                      >
                        <CheckCircle className="h-4 w-4 text-flame-500 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 text-navy-600 font-semibold hover:text-flame-500 transition-colors group"
            >
              Tüm Hizmetlerimizi İnceleyin
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
