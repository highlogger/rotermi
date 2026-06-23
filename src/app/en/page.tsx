import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { ProductsSection } from "@/components/home/products-section";
import { WhyUsSection } from "@/components/home/why-us-section";
import { ServicesSection } from "@/components/home/services-section";
import { ProcessSection } from "@/components/home/process-section";
import { CtaSection } from "@/components/home/cta-section";
import { CertificationsSection } from "@/components/home/certifications-section";
import { ReferencesSection } from "@/components/home/references-section";
import { ContactSection } from "@/components/home/contact-section";
import { FaqSection } from "@/components/home/faq-section";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function EnHomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProductsSection />
      <WhyUsSection />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
      <CertificationsSection />
      <ReferencesSection />
      <ContactSection />
      <FaqSection />
      <NewsletterSection />
    </>
  );
}
