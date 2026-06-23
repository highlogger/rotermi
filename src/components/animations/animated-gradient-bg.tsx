"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * Animated gradient background that shifts colors.
 * Use as a background layer.
 */
export function AnimatedGradientBg({
  colors = ["#0B1D3A", "#15325A", "#102848", "#1A3D6D"],
  className,
  duration = 8,
}: {
  colors?: string[];
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const gradientStops = colors.map(
      (c, i) => `${c} ${(i / (colors.length - 1)) * 100}%`
    );

    gsap.to(el, {
      backgroundImage: `linear-gradient(${Math.random() * 360}deg, ${gradientStops.join(", ")})`,
      duration,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, [colors, duration]);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${colors.join(", ")})`,
        backgroundSize: "400% 400%",
      }}
      aria-hidden="true"
    />
  );
}
