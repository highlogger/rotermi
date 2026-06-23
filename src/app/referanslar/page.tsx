import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/home/cta-section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { Quote, Factory, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Rotermi Enerji referans projeleri. 500'den fazla tamamlanmış proje, 300'den fazla mutlu müşteri. Endüstriyel yakma sistemleri başarı hikayeleri.",
};

const references = [
  {
    quote:
      "Rotermi Enerji'nin sağladığı brülör dönüşüm sistemi sayesinde enerji maliyetlerimizde %35 tasarruf elde ettik. Projenin her aşamasında profesyonel bir ekip ile çalıştık.",
    author: "Ahmet Yılmaz",
    role: "Fabrika Müdürü",
    company: "Örnek Tekstil A.Ş.",
    location: "İstanbul",
    year: "2025",
    sector: "Tekstil",
  },
  {
    quote:
      "Kazan modernizasyonu projemizde son derece titiz ve zamanında bir çalışma sergilediler. Teknik ekiplerinin uzmanlığı ve çözüm odaklı yaklaşımları takdire şayan.",
    author: "Mehmet Demir",
    role: "Teknik Müdür",
    company: "Demir Çelik Fabrikası",
    location: "Karabük",
    year: "2024",
    sector: "Demir-Çelik",
  },
  {
    quote:
      "Enerji verimliliği danışmanlığı ve uygulama projesi ile işletmemizin karbon ayak izini %40 azaltırken enerji maliyetlerini düşürdük.",
    author: "Ayşe Kaya",
    role: "Genel Müdür",
    company: "Kaya Gıda Sanayi",
    location: "Gaziantep",
    year: "2025",
    sector: "Gıda",
  },
  {
    quote:
      "Sıcak hava jeneratörü kurulumu ve devreye alma sürecinde gösterdikleri profesyonel yaklaşım sayesinde üretim hattımızda kesintisiz verimlilik sağladık.",
    author: "Ali Özdemir",
    role: "Üretim Müdürü",
    company: "Özdemir Seramik",
    location: "Kütahya",
    year: "2024",
    sector: "Seramik",
  },
  {
    quote:
      "Alternatif yakıt dönüşüm projemizi zamanında ve bütçeye uygun şekilde tamamladılar. Teknik ekipleri her sorunumuza anında çözüm üretti.",
    author: "Zeynep Çelik",
    role: "Enerji Müdürü",
    company: "Çelik Kimya A.Ş.",
    location: "Kocaeli",
    year: "2025",
    sector: "Kimya",
  },
  {
    quote:
      "Endüstriyel yakma sistemleri konusundaki derin bilgi birikimleri ve yenilikçi çözümleri sayesinde tesisimizin kapasitesini %25 artırdık.",
    author: "Can Öztürk",
    role: "İşletme Müdürü",
    company: "Öztürk Enerji",
    location: "İzmir",
    year: "2024",
    sector: "Enerji",
  },
];

const sectors = [
  "Tekstil",
  "Demir-Çelik",
  "Gıda",
  "Kimya",
  "Seramik",
  "Enerji",
  "Şeker Fabrikaları",
  "Biyokütle Santralleri",
];

export default function ReferanslarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <span className="text-flame-400 text-sm font-semibold tracking-widest uppercase">
            Başarı Hikayeleri
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
            Referanslarımız
          </h1>
          <p className="mt-4 text-lg text-warm-200/80 max-w-2xl mx-auto">
            500&apos;den fazla tamamlanmış proje, 300&apos;den fazla mutlu
            müşteri.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal distance={50}>
            <div className="rounded-2xl bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 shadow-2xl p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {[
                  { value: "500+", label: "Tamamlanan Proje" },
                  { value: "300+", label: "Mutlu Müşteri" },
                  { value: "8+", label: "Sektör" },
                  { value: "15+", label: "Yıl Deneyim" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-3xl lg:text-4xl font-bold text-white font-display">
                      {value}
                    </div>
                    <div className="text-sm text-warm-300 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <SectionHeading
              label="Sektörler"
              title="Hizmet Verdiğimiz Sektörler"
            />
          </ScrollReveal>
          <StaggerReveal className="mt-8 flex flex-wrap justify-center gap-3" staggerDelay={0.05} direction="up">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full bg-warm-50 border border-warm-200 px-5 py-2 text-sm font-medium text-navy-700 hover:bg-navy-50 hover:border-navy-200 transition-colors"
              >
                {sector}
              </span>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Reference Cards */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <SectionHeading
              label="Müşteri Yorumları"
              title="Neler Söylediler?"
              description="Müşterilerimizin deneyimleri, kalitemizin en büyük kanıtıdır."
            />
          </ScrollReveal>
          <StaggerReveal className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {references.map((ref) => (
              <div
                key={ref.company}
                className="rounded-2xl bg-white border border-warm-200 p-6 hover:border-navy-200 hover:shadow-lg transition-all flex flex-col"
              >
                <Quote className="h-8 w-8 text-flame-200 mb-4" />
                <blockquote className="flex-1">
                  <p className="text-warm-700 leading-relaxed italic">
                    &ldquo;{ref.quote}&rdquo;
                  </p>
                </blockquote>
                <div className="mt-5 pt-5 border-t border-warm-100">
                  <div className="font-semibold text-navy-800 text-sm">
                    {ref.author}
                  </div>
                  <div className="text-xs text-flame-500 mt-0.5">
                    {ref.role}
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-warm-400">
                    <span className="flex items-center gap-1">
                      <Factory className="h-3 w-3" />
                      {ref.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {ref.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {ref.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
