"use client";

import { useEffect, useRef, useState } from "react";
import { aboutHeroCopy } from "@/content/about.en";
import NavBar from "@/components/NavBar";

export default function HeroAbout() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimating(entry.isIntersecting);
          // On déclenche l'apparition (visible) UNIQUEMENT quand la section est vue.
          // Le !visible permet de ne jamais le remettre à false : l'animation d'entrée ne se joue qu'une fois.
          if (entry.isIntersecting && !visible) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [visible]);

  // Nouveau design pour le mot "rigged" avec le vrai rouge Nevexa
  const renderStatement = () => {
    const parts = aboutHeroCopy.statement.split(/(rigged)/gi); //
    return parts.map((part, i) =>
      part.toLowerCase() === "rigged" ? (
        <span
          key={i}
          className="relative inline-block px-2 transition-all duration-1000 ease-out"
          style={{
            color: visible ? "#5A0F14" : "transparent",
            // Double glow pour faire brûler le rouge profond dans l'obscurité
            textShadow: visible ? "0 0 40px rgba(90,15,20,0.9), 0 0 15px rgba(90,15,20,0.6)" : "none",
            transform: visible ? "scale(1)" : "scale(0.95)",
            transitionDelay: "600ms", // Apparaît juste après le reste de la phrase
          }}
        >
          {/* Crochet gauche */}
          <span 
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#5A0F14] transition-all duration-1000 delay-[800ms]"
            style={{ 
              opacity: visible ? 1 : 0, 
              height: visible ? "100%" : "0%",
              boxShadow: "0 0 10px rgba(90,15,20,0.8)" 
            }}
          />
          {part}
          {/* Crochet droit */}
          <span 
            className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#5A0F14] transition-all duration-1000 delay-[800ms]"
            style={{ 
              opacity: visible ? 1 : 0, 
              height: visible ? "100%" : "0%",
              boxShadow: "0 0 10px rgba(90,15,20,0.8)" 
            }}
          />
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const scanLines = [
    { top: "25%", delay: "0s", opacity: 0.12 },
    { top: "50%", delay: "-6s", opacity: 0.08 },
    { top: "75%", delay: "-12s", opacity: 0.10 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[90svh] w-full items-start justify-center overflow-hidden bg-black px-6 pt-40 pb-20 sm:min-h-[90svh] sm:pt-50"
    >
      {/* ── NAVBAR ── */}
      <NavBar />

      {/* Background image — Changé pour about-bg.webp */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40"
        style={{
          backgroundImage: "url('/hero/about-bg.webp')", // Remplace l'image de la CN Tower par un port sombre/conteneurs
          animationName: "nevexa-slow-zoom",
          animationDuration: "20s",
          animationTimingFunction: "ease-out",
          animationFillMode: "forwards",
          animationPlayState: animating ? "running" : "paused",
        }}
      />

      {/* Overlay Sombre et Cinématographique */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 40%, rgba(90,15,20,0.1) 60%, rgba(0,0,0,0.98) 100%)",
        }}
      />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Scan lines — pausées via animationPlayState pour les performances */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {scanLines.map((line, i) => (
          <div
            key={i}
            className="absolute h-px w-[200%] -left-[50%]"
            style={{
              top: line.top,
              opacity: line.opacity,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 60%, transparent 100%)",
              transform: "rotate(-25deg)",
              animationName: "nevexa-scan-move",
              animationDuration: "15s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDelay: line.delay,
              animationPlayState: animating ? "running" : "paused",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center pb-12">

        {/* Main statement */}
        <h1
          className="mb-10 text-[36px] font-black leading-[1.2] tracking-tight text-white sm:text-[64px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "100ms",
            textShadow: "0 4px 40px rgba(0,0,0,0.8)",
          }}
        >
          {renderStatement()}
        </h1>

        {/* Subline */}
        <p
          className="text-[24px] font-medium tracking-wide text-neutral-300 sm:text-[30px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "400ms",
          }}
        >
          {aboutHeroCopy.subline}
        </p>

      </div>

      {/* Scroll indicator — pausé quand hors viewport */}
      <div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        style={{
          opacity: visible ? 0.6 : 0,
          transition: "opacity 1000ms ease 1000ms",
        }}
      >
        <div className="relative h-14 w-[1px] overflow-hidden bg-white/10">
          <div
            className="absolute left-0 top-0 h-full w-full"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), transparent)",
              animationName: "nevexa-scroll-line",
              animationDuration: "2s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationPlayState: animating ? "running" : "paused",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes nevexa-slow-zoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.0); }
        }
        @keyframes nevexa-scan-move {
          from { transform: rotate(-25deg) translateX(-8%); }
          to   { transform: rotate(-25deg) translateX(8%); }
        }
        @keyframes nevexa-scroll-line {
          from { top: -100%; }
          to   { top: 100%; }
        }
      `}</style>
    </section>
  );
}