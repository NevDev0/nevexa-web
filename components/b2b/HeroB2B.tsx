"use client";

import { b2bHeroCopy } from "@/content/b2b.en";

export default function HeroB2B() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Black placeholder background — will be replaced with logistics/professional image in Couche 2 */}
      <div className="absolute inset-0 bg-black" />

      {/* Content wrapper — same structure as B2C Hero */}
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6 pb-16 pt-24 text-center">
        <div className="max-w-md">
          {/* H1 — North American Vehicles. No Middleman. No Surprises. */}
          <h1 className="mb-3 text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-snug">
            {b2bHeroCopy.title}
          </h1>

          {/* H2 — Subtitle */}
          <p className="mb-8 text-sm leading-relaxed text-neutral-300 sm:text-base">
            {b2bHeroCopy.subtitle}
          </p>

          {/* CTA — Email Us Directly (outline button for B2B) */}
          <div className="mx-auto flex w-full max-w-xs flex-col">
            <a
              href={
                b2bHeroCopy.ctaAction === "mailto"
                  ? "mailto:contact@nevexacars.com" // Replace with actual email
                  : "#contact"
              }
              className="w-full rounded-full border border-white bg-transparent px-4 py-3 text-sm font-semibold text-white"
            >
              {b2bHeroCopy.ctaLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint — outside content wrapper, absolute to section */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-wide text-white/50">
        Scroll
      </div>
    </section>
  );
}