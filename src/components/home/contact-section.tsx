"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-20 lg:py-28 bg-warm-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Contact info + map placeholder */}
          <div>
            <ScrollReveal>
              <SectionHeading
                label="Bize Ulaşın"
                title="Projenizi Birlikte Planlayalım"
                description="Size en kısa sürede dönüş yapalım, ihtiyaçlarınıza özel çözümümüzü birlikte tasarlayalım."
                align="left"
              />
            </ScrollReveal>

            <StaggerReveal className="mt-10 space-y-5" staggerDelay={0.1}>
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: "0 850 532 50 85",
                  href: "tel:+908505325085",
                },
                {
                  icon: Mail,
                  label: "E-posta",
                  value: "info@rotermi.com.tr",
                  href: "mailto:info@rotermi.com.tr",
                },
                {
                  icon: MapPin,
                  label: "Adres",
                  value:
                    "Deluxia Palace, Barbaros Mah. Mor Sümbül Sok. No:5A/88 Kat:3, Ataşehir / İstanbul",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-warm-200 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-navy-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-warm-500">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-navy-800 font-medium hover:text-flame-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy-800 font-medium leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </StaggerReveal>

            {/* Map placeholder */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10 rounded-2xl overflow-hidden border border-warm-200 bg-white aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-10 w-10 text-flame-400 mx-auto mb-3" />
                  <p className="text-sm text-warm-500">
                    Deluxia Palace, Ataşehir / İstanbul
                  </p>
                  <a
                    href="https://maps.google.com/?q=Deluxia+Palace+Barbaros+Mah.+Mor+Sümbül+Sok.+No:5A/88+Ataşehir+İstanbul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-medium text-navy-600 hover:text-flame-500 transition-colors"
                  >
                    Google Haritalar&apos;da Aç
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Contact form */}
          <ScrollReveal direction="right" delay={0.2}>
          <div className="rounded-2xl bg-white border border-warm-200 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-navy-800">
                  Mesajınız İletildi!
                </h3>
                <p className="mt-2 text-warm-600 max-w-sm">
                  En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-semibold text-navy-800 mb-1">
                  Hızlı İletişim Formu
                </h3>
                <p className="text-sm text-warm-500 mb-4">
                  Projeniz için bize ulaşın, 24 saat içinde dönüş yapalım.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy-800 mb-1.5"
                    >
                      Ad Soyad *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      className="w-full rounded-lg border border-warm-300 px-4 py-3 text-sm bg-white placeholder:text-warm-400 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-800 mb-1.5"
                    >
                      E-posta *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="ornek@firma.com"
                      className="w-full rounded-lg border border-warm-300 px-4 py-3 text-sm bg-white placeholder:text-warm-400 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy-800 mb-1.5"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="0 5__ ___ __ __"
                      className="w-full rounded-lg border border-warm-300 px-4 py-3 text-sm bg-white placeholder:text-warm-400 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-navy-800 mb-1.5"
                    >
                      Firma
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Firma adınız"
                      className="w-full rounded-lg border border-warm-300 px-4 py-3 text-sm bg-white placeholder:text-warm-400 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-navy-800 mb-1.5"
                  >
                    Konu *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full rounded-lg border border-warm-300 px-4 py-3 text-sm bg-white text-warm-700 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 outline-none transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Konu seçiniz
                    </option>
                    <option>Ürün / Fiyat Teklifi</option>
                    <option>Enerji Verimliliği Danışmanlığı</option>
                    <option>Proje Teklifi</option>
                    <option>Teknik Destek</option>
                    <option>Diğer</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy-800 mb-1.5"
                  >
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Projeniz hakkında kısaca bilgi verin..."
                    className="w-full rounded-lg border border-warm-300 px-4 py-3 text-sm bg-white placeholder:text-warm-400 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 outline-none transition-all resize-none"
                  />
                </div>

                {/* KVKK Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="kvkk"
                    required
                    className="mt-1 h-4 w-4 rounded border-warm-300 text-navy-600 focus:ring-navy-500 accent-navy-600"
                  />
                  <label
                    htmlFor="kvkk"
                    className="text-xs text-warm-500 leading-relaxed"
                  >
                    <a
                      href="/kvkk"
                      className="text-navy-600 underline hover:text-flame-500 transition-colors"
                    >
                      KVKK Aydınlatma Metni
                    </a>
                    &apos;ni okudum. Kişisel verilerimin işlenmesini kabul
                    ediyorum.
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="flame"
                  size="lg"
                  fullWidth
                  rightIcon={<Send className="h-4 w-4" />}
                >
                  Gönder
                </Button>
              </form>
            )}
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
