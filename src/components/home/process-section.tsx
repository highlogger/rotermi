"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { ClipboardCheck, Settings, Wrench, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Keşif & Analiz",
    description:
      "Tesisinizin ihtiyaçlarını yerinde analiz ediyor, en uygun teknik çözümü belirliyoruz.",
    details: "Enerji etüdü, proses analizi, fizibilite raporu",
  },
  {
    number: "02",
    icon: Settings,
    title: "Mühendislik & Tasarım",
    description:
      "Projenize özel mühendislik çalışmalarını yapıyor, detaylı çözümü tasarlıyoruz.",
    details: "Proses tasarımı, teknik şartname, 3D modelleme",
  },
  {
    number: "03",
    icon: Wrench,
    title: "İmalat & Montaj",
    description:
      "Yerli üretim avantajıyla ekipmanlarınızı üretiyor, sahanızda profesyonel montaj yapıyoruz.",
    details: "Kalite kontrol, zamanında teslim, saha montajı",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Devreye Alma & Test",
    description:
      "Sisteminizi devreye alıyor, performans testlerini tamamlıyor ve işletmeye hazır hale getiriyoruz.",
    details: "Performans testi, emisyon ölçümü, operatör eğitimi",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Destek & Bakım",
    description:
      "Satış sonrası kesintisiz teknik destek ve periyodik bakım hizmetiyle yanınızdayız.",
    details: "7/24 destek, periyodik bakım, yedek parça",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-white relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <SectionHeading
            label="Çalışma Sürecimiz"
            title="Projeniz 5 Adımda Hayata Geçiyor"
            description="Sistematik ve şeffaf iş akışımız ile her aşamada kontrol sizde."
            light
          />
        </ScrollReveal>

        {/* Desktop timeline */}
        <div className="hidden lg:block mt-16">
          <StaggerReveal className="relative" staggerDelay={0.15} direction="up" distance={50}>
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex items-start gap-8 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-[calc(50%-2rem)] rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors ${
                    i % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      i % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <step.icon className="h-5 w-5 text-flame-400" />
                    <span className="text-xs font-bold text-flame-400 tracking-widest">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="mt-2 text-xs text-white/30 italic">
                    {step.details}
                  </p>
                </div>

                {/* Timeline dot */}
                <div className="relative flex items-center justify-center w-16 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-flame-500 shadow-lg shadow-flame-500/30 z-10" />
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 bottom-0 w-0.5 bg-white/10 left-1/2 -translate-x-1/2 h-[calc(100%+3rem)]" />
                  )}
                </div>

                {/* Empty spacer */}
                <div className="w-[calc(50%-2rem)]" />
              </div>
            ))}
          </StaggerReveal>
        </div>

        {/* Mobile stacked */}
        <div className="lg:hidden mt-12">
          <StaggerReveal className="space-y-6" staggerDelay={0.1}>
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="h-5 w-5 text-flame-400" />
                  <span className="text-xs font-bold text-flame-400 tracking-widest">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
