"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

type StaggerProps = {
  children: React.ReactNode;
  /** Stagger delay between each child (seconds) */
  staggerDelay?: number;
  /** Duration per child animation */
  duration?: number;
  /** Direction */
  direction?: "up" | "down" | "left" | "right";
  /** Distance in px */
  distance?: number;
  /** Extra classes on the container */
  className?: string;
  /** Trigger position */
  triggerPosition?: "top" | "center" | "bottom";
};

const triggerMap = {
  top: "top 85%",
  center: "top 70%",
  bottom: "top 95%",
};

export function StaggerReveal({
  children,
  staggerDelay = 0.1,
  duration = 0.6,
  direction = "up",
  distance = 30,
  className,
  triggerPosition = "top",
}: StaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const childElements = el.children;
    if (!childElements.length) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      ease: "power3.out",
    };

    if (direction === "up") fromVars.y = distance;
    if (direction === "down") fromVars.y = -distance;
    if (direction === "left") fromVars.x = distance;
    if (direction === "right") fromVars.x = -distance;

    const ctx = gsap.context(() => {
      gsap.fromTo(childElements, fromVars, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        stagger: staggerDelay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: triggerMap[triggerPosition],
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [staggerDelay, duration, direction, distance, triggerPosition]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
