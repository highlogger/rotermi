import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/home/cta-section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import {
  Flame,
  Factory,
  Wind,
  Droplets,
  Thermometer,
  Cpu,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product Groups",
  description:
    "Rotermi Energy product groups: Burners, boilers & equipment, hot air generators, fuel storage tanks, heat exchangers, alternative combustion systems, and control automation.",
  alternates: {
    canonical: "https://rotermi.com.tr/en/urun-gruplari",
    languages: { "tr-TR": "https://rotermi.com.tr/urun-gruplari" },
  },
};

const productGroups = [
  {
    id: "brulorler",
    icon: Flame,
    title: "Burners",
    description:
      "Monoblock, duoblock, and process burner solutions for every capacity and fuel type with maximum combustion efficiency.",
    items: [
      "Monoblock (Domestic) Burners",
      "Duoblock (Industrial) Burners",
      "Process Burners",
      "Flame Tube Combustion Systems (Rotary Kiln Burners)",
      "Duct Burners",
    ],
    gradient: "from-flame-500/10 to-flame-600/5",
    iconBg: "bg-flame-50",
    iconColor: "text-flame-600",
  },
  {
    id: "kazan",
    icon: Factory,
    title: "Boilers & Equipment",
    description:
      "High-efficiency steam boilers, hot oil boilers, and hot water boilers for industrial facilities.",
    items: [
      "Scotch Type Fire Tube Steam Boiler",
      "D Type Water Tube Steam Boiler",
      "Hot Oil Boiler",
      "Hot Water Boiler",
    ],
    gradient: "from-navy-500/10 to-navy-600/5",
    iconBg: "bg-navy-50",
    iconColor: "text-navy-600",
  },
  {
    id: "jenerator",
    icon: Wind,
    title: "Hot Air Generator",
    description:
      "Direct and indirect type hot air generators for industrial processes.",
    items: ["Direct Type Hot Air Generator", "Indirect Type Hot Air Generator"],
    gradient: "from-amber-500/10 to-orange-600/5",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    id: "tank",
    icon: Droplets,
    title: "Fuel Storage Tanks",
    description:
      "Safe and standards-compliant diesel, Fuel-Oil, LNG, and LPG storage tanks.",
    items: [
      "Diesel Storage Tanks",
      "Fuel-Oil Storage Tanks",
      "LNG Storage Tanks",
      "LPG Storage Tanks",
    ],
    gradient: "from-cyan-500/10 to-blue-600/5",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    id: "isi",
    icon: Thermometer,
    title: "Heat Exchangers",
    description:
      "High-efficiency exchanger, recuperator, economizer, and evaporator systems.",
    items: [
      "Exchangers",
      "Recuperators",
      "Economizers",
      "Evaporators",
    ],
    gradient: "from-red-500/10 to-rose-600/5",
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: "alternatif",
    icon: Flame,
    title: "Alternative Combustion Systems",
    description:
      "Complete solutions for converting your existing systems to different fuel types.",
    items: [
      "Natural Gas Conversion Systems",
      "Biogas Conversion Systems",
      "Fuel-Oil Conversions",
      "LNG / LPG Conversions",
      "Diesel Conversions",
      "Oxy-Fuel Systems",
      "Hot Air Combustion Systems",
    ],
    gradient: "from-green-500/10 to-emerald-600/5",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: "otomasyon",
    icon: Cpu,
    title: "Control Automation",
    description:
      "Advanced DCS/PLC-based control systems for full automation and maximum efficiency.",
    items: [
      "DCS/PLC Control Systems",
      "Pneumatic Proportional Control",
      "Mechanical Proportional Control",
      "O₂/CO Trim Systems",
      "Control and Power Panels",
      "Frequency Converters",
    ],
    gradient: "from-violet-500/10 to-purple-600/5",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

export default function ProductGroupsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <span className="text-flame-400 text-sm font-semibold tracking-widest uppercase">
              Our Solutions
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
              Product Groups
            </h1>
            <p className="mt-4 text-lg text-warm-200/80 max-w-2xl mx-auto">
              Industrial combustion system solutions tailored for every sector and capacity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Groups */}
      {productGroups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={`py-16 lg:py-20 ${index % 2 === 0 ? "bg-white" : "bg-warm-50"}`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                  <div
                    className={`w-14 h-14 rounded-2xl ${group.iconBg} flex items-center justify-center mb-5`}
                  >
                    <group.icon className={`h-7 w-7 ${group.iconColor}`} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-800">
                    {group.title}
                  </h2>
                  <p className="mt-3 text-warm-600 leading-relaxed">
                    {group.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-warm-700"
                      >
                        <CheckCircle className="h-4 w-4 text-flame-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/en/iletisim"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-navy-600 hover:text-flame-500 transition-colors group"
                  >
                    Get a Quote for This Product Group
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} delay={0.1}>
                <div
                  className={`rounded-2xl bg-gradient-to-br ${group.gradient} border border-warm-200 p-8 lg:p-10 ${index % 2 === 0 ? "" : "lg:order-1"}`}
                >
                  <div className="space-y-4">
                    {group.items.map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 rounded-xl bg-white/60 backdrop-blur-sm border border-warm-200/50 p-4"
                      >
                        <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center text-xs font-bold text-navy-600 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <span className="text-sm font-medium text-navy-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      <CtaSection />
    </>
  );
}
