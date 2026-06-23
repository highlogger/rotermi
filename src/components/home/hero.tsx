"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Factory,
  Flame,
  Cog,
  Shield,
  Award,
  Zap,
  Star,
} from "lucide-react";
import { AnimatedText } from "@/components/animations/animated-text";
import { FloatingElement } from "@/components/animations/floating-element";
import { ParallaxTilt } from "@/components/animations/parallax-tilt";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Energy particles canvas background */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const createParticle = (x?: number, y?: number) => {
      const startX = x ?? Math.random() * canvas.width;
      const startY = y ?? canvas.height * 0.6 + Math.random() * canvas.height * 0.4;
      return {
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -(Math.random() * 1.5 + 0.5),
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      };
    };

    /* Initial particles */
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* Add new particles periodically */
      if (particles.length < 80 && Math.random() < 0.3) {
        particles.push(createParticle());
      }

      particles = particles.filter((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.002; /* slight upward acceleration */

        if (p.life > p.maxLife || p.y < 0 || p.opacity <= 0) {
          if (Math.random() < 0.6) {
            /* Respawn from bottom */
            const newP = createParticle();
            p.x = newP.x;
            p.y = newP.y;
            p.vx = newP.vx;
            p.vy = newP.vy;
            p.life = 0;
            p.maxLife = newP.maxLife;
            p.opacity = newP.opacity;
            return true;
          }
          return false;
        }

        /* Fade out near end of life */
        const lifeRatio = p.life / p.maxLife;
        const currentOpacity =
          lifeRatio > 0.7
            ? p.opacity * (1 - (lifeRatio - 0.7) / 0.3)
            : p.opacity;

        /* Draw particle — flame/orange glow */
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 2
        );
        const hue = 15 + Math.random() * 10;
        gradient.addColorStop(
          0,
          `hsla(${hue}, 90%, 55%, ${currentOpacity})`
        );
        gradient.addColorStop(
          0.5,
          `hsla(${hue}, 80%, 45%, ${currentOpacity * 0.5})`
        );
        gradient.addColorStop(1, `hsla(${hue}, 70%, 40%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-navy-950">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/70 to-navy-950/90 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 to-transparent z-[1]" />

      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="max-w-xl">
            {/* Badge with pulse */}
            <div className="inline-flex items-center gap-2 rounded-full border border-flame-500/30 bg-flame-500/10 px-4 py-1.5 text-flame-300 text-xs font-medium mb-6 animate-fade-in-down">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flame-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-flame-400" />
              </span>
              <Flame className="h-3.5 w-3.5" />
              15 Yıllık Tecrübe
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tight text-white leading-[1.05]">
              <AnimatedText
                staggerDelay={0.06}
                duration={0.7}
              >
                Endüstriyel Yakma Sistemleri Çözüm Ortağı
              </AnimatedText>
              <br />
              <span className="gradient-text-energy animate-fade-in-up">
                Rotermi Enerji
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-warm-200/90 leading-relaxed max-w-lg animate-fade-in-up">
              Brülör, kazan, enerji verimliliği ve mühendislik çözümlerimizle
              sanayinin enerjisine yön veriyor,{" "}
              <strong className="text-white font-semibold">
                %40&rsquo;a varan enerji tasarrufu
              </strong>{" "}
              sağlıyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-flame-500 px-8 py-4 text-base font-semibold text-white hover:bg-flame-600 active:bg-flame-700 transition-all shadow-lg hover:shadow-xl hover:shadow-flame-500/25 active:scale-[0.97] group"
              >
                Teklif Al
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/urun-gruplari"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 active:bg-white/15 transition-all group"
              >
                Ürün Grupları
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-white/50 animate-fade-in-up">
              {[
                { icon: Shield, text: "Garantili Çözümler" },
                { icon: Award, text: "ISO 9001" },
                { icon: Zap, text: "%40 Tasarruf" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm font-medium text-white/60"
                >
                  <Icon className="h-4 w-4 text-flame-400" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual Card */}
          <div className="hidden lg:block relative animate-fade-in">
            {/* Floating decorative elements */}
            <FloatingElement className="absolute -top-8 -left-8 z-20" amplitude={12} duration={4} delay={0}>
              <div className="w-16 h-16 rounded-2xl bg-flame-500/20 border border-flame-500/30 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-flame-500/10">
                <Star className="h-7 w-7 text-flame-300" />
              </div>
            </FloatingElement>
            <FloatingElement className="absolute -bottom-4 -right-4 z-20" amplitude={10} duration={5} delay={1.5}>
              <div className="w-12 h-12 rounded-xl bg-navy-400/20 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <Cog className="h-6 w-6 text-white/40" />
              </div>
            </FloatingElement>

            {/* Main card */}
            <ParallaxTilt maxTilt={5} scale={1.02}>
            <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 shadow-2xl">
              {/* Energy flow lines */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-flame-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-500/10 rounded-full blur-3xl" />
              </div>

              <div className="relative space-y-6">
                {/* Stats within card */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Factory,
                      value: "500+",
                      label: "Tamamlanan Proje",
                    },
                    {
                      icon: Cog,
                      value: "15+",
                      label: "Yıllık Deneyim",
                    },
                    {
                      icon: Shield,
                      value: "300+",
                      label: "Mutlu Müşteri",
                    },
                    {
                      icon: Flame,
                      value: "7",
                      label: "Ürün Grubu",
                    },
                  ].map(({ icon: Icon, value, label }) => (
                    <div
                      key={label}
                      className="rounded-xl bg-white/5 border border-white/10 p-4 text-center group hover:bg-white/10 transition-colors"
                    >
                      <Icon className="h-6 w-6 text-flame-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white font-display">
                        {value}
                      </div>
                      <div className="text-xs text-white/50 mt-1">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom quote */}
                <div className="rounded-xl bg-gradient-to-r from-flame-500/20 to-transparent border border-flame-500/20 p-4">
                  <p className="text-sm text-white/70 italic leading-relaxed">
                    &ldquo;Enerji sektöründe güvenilir çözüm ortağınız olarak,
                    her projeye özel mühendislik yaklaşımı sunuyoruz.&rdquo;
                  </p>
                </div>
              </div>
            </div>
            </ParallaxTilt>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-50 to-transparent z-[2]" />
    </section>
  );
}
