"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * Text that reveals word-by-word with a stagger animation on scroll.
 */
export function AnimatedText({
  children,
  className,
  staggerDelay = 0.04,
  duration = 0.5,
}: {
  children: string;
  className?: string;
  staggerDelay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0, y: 20, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration,
          stagger: staggerDelay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [staggerDelay, duration]);

  const words = children.split(" ");

  return (
    <div ref={ref} className={className} aria-label={children}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word inline-block mr-[0.25em]"
          style={{ transformOrigin: "bottom center" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
