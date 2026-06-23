"use client";

import { useRef, useEffect, type ReactNode } from "react";

/**
 * Adds a 3D parallax tilt effect on mouse hover.
 * Wrap any card/element with this for a subtle depth effect.
 */
export function ParallaxTilt({
  children,
  className,
  maxTilt = 8,
  scale = 1.03,
  speed = 400,
  perspective = 800,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  speed?: number;
  perspective?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const tiltX = (y - 0.5) * maxTilt * 2;
      const tiltY = (x - 0.5) * -maxTilt * 2;

      el.style.transition = `transform ${speed}ms ease-out`;
      el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    };

    const handleMouseLeave = () => {
      el.style.transition = `transform ${speed * 2}ms ease-out`;
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt, scale, speed, perspective]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
