"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { b2cWhatOthersWontTellYou } from "@/content/b2c.en";

export default function B2CIndustrySecrets() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // --- Synchronisation du menu mobile ---
  useEffect(() => {
    if (mobileNavRef.current) {
      const container = mobileNavRef.current;
      const activeElement = container.children[activeIndex] as HTMLElement;
      
      if (activeElement) {
        const scrollLeft = activeElement.offsetLeft - container.clientWidth / 2 + activeElement.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  // --- Détection du Swipe ---
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50; 
    const totalItems = b2cWhatOthersWontTellYou.dossierItems.length;

    if (info.offset.x < -swipeThreshold && activeIndex < totalItems - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (info.offset.x > swipeThreshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="relative w-full bg-[#0E0F11] py-20 sm:py-26 overflow-hidden">
      {/* Background subtil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(90,15,20,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* --- Header avec Fade-In --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-center lg:mb-24"
        >
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] text-white sm:text-3xl">
            {b2cWhatOthersWontTellYou.title}
          </h2>
          <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]" />
          <p className="mx-auto max-w-2xl text-[15px] font-medium leading-relaxed text-white/70 sm:text-[18px]">
            {b2cWhatOthersWontTellYou.subtitle}
          </p>
        </motion.div>

        {/* --- Structure Master-Detail --- */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          
          {/* =========================================
              COLONNE GAUCHE : NAVIGATION (Fade-In avec délai)
              ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            
            {/* 1. NAVIGATION MOBILE */}
            <div className="relative mb-1 flex flex-col items-center lg:hidden">
              <div className="relative w-full">
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#0E0F11] to-transparent" />
                <div 
                  ref={mobileNavRef}
                  className="flex w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-4 pr-16 scrollbar-hide"
                >
                  {b2cWhatOthersWontTellYou.dossierItems.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`relative flex shrink-0 snap-center items-center gap-2 rounded-full border px-5 py-2.5 transition-all duration-300 ${
                          isActive 
                            ? "border-[#5A0F14] bg-[#5A0F14]/10 shadow-[0_0_15px_rgba(90,15,20,0.2)]" 
                            : "border-white/10 bg-[#050505] hover:border-white/20"
                        }`}
                      >
                        <span className={`font-serif text-[12px] italic ${isActive ? "text-[#5A0F14]" : "text-white/40"}`}>
                          {item.num}
                        </span>
                        <span className={`whitespace-nowrap text-[13px] font-bold tracking-wide ${isActive ? "text-white" : "text-white/60"}`}>
                          {item.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              {/* Pagination Dots */}
              <div className="mt-2 flex items-center justify-center gap-2">
                {b2cWhatOthersWontTellYou.dossierItems.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-6 bg-[#5A0F14]" : "w-1.5 bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 2. NAVIGATION DESKTOP */}
            <div className="hidden flex-col gap-2 lg:flex">
              {b2cWhatOthersWontTellYou.dossierItems.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex w-full items-center gap-6 rounded-2xl p-6 text-left transition-all duration-300 outline-none"
                  >
                    <div className={`absolute inset-0 rounded-2xl border transition-all duration-300 ${
                      isActive ? "border-[#5A0F14]/50 bg-[#5A0F14]/5" : "border-transparent hover:bg-white/[0.02]"
                    }`} />
                    <div className={`absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-[#5A0F14] transition-all duration-300 ${
                      isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    }`} />

                    <span className={`relative z-10 font-serif text-3xl italic transition-colors duration-300 ${
                      isActive ? "text-[#5A0F14]" : "text-white/20 group-hover:text-white/40"
                    }`}>
                      {item.num}
                    </span>
                    <span className={`relative z-10 text-[16px] font-bold tracking-wide transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                    }`}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* =========================================
              COLONNE DROITE : LE TERMINAL (Fade-In avec délai supplémentaire)
              ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative flex cursor-grab active:cursor-grabbing flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] p-6 shadow-2xl sm:p-12 lg:min-h-[420px]"
              >
                <div className="pointer-events-none absolute right-1 -top-6 select-none font-serif text-[150px] font-black italic leading-none text-white/[0.02] sm:-right-8 sm:-top-12 sm:text-[250px]">
                  {b2cWhatOthersWontTellYou.dossierItems[activeIndex].num}
                </div>
                
                <div className="relative z-10 pointer-events-none">
                  {/* --- BLOC 1 : THE REALITY --- */}
                  <div className="mb-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <svg className="h-3 w-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.10em] text-white/70 sm:text-[13px] text-white/70">
                        Industry Reality
                      </span>
                    </div>
                    <p className="text-[14px] leading-relaxed text-white/60 sm:pl-10 sm:text-[15px]">
                      {b2cWhatOthersWontTellYou.dossierItems[activeIndex].problem}
                    </p>
                  </div>

                  {/* Ligne séparatrice */}
                  <div className="mb-10 h-px w-full bg-gradient-to-r from-white/10 to-transparent sm:ml-10 sm:w-[80%]" />

                  {/* --- BLOC 2 : NEVEXA GUARANTEE --- */}
                  <div className="relative">
                    <div className="absolute -left-4 top-0 hidden h-16 w-16 rounded-full bg-[#5A0F14]/20 blur-2xl sm:block" />
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#5A0F14]/50 bg-[#5A0F14]/20 shadow-[0_0_12px_rgba(90,15,20,0.5)]">
                        <svg className="h-3.5 w-3.5 text-[#5A0F14]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <span className="text-[12px] font-bold uppercase tracking-[0.10em] text-[#5A0F14] sm:text-[13px] text-[#5A0F14]">
                        The Nevexa Guarantee
                      </span>
                    </div>
                    <p className="text-[14px] font-medium leading-relaxed text-white sm:pl-10 sm:text-[16px]">
                      {b2cWhatOthersWontTellYou.dossierItems[activeIndex].solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}