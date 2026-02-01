"use client";

import { howItWorksCopy } from "@/content/partnership.en";

export default function HowItWorks() {
  return (
    <section className="w-full bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-200">
            {howItWorksCopy.title}
          </h2>
        </div>

        {/* Underline accent rouge */}
        <div className="mb-12 flex flex-col items-center">
          <div className="mx-auto -mt-1 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Timeline verticale */}
        <div className="space-y-8">
          {howItWorksCopy.steps.map((step, index) => (
            <div key={step.id} className="relative flex gap-4">
              {/* Colonne gauche — Dot + Ligne */}
              <div className="flex flex-col items-center">
                {/* Dot rouge — Aligné avec le titre */}
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#5A0F14] bg-[#5A0F14]/20">
                  <div className="h-3 w-3 rounded-full bg-[#5A0F14]" />
                </div>

                {/* Ligne verticale — Pas sur le dernier step */}
                {index < howItWorksCopy.steps.length - 1 && (
                  <div className="mt-2 h-full w-px bg-white/10" />
                )}
              </div>

              {/* Colonne droite — Contenu */}
              <div className="flex-1 pb-2">
                {/* Label du step */}
                <h3 className="mb-3 text-base font-semibold uppercase tracking-wider text-white">
                  {step.label}
                </h3>

                {/* Détails avec flèches */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-neutral-400"
                    >
                      <span className="mt-1 text-[#5A0F14]">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}