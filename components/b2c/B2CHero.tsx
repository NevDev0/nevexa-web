"use client";

import { b2cHeroCopy } from "@/content/b2c.en";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactChoiceModal from "@/components/ContactChoiceModal";
import NavBar from "@/components/NavBar";

export default function B2CHero() {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleScrollToCatalog = () => {
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full">
      {/* ── NAVBAR ── */}
      <NavBar />

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* HERO CONTAINER - Natural Document Flow avec Flexbox */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden min-h-[85svh]">
        
        {/* ── BACKGROUND LAYERS (Méthode Robuste "Backdrop Blur") ── */}
        <div className="absolute inset-0 h-[75%]">
          {/* 1. L'image nette (sans blur CSS direct) */}
          <Image
            src="/hero/b2c-hero2-background.webp"
            alt="Premium automotive background"
            fill
            priority
            // J'ai retiré blur-[1px] et scale-105 ici. L'image est clean.
            className="object-cover object-center"
          />

          {/* 2. LE CORRECTIF : Calque de flou par-dessus (Backdrop filter) */}
          {/* Ce calque floute ce qui est DERRIÈRE lui. Zéro artefact sur les bords. */}
          <div className="absolute inset-0 backdrop-blur-[1px]" />

          {/* 3. Le dégradé sombre */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Le fond du bas qui remonte (inchangé) */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-neutral-100/0 via-neutral-100 to-white" />

        {/* ── CONTENT STACK (Natural Flow) ── */}
        {/* ATTENTION: J'ai enlevé le px- ici pour que la voiture puisse se centrer à 100% sans être bloquée par les marges */}
        <div className="relative z-10 flex w-full flex-col items-center pb-[clamp(1rem,2vh,2rem)] pt-[clamp(6rem,14vh,8rem)]">
          
          {/* ══════════════════════════════════════════════════════════ */}
          {/* HEADING - Fluid Typography (Les marges px- sont ici maintenant) */}
          {/* ══════════════════════════════════════════════════════════ */}
          <div className="relative flex w-full justify-center px-[clamp(1.5rem,5vw,3rem)]">
            <div className="absolute inset-0 -z-10 -m-[clamp(1.5rem,3vw,2rem)] bg-[radial-gradient(ellipse_80%_100%_at_50%_40%,rgba(0,0,0,0.65)_0%,transparent_70%)]" />
            
            <h1 className="text-center text-[clamp(1.875rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[clamp(-0.02em,-0.015vw,-0.01em)] text-white drop-shadow-2xl">
              {(["Your", "vehicle.", "No", "surprises."] as const).map((word, idx) => (
                <span
                  key={word}
                  className="inline-block"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 600ms cubic-bezier(0.25,0.46,0.45,0.94) ${80 + idx * 150}ms, transform 600ms cubic-bezier(0.25,0.46,0.45,0.94) ${80 + idx * 150}ms`,
                    marginRight: word === "vehicle." ? "0.5ch" : idx < 3 ? "0.5ch" : "0",
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>

          {/* ══════════════════════════════════════════════════════════ */}
          {/* VEHICLE IMAGE - Centrage absolu et taille massive sur mobile */}
          {/* ══════════════════════════════════════════════════════════ */}
          <div 
            // 115vw = dépasse de l'écran sur mobile pour l'effet massif. max-w-none = empêche l'écrasement.
            className="flex w-[115vw] max-w-none justify-center md:w-[clamp(600px,75vw,900px)] -mt-[clamp(3rem,12vw,8rem)] pointer-events-none"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1000ms cubic-bezier(0.25,0.46,0.45,0.94) 150ms, transform 1000ms cubic-bezier(0.25,0.46,0.45,0.94) 150ms",
            }}
          >
            <Image
              src="/hero/b2c-hero-escalade1.webp"
              alt="Premium luxury vehicle"
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_clamp(20px,5vw,70px)_clamp(40px,8vw,100px)_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* ══════════════════════════════════════════════════════════ */}
          {/* BOTTOM BLOCK - L'Aspirateur à vide blanc (-mt) */}
          {/* ══════════════════════════════════════════════════════════ */}
          <div className="relative z-20 flex w-full flex-col items-center px-[clamp(1.5rem,5vw,3rem)] -mt-[clamp(1rem,4vh,2rem)] md:-mt-[clamp(6rem,18vh,12rem)]">
            
            {/* BADGE */}
            <div 
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 600ms cubic-bezier(0.25,0.46,0.45,0.94) 400ms",
              }}
            >
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-neutral-400 bg-white px-[clamp(0.875rem,2.5vw,1.25rem)] py-[clamp(0.375rem,1.2vh,0.625rem)] text-[clamp(0.625rem,1.5vw,0.75rem)] font-semibold uppercase tracking-[clamp(0.05em,0.1vw,0.1em)] text-neutral-700 shadow-sm">
                {b2cHeroCopy.badge}
              </span>
            </div>

            {/* CTA BLOCK */}
            <div className="w-full max-w-[clamp(280px,92vw,500px)] mt-[clamp(1rem,3vh,2rem)]">
              
              <div 
                className="flex w-full flex-col gap-[clamp(0.5rem,1vh,1rem)] md:w-auto md:flex-row md:justify-center md:gap-[clamp(1rem,2vw,1.5rem)]"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 800ms cubic-bezier(0.25,0.46,0.45,0.94) 600ms, transform 800ms cubic-bezier(0.25,0.46,0.45,0.94) 600ms",
                }}
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
              </div>

              <p 
                className="mt-[clamp(1rem,3vh,1.5rem)] text-center text-[clamp(0.625rem,1.8vw,0.75rem)] leading-[clamp(1.4,1.6,1.7)] text-neutral-800"
                style={{
                  opacity: mounted ? 1 : 0,
                  transition: "opacity 800ms cubic-bezier(0.25,0.46,0.45,0.94) 900ms",
                }}
              >
                {b2cHeroCopy.disclaimer}
              </p>
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