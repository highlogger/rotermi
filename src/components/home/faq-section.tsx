"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { ChevronDown, HelpCircle } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    question: "Hangi sektörlere hizmet veriyorsunuz?",
    answer:
      "Tekstil, demir-çelik, gıda, kimya, seramik, enerji, şeker fabrikaları ve biyokütle santralleri başta olmak üzere birçok sektöre endüstriyel yakma sistemi çözümleri sunuyoruz.",
  },
  {
    question: "Enerji verimliliği ile ne kadar tasarruf sağlayabilirim?",
    answer:
      "Projenin kapsamına bağlı olarak, enerji verimliliği çözümlerimizle %40'a varan oranda enerji tasarrufu sağlıyoruz. Her proje öncesi kapsamlı bir enerji etüdü yaparak size özel tasarruf potansiyelini raporluyoruz.",
  },
  {
    question: "Ürünleriniz için garanti süresi nedir?",
    answer:
      "Tüm ürünlerimiz 2 yıl garanti kapsamındadır. Garanti sonrası dönemde de periyodik bakım ve yedek parça desteğimiz devam eder. Ayrıca 7/24 acil teknik destek hattımız her zaman hizmetinizdedir.",
  },
  {
    question: "Proje teslim süreleriniz ne kadardır?",
    answer:
      "Proje teslim süresi kapsam ve kapasiteye göre değişmekle birlikte, standart projelerde 4-12 hafta arasında teslim gerçekleştiriyoruz. Yerli üretim avantajımız sayesinde ithal ürünlere kıyasla çok daha hızlı tedarik sağlıyoruz.",
  },
  {
    question: "Yurt dışı projelerde de hizmet veriyor musunuz?",
    answer:
      "Evet, başta Orta Doğu, Kuzey Afrika ve Balkanlar olmak üzere yurt dışında da birçok başarılı projeye imza attık. Uluslararası lojistik ve montaj deneyimimizle global ölçekte hizmet sunuyoruz.",
  },
  {
    question: "Mevcut sistemimi farklı bir yakıta dönüştürebilir miyim?",
    answer:
      "Kesinlikle! Alternatif yakma sistemleri konusundaki uzmanlığımızla mevcut sistemlerinizi doğalgaz, biyogaz, LNG, LPG gibi farklı yakıt tiplerine dönüştürüyoruz. Detaylı fizibilite çalışması ile en uygun dönüşüm stratejisini belirliyoruz.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-24">
            <ScrollReveal>
              <SectionHeading
                label="Sıkça Sorulan Sorular"
                title="Merak Ettiğiniz Her Şey"
                description="Endüstriyel yakma sistemleri ve hizmetlerimiz hakkında en çok sorulan soruları yanıtladık."
                align="left"
              />
              <div className="mt-8 flex items-center gap-3 text-sm text-warm-500">
                <HelpCircle className="h-5 w-5 text-flame-400" />
                <span>
                  Cevabını bulamadınız mı?{" "}
                  <a
                    href="/iletisim"
                    className="font-medium text-navy-600 hover:text-flame-500 transition-colors underline"
                  >
                    Bize sorun
                  </a>
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — accordion */}
          <StaggerReveal className="space-y-3" staggerDelay={0.08}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-warm-200 bg-white overflow-hidden hover:border-warm-300 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-navy-800 text-sm sm:text-base pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={clsx(
                      "h-5 w-5 text-warm-400 shrink-0 transition-transform duration-300",
                      openIndex === i && "rotate-180 text-flame-500"
                    )}
                  />
                </button>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-out",
                    openIndex === i
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-6 pb-5 text-sm text-warm-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
