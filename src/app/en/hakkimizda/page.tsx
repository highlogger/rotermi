import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/home/cta-section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import {
  Target,
  Eye,
  Shield,
  Factory,
  Flame,
  Users,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Rotermi Energy — Your trusted solution partner in industrial combustion systems with 15 years of experience. Our mission, vision, and values.",
  alternates: {
    canonical: "https://rotermi.com.tr/en/hakkimizda",
    languages: { "tr-TR": "https://rotermi.com.tr/hakkimizda" },
  },
};

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We build trust with consistent quality and on-time delivery in every project.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We follow the latest technologies to provide innovative solutions to our customers.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We develop tailored solutions for each customer's needs, building long-term partnerships.",
  },
  {
    icon: Flame,
    title: "Passion",
    description:
      "Our passion for the energy sector drives us to deliver the best in every project.",
  },
];

const activityAreas = [
  "Thermal Power Plants",
  "Alternative Combustion Systems",
  "Sugar Factories",
  "Biomass Power Plants",
  "Steam Boilers",
  "Various Projects",
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <span className="text-flame-400 text-sm font-semibold tracking-widest uppercase">
              Corporate
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
              About Us
            </h1>
            <p className="mt-4 text-lg text-warm-200/80 max-w-2xl mx-auto">
              Shaping the energy sector with 15 years of experience in industrial combustion systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-flame-500 text-sm font-semibold tracking-widest uppercase">
                  Rotermi Energy
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
                  15 Years of Trust in the Energy Sector
                </h2>
                <div className="mt-6 space-y-4 text-warm-600 leading-relaxed">
                  <p>
                    As Rotermi Energy, we provide turnkey solutions to our customers with our expert engineering team and extensive product portfolio in industrial combustion systems.
                  </p>
                  <p>
                    Thanks to our deep expertise in burners, boilers, energy efficiency, and automation, we develop tailored solutions for businesses of all scales.
                  </p>
                  <p>
                    With customer satisfaction and sustainable energy solutions as our core principles, we have successfully completed projects across Turkey and abroad.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Factory, value: "500+", label: "Projects" },
                  { icon: Users, value: "300+", label: "Clients" },
                  { icon: Shield, value: "15+", label: "Years Experience" },
                  { icon: Flame, value: "7", label: "Product Groups" },
                ].map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-warm-50 border border-warm-200 p-6 text-center hover:border-navy-200 hover:shadow-md transition-all"
                  >
                    <Icon className="h-8 w-8 text-flame-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-navy-800 font-display">
                      {value}
                    </div>
                    <div className="text-sm text-warm-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section id="misyon-vizyon" className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4">
          <StaggerReveal className="grid sm:grid-cols-2 gap-8 mb-16" staggerDelay={0.15}>
            <div className="rounded-2xl bg-white border border-warm-200 p-8">
              <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5">
                <Target className="h-6 w-6 text-navy-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">Our Mission</h3>
              <p className="mt-3 text-warm-600 leading-relaxed">
                To be a reliable solution partner in industrial combustion systems and energy solutions, delivering the highest quality products and services to our customers.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-warm-200 p-8">
              <div className="w-12 h-12 rounded-xl bg-flame-50 flex items-center justify-center mb-5">
                <Eye className="h-6 w-6 text-flame-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">Our Vision</h3>
              <p className="mt-3 text-warm-600 leading-relaxed">
                To become Turkey&rsquo;s and the region&rsquo;s leading industrial combustion systems company with innovative and sustainable solutions.
              </p>
            </div>
          </StaggerReveal>

          <ScrollReveal>
            <SectionHeading
              label="Our Values"
              title="What Makes Us Who We Are"
            />
          </ScrollReveal>
          <StaggerReveal className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl bg-white border border-warm-200 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="font-semibold text-navy-800">{title}</h3>
                <p className="mt-2 text-sm text-warm-600">{description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Activity Areas */}
      <section id="faaliyet-alanlari" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <SectionHeading
              label="Activity Areas"
              title="Sectors We Serve"
              description="We provide sector-specific solutions with our industrial combustion systems expertise."
            />
          </ScrollReveal>
          <StaggerReveal className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
            {activityAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-xl bg-warm-50 border border-warm-200 px-5 py-4 hover:border-navy-200 hover:bg-navy-50/30 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-flame-500 shrink-0" />
                <span className="text-sm font-medium text-navy-800">
                  {area}
                </span>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Quality section */}
      <section id="kalite" className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <div className="rounded-2xl bg-gradient-to-r from-navy-800 to-navy-900 p-8 sm:p-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="h-8 w-8 text-flame-400" />
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Our Quality Policy
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 text-white/80 leading-relaxed">
                <p>
                  As Rotermi Energy, we base all our processes on ISO 9001 Quality Management System standards; we embrace customer satisfaction, continuous improvement, and full compliance with legal regulations as our core principles.
                </p>
                <p>
                  We meticulously apply quality control processes at every stage of our products and services, targeting the highest standards throughout the value chain from supplier to end user.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
