"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * Floating decorative elements that gently move.
 * Great for hero sections or behind cards.
 */
export function FloatingElement({
  children,
  className,
  amplitude = 15,
  duration = 5,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startY = gsap.getProperty(el, "y") as number;

    gsap.to(el, {
      y: startY + amplitude,
      duration,
      delay,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.5,
    });

    gsap.to(el, {
      x: `random(-${amplitude / 2}, ${amplitude / 2})`,
      duration: duration * 1.3,
      delay: delay + 0.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.3,
    });
  }, [amplitude, duration, delay]);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children}
    </div>
  );
}
