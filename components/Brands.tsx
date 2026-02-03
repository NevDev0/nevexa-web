"use client";

import { brandsCopy } from "@/content/en";

export default function Brands() {
  // Duplique pour boucle infinie du marquee
  const loop = [...brandsCopy.logos, ...brandsCopy.logos];

  return (
    <section className="w-full bg-black px-6 py-6 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Title - AMÉLIORÉ */}
        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {brandsCopy.title}
          </h2>
        </div>

        {/* Underline accent (#5A0F14) - PLUS LARGE */}
        <div className="mb-12 flex justify-center">
          <div className="h-px w-20 bg-[#5A0F14]" />
        </div>

        {/* Marquee Container */}
        <div className="relative mb-6 overflow-hidden">
          {/* Fade edges (gradient gauche/droite) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent" />

          {/* Marquee Track */}
          <div className="nevexa-marquee-track gap-6">
            {loop.map((logo, idx) => (
              <div
                key={idx}
                className="group flex h-24 w-36 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-neutral-900 shadow-lg shadow-black/50 transition-all duration-300 hover:border-white/30 hover:bg-neutral-800 hover:shadow-xl hover:shadow-black/60"
                title={logo.name}
                aria-label={logo.name}
              >
                {/* Wrapper avec animation spotlight */}
                <div className="nevexa-brand-spotlight transition-transform duration-700 ease-in-out">
                  {/* Logo Image */}
                  <div
                    style={{
                      transform: `scale(${(logo as any).scale ?? 1})`,
                      transformOrigin: "center",
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-8 max-w-[100px] object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal note */}
        <div className="text-center">
          <p className="text-[10px] italic tracking-wide text-neutral-600">
            {brandsCopy.legalNote}
          </p>
        </div>
      </div>
    </section>
  );
}