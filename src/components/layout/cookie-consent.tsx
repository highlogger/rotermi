"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie, ChevronRight } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setExiting(true);
    setTimeout(() => setVisible(false), 300);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setExiting(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:bottom-6 z-[9998] max-w-md transition-all duration-300 ${
        exiting
          ? "opacity-0 translate-y-4 scale-95"
          : "opacity-100 translate-y-0 scale-100 animate-fade-in-up"
      }`}
      role="dialog"
      aria-label="Çerez izni bildirimi"
      aria-live="polite"
    >
      <div className="rounded-2xl bg-white border border-warm-200 shadow-2xl p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="rounded-lg bg-navy-50 p-2 shrink-0">
            <Cookie className="h-5 w-5 text-navy-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-navy-800">
              Çerez Tercihleri
            </h3>
            <p className="mt-1 text-xs text-warm-600 leading-relaxed">
              Size daha iyi hizmet sunabilmek için yasal mevzuata uygun
              çerezler kullanıyoruz. Detaylı bilgi için{" "}
              <Link
                href="/cerez-politikasi"
                className="text-navy-600 underline hover:text-flame-500 transition-colors"
              >
                Çerez Politikası
              </Link>
              {" ve "}
              <Link
                href="/kvkk"
                className="text-navy-600 underline hover:text-flame-500 transition-colors"
              >
                KVKK Aydınlatma Metni
              </Link>
              &rsquo;ni inceleyebilirsiniz.
            </p>
          </div>
          <button
            onClick={reject}
            className="shrink-0 rounded-lg p-1.5 text-warm-400 hover:text-warm-600 hover:bg-warm-50 transition-colors"
            aria-label="Çerezleri reddet ve kapat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={accept}
            className="flex-1 rounded-lg bg-navy-700 px-4 py-2.5 text-xs font-semibold text-white hover:bg-navy-800 active:bg-navy-900 transition-all active:scale-[0.97]"
          >
            Tümünü Kabul Et
            <ChevronRight className="inline-block h-3.5 w-3.5 ml-1 -mr-1" />
          </button>
          <button
            onClick={reject}
            className="flex-1 rounded-lg border border-warm-300 px-4 py-2.5 text-xs font-medium text-warm-600 hover:bg-warm-50 transition-all"
          >
            Sadece Gerekli
          </button>
        </div>
      </div>
    </div>
  );
}
