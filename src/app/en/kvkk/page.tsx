import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Disclosure",
  description:
    "Rotermi Energy KVKK disclosure statement. Information about processing of your personal data.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://rotermi.com.tr/en/kvkk",
    languages: { "tr-TR": "https://rotermi.com.tr/kvkk" },
  },
};

export default function KvkkPage() {
  return (
    <>
      <section className="relative bg-navy-900 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            KVKK Disclosure Statement
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="max-w-none space-y-6 text-warm-700 leading-relaxed">
            <p>
              As <strong>Rotermi Energy</strong>, in our capacity as data controller under the Turkish Personal Data Protection Law No. 6698 (&quot;KVKK&quot;), we would like to inform you about the processing of your personal data.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              1. Data Controller
            </h2>
            <p>
              Rotermi Energy operates at Deluxia Palace Barbaros Mah. Mor Sümbül Sok. No:5A/88 Floor:3 Ataşehir / İstanbul, Turkey. We are the data controller under KVKK.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              2. Processed Personal Data
            </h2>
            <p>
              Your name-surname, email address, phone number, and company information shared with us through the contact form are processed to fulfill your service request.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              3. Purposes of Processing Personal Data
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fulfilling your contact and quote requests</li>
              <li>Conducting our service processes</li>
              <li>Customer relationship management and satisfaction evaluations</li>
              <li>Fulfilling our legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              4. Transfer of Personal Data
            </h2>
            <p>
              Your personal data is not transferred to third parties domestically or abroad. It may only be shared with authorized public institutions in case of legal obligation.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              5. Method and Legal Basis of Data Collection
            </h2>
            <p>
              Your personal data is collected electronically through the contact form on our website. The legal basis is your explicit consent under KVKK Article 5/1.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              6. Your Rights Under KVKK Article 11
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Learn whether your personal data is being processed</li>
              <li>Request information if your data has been processed</li>
              <li>Learn the purpose of processing and whether data is used accordingly</li>
              <li>Know the third parties to whom data is transferred domestically/abroad</li>
              <li>Request correction if data is incomplete/inaccurate</li>
              <li>Request deletion or destruction</li>
              <li>Object to processing and claim damages</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              7. Contact
            </h2>
            <p>
              To exercise your rights under KVKK, you can send an email to{" "}
              <strong>info@rotermi.com.tr</strong>. Your request will be evaluated and concluded within 30 days at the latest.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
