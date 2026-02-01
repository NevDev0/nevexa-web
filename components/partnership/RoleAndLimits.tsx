"use client";

import { roleAndLimitsCopy } from "@/content/partnership.en";

export default function RoleAndLimits() {
  return (
    <section className="w-full bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-200">
            {roleAndLimitsCopy.title}
          </h2>
        </div>

        {/* Underline accent rouge */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mx-auto -mt-1 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Bloc tabulaire — AS A NEVEXA PARTNER */}
        <div className="mb-8 overflow-hidden rounded-lg border border-white/10 bg-neutral-950">
          {/* Header principal */}
          <div className="border-b border-white/10 bg-neutral-900 px-6 py-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {roleAndLimitsCopy.partnerRole.title}
            </h3>
          </div>

          {/* Grid 2 colonnes — Headers */}
          <div className="grid border-b border-white/10 md:grid-cols-2">
            <div className="border-b border-white/10 bg-neutral-900/50 px-6 py-3 md:border-b-0 md:border-r">
              <p className="text-xs font-medium uppercase tracking-wider text-green-400">
                ✓ Your Role
              </p>
            </div>
            <div className="hidden bg-neutral-900/50 px-6 py-3 md:block">
              <p className="text-xs font-medium uppercase tracking-wider text-red-400">
                ✗ Strictly Prohibited
              </p>
            </div>
          </div>

          {/* Grid 2 colonnes — Contenu */}
          <div className="grid md:grid-cols-2">
            {/* Colonne ✓ YOUR ROLE */}
            <div className="border-b border-white/10 px-6 py-6 md:border-b-0 md:border-r">
              <ul className="space-y-3">
                {roleAndLimitsCopy.partnerRole.canDo.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm leading-relaxed text-neutral-300"
                  >
                    <span className="mt-0.5 text-neutral-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne ✗ STRICTLY PROHIBITED */}
            <div className="px-6 py-6">
              {/* Header mobile uniquement */}
              <div className="mb-4 border-b border-white/10 pb-3 md:hidden">
                <p className="text-xs font-medium uppercase tracking-wider text-red-400">
                  ✗ Strictly Prohibited
                </p>
              </div>

              <ul className="space-y-3">
                {roleAndLimitsCopy.partnerRole.cannotDo.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm leading-relaxed text-neutral-300"
                  >
                    <span className="mt-0.5 text-neutral-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bloc tabulaire — NEVEXA'S ROLE */}
        <div className="mb-8 overflow-hidden rounded-lg border border-white/10 bg-neutral-950">
          {/* Header */}
          <div className="border-b border-white/10 bg-neutral-900 px-6 py-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {roleAndLimitsCopy.nevexaRole.title}
            </h3>
          </div>

          {/* Contenu */}
          <div className="px-6 py-6">
            <ul className="space-y-3">
              {roleAndLimitsCopy.nevexaRole.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm leading-relaxed text-neutral-300"
                >
                  <span className="mt-0.5 text-neutral-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Warning Box */}
        <div className="rounded-lg border border-[#5A0F14] bg-[#5A0F14]/10 p-6">
          <div className="flex items-start gap-3">
            {/* Icône alerte */}
            <div className="mt-0.5 flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#5A0F14]"
              >
                <path
                  d="M10 0L0 18H20L10 0ZM11 15H9V13H11V15ZM11 11H9V7H11V11Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Texte warning */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-[#5A0F14]">
                Warning
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                {roleAndLimitsCopy.warning}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}