"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { ShineOverlay } from "@/components/animations/shine-overlay";
import {
  Shield,
  Wrench,
  Zap,
  Users,
  Headphones,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "15 Yıllık Güven",
    description:
      "2009'dan beri endüstriyel yakma sistemlerinde kanıtlanmış uzmanlık ve güvenilirlik.",
    gradient: "from-navy-500/10 to-navy-600/5",
    iconBg: "bg-navy-50",
    iconColor: "text-navy-600",
  },
  {
    icon: Wrench,
    title: "Anahtar Teslim Çözüm",
    description:
      "Mühendislikten devreye almaya, bakımdan yedek parçaya eksiksiz hizmet.",
    gradient: "from-flame-500/10 to-flame-600/5",
    iconBg: "bg-flame-50",
    iconColor: "text-flame-600",
  },
  {
    icon: TrendingUp,
    title: "%40 Enerji Tasarrufu",
    description:
      "Enerji verimliliği projelerimizle işletme maliyetlerinizde kalıcı düşüş.",
    gradient: "from-green-500/10 to-emerald-600/5",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Uzman Mühendis Kadro",
    description:
      "Alanında deneyimli mühendislerimizle her projeye özel yaklaşım.",
    gradient: "from-amber-500/10 to-orange-600/5",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Headphones,
    title: "7/24 Teknik Destek",
    description:
      "Acil durumlarda her an yanınızda, kesintisiz teknik destek hattı.",
    gradient: "from-violet-500/10 to-purple-600/5",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Zap,
    title: "Hızlı Tedarik ve Montaj",
    description:
      "Yerli üretim avantajıyla kısa teslim süreleri ve profesyonel montaj.",
    gradient: "from-cyan-500/10 to-blue-600/5",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0B1D3A 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <SectionHeading
            label="Neden Rotermi"
            title="Sizi Farklı Kılanı Biliyoruz, Çözüm Üretiyoruz"
            description="Endüstriyel yakma sistemlerinde 15 yıllık birikimimiz ile size özel avantajlar sunuyoruz."
          />
        </ScrollReveal>

        <StaggerReveal
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative overflow-hidden rounded-2xl border border-warm-200 bg-white p-6 hover:shadow-xl hover:border-warm-300 transition-all duration-500 hover:-translate-y-2"
            >
              <ShineOverlay />
              <div className="relative z-20">
                <div
                  className={`w-12 h-12 rounded-xl ${reason.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <reason.icon className={`h-6 w-6 ${reason.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-navy-800">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-warm-600 leading-relaxed">
                  {reason.description}
                </p>
                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-flame-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Detaylı Bilgi
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
