"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CountUpProps = {
  /** Target number */
  end: number;
  /** Optional prefix (e.g. "500+") */
  prefix?: string;
  /** Optional suffix (e.g. "+") */
  suffix?: string;
  /** Duration in seconds */
  duration?: number;
  /** Extra classes */
  className?: string;
};

export function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () => {
          if (hasAnimated) return;
          setHasAnimated(true);

          gsap.to(
            { val: 0 },
            {
              val: end,
              duration,
              ease: "power2.out",
              onUpdate: function () {
                if (el) {
                  el.textContent =
                    prefix + Math.round(this.targets()[0].val) + suffix;
                }
              },
            }
          );
        },
        once: true,
      });
    }, ref);

    return () => ctx.revert();
  }, [end, prefix, suffix, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
