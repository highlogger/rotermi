"use client";
import { useState, useEffect, useCallback } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const references = [
  {
    quote:
      "Rotermi Enerji'nin sağladığı brülör dönüşüm sistemi sayesinde enerji maliyetlerimizde %35 tasarruf elde ettik. Projenin her aşamasında profesyonel bir ekip ile çalıştık.",
    author: "Ahmet Yılmaz",
    role: "Fabrika Müdürü",
    company: "Örnek Tekstil A.Ş.",
    sector: "Tekstil",
  },
  {
    quote:
      "Kazan modernizasyonu projemizde son derece titiz ve zamanında bir çalışma sergilediler. Teknik ekiplerinin uzmanlığı ve çözüm odaklı yaklaşımları takdire şayan.",
    author: "Mehmet Demir",
    role: "Teknik Müdür",
    company: "Demir Çelik Fabrikası",
    sector: "Demir-Çelik",
  },
  {
    quote:
      "Enerji verimliliği danışmanlığı ve uygulama projesi ile işletmemizin karbon ayak izini %40 azaltırken enerji maliyetlerini düşürdük. Kesinlikle tavsiye ediyorum.",
    author: "Ayşe Kaya",
    role: "Genel Müdür",
    company: "Kaya Gıda Sanayi",
    sector: "Gıda",
  },
  {
    quote:
      "Endüstriyel yakma sistemleri konusundaki derin bilgi birikimleri ve yenilikçi çözümleri sayesinde, tesisimizin kapasitesini %25 artırmayı başardık.",
    author: "Can Öztürk",
    role: "İşletme Müdürü",
    company: "Öztürk Kimya",
    sector: "Kimya",
  },
];

export function ReferencesSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % references.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + references.length) % references.length
    );
  }, []);

  /* Auto-play */
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-navy-900 to-navy-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          label="Referanslar"
          title="Müşterilerimiz Anlatıyor"
          description="300'den fazla mutlu müşterimizin deneyimleri, kalitemizin en büyük kanıtıdır."
          light
        />

        {/* Carousel */}
        <div className="mt-14 relative max-w-3xl mx-auto">
          {/* Quote icon */}
          <div className="absolute -top-4 -left-4 text-flame-500/20">
            <Quote className="h-16 w-16" />
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {references.map((ref, i) => (
                <div
                  key={i}
                  className="w-full shrink-0 px-4"
                  aria-hidden={i !== current}
                >
                  <blockquote className="text-center">
                    <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 italic">
                      &ldquo;{ref.quote}&rdquo;
                    </p>
                    <footer className="mt-8">
                      <div className="text-base font-semibold text-white">
                        {ref.author}
                      </div>
                      <div className="text-sm text-flame-400">
                        {ref.role}
                      </div>
                      <div className="text-sm text-white/40 mt-1">
                        {ref.company} — {ref.sector}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                prev();
              }}
              className="rounded-full border border-white/20 p-2 text-white/60 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Önceki referans"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {references.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(i);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2.5 bg-flame-500"
                      : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Referans ${i + 1}`}
                  aria-current={i === current ? "true" : undefined}
                />
              ))}
            </div>

            <button
              onClick={() => {
                setIsAutoPlaying(false);
                next();
              }}
              className="rounded-full border border-white/20 p-2 text-white/60 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Sonraki referans"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Trusted by logos placeholder */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-center text-xs font-medium tracking-widest uppercase text-white/30 mb-8">
            Güvenilir Çözüm Ortağı
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-30 grayscale">
            {[
              "ENERJİ SEKTÖRÜ",
              "DEMİR-ÇELİK",
              "TEKSTİL",
              "GIDA",
              "KİMYA",
              "ŞEKER FABRİKALARI",
            ].map((sector) => (
              <span
                key={sector}
                className="text-sm font-semibold tracking-wider text-white"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
