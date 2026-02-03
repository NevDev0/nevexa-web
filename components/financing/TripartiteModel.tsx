"use client";

import { tripartiteModelCopy } from "@/content/financing.en";

export default function TripartiteModel() {
  return (
    <section className="w-full bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-200">
            {tripartiteModelCopy.title}
          </h2>
        </div>

        {/* Underline accent rouge */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mx-auto -mt-1 mb-4 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Grid des 3 rôles — Stack mobile, 3 colonnes desktop */}
        <div className="mb-8 grid gap-1 sm:grid-cols-1 md:grid-cols-3">
          {tripartiteModelCopy.roles.map((role, index) => (
            <div key={role.id} className="relative">
              {/* Card avec micro-animation hover */}
              <div className="group relative rounded-lg border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
                {/* Tag visuel en haut à droite */}
                <div className="absolute right-4 top-4">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium uppercase tracking-wider ${
                      role.id === "banking-partner"
                        ? "bg-[#5A0F14]/30 text-white/90 border border-[#5A0F14] shadow-[0_0_8px_rgba(90,15,20,0.3)]"
                        : "bg-white/5 text-white/50 border border-white/10"
                    }`}
                  >
                    {role.tag}
                  </span>
                </div>

                {/* Label du rôle */}
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {role.label}
                </h3>

                {/* Responsabilités avec flèches */}
                <ul className="space-y-2">
                  {role.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-neutral-400"
                    >
                      <span className="-mt-0.5 text-[#5A0F14]">→</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Flèche directionnelle entre les cards (desktop uniquement) */}
              {index < tripartiteModelCopy.roles.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                  <div className="flex items-center gap-1 text-white/30">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-0"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}

              {/* Flèche verticale (mobile uniquement) */}
              {index < tripartiteModelCopy.roles.length - 1 && (
                <div className="flex justify-center py-3 md:hidden">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white/30"
                  >
                    <path
                      d="M10 4L10 16M10 16L6 12M10 16L14 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Légende — Signature-style positioning (responsive) */}
        <div className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs italic leading-relaxed text-neutral-400 sm:text-sm">
              {tripartiteModelCopy.subtitle}
            </p>
          </div>
          {/* Accent décoratif subtil */}
          <div className="absolute -left-2 top-0 h-full w-px bg-gradient-to-b from-[#5A0F14]/50 via-[#5A0F14]/20 to-transparent opacity-0 md:opacity-100" />
        </div>
      </div>
    </section>
  );
}