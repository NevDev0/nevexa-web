"use client";

import { b2cHeroCopy } from "@/content/b2c.en";
import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import ContactChoiceModal from "@/components/ContactChoiceModal";
import NavBar from "@/components/NavBar";

// --- Variantes d'animation Framer Motion ---
const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
};

export default function B2CHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollToCatalog = () => {
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Coupe le titre dynamiquement au lieu de le hardcoder
  const titleWords = b2cHeroCopy.title.split(" ");

  return (
    <div className="relative w-full">
      <NavBar />

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* HERO CONTAINER - Natural Document Flow avec Flexbox */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden min-h-[85svh]">
        
        {/* ── BACKGROUND LAYERS ── */}
        <div className="absolute inset-0 h-[75%]">
          <Image
            src="/hero/b2c-hero2-background.webp"
            alt="Premium automotive background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_40%,rgba(0,0,0,0.4)_0%,transparent_70%)]" />
        </div>

        {/* Le fond du bas */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-neutral-100/0 via-neutral-100 to-white" />

        {/* ── CONTENT STACK ── */}
        <div className="relative z-10 flex w-full flex-col items-center pb-[clamp(1rem,2vh,2rem)] pt-[clamp(6rem,14vh,8rem)]">
          
          {/* ══════════════════════════════════════════════════════════ */}
          {/* HEADING - Animation Framer Motion propre */}
          {/* ══════════════════════════════════════════════════════════ */}
          <div className="relative flex w-full justify-center px-[clamp(1.5rem,5vw,3rem)] z-20">
            <motion.h1 
              variants={titleContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-center text-[clamp(1.875rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[clamp(-0.02em,-0.015vw,-0.01em)] text-white drop-shadow-2xl"
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* ══════════════════════════════════════════════════════════ */}
          {/* VEHICLE IMAGE - Tes valeurs Clamp exactes préservées */}
          {/* ══════════════════════════════════════════════════════════ */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex w-[115vw] max-w-none justify-center md:w-[clamp(600px,75vw,900px)] -mt-[clamp(3rem,12vw,8rem)] pointer-events-none z-10"
          >
            <Image
              src="/hero/b2c-hero-escalade1.webp"
              alt="Premium luxury vehicle"
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-contain"
            />
          </motion.div>

          {/* ══════════════════════════════════════════════════════════ */}
          {/* BOTTOM BLOCK */}
          {/* ══════════════════════════════════════════════════════════ */}
          <div className="relative z-20 flex w-full flex-col items-center px-[clamp(1.5rem,5vw,3rem)] -mt-[clamp(1.5rem,5vh,3rem)] md:-mt-[clamp(7rem,20vh,13rem)]">
            
            {/* BADGE */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-neutral-500 bg-white px-[clamp(0.875rem,2.5vw,1.25rem)] py-[clamp(0.375rem,1.5vh,0.625rem)] text-[clamp(0.625rem,1.5vw,0.75rem)] font-semibold uppercase tracking-[clamp(0.05em,0.1vw,0.1em)] text-neutral-700 shadow-sm">
                {b2cHeroCopy.badge}
              </span>
            </motion.div>

            {/* NOUVEAU : Texte d'impact émotionnel B2C */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-[clamp(1rem,2vh,1.5rem)] max-w-xl text-center text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-neutral-800"
            >
              Protecting your family and your hard-earned money. Official dealerships only. <strong className="font-semibold text-black">No auctions. No hidden history.</strong>
            </motion.p>

            {/* CTA BLOCK */}
            <div className="w-full max-w-[clamp(280px,92vw,500px)] mt-[clamp(1rem,3vh,2rem)]">
              
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex w-full flex-col gap-[clamp(0.5rem,1vh,1rem)] md:w-auto md:flex-row md:justify-center md:gap-[clamp(1rem,2vw,1.5rem)]"
              >
                <button
                  type="button"
                  onClick={handleScrollToCatalog}
                  className="group flex w-full items-center justify-center gap-[clamp(0.375rem,1vw,0.5rem)] rounded-full bg-black px-[clamp(1.25rem,4vw,2rem)] py-[clamp(0.625rem,2vh,0.875rem)] text-[clamp(0.875rem,2.2vw,1rem)] font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 md:w-auto"
                >
                  {b2cHeroCopy.ctaPrimary}
                  <svg className="h-[clamp(0.875rem,2.2vw,1rem)] w-[clamp(0.875rem,2.2vw,1rem)] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="group flex w-full items-center justify-center gap-[clamp(0.375rem,1vw,0.5rem)] rounded-full border-2 border-black bg-white px-[clamp(1.25rem,4vw,2rem)] py-[clamp(0.625rem,2vh,0.875rem)] text-[clamp(0.875rem,2.2vw,1rem)] font-semibold text-black shadow-sm transition-all duration-300 hover:bg-black hover:text-white md:w-auto"
                >
                  {b2cHeroCopy.ctaSecondary}
                  <svg className="h-[clamp(0.875rem,2.2vw,1rem)] w-[clamp(0.875rem,2.2vw,1rem)] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-[clamp(1rem,3vh,1.5rem)] text-center text-[clamp(0.625rem,1.8vw,0.75rem)] leading-[clamp(1.4,1.6,1.7)] text-neutral-500"
              >
                {b2cHeroCopy.disclaimer}
              </motion.p>
            </div>
          </div>

        </div>
      </section>

      <ContactChoiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        subject="Vehicle inquiry — Nevexa B2C"
      />
    </div>
  );
}