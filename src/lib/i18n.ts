export type Locale = "tr" | "en";

const translations = {
  header: {
    tr: {
      search: "Sitede ara",
      getQuote: "Teklif Al",
      english: "English",
      phone: "0 850 532 50 85",
      email: "info@rotermi.com.tr",
      tagline: "Enerji",
    },
    en: {
      search: "Search site",
      getQuote: "Get Quote",
      english: "Türkçe",
      phone: "+90 850 532 50 85",
      email: "info@rotermi.com.tr",
      tagline: "Energy",
    },
  },
  footer: {
    tr: {
      about:
        "Endüstriyel yakma sistemlerinde 15 yıllık tecrübe ile enerji sektörüne yön veriyoruz.",
      linkedIn: "LinkedIn",
      phone: "Telefon",
      email: "E-posta",
      address: "Adres",
      addressValue:
        "Deluxia Palace, Barbaros Mah. Mor Sümbül Sok. No:5A/88 Kat:3, Ataşehir / İstanbul",
      rights: "© {year} Rotermi Enerji. Tüm hakları saklıdır.",
      tagline: "Designed & Developed with passion for engineering excellence.",
      columns: {
        kurumsal: { title: "Kurumsal", links: [
          { label: "Hakkımızda", href: "/hakkimizda" },
          { label: "Misyon & Vizyon", href: "/hakkimizda#misyon-vizyon" },
          { label: "Kalite Politikamız", href: "/hakkimizda#kalite" },
          { label: "Referanslar", href: "/referanslar" },
          { label: "İletişim", href: "/iletisim" },
        ]},
        urunler: { title: "Ürün Grupları", links: [
          { label: "Brülörler", href: "/urun-gruplari#brulorler" },
          { label: "Kazan ve Ekipmanları", href: "/urun-gruplari#kazan" },
          { label: "Sıcak Hava Jeneratörü", href: "/urun-gruplari#jenerator" },
          { label: "Yakıt Depolama Tankları", href: "/urun-gruplari#tank" },
          { label: "Isı Değiştiriciler", href: "/urun-gruplari#isi" },
          { label: "Kontrol Otomasyon", href: "/urun-gruplari#otomasyon" },
        ]},
        hizmetler: { title: "Hizmetler", links: [
          { label: "Mühendislik ve Projeler", href: "/hizmetler#muhendislik" },
          { label: "Özel İmalatlar", href: "/hizmetler#ozel-imalat" },
          { label: "Enerji Verimliliği", href: "/hizmetler#enerji-verimliligi" },
          { label: "Danışmanlık", href: "/hizmetler#danismanlik" },
        ]},
        yasal: { title: "Yasal", links: [
          { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
          { label: "Çerez Politikası", href: "/cerez-politikasi" },
          { label: "Gizlilik Politikası", href: "/gizlilik" },
          { label: "İletişim", href: "/iletisim" },
        ]},
      },
    },
    en: {
      about:
        "With 15 years of experience in industrial combustion systems, we shape the energy sector.",
      linkedIn: "LinkedIn",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressValue:
        "Deluxia Palace, Barbaros Mah. Mor Sümbül Sok. No:5A/88 Floor:3, Ataşehir / İstanbul, Turkey",
      rights: "© {year} Rotermi Enerji. All rights reserved.",
      tagline: "Designed & Developed with passion for engineering excellence.",
      columns: {
        kurumsal: { title: "Corporate", links: [
          { label: "About Us", href: "/en/hakkimizda" },
          { label: "Mission & Vision", href: "/en/hakkimizda#misyon-vizyon" },
          { label: "Quality Policy", href: "/en/hakkimizda#kalite" },
          { label: "References", href: "/en/referanslar" },
          { label: "Contact", href: "/en/iletisim" },
        ]},
        urunler: { title: "Products", links: [
          { label: "Burners", href: "/en/urun-gruplari#brulorler" },
          { label: "Boilers & Equipment", href: "/en/urun-gruplari#kazan" },
          { label: "Hot Air Generator", href: "/en/urun-gruplari#jenerator" },
          { label: "Fuel Storage Tanks", href: "/en/urun-gruplari#tank" },
          { label: "Heat Exchangers", href: "/en/urun-gruplari#isi" },
          { label: "Control Automation", href: "/en/urun-gruplari#otomasyon" },
        ]},
        hizmetler: { title: "Services", links: [
          { label: "Engineering & Projects", href: "/en/hizmetler#muhendislik" },
          { label: "Custom Manufacturing", href: "/en/hizmetler#ozel-imalat" },
          { label: "Energy Efficiency", href: "/en/hizmetler#enerji-verimliligi" },
          { label: "Consulting", href: "/en/hizmetler#danismanlik" },
        ]},
        yasal: { title: "Legal", links: [
          { label: "KVKK Disclosure", href: "/en/kvkk" },
          { label: "Cookie Policy", href: "/en/cerez-politikasi" },
          { label: "Privacy Policy", href: "/en/gizlilik" },
          { label: "Contact", href: "/en/iletisim" },
        ]},
      },
    },
  },
  menu: {
    tr: {
      kurumsal: "Kurumsal",
      urunGruplari: "Ürün Grupları",
      hizmetler: "Hizmetler",
      faaliyetAlanlari: "Faaliyet Alanları",
      referanslar: "Referanslar",
      iletisim: "İletişim",
    },
    en: {
      kurumsal: "Corporate",
      urunGruplari: "Products",
      hizmetler: "Services",
      faaliyetAlanlari: "Activity Areas",
      referanslar: "References",
      iletisim: "Contact",
    },
  },
  cookie: {
    tr: {
      title: "Çerez Tercihleri",
      description:
        "Web sitemizde size daha iyi bir deneyim sunmak için çerezler kullanıyoruz.",
      accept: "Tümünü Kabul Et",
      reject: "Zorunlu Olanlar",
      customize: "Özelleştir",
      more: "Çerez Politikası",
    },
    en: {
      title: "Cookie Preferences",
      description:
        "We use cookies to provide you with a better experience on our website.",
      accept: "Accept All",
      reject: "Essential Only",
      customize: "Customize",
      more: "Cookie Policy",
    },
  },
} as const;

/** Detect locale from pathname. Returns "en" if path starts with /en/, else "tr" */
export function getLocale(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "tr";
}

/** Get localized header strings */
export function getHeaderText(locale: Locale) {
  return translations.header[locale];
}

/** Get localized footer strings */
export function getFooterText(locale: Locale) {
  return translations.footer[locale];
}

/** Get localized menu strings */
export function getMenuText(locale: Locale) {
  return translations.menu[locale];
}

/** Get localized cookie consent strings */
export function getCookieText(locale: Locale) {
  return translations.cookie[locale];
}

/** Build menu items with locale-aware paths */
export function getMenuItems(locale: Locale) {
  const t = translations.menu[locale];
  const prefix = locale === "en" ? "/en" : "";

  return [
    {
      label: t.kurumsal,
      href: `${prefix}/hakkimizda`,
      children: locale === "en"
        ? [
            { label: "About Us", href: `${prefix}/hakkimizda`, description: "Rotermi Energy's story and mission" },
            { label: "Mission & Vision", href: `${prefix}/hakkimizda#misyon-vizyon`, description: "Our goals and core values" },
            { label: "Quality Policy", href: `${prefix}/hakkimizda#kalite`, description: "Quality standards and certifications" },
          ]
        : [
            { label: "Hakkımızda", href: `${prefix}/hakkimizda`, description: "Rotermi Enerji'nin hikayesi ve misyonu" },
            { label: "Misyon & Vizyon", href: `${prefix}/hakkimizda#misyon-vizyon`, description: "Hedeflerimiz ve temel değerlerimiz" },
            { label: "Kalite Politikamız", href: `${prefix}/hakkimizda#kalite`, description: "Kalite standartlarımız ve sertifikalarımız" },
          ],
    },
    // ... I'll build the complete menu items in the actual header component
  ];
}
