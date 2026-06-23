"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

type RevealProps = {
  children: React.ReactNode;
  /** Animation direction */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Duration of animation (seconds) */
  duration?: number;
  /** Distance to travel in px */
  distance?: number;
  /** Trigger position: "top" = when top of element hits bottom of viewport */
  triggerPosition?: "top" | "center" | "bottom";
  /** Extra classes */
  className?: string;
  /** Whether to reset on scroll back */
  scrub?: boolean;
};

const triggerMap = {
  top: "top 85%",
  center: "top 70%",
  bottom: "top 95%",
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  triggerPosition = "top",
  className,
  scrub = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease: "power3.out",
    };

    if (direction === "up") fromVars.y = distance;
    if (direction === "down") fromVars.y = -distance;
    if (direction === "left") fromVars.x = distance;
    if (direction === "right") fromVars.x = -distance;

    const toVars: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
    };

    if (scrub) {
      toVars.scrollTrigger = {
        trigger: el,
        start: triggerMap[triggerPosition],
        toggleActions: "play none none reverse",
        // markers: true,
      };
    }

    const ctx = gsap.context(() => {
      if (scrub) {
        gsap.fromTo(el, fromVars, toVars);
      } else {
        gsap.fromTo(el, fromVars, {
          ...toVars,
          scrollTrigger: {
            trigger: el,
            start: triggerMap[triggerPosition],
            toggleActions: "play none none none",
            // markers: true,
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [direction, delay, duration, distance, triggerPosition, scrub]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
