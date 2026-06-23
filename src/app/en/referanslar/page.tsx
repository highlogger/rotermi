import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/home/cta-section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { Quote, Factory, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "References",
  description:
    "Rotermi Energy reference projects. 500+ completed projects, 300+ satisfied clients. Industrial combustion systems success stories.",
  alternates: {
    canonical: "https://rotermi.com.tr/en/referanslar",
    languages: { "tr-TR": "https://rotermi.com.tr/referanslar" },
  },
};

const references = [
  {
    quote:
      "Thanks to the burner conversion system provided by Rotermi Energy, we achieved 35% savings in energy costs. We worked with a professional team at every stage of the project.",
    author: "Ahmet Yılmaz",
    role: "Factory Manager",
    company: "Örnek Tekstil A.Ş.",
    location: "İstanbul",
    year: "2025",
    sector: "Textile",
  },
  {
    quote:
      "They demonstrated extremely meticulous and timely work in our boiler modernization project. The expertise and solution-oriented approach of their technical team is commendable.",
    author: "Mehmet Demir",
    role: "Technical Director",
    company: "Demir Çelik Fabrikası",
    location: "Karabük",
    year: "2024",
    sector: "Iron & Steel",
  },
  {
    quote:
      "With the energy efficiency consulting and implementation project, we reduced our carbon footprint by 40% while lowering energy costs.",
    author: "Ayşe Kaya",
    role: "General Manager",
    company: "Kaya Gıda Sanayi",
    location: "Gaziantep",
    year: "2025",
    sector: "Food",
  },
  {
    quote:
      "Their professional approach during the hot air generator installation and commissioning ensured uninterrupted efficiency in our production line.",
    author: "Ali Özdemir",
    role: "Production Manager",
    company: "Özdemir Seramik",
    location: "Kütahya",
    year: "2024",
    sector: "Ceramics",
  },
  {
    quote:
      "They completed our alternative fuel conversion project on time and within budget. Their technical team provided immediate solutions to every issue.",
    author: "Zeynep Çelik",
    role: "Energy Manager",
    company: "Çelik Kimya A.Ş.",
    location: "Kocaeli",
    year: "2025",
    sector: "Chemical",
  },
  {
    quote:
      "Thanks to their deep expertise in industrial combustion systems and innovative solutions, we increased our facility's capacity by 25%.",
    author: "Can Öztürk",
    role: "Operations Manager",
    company: "Öztürk Enerji",
    location: "İzmir",
    year: "2024",
    sector: "Energy",
  },
];

const sectors = [
  "Textile",
  "Iron & Steel",
  "Food",
  "Chemical",
  "Ceramics",
  "Energy",
  "Sugar Factories",
  "Biomass Power Plants",
];

export default function ReferencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <span className="text-flame-400 text-sm font-semibold tracking-widest uppercase">
              Success Stories
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
              Our References
            </h1>
            <p className="mt-4 text-lg text-warm-200/80 max-w-2xl mx-auto">
              500+ completed projects, 300+ satisfied clients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal distance={50}>
            <div className="rounded-2xl bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 shadow-2xl p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {[
                  { value: "500+", label: "Completed Projects" },
                  { value: "300+", label: "Happy Clients" },
                  { value: "8+", label: "Sectors" },
                  { value: "15+", label: "Years Experience" },
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
              label="Sectors"
              title="Sectors We Serve"
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
              label="Testimonials"
              title="What They Said"
              description="Our clients' experiences are the greatest proof of our quality."
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
