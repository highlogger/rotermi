"use client";
import { useState } from "react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Mail, Send, CheckCircle } from "lucide-react";
import Link from "next/link";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-20 lg:py-24 bg-warm-50 relative overflow-hidden">
      {/* Floating bg elements */}
      <div className="absolute top-10 left-10 text-flame-200/30 animate-float">
        <Mail className="h-20 w-20" />
      </div>
      <div className="absolute bottom-10 right-10 text-navy-200/20 animate-float">
        <Send className="h-16 w-16" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <ScrollReveal>
          <span className="inline-block text-flame-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Bülten
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
            Gelişmelerden Haberdar Olun
          </h2>
          <p className="mt-4 text-warm-600 max-w-xl mx-auto leading-relaxed">
            Enerji verimliliği, yeni teknolojiler ve sektör gelişmeleri hakkında
            güncel bilgiler için bültenimize abone olun.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <div className="mt-10 flex flex-col items-center gap-3 animate-scale-in">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle className="h-7 w-7 text-success" />
              </div>
              <p className="text-navy-800 font-semibold">
                Aboneliğiniz alındı!
              </p>
              <p className="text-sm text-warm-500">
                Güncellemeler için teşekkürler.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-warm-400" />
                <input
                  type="email"
                  required
                  placeholder="E-posta adresiniz"
                  className="w-full rounded-xl border border-warm-300 bg-white pl-12 pr-4 py-3.5 text-sm placeholder:text-warm-400 focus:border-navy-500 focus:ring-4 focus:ring-navy-500/10 outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-flame-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-flame-600 active:bg-flame-700 transition-all shadow-md hover:shadow-lg hover:shadow-flame-500/20 active:scale-[0.97] group shrink-0"
              >
                Abone Ol
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="mt-6 text-xs text-warm-400">
            Abone olarak{" "}
            <Link
              href="/kvkk"
              className="text-navy-600 underline hover:text-flame-500 transition-colors"
            >
              KVKK Aydınlatma Metni
            </Link>
            &apos;ni kabul etmiş olursunuz. Endişelenmeyin, spam yapmayız.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
