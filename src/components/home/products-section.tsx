"use client";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { ShineOverlay } from "@/components/animations/shine-overlay";
import {
  Flame,
  Factory,
  Wind,
  Droplets,
  Thermometer,
  Cpu,
  ArrowRight,
} from "lucide-react";

const productCategories = [
  {
    icon: Flame,
    title: "Brülörler",
    description:
      "Monoblok, duoblok ve proses brülörler ile her kapasitede yakma çözümü.",
    href: "/urun-gruplari#brulorler",
    items: 5,
    gradient: "from-flame-500/10 to-flame-600/5",
    iconBg: "bg-flame-50 text-flame-600",
  },
  {
    icon: Factory,
    title: "Kazan ve Ekipmanları",
    description:
      "Buhar kazanı, kızgın yağ kazanı, sıcak su kazanı ve ekipmanları.",
    href: "/urun-gruplari#kazan",
    items: 4,
    gradient: "from-navy-500/10 to-navy-600/5",
    iconBg: "bg-navy-50 text-navy-600",
  },
  {
    icon: Wind,
    title: "Sıcak Hava Jeneratörü",
    description:
      "Direkt ve indirekt tip sıcak hava jeneratörleri ile endüstriyel ısıtma.",
    href: "/urun-gruplari#jenerator",
    items: 2,
    gradient: "from-amber-500/10 to-orange-600/5",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    icon: Droplets,
    title: "Yakıt Depolama Tankları",
    description:
      "Motorin, Fuel-Oil, LNG, LPG depolama tankları ve güvenlik sistemleri.",
    href: "/urun-gruplari#tank",
    items: 4,
    gradient: "from-cyan-500/10 to-blue-600/5",
    iconBg: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Thermometer,
    title: "Isı Değiştiriciler",
    description:
      "Eşanjör, reküperatör, ekonomizer ve evaporatör çözümleri.",
    href: "/urun-gruplari#isi",
    items: 4,
    gradient: "from-red-500/10 to-rose-600/5",
    iconBg: "bg-red-50 text-red-600",
  },
  {
    icon: Cpu,
    title: "Kontrol Otomasyon",
    description:
      "DCS/PLC, pnömatik oransal, O₂/CO trim ve frekans çevirici sistemler.",
    href: "/urun-gruplari#otomasyon",
    items: 6,
    gradient: "from-violet-500/10 to-purple-600/5",
    iconBg: "bg-violet-50 text-violet-600",
  },
];

export function ProductsSection() {
  return (
    <section className="py-20 lg:py-28 bg-warm-50">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <SectionHeading
            label="Ürün Grupları"
            title="Endüstriyel Yakma Çözümlerimiz"
            description="Her sektöre ve kapasiteye özel, mühendislik harikası ürün gruplarımız ile enerji ihtiyaçlarınıza çözüm sunuyoruz."
          />
        </ScrollReveal>

        <StaggerReveal className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {productCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-white border border-warm-200 p-6 hover:shadow-xl hover:shadow-navy-900/5 hover:border-warm-300 transition-all duration-300 hover:-translate-y-1.5"
            >
              <ShineOverlay />
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${category.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-navy-800 group-hover:text-navy-900 transition-colors">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-warm-600 leading-relaxed">
                  {category.description}
                </p>

                {/* Bottom row */}
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-warm-100">
                  <span className="text-xs font-medium text-warm-500">
                    {category.items} alt ürün grubu
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 group-hover:text-flame-500 transition-colors">
                    İncele
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </StaggerReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/urun-gruplari"
              className="inline-flex items-center gap-2 text-navy-600 font-semibold hover:text-flame-500 transition-colors group"
            >
              Tüm Ürün Gruplarını Görüntüle
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
