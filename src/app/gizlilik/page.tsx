import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Rotermi Enerji gizlilik politikası.",
  robots: { index: false, follow: true },
};

export default function GizlilikPage() {
  return (
    <>
      <section className="relative bg-navy-900 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Gizlilik Politikası
          </h1>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="max-w-none space-y-6 text-warm-700 leading-relaxed">
            <p>
              Rotermi Enerji olarak gizliliğinize saygı duyuyor ve kişisel
              verilerinizin güvenliğini önemsiyoruz. Bu gizlilik politikası,
              web sitemizi ziyaret ettiğinizde toplanan bilgilerin nasıl
              kullanıldığını açıklamaktadır.
            </p>
            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Toplanan Bilgiler
            </h2>
            <p>
              İletişim formu aracılığıyla bizimle paylaştığınız ad-soyad,
              e-posta, telefon ve firma bilgileriniz yalnızca talebinizin
              karşılanması amacıyla toplanır ve işlenir.
            </p>
            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              Bilgi Güvenliği
            </h2>
            <p>
              Kişisel verileriniz, yetkisiz erişim, değiştirme, ifşa veya
              imhaya karşı korunmak amacıyla uygun teknik ve idari güvenlik
              önlemleri ile korunmaktadır.
            </p>
            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              İletişim
            </h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için{" "}
              <strong>info@rotermi.com.tr</strong> adresinden bizimle iletişime
              geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
