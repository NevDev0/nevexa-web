"use client";

import { motion, Variants } from "framer-motion";
import { whatOthersWontTellYou } from "@/content/b2b.en";

// --- Variantes d'animation pour la Timeline ---
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const problemVariants: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

const solutionVariants: Variants = {
  hidden: { opacity: 0, x: 30, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

export default function WhatOthersWontTellYou() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E0F11] px-6 pt-16 pb-30 sm:pt-32 sm:pb-30">
      {/* Background radial gradient subtil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,15,20,0.03)_0%,transparent_80%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* --- Header Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="mb-20 text-center sm:mb-32"
        >
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.15em] text-white sm:text-3xl">
            {whatOthersWontTellYou.title}
          </h2>
          <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]" />
          <p className="text-[16px] font-medium tracking-wide text-white/60 sm:text-[18px]">
            {whatOthersWontTellYou.subtitle}
          </p>
        </motion.div>

        {/* --- La Timeline (Le Dossier) --- */}
        <div className="relative flex flex-col gap-24 sm:gap-32">
          {/* Ligne verticale centrale (PC uniquement) */}
          <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-white/5 sm:left-1/2 sm:block sm:-translate-x-1/2" />

          {whatOthersWontTellYou.dossierItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-150px" }}
              variants={sectionVariants}
              className="relative"
            >
              {/* Le numéro géant en filigrane centré */}
              <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 text-[150px] font-black leading-none tracking-tighter text-white/[0.02] sm:-top-20 sm:text-[250px]">
                {item.num}
              </div>

              {/* Titre du point (Centré) */}
              <motion.div variants={titleVariants} className="relative z-10 mb-12 text-center sm:mb-16">
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A0F14]">
                  Case File {item.num}
                </span>
                <h3 className="text-xl font-bold tracking-wide text-white sm:text-2xl">
                  {item.title}
                </h3>
              </motion.div>

              {/* Contenu Split (Problème / Ligne / Solution) */}
              <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-24">
                
                {/* POINT ROUGE ET LIGNE ANIMÉE (Mobile & PC) */}
                <div className="absolute left-[-24px] top-0 flex h-full flex-col items-center sm:left-1/2 sm:-translate-x-1/2">
                  <motion.div 
                    variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { type: "spring" } } }}
                    className="h-3 w-3 rounded-full bg-[#5A0F14] shadow-[0_0_15px_rgba(90,15,20,0.8)] ring-4 ring-[#0E0F11]"
                  />
                  {/* Ligne qui descend */}
                  <motion.div 
                    variants={{ hidden: { height: 0 }, visible: { height: "100%", transition: { duration: 1, ease: "easeInOut" } } }}
                    className="w-[2px] bg-gradient-to-b from-[#5A0F14] to-transparent"
                  />
                </div>

                {/* GAUCHE : The Industry Norm (Le Problème) */}
                <motion.div variants={problemVariants} className="relative pl-6 sm:pl-0 sm:pr-8 sm:text-right">
                  <div className="mb-4 flex items-center gap-3 sm:justify-end">
                    <span className="h-px w-6 bg-white/20 sm:order-2" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 sm:order-1">
                      The Industry Norm
                    </span>
                  </div>
                  <p className="text-[14px] leading-relaxed text-white/50 sm:text-[15px]">
                    {item.problem}
                  </p>
                </motion.div>

                {/* DROITE : The Nevexa Standard (La Solution) */}
                <motion.div variants={solutionVariants} className="relative pl-6 sm:pl-8 sm:pt-16">
                  {/* Le fond rouge qui s'illumine doucement */}
                  <div className="absolute -inset-4 z-0 rounded-2xl bg-[radial-gradient(ellipse_at_left,rgba(90,15,20,0.15)_0%,transparent_70%)] opacity-0 transition-opacity duration-1000 hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A0F14]">
                        Nevexa Standard
                      </span>
                      <span className="h-px w-6 bg-[#5A0F14]/50" />
                    </div>
                    <p className="text-[14px] font-medium leading-relaxed text-white/95 sm:text-[15px]">
                      {item.solution}
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- IMPORTANT : Gradient de transition vers la FAQ (Ne pas supprimer) --- */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent via-[#0E0F11]/60 to-[#F3EFEA] sm:h-[50px]" />

    </section>
  );
}