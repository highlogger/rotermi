"use client";
import { StatCounter } from "@/components/ui/stat-counter";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const stats = [
  { value: 500, suffix: "+", label: "Tamamlanan Proje" },
  { value: 300, suffix: "+", label: "Mutlu Müşteri" },
  { value: 15, suffix: "+", label: "Yıllık Deneyim" },
  { value: 40, suffix: "%", label: "Enerji Tasarrufu" },
];

export function StatsSection() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal distance={50}>
          <div className="rounded-2xl bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 shadow-2xl shadow-navy-900/30 p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  duration={2200}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
