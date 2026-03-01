"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactChoiceModal from "@/components/ContactChoiceModal";

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#0E0F11] px-6 py-16 sm:py-32">
      
      {/* Lueur de fond (Le "Spotlight" final) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(90,15,20,0.15)_0%,transparent_70%)] blur-3xl" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center"
      >
        {/* Ligne rouge décorative */}
        <div className="mx-auto mb-12 h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]" />

        {/* Titre Impactant */}
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ready to secure your vehicle?
        </h2>

        {/* Sous-texte rassurant */}
        <p className="mb-12 max-w-xl text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
          No aggressive sales tactics. No automated forms. 
          Just a direct conversation with an expert who respects your time and your investment.
        </p>

        {/* Le Bouton Principal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-full bg-white px-10 py-5 text-[14px] font-bold uppercase tracking-wider text-black transition-transform duration-300 hover:scale-[1.03] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          <span className="relative z-10">Start the conversation</span>
          <svg 
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Petit texte de réassurance final */}
        <p className="mt-12 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
          Response within 24 hours.
        </p>
      </motion.div>

      {/* Le Modal Global de Contact */}
      <ContactChoiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        subject="New inquiry — Nevexa B2C"
      />
    </section>
  );
}