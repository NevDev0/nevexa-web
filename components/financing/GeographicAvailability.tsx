"use client";

import { geographicAvailabilityCopy } from "@/content/financing.en";

export default function GeographicAvailability() {
  return (
    <section className="w-full bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-200">
            {geographicAvailabilityCopy.title}
          </h2>
        </div>

        {/* Underline accent rouge */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mx-auto -mt-1 mb-6 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Timeline verticale compacte */}
        <div className="relative space-y-6">
          {geographicAvailabilityCopy.phases.map((phase, index) => (
            <div key={phase.id} className="relative flex gap-4">
              {/* Ligne verticale + Dot */}
              <div className="relative flex flex-col items-center">
                {/* Dot */}
                <div className="z-10 h-3 w-3 rounded-full border-2 border-[#5A0F14] bg-black" />
                
                {/* Ligne verticale (pas sur le dernier élément) */}
                {index < geographicAvailabilityCopy.phases.length - 1 && (
                  <div className="mt-1 h-full w-px bg-white/10" />
                )}
              </div>

              {/* Contenu de la phase */}
              <div className="flex-1 pb-6">
                {/* Label de la phase */}
                <h3 className="mb-2 text-base font-semibold text-white">
                  {phase.label}
                </h3>

                {/* Détails */}
                <ul className="space-y-1">
                  {phase.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-neutral-400"
                    >
                      <span className="-mt-0.5 text-[#5A0F14]">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Message "Not in your country" intégré */}
        <div className="mt-4 rounded border border-white/10 bg-white/5 p-4">
          <p className="text-sm leading-relaxed text-neutral-400">
            {geographicAvailabilityCopy.notInCountry}
          </p>
        </div>
      </div>
    </section>
  );
}