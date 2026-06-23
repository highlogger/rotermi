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
  Settings,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ürün Grupları",
  description:
    "Rotermi Enerji ürün grupları: Brülörler, kazan ve ekipmanları, sıcak hava jeneratörü, yakıt depolama tankları, ısı değiştiriciler, alternatif yakma sistemleri ve kontrol otomasyon.",
};

const productGroups = [
  {
    id: "brulorler",
    icon: Flame,
    title: "Brülörler",
    description:
      "Her kapasite ve yakıt tipine uygun monoblok, duoblok ve proses brülör çözümlerimiz ile maksimum yanma verimi.",
    items: [
      "Monoblok (Domestik) Brülörler",
      "Duoblok (Sanayi) Brülörleri",
      "Proses Bekler / Brülörler",
      "Alev Borusu Yakma Sistemleri (Döner Fırın Brülörleri)",
      "Kanal Brülörleri",
    ],
    gradient: "from-flame-500/10 to-flame-600/5",
    iconBg: "bg-flame-50",
    iconColor: "text-flame-600",
  },
  {
    id: "kazan",
    icon: Factory,
    title: "Kazan ve Ekipmanları",
    description:
      "Endüstriyel tesisler için yüksek verimli buhar kazanı, kızgın yağ kazanı ve sıcak su kazanı çözümleri.",
    items: [
      "Skoç Tipi Alev Duman Borulu Buhar Kazanı",
      "D Tipi Su Borulu Buhar Kazanı",
      "Kızgın Yağ Kazanı",
      "Sıcak Su Kazanı",
    ],
    gradient: "from-navy-500/10 to-navy-600/5",
    iconBg: "bg-navy-50",
    iconColor: "text-navy-600",
  },
  {
    id: "jenerator",
    icon: Wind,
    title: "Sıcak Hava Jeneratörü / Sten Ocağı",
    description:
      "Endüstriyel prosesler için direkt ve indirekt tip sıcak hava jeneratörleri.",
    items: ["Direkt Tip Sıcak Hava Jeneratörü", "İndirekt Tip Sıcak Hava Jeneratörü"],
    gradient: "from-amber-500/10 to-orange-600/5",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    id: "tank",
    icon: Droplets,
    title: "Yakıt Depolama Tankları",
    description:
      "Güvenli ve standartlara uygun motorin, Fuel-Oil, LNG ve LPG depolama tankları.",
    items: [
      "Motorin Depolama Tankları",
      "Fuel-Oil Depolama Tankları",
      "LNG Depolama Tankları",
      "LPG Depolama Tankları",
    ],
    gradient: "from-cyan-500/10 to-blue-600/5",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    id: "isi",
    icon: Thermometer,
    title: "Isı Değiştiriciler",
    description:
      "Yüksek verimli eşanjör, reküperatör, ekonomizer ve evaporatör sistemleri.",
    items: [
      "Eşanjörler",
      "Reküperatörler",
      "Ekonomizerler",
      "Buharlaştırıcılar / Evaparatörler",
    ],
    gradient: "from-red-500/10 to-rose-600/5",
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: "alternatif",
    icon: Settings,
    title: "Alternatif Yakma Sistemleri",
    description:
      "Mevcut sistemlerinizin farklı yakıt tiplerine dönüşümü için komple çözümler.",
    items: [
      "Doğalgaz Dönüşüm Sistemleri",
      "Biyogaz Dönüşüm Sistemleri",
      "Fuel-Oil Dönüşümleri",
      "LNG / LPG Dönüşümleri",
      "Motorin Dönüşümleri",
      "Oksi-Fuel Sistemleri",
      "Sıcak Havalı Yakma Sistemleri",
    ],
    gradient: "from-green-500/10 to-emerald-600/5",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: "otomasyon",
    icon: Cpu,
    title: "Kontrol Otomasyon",
    description:
      "DCS/PLC tabanlı gelişmiş kontrol sistemleri ile tam otomasyon ve maksimum verim.",
    items: [
      "DCS/PLC Kontrol Sistemleri",
      "Pnömatik Oransal Kontrol",
      "Mekanik Oransal Kontrol",
      "O₂/CO Trim Sistemleri",
      "Kumanda ve Güç Panoları",
      "Frekans Çeviriciler",
    ],
    gradient: "from-violet-500/10 to-purple-600/5",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

export default function UrunGruplariPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <span className="text-flame-400 text-sm font-semibold tracking-widest uppercase">
            Çözümlerimiz
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
            Ürün Grupları
          </h1>
          <p className="mt-4 text-lg text-warm-200/80 max-w-2xl mx-auto">
            Her sektöre ve kapasiteye özel endüstriyel yakma sistemi çözümleri.
          </p>
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
                    href="/iletisim"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-navy-600 hover:text-flame-500 transition-colors group"
                  >
                    Bu Ürün Grubu İçin Teklif Al
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
