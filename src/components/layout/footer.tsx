"use client";
import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";
import { getFooterText } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "tr";
  const t = getFooterText(locale);

  const footerLinks = useMemo(() => t.columns, [t]);
  return (
    <footer className="bg-navy-900 text-white">
      {/* Wave divider */}
      <div className="relative h-16 bg-warm-50">
        <svg
          viewBox="0 0 1440 64"
          className="absolute bottom-0 w-full h-16 text-navy-900"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="relative h-10 w-10 flex items-center justify-center rounded-lg bg-white/10">
                <svg
                  viewBox="0 0 40 40"
                  className="h-7 w-7"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 4C20 4 8 20 8 28C8 34.6274 13.3726 40 20 40C26.6274 40 32 34.6274 32 28C32 20 20 4 20 4Z"
                    fill="url(#flame-grad-footer)"
                  />
                  <path
                    d="M20 16C20 16 14 24 14 28C14 31.3137 16.6863 34 20 34C23.3137 34 26 31.3137 26 28C26 24 20 16 20 16Z"
                    fill="#F04E23"
                  />
                  <defs>
                    <linearGradient
                      id="flame-grad-footer"
                      x1="20"
                      y1="4"
                      x2="20"
                      y2="40"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F56F4C" />
                      <stop offset="1" stopColor="#F04E23" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold font-display leading-tight">
                  ROTERMİ
                </div>
                <div className="text-[10px] font-medium text-flame-400 tracking-[0.15em] uppercase leading-tight">
                  {locale === "en" ? "Energy" : "Enerji"}
                </div>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {t.about}
            </p>
            {/* Social */}
            <a
              href="https://www.linkedin.com/company/rotermi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([key, col]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link: { label: string; href: string }) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-flame-500/20 p-2 shrink-0">
                <Phone className="h-4 w-4 text-flame-400" />
              </div>
              <div>
                <div className="text-xs text-white/40 mb-0.5">{t.phone}</div>
                <a
                  href="tel:+908505325085"
                  className="text-sm font-medium text-white hover:text-flame-400 transition-colors"
                >
                  +90 850 532 50 85
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-flame-500/20 p-2 shrink-0">
                <Mail className="h-4 w-4 text-flame-400" />
              </div>
              <div>
                <div className="text-xs text-white/40 mb-0.5">{t.email}</div>
                <a
                  href="mailto:info@rotermi.com.tr"
                  className="text-sm font-medium text-white hover:text-flame-400 transition-colors"
                >
                  info@rotermi.com.tr
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-flame-500/20 p-2 shrink-0">
                <MapPin className="h-4 w-4 text-flame-400" />
              </div>
              <div>
                <div className="text-xs text-white/40 mb-0.5">{t.address}</div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {t.addressValue}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>{t.rights.replace("{year}", String(new Date().getFullYear()))}</p>
          <p>{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
