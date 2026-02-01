"use client";

import { partnershipHeroCopy } from "@/content/partnership.en";

export default function HeroPartnership() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Contenu principal */}
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <div className="max-w-2xl">
          {/* Badge — Au-dessus du H1 pour visibilité immédiate */}
          <div className="mb-8 flex items-center justify-center">
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/60">
              {partnershipHeroCopy.badge}
            </span>
          </div>

          {/* H1 — Titre principal */}
          <h1 className="mb-6 text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-snug">
            {partnershipHeroCopy.title}
          </h1>

          {/* H2 — Sous-titre description */}
          <h2 className="mb-8 text-sm leading-relaxed text-neutral-300 sm:text-base">
            {partnershipHeroCopy.subtitle}
          </h2>

          {/* Clarification — Card subtile pour attirer l'œil */}
          <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
              {partnershipHeroCopy.clarification}
            </p>
          </div>

          {/* PAS de CTA — Intentionnellement calme */}
        </div>
      </div>
    </section>
  );
}