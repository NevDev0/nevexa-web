"use client";

import { financingHeroCopy } from "@/content/financing.en";
import { motion } from "framer-motion";

export default function HeroFinancing() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Contenu principal */}
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <div className="max-w-2xl">
          {/* Badges — Au-dessus du H1 pour visibilité immédiate */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <motion.span
              className="rounded-full border border-[#5A0F14] bg-[#5A0F14]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              {financingHeroCopy.badges.earlyAccess}
            </motion.span>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/60">
              {financingHeroCopy.badges.comingSoon}
            </span>
          </div>

          {/* H1 — Titre principal */}
          <h1 className="mb-6 text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-snug">
            {financingHeroCopy.title}
          </h1>

          {/* H2 — Sous-titre description */}
          <h2 className="mb-8 text-sm leading-relaxed text-neutral-300 sm:text-base">
            {financingHeroCopy.subtitle}
          </h2>

          {/* Clarification — Card subtile pour attirer l'œil */}
          <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
              {financingHeroCopy.clarification}
            </p>
          </div>

          {/* PAS de CTA — Intentionnellement calme */}
        </div>
      </div>

    </section>
  );
}