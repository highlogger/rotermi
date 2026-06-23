import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/home/cta-section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import {
  Lightbulb,
  Wrench,
  Users,
  CheckCircle,
  ArrowRight,
  Settings,
  ClipboardCheck,
  TrendingUp,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Rotermi Enerji hizmetleri: Mühendislik ve projeler, özel imalatlar, enerji verimliliği ve danışmanlık. Anahtar teslim endüstriyel çözümler.",
};

const services = [
  {
    id: "muhendislik",
    icon: Lightbulb,
    title: "Mühendislik ve Projeler",
    subtitle: "Konseptten devreye almaya kapsamlı mühendislik",
    description:
      "Anahtar teslim proje yönetimi anlayışımızla, fizibilite çalışmalarından devreye almaya kadar tüm süreçlerde yanınızdayız.",
    features: [
      "Fizibilite çalışmaları ve konsept tasarım",
      "Proses mühendisliği ve akış şemaları",
      "Teknik şartname ve ihale dokümanı hazırlama",
      "Proje yönetimi ve saha denetimi",
      "Devreye alma ve performans testleri",
      "İşletmeye alma eğitimi ve dokümantasyon",
    ],
    gradient: "from-amber-500/10 to-orange-600/5",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    id: "ozel-imalat",
    icon: Wrench,
    title: "Özel İmalatlar",
    subtitle: "İhtiyaca özel tasarım ve üretim",
    description:
      "Standart dışı ekipman ve sistem gereksinimleriniz için uzman kadromuzla özel tasarım ve imalat hizmeti sunuyoruz.",
    features: [
      "Müşteri ihtiyacına özel tasarım",
      "Tersine mühendislik ve iyileştirme",
      "Malzeme seçimi ve kalite kontrol",
      "Yerli üretim avantajı ile maliyet optimizasyonu",
      "Montaj ve devreye alma desteği",
      "Yedek parça ve after-sales hizmet",
    ],
    gradient: "from-blue-500/10 to-indigo-600/5",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    id: "enerji-verimliligi",
    icon: TrendingUp,
    title: "Enerji Verimliliği Hizmetleri",
    subtitle: "%40'a varan enerji tasarrufu",
    description:
      "Enerji analizi, optimizasyon ve yakıt dönüşüm projeleriyle işletme maliyetlerinizi önemli ölçüde düşürüyor, karbon ayak izinizi azaltıyoruz.",
    features: [
      "Kapsamlı enerji etüdü ve analiz",
      "Yakıt dönüşüm projeleri (doğalgaz, biyogaz, LNG, LPG)",
      "Atık ısı geri kazanım sistemleri",
      "Emisyon optimizasyonu ve kontrolü",
      "O₂/CO Trim sistemleri ile yanma verimliliği",
      "Enerji izleme ve raporlama",
    ],
    gradient: "from-green-500/10 to-emerald-600/5",
    iconBg: "bg-green-50 text-green-600",
  },
  {
    id: "danismanlik",
    icon: Users,
    title: "Danışmanlık",
    subtitle: "Uzman kadrodan teknik danışmanlık",
    description:
      "Teknik danışmanlık, eğitim ve sürekli destek hizmetlerimizle işletmenizin her aşamada yanındayız.",
    features: [
      "Teknik danışmanlık ve ekspertiz",
      "Operatör ve bakım personeli eğitimi",
      "Periyodik bakım programları ve takibi",
      "7/24 acil teknik destek hattı",
      "Mevzuat ve standart uyumluluğu danışmanlığı",
      "Yatırım danışmanlığı ve geri dönüş analizi",
    ],
    gradient: "from-purple-500/10 to-violet-600/5",
    iconBg: "bg-purple-50 text-purple-600",
  },
];

const processSteps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Keşif ve Analiz",
    description:
      "İhtiyaçlarınızı ve mevcut durumunuzu detaylı olarak analiz ediyoruz.",
  },
  {
    step: "02",
    icon: Settings,
    title: "Çözüm Tasarımı",
    description:
      "Size özel en uygun teknik çözümü tasarlıyor, fizibilite raporu hazırlıyoruz.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Uygulama",
    description:
      "Projenizi zamanında ve bütçeye uygun şekilde hayata geçiriyoruz.",
  },
  {
    step: "04",
    icon: Headphones,
    title: "Destek ve Bakım",
    description:
      "Devreye alma sonrası sürekli teknik destek ve periyodik bakım.",
  },
];

export default function HizmetlerPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <span className="text-flame-400 text-sm font-semibold tracking-widest uppercase">
            Neler Yapıyoruz
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
            Hizmetlerimiz
          </h1>
          <p className="mt-4 text-lg text-warm-200/80 max-w-2xl mx-auto">
            Mühendislikten devreye almaya, enerji verimliliğinden danışmanlığa
            kapsamlı hizmet portföyü.
          </p>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="py-20 lg:py-24 even:bg-warm-50"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-5`}
                  >
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-800">
                    {service.title}
                  </h2>
                  <p className="mt-1 text-flame-500 font-medium">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 text-warm-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-warm-700"
                      >
                        <CheckCircle className="h-5 w-5 text-flame-500 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} delay={0.1}>
                <div
                  className={`rounded-2xl bg-gradient-to-br ${service.gradient} border border-warm-200 p-8 lg:p-10`}
                >
                  <service.icon className="h-16 w-16 text-navy-400/30 mb-4" />
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">
                    Neden {service.title}?
                  </h3>
                  <ul className="space-y-2 text-sm text-warm-600">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-navy-600 hover:text-flame-500 transition-colors group"
                  >
                    Detaylı Bilgi Al
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-20 lg:py-28 bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <SectionHeading
              label="Çalışma Sürecimiz"
              title="Projeniz 4 Adımda Hayata Geçiyor"
              description="Sistematik yaklaşımımız ile her projede tutarlı kalite ve zamanında teslimat."
              light
            />
          </ScrollReveal>
          <StaggerReveal className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
            {processSteps.map(({ step, icon: Icon, title, description }) => (
              <div
                key={step}
                className="relative rounded-2xl bg-white/5 border border-white/10 p-6 text-center group hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-bold font-display text-white/10 mb-4">
                  {step}
                </div>
                <Icon className="h-8 w-8 text-flame-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/60">{description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
