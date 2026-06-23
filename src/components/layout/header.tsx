"use client";
import { useState, useEffect, useMemo, startTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Search,
  Globe,
  Mail,
} from "lucide-react";
import { getHeaderText, getMenuText } from "@/lib/i18n";

/* --- Menu Data (i18n) --- */
function buildMenuItems(locale: "tr" | "en") {
  const t = getMenuText(locale);
  const p = locale === "en" ? "/en" : "";

  const childrenMap = {
    tr: {
      kurumsal: [
        { label: "Hakkımızda", href: "/hakkimizda", description: "Rotermi Enerji'nin hikayesi ve misyonu" },
        { label: "Misyon & Vizyon", href: "/hakkimizda#misyon-vizyon", description: "Hedeflerimiz ve temel değerlerimiz" },
        { label: "Kalite Politikamız", href: "/hakkimizda#kalite", description: "Kalite standartlarımız ve sertifikalarımız" },
      ],
      urunGruplari: [
        { label: "Brülörler", href: `${p}/urun-gruplari#brulorler`, description: "Monoblok, duoblok ve proses brülörler" },
        { label: "Kazan ve Ekipmanları", href: `${p}/urun-gruplari#kazan`, description: "Buhar kazanı, kızgın yağ kazanı, sıcak su kazanı" },
        { label: "Sıcak Hava Jeneratörü", href: `${p}/urun-gruplari#jenerator`, description: "Direkt ve indirekt tip jeneratörler" },
        { label: "Yakıt Depolama Tankları", href: `${p}/urun-gruplari#tank`, description: "Motorin, Fuel-Oil, LNG, LPG tankları" },
        { label: "Isı Değiştiriciler", href: `${p}/urun-gruplari#isi`, description: "Eşanjör, reküperatör, ekonomizer" },
        { label: "Alternatif Yakma Sistemleri", href: `${p}/urun-gruplari#alternatif`, description: "Doğalgaz, biyogaz, LNG, oksi-fuel dönüşümler" },
        { label: "Kontrol Otomasyon", href: `${p}/urun-gruplari#otomasyon`, description: "DCS/PLC, pnömatik, mekanik oransal" },
      ],
      hizmetler: [
        { label: "Mühendislik ve Projeler", href: `${p}/hizmetler#muhendislik`, description: "Anahtar teslim proje yönetimi" },
        { label: "Özel İmalatlar", href: `${p}/hizmetler#ozel-imalat`, description: "İhtiyaca özel tasarım ve üretim" },
        { label: "Enerji Verimliliği", href: `${p}/hizmetler#enerji-verimliligi`, description: "Enerji analizi ve optimizasyon" },
        { label: "Danışmanlık", href: `${p}/hizmetler#danismanlik`, description: "Teknik danışmanlık ve fizibilite" },
      ],
    },
    en: {
      kurumsal: [
        { label: "About Us", href: "/en/hakkimizda", description: "Rotermi Energy's story and mission" },
        { label: "Mission & Vision", href: "/en/hakkimizda#misyon-vizyon", description: "Our goals and core values" },
        { label: "Quality Policy", href: "/en/hakkimizda#kalite", description: "Quality standards and certifications" },
      ],
      urunGruplari: [
        { label: "Burners", href: "/en/urun-gruplari#brulorler", description: "Monoblock, duoblock and process burners" },
        { label: "Boilers & Equipment", href: "/en/urun-gruplari#kazan", description: "Steam boiler, hot oil boiler, hot water boiler" },
        { label: "Hot Air Generator", href: "/en/urun-gruplari#jenerator", description: "Direct and indirect type generators" },
        { label: "Fuel Storage Tanks", href: "/en/urun-gruplari#tank", description: "Diesel, Fuel-Oil, LNG, LPG tanks" },
        { label: "Heat Exchangers", href: "/en/urun-gruplari#isi", description: "Exchangers, recuperators, economizers" },
        { label: "Alternative Combustion", href: "/en/urun-gruplari#alternatif", description: "Natural gas, biogas, LNG, oxy-fuel conversions" },
        { label: "Control Automation", href: "/en/urun-gruplari#otomasyon", description: "DCS/PLC, pneumatic, mechanical proportional" },
      ],
      hizmetler: [
        { label: "Engineering & Projects", href: "/en/hizmetler#muhendislik", description: "Turnkey project management" },
        { label: "Custom Manufacturing", href: "/en/hizmetler#ozel-imalat", description: "Custom design and production" },
        { label: "Energy Efficiency", href: "/en/hizmetler#enerji-verimliligi", description: "Energy analysis and optimization" },
        { label: "Consulting", href: "/en/hizmetler#danismanlik", description: "Technical consulting and feasibility" },
      ],
    },
  };

  return [
    { label: t.kurumsal, href: `${p}/hakkimizda`, children: childrenMap[locale].kurumsal },
    { label: t.urunGruplari, href: `${p}/urun-gruplari`, children: childrenMap[locale].urunGruplari },
    { label: t.hizmetler, href: `${p}/hizmetler`, children: childrenMap[locale].hizmetler },
    { label: t.faaliyetAlanlari, href: `${p}/hakkimizda#faaliyet-alanlari` },
    { label: t.referanslar, href: `${p}/referanslar` },
    { label: t.iletisim, href: `${p}/iletisim` },
  ];
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "tr";
  const h = getHeaderText(locale);
  const menuItems = useMemo(() => buildMenuItems(locale), [locale]);
  const langSwitch = locale === "en" ? { href: "/", label: "Türkçe" } : { href: "/en", label: "English" };

  /* Scroll detection for glass effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    startTransition(() => {
      setMobileOpen(false);
      setOpenMenu(null);
    });
  }, [pathname]);

  /* Close mega menu on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-warm-200/50"
          : "bg-white border-b border-transparent"
      )}
    >
      {/* Top bar — contact info */}
      <div className="hidden lg:block bg-warm-50 text-warm-600 text-xs border-b border-warm-200">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a
              href="tel:+908505325085"
              className="flex items-center gap-1.5 hover:text-navy-800 transition-colors"
            >
              <Phone className="h-3 w-3" />
              {h.phone}
            </a>
            <a
              href={`mailto:${h.email}`}
              className="flex items-center gap-1.5 hover:text-navy-800 transition-colors"
            >
              <Mail className="h-3 w-3" />
              {h.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={langSwitch.href}
              className="flex items-center gap-1.5 hover:text-navy-800 transition-colors font-medium"
            >
              <Globe className="h-3 w-3" />
              {langSwitch.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-3">
              {/* Logo mark — flame icon */}
              <div className="relative h-10 w-10 flex items-center justify-center rounded-lg bg-navy-800">
                <svg
                  viewBox="0 0 40 40"
                  className="h-7 w-7"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 4C20 4 8 20 8 28C8 34.6274 13.3726 40 20 40C26.6274 40 32 34.6274 32 28C32 20 20 4 20 4Z"
                    fill="url(#flame-grad)"
                  />
                  <path
                    d="M20 16C20 16 14 24 14 28C14 31.3137 16.6863 34 20 34C23.3137 34 26 31.3137 26 28C26 24 20 16 20 16Z"
                    fill="#F04E23"
                  />
                  <defs>
                    <linearGradient
                      id="flame-grad"
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
              <div className="hidden sm:block">
                <div className="text-lg font-bold font-display text-navy-800 leading-tight">
                  ROTERMİ
                </div>
                <div className="text-[10px] font-medium text-flame-500 tracking-[0.15em] uppercase leading-tight">
                  {h.tagline}
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenMenu(item.label)
                }
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href ||
                      pathname.startsWith(item.href + "/")
                      ? "text-navy-800 bg-navy-50"
                      : "text-warm-600 hover:text-navy-800 hover:bg-warm-50"
                  )}
                  onClick={() => setOpenMenu(null)}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={clsx(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        openMenu === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.children && openMenu === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-72 rounded-xl border border-warm-200 bg-white p-2 shadow-xl animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-4 py-3 hover:bg-warm-50 transition-colors"
                      >
                        <div className="text-sm font-medium text-navy-800">
                          {child.label}
                        </div>
                        {child.description && (
                          <div className="text-xs text-warm-500 mt-0.5 leading-relaxed">
                            {child.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Search + CTA */}
            <div className="flex items-center gap-2 ml-3 pl-3 border-l border-warm-200">
              <button
                className="rounded-lg p-2 text-warm-500 hover:text-navy-800 hover:bg-warm-50 transition-colors"
                aria-label={h.search}
              >
                <Search className="h-4 w-4" />
              </button>
              <Link
                href={`${locale === "en" ? "/en" : ""}/iletisim`}
                className="inline-flex items-center gap-2 rounded-lg bg-flame-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-flame-600 active:bg-flame-700 transition-all shadow-md hover:shadow-lg hover:shadow-flame-500/20 active:scale-[0.97]"
              >
                {h.getQuote}
                <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={`${locale === "en" ? "/en" : ""}/iletisim`}
              className="rounded-lg bg-flame-500 px-3 py-2 text-xs font-medium text-white hover:bg-flame-600 transition-colors"
            >
              {h.getQuote}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-warm-600 hover:bg-warm-50 transition-colors"
              aria-label={mobileOpen ? (locale === "en" ? "Close menu" : "Menüyü kapat") : (locale === "en" ? "Open menu" : "Menüyü aç")}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-warm-100 py-4 space-y-1 animate-fade-in-down">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenMenu(
                          openMenu === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between w-full rounded-lg px-3 py-2.5 text-sm font-medium text-warm-700 hover:bg-warm-50 transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={clsx(
                          "h-4 w-4 transition-transform duration-200",
                          openMenu === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openMenu === item.label && (
                      <div className="ml-3 border-l-2 border-warm-100 pl-3 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-warm-600 hover:bg-warm-50 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-warm-700 hover:bg-warm-50 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile contact */}
            <div className="mt-4 pt-4 border-t border-warm-100 space-y-2">
              <a
                href="tel:+908505325085"
                className="flex items-center gap-2 px-3 py-2 text-sm text-warm-600 hover:text-navy-800 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {h.phone}
              </a>
              <a
                href={`mailto:${h.email}`}
                className="flex items-center gap-2 px-3 py-2 text-sm text-warm-600 hover:text-navy-800 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {h.email}
              </a>
              <Link
                href={langSwitch.href}
                className="flex items-center gap-2 px-3 py-2 text-sm text-warm-600 hover:text-navy-800 transition-colors"
              >
                <Globe className="h-4 w-4" />
                {langSwitch.label}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
