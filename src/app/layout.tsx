import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { GsapProvider } from "@/components/animations/gsap-provider";
import "./globals.css";

/* --- Fonts ---
   Display: Outfit — geometric modern sans, premium feel
   Body: Inter — clean, high x-height, excellent legibility
   Mono: JetBrains Mono — technical data display
*/
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

/* --- SEO Metadata --- */
export const metadata: Metadata = {
  metadataBase: new URL("https://rotermi.com.tr"),
  title: {
    default:
      "Rotermi Enerji | Endüstriyel Yakma Sistemleri Çözüm Ortağı",
    template: "%s | Rotermi Enerji",
  },
  description:
    "Rotermi Enerji — 15 yıllık tecrübe ile endüstriyel yakma sistemleri, brülörler, kazan ekipmanları, enerji verimliliği ve mühendislik çözümleri. Türkiye'nin güvenilir enerji çözüm ortağı.",
  keywords: [
    "endüstriyel yakma sistemleri",
    "brülör",
    "kazan",
    "enerji verimliliği",
    "buhar kazanı",
    "sıcak hava jeneratörü",
    "yakıt depolama tankları",
    "ısı değiştiriciler",
    "alternatif yakma sistemleri",
    "kontrol otomasyon",
    "mühendislik",
    "Rotermi",
  ],
  authors: [{ name: "Rotermi Enerji" }],
  creator: "Rotermi Enerji",
  publisher: "Rotermi Enerji",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://rotermi.com.tr",
    siteName: "Rotermi Enerji",
    title: "Rotermi Enerji | Endüstriyel Yakma Sistemleri",
    description:
      "15 yıllık tecrübe ile endüstriyel yakma sistemleri çözüm ortağınız.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rotermi Enerji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotermi Enerji | Endüstriyel Yakma Sistemleri",
    description:
      "15 yıllık tecrübe ile endüstriyel yakma sistemleri çözüm ortağınız.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rotermi.com.tr",
    languages: {
      "tr-TR": "https://rotermi.com.tr",
      "en-US": "https://rotermi.com.tr/en",
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B1D3A" },
    { media: "(prefers-color-scheme: dark)", color: "#040C1A" },
  ],
  width: "device-width",
  initialScale: 1,
};

/* --- JSON-LD Structured Data --- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rotermi Enerji",
  alternateName: "Rotermi",
  url: "https://rotermi.com.tr",
  logo: "https://rotermi.com.tr/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-850-532-50-85",
    contactType: "sales",
    availableLanguage: ["Turkish", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Deluxia Palace Barbaros Mah. Mor Sümbül Sok. No:5A/88 Kat:3",
    addressLocality: "Ataşehir",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: ["https://www.linkedin.com/company/rotermi/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-surface-primary font-sans text-text-primary">
        <GsapProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </GsapProvider>
      </body>
    </html>
  );
}
