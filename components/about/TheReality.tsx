"use client";

import { useEffect, useRef, useState } from "react";
// import { realityCopy } from "@/content/about.en"; // Tu pourras le réutiliser si tu dynamises le texte

export default function TheReality() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 } // Un peu plus haut pour que l'animation se déclenche bien au centre
    );

    const t = setTimeout(() => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    }, 100);

    return () => { clearTimeout(t); observer.disconnect(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[50svh] w-full items-center justify-center overflow-hidden bg-black px-6 py-20 sm:min-h-[55svh] sm:py-24"
    >
      {/* Halo de profondeur (recherche/inspection) */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-[2000ms]"
        style={{
          background: "radial-gradient(circle at center, rgba(90,15,20,0.06) 0%, transparent 60%)",
          opacity: visible ? 1 : 0
        }}
      />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Top separator */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">

        {/* Paragraph 1 */}
        <p
          className="mb-10 text-[18px] leading-[2] text-white/80 sm:mb-12 sm:text-[26px] sm:leading-[1.8]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "100ms",
          }}
        >
          Every year, thousands of West African buyers pay premium prices for vehicles with{" "}
          {/* L'effet Scanner sur Hidden Damage */}
          <span
            className="relative inline-block px-1 font-semibold transition-colors duration-1000 ease-in-out"
            style={{
              color: visible ? "#5A0F14" : "rgba(255,255,255,0.8)",
              textShadow: visible ? "0 0 25px rgba(90,15,20,0.8)" : "none",
              transitionDelay: "800ms", // Laisse le temps de lire, puis devient rouge
            }}
          >
            hidden damage
            {/* La ligne de faille qui se dessine en dessous */}
            <span 
              className="absolute bottom-1 left-0 h-[2px] bg-[#5A0F14] transition-all duration-1000 ease-out"
              style={{
                width: visible ? "100%" : "0%",
                boxShadow: "0 0 10px rgba(90,15,20,0.8)",
                transitionDelay: "1200ms" // La ligne vient souligner l'erreur juste après
              }}
            />
          </span>
          . The resale system profits from information asymmetry.
        </p>

        {/* Paragraph 2 — Conclusion, pure et assurée */}
        <p
          className="text-[18px] font-bold tracking-wide leading-[1.9] text-white sm:text-[28px] sm:leading-[1.7]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 1000ms ease-out, transform 1000ms ease-out",
            transitionDelay: "1800ms", // Arrive comme une sentence finale
            textShadow: "0 4px 20px rgba(0,0,0,0.5)"
          }}
        >
          Nevexa was built to eliminate that abuse entirely.
        </p>

      </div>

      {/* Bottom separator */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </section>
  );
}