"use client";

import { b2cHeroCopy } from "@/content/b2c.en";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Black placeholder background — will be replaced with vehicle image in Couche 2 */}
      <div className="absolute inset-0 bg-black" />

      {/* Content wrapper — same structure as Homepage */}
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6 pb-16 pt-24 text-center">
        <div className="max-w-md">
          {/* H1 — Premium 2021-2026 vehicles */}
          <h1 className="mb-3 text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-snug">
            {b2cHeroCopy.title}
          </h1>

          {/* H2 — Subtitle */}
          <p className="mb-8 text-sm leading-relaxed text-neutral-300 sm:text-base">
            {b2cHeroCopy.subtitle}
          </p>

          {/* CTA — No hover in Couche 1 */}
          <div className="mx-auto flex w-full max-w-xs flex-col">
            <button
              type="button"
              onClick={() => {
                // TODO: Wire to contact modal
                console.log("Open contact modal");
              }}
              className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-black"
            >
              {b2cHeroCopy.ctaLabel}
            </button>
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