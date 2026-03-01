"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { financingHeroCopy } from "@/content/financing.en";
import NavBar from "@/components/NavBar";

export default function HeroFinancing() {
  const scrollToForm = () => {
    const formElement = document.getElementById("waitlist");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[90svh] w-full flex-col items-center justify-start overflow-hidden bg-[#0A0A0A] pt-20 pb-12">
      {/* ── NAVBAR ── */}
      <NavBar />
      
      {/* ── BACKGROUND LAYER ── */}
      <div className="absolute inset-0 z-0">
        {/* 1. Ton image de fond (traitée pour être sombre et discrète) */}
        <Image
          src="/hero/financing-bg.webp" 
          alt="Luxury vehicle financing silhouette"
          fill
          className="object-cover object-center opacity-100 mix-blend-luminosity"
          priority
        />
        
        {/* 2. Grille "Fintech" par-dessus l'image (L'effet technique) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        
        {/* 3. Dégradés pour fondre le tout */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
        
        {/* 4. La Lueur Rouge Nevexa (Le cœur du système) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A0F14]/5 blur-[120px]" 
        />
      </div>

      {/* ── CONTENT LAYER ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center mt-12 sm:mt-18">
        
        {/* Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
            {financingHeroCopy.badges.earlyAccess}
          </span>
          <span className="flex items-center gap-2 rounded-full border border-[#5A0F14]/50 bg-[#5A0F14]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff4d4d] backdrop-blur-md shadow-[0_0_20px_rgba(90,15,20,0.3)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500"></span>
            </span>
            {financingHeroCopy.badges.comingSoon}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Vehicle Financing <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
            Reimagined.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-10 max-w-2xl text-[16px] leading-relaxed text-neutral-400 sm:text-[18px] md:text-[20px]"
        >
          {financingHeroCopy.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <button 
            onClick={scrollToForm}
            className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-10 text-[13px] font-bold uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Join Priority Waitlist</span>
            <div className="absolute inset-0 bg-neutral-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </motion.div>

        {/* Clarification Box (Style Légal/Bancaire) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="max-w-xl rounded-lg border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm"
        >
          <p className="text-[11px] leading-relaxed tracking-wide text-neutral-500">
            <span className="font-bold text-[#5A0F14] uppercase mr-2">Notice</span> 
            {financingHeroCopy.clarification}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">Scroll to explore</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-white/20 to-transparent">
            <div className="h-1/2 w-full animate-[scan_2s_infinite] bg-white/60" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}