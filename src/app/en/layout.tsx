import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rotermi.com.tr"),
  title: {
    default:
      "Rotermi Energy | Industrial Combustion Systems Solution Partner",
    template: "%s | Rotermi Energy",
  },
  description:
    "Rotermi Energy — 15 years of experience in industrial combustion systems, burners, boiler equipment, energy efficiency and engineering solutions. Turkey's trusted energy solution partner.",
  keywords: [
    "industrial combustion systems",
    "burner",
    "boiler",
    "energy efficiency",
    "steam boiler",
    "hot air generator",
    "fuel storage tanks",
    "heat exchangers",
    "alternative combustion systems",
    "control automation",
    "engineering",
    "Rotermi",
  ],
  authors: [{ name: "Rotermi Energy" }],
  creator: "Rotermi Energy",
  publisher: "Rotermi Energy",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rotermi.com.tr/en",
    siteName: "Rotermi Energy",
    title: "Rotermi Energy | Industrial Combustion Systems",
    description:
      "Your trusted industrial combustion systems solution partner with 15 years of experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotermi Energy | Industrial Combustion Systems",
    description:
      "Your trusted industrial combustion systems solution partner with 15 years of experience.",
  },
  alternates: {
    canonical: "https://rotermi.com.tr/en",
    languages: {
      "tr-TR": "https://rotermi.com.tr",
    },
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
