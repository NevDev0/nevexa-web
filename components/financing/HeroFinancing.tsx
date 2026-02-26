"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { financingHeroCopy, waitlistFormCopy } from "@/content/financing.en";
import NavBar from "@/components/NavBar";

export default function FinancingHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToForm = () => {
    // Cible l'ID exact de ton WaitlistForm
    const formElement = document.getElementById("waitlist");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[90svh] w-full items-start justify-center overflow-hidden bg-[#0A0A0A] pt-28 pb-8 sm:pt-36">
      {/* ── NAVBAR ── */}
      <NavBar />
      
      {/* ── BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/financing-bg.webp" 
          alt="Luxury vehicle financing silhouette"
          fill
          className="object-cover object-center opacity-100 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        
        {/* Badges */}
        <div 
          className="mb-10 flex items-center justify-center gap-3 transition-all duration-1000 ease-out"
          style={{ 
            opacity: mounted ? 1 : 0, 
            transform: mounted ? "translateY(0)" : "translateY(30px)" 
          }}
        >
          <span className="rounded-full border border-white/20 bg-white/5 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {financingHeroCopy.badges.earlyAccess}
          </span>
          <span className="rounded-full border border-[#5A0F14] bg-[#5A0F14]/70 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md shadow-[0_0_25px_rgba(90,15,20,0.2)]">
            {financingHeroCopy.badges.comingSoon}
          </span>
        </div>

        {/* Title */}
        <h1 
          className="mb-8 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl transition-all duration-1000 delay-200 ease-out"
          style={{ 
            opacity: mounted ? 1 : 0, 
            transform: mounted ? "translateY(0)" : "translateY(30px)" 
          }}
        >
          Vehicle Financing <br />
          <span className="text-neutral-600">Coming 2027.</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="mb-12 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg md:text-xl transition-all duration-1000 delay-400 ease-out"
          style={{ 
            opacity: mounted ? 1 : 0, 
            transform: mounted ? "translateY(0)" : "translateY(30px)" 
          }}
        >
          {financingHeroCopy.subtitle}
        </p>

        {/* CTA Button */}
        <div 
          className="mb-10 transition-all duration-1000 delay-600 ease-out"
          style={{ 
            opacity: mounted ? 1 : 0, 
            transform: mounted ? "translateY(0)" : "translateY(30px)" 
          }}
        >
          <button 
            onClick={scrollToForm}
            className="group relative flex h-16 items-center justify-center overflow-hidden rounded-full bg-white px-12 text-sm font-bold uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.05] hover:bg-neutral-100"
          >
            <span className="relative z-10">{waitlistFormCopy.submitButton}</span>
            <div className="absolute inset-0 z-0 translate-y-full bg-neutral-200 transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </div>

        {/* Clarification */}
        <div 
          className="max-w-xl transition-all duration-1000 delay-800 ease-out"
          style={{ 
            opacity: mounted ? 1 : 0, 
            transform: mounted ? "translateY(0)" : "translateY(20px)" 
          }}
        >
          <p className="text-[11px] leading-relaxed tracking-wide text-neutral-400">
            <span className="font-bold text-neutral-300 uppercase mr-1">Important —</span> 
            {financingHeroCopy.clarification}
          </p>
        </div>
      </div>


    </section>
  );
}