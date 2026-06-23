import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Rotermi Energy cookie policy. Information about cookies used on our website.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://rotermi.com.tr/en/cerez-politikasi",
    languages: { "tr-TR": "https://rotermi.com.tr/cerez-politikasi" },
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="relative bg-navy-900 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Cookie Policy
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="max-w-none space-y-6 text-warm-700 leading-relaxed">
            <p>
              This Cookie Policy has been prepared to inform you about the cookies used on the Rotermi Energy website.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files sent to your browser and stored on your device when you visit a website. They are used for the proper functioning of the website, improving user experience, and analyzing site traffic.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Cookies We Use
            </h2>

            <h3 className="text-lg font-semibold text-navy-700 mt-6">
              Essential Cookies
            </h3>
            <p>
              These are cookies necessary for the proper functioning of our website. Under KVKK, explicit consent is not required for these cookies. They are used for session management and security purposes.
            </p>

            <h3 className="text-lg font-semibold text-navy-700 mt-6">
              Analytics Cookies
            </h3>
            <p>
              These are cookies used to analyze and improve the usage of our website. Information such as which pages are visited and how much time users spend on the site may be collected.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Your Cookie Preferences
            </h2>
            <p>
              Most internet browsers automatically accept cookies. You can block cookies or receive a warning when a cookie is sent by changing your browser settings. You can manage your preferences from the cookie banner that appears when you visit our site.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Contact
            </h2>
            <p>
              For questions about our cookie policy, you can contact us at{" "}
              <strong>info@rotermi.com.tr</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
