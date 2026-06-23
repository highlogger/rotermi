"use client";

/**
 * A shimmer/sweep effect that plays on hover over cards.
 * Apply as an overlay inside a card with `group` on the parent.
 */
export function ShineOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10 overflow-hidden rounded-inherit">
      <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
    </div>
  );
}
