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
  title: "Services",
  description:
    "Rotermi Energy services: Engineering & projects, custom manufacturing, energy efficiency and consulting. Turnkey industrial solutions.",
  alternates: {
    canonical: "https://rotermi.com.tr/en/hizmetler",
    languages: { "tr-TR": "https://rotermi.com.tr/hizmetler" },
  },
};

const services = [
  {
    id: "muhendislik",
    icon: Lightbulb,
    title: "Engineering & Projects",
    subtitle: "Comprehensive engineering from concept to commissioning",
    description:
      "With our turnkey project management approach, we are with you from feasibility studies to commissioning.",
    features: [
      "Feasibility studies and concept design",
      "Process engineering and flow diagrams",
      "Technical specifications and tender document preparation",
      "Project management and site supervision",
      "Commissioning and performance tests",
      "Operational training and documentation",
    ],
    gradient: "from-amber-500/10 to-orange-600/5",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    id: "ozel-imalat",
    icon: Wrench,
    title: "Custom Manufacturing",
    subtitle: "Tailored design and production",
    description:
      "We offer custom design and manufacturing services for your non-standard equipment and system requirements with our expert team.",
    features: [
      "Custom design for client needs",
      "Reverse engineering and improvement",
      "Material selection and quality control",
      "Cost optimization with local production advantage",
      "Assembly and commissioning support",
      "Spare parts and after-sales service",
    ],
    gradient: "from-blue-500/10 to-indigo-600/5",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    id: "enerji-verimliligi",
    icon: TrendingUp,
    title: "Energy Efficiency Services",
    subtitle: "Up to 40% energy savings",
    description:
      "We significantly reduce your operating costs and carbon footprint with energy analysis, optimization, and fuel conversion projects.",
    features: [
      "Comprehensive energy audit and analysis",
      "Fuel conversion projects (natural gas, biogas, LNG, LPG)",
      "Waste heat recovery systems",
      "Emission optimization and control",
      "O₂/CO Trim systems for combustion efficiency",
      "Energy monitoring and reporting",
    ],
    gradient: "from-green-500/10 to-emerald-600/5",
    iconBg: "bg-green-50 text-green-600",
  },
  {
    id: "danismanlik",
    icon: Users,
    title: "Consulting",
    subtitle: "Technical consulting from our expert team",
    description:
      "We are with your business at every stage with technical consulting, training, and continuous support services.",
    features: [
      "Technical consulting and expert assessment",
      "Operator and maintenance personnel training",
      "Periodic maintenance programs and monitoring",
      "24/7 emergency technical support hotline",
      "Regulatory and standards compliance consulting",
      "Investment consulting and ROI analysis",
    ],
    gradient: "from-purple-500/10 to-violet-600/5",
    iconBg: "bg-purple-50 text-purple-600",
  },
];

const processSteps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Discovery & Analysis",
    description:
      "We analyze your needs and current situation in detail.",
  },
  {
    step: "02",
    icon: Settings,
    title: "Solution Design",
    description:
      "We design the most suitable technical solution for you and prepare a feasibility report.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Implementation",
    description:
      "We bring your project to life on time and within budget.",
  },
  {
    step: "04",
    icon: Headphones,
    title: "Support & Maintenance",
    description:
      "Continuous technical support and periodic maintenance after commissioning.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <span className="text-flame-400 text-sm font-semibold tracking-widest uppercase">
              What We Do
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-warm-200/80 max-w-2xl mx-auto">
              A comprehensive service portfolio from engineering to commissioning, energy efficiency to consulting.
            </p>
          </ScrollReveal>
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
                    Why {service.title}?
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
                    href="/en/iletisim"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-navy-600 hover:text-flame-500 transition-colors group"
                  >
                    Get Detailed Info
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
              label="Our Process"
              title="Your Project Comes to Life in 4 Steps"
              description="Consistent quality and on-time delivery in every project with our systematic approach."
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
