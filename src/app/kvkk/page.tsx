import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Rotermi Enerji KVKK aydınlatma metni. Kişisel verilerinizin işlenmesi hakkında bilgilendirme.",
  robots: { index: false, follow: true },
};

export default function KvkkPage() {
  return (
    <>
      <section className="relative bg-navy-900 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            KVKK Aydınlatma Metni
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="max-w-none space-y-6 text-warm-700 leading-relaxed">
            <p>
              <strong>Rotermi Enerji</strong> olarak, 6698 sayılı Kişisel
              Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında veri
              sorumlusu sıfatıyla, kişisel verilerinizin işlenmesine ilişkin
              sizi bilgilendirmek isteriz.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              1. Veri Sorumlusu
            </h2>
            <p>
              Rotermi Enerji olarak, Deluxia Palace Barbaros Mah. Mor Sümbül
              Sok. No:5A/88 Kat:3 Ataşehir / İstanbul adresinde faaliyet
              göstermekteyiz. KVKK kapsamında veri sorumlusuyuz.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              2. İşlenen Kişisel Veriler
            </h2>
            <p>
              İletişim formu aracılığıyla bizimle paylaştığınız ad-soyad,
              e-posta adresi, telefon numarası ve firma bilgileriniz; hizmet
              talebinizin karşılanması amacıyla işlenmektedir.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              3. Kişisel Verilerin İşlenme Amaçları
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>İletişim ve teklif taleplerinizin karşılanması</li>
              <li>Hizmet süreçlerimizin yürütülmesi</li>
              <li>
                Müşteri ilişkileri yönetimi ve memnuniyet değerlendirmeleri
              </li>
              <li>Yasal yükümlülüklerimizin yerine getirilmesi</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              4. Kişisel Verilerin Aktarılması
            </h2>
            <p>
              Kişisel verileriniz, yurt içinde ve yurt dışında üçüncü kişilere
              aktarılmamaktadır. Yalnızca yasal zorunluluk halinde yetkili kamu
              kurum ve kuruluşları ile paylaşılabilir.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
            </h2>
            <p>
              Kişisel verileriniz, web sitemizdeki iletişim formu aracılığıyla
              elektronik ortamda toplanmaktadır. Hukuki sebebi, KVKK Madde 5/1
              kapsamında açık rızanıza dayanmaktadır.
            </p>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              6. KVKK Madde 11 Kapsamındaki Haklarınız
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>
                İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını
                öğrenme
              </li>
              <li>Yurt içinde / yurt dışında aktarıldığı 3. kişileri bilme</li>
              <li>Eksik / yanlış işlenmişse düzeltilmesini isteme</li>
              <li>Silinmesini veya yok edilmesini isteme</li>
              <li>İtiraz ve zararın giderilmesini talep etme</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-800 mt-8">
              7. İletişim
            </h2>
            <p>
              KVKK kapsamındaki haklarınızı kullanmak için{" "}
              <strong>info@rotermi.com.tr</strong> adresine e-posta
              gönderebilirsiniz. Talebiniz en geç 30 gün içinde
              değerlendirilerek sonuçlandırılacaktır.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
