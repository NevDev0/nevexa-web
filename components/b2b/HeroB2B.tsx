"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { b2bHeroCopy } from "@/content/b2b.en";
import ContactChoiceModalB2B from "@/components/b2b/ContactChoiceModalB2B";
import NavBar from "@/components/NavBar";

// 1. Variantes d'animation pour la cascade d'éléments
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Écart très serré pour un effet dynamique mais sérieux
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroB2B() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── NAVBAR ── */}
      <NavBar />

      <section className="relative w-full overflow-hidden min-h-[85svh]">
        {/* Background image animé par Framer Motion (Adieu le bug window.matchMedia !) */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero/b2b-hero-background.webp')" }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[90svh] flex-col items-center justify-center px-6 pb-20 pt-16 text-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#5A0F14] shadow-[0_0_8px_rgba(90,15,20,0.8)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                {b2bHeroCopy.badge}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-2xl"
            >
              {b2bHeroCopy.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mb-10 text-[15px] leading-relaxed text-white/80 sm:text-[18px]"
            >
              {b2bHeroCopy.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              {/* Primary CTA — opens modal */}
              <button
                onClick={() => setModalOpen(true)}
                className="group flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-white px-8 text-[14px] font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-200 sm:w-auto"
              >
                {b2bHeroCopy.ctaPrimary}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Secondary CTA — CORRIGÉ (Retrait du backdrop-blur-sm, passage à bg-white/10) */}
              <a
                href="#capabilities"
                className="flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-[14px] font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/20 sm:w-auto"
              >
                {b2bHeroCopy.ctaSecondary}
              </a>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              variants={itemVariants}
              className="mt-10 max-w-sm text-xs text-white/40"
            >
              {b2bHeroCopy.disclaimer}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactChoiceModalB2B
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subject="B2B Inquiry — Nevexa"
      />
    </>
  );
}