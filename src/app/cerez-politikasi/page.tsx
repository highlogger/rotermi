import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Rotermi Enerji çerez politikası. Web sitemizde kullanılan çerezler hakkında bilgilendirme.",
  robots: { index: false, follow: true },
};

export default function CerezPolitikasiPage() {
  return (
    <>
      <section className="relative bg-navy-900 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Çerez Politikası
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="max-w-none space-y-6 text-warm-700 leading-relaxed">
            <p>
              Bu Çerez Politikası, Rotermi Enerji web sitesinde kullanılan
              çerezler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Çerez Nedir?
            </h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza
              gönderilen ve cihazınızda depolanan küçük metin dosyalarıdır. Web
              sitesinin düzgün çalışması, kullanıcı deneyiminin iyileştirilmesi
              ve site trafiğinin analiz edilmesi amacıyla kullanılırlar.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Kullandığımız Çerezler
            </h2>

            <h3 className="text-lg font-semibold text-navy-700 mt-6">
              Zorunlu Çerezler
            </h3>
            <p>
              Web sitemizin düzgün çalışması için gerekli olan çerezlerdir.
              KVKK&apos;ya göre bu çerezler için açık rıza alınması
              gerekmemektedir. Oturum yönetimi ve güvenlik amacıyla kullanılır.
            </p>

            <h3 className="text-lg font-semibold text-navy-700 mt-6">
              Analitik Çerezler
            </h3>
            <p>
              Web sitemizin kullanımını analiz etmek ve iyileştirmek amacıyla
              kullanılan çerezlerdir. Hangi sayfaların ziyaret edildiği,
              kullanıcıların sitede ne kadar zaman geçirdiği gibi bilgiler
              toplanabilir.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Çerez Tercihleriniz
            </h2>
            <p>
              Çoğu internet tarayıcısı çerezleri otomatik olarak kabul eder.
              Tarayıcı ayarlarınızı değiştirerek çerezleri engelleyebilir veya
              çerez gönderildiğinde uyarı alabilirsiniz. Sitemizi ziyaret
              ettiğinizde çıkan çerez bandından tercihlerinizi
              yönetebilirsiniz.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              İletişim
            </h2>
            <p>
              Çerez politikamız hakkında sorularınız için{" "}
              <strong>info@rotermi.com.tr</strong> adresinden bizimle iletişime
              geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
