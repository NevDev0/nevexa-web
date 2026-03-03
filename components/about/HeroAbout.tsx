"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { aboutHeroCopy as aboutHeroCopyEn } from "@/content/about.en";
import { aboutHeroCopy as aboutHeroCopyFr } from "@/content/about.fr";
import NavBar from "@/components/NavBar";

export default function HeroAbout() {
  const { language } = useLanguage();
  const aboutHeroCopy = language === "fr" ? aboutHeroCopyFr : aboutHeroCopyEn;

  const [visible, setVisible] = useState(false);
  const [rigged, setRigged] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => setRigged(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Le mot-clé à highlighter peut varier selon la langue
  const highlightWord = aboutHeroCopy.highlightWord ?? "rigged";

  // Fonction combinée : Gère les lignes (|) ET la couleur (highlightWord)
  const renderStatement = () => {
    // 1. On coupe d'abord par lignes (le symbole |)
    const lines = aboutHeroCopy.statement.split('|');

    return lines.map((line, lineIndex) => {
      // 2. Pour chaque ligne, on cherche le mot clé à colorier
      const regex = new RegExp(`(${highlightWord})`, "gi");
      const parts = line.split(regex);

      return (
        // "block" force le retour à la ligne pour chaque segment coupé par |
        <span key={lineIndex} className="block">
          {parts.map((part, i) =>
            part.toLowerCase() === highlightWord.toLowerCase() ? (
              // Le mot clé en ROUGE avec effet néon
              <span
                key={i}
                className="relative inline-block px-3"
                style={{
                  color: rigged ? "#5A0F14" : "rgba(255,255,255,1)",
                  textShadow: rigged ? "0 0 40px rgba(90,15,20,0.9), 0 0 15px rgba(90,15,20,0.6)" : "none",
                  transition: "color 1000ms ease-out, text-shadow 1000ms ease-out",
                }}
              >
                {/* Barres verticales décoratives du mot clé */}
                <span
                  className="absolute left-0 top-0 w-[2px] bg-[#5A0F14]"
                  style={{
                    height: rigged ? "100%" : "0%",
                    opacity: rigged ? 1 : 0,
                    boxShadow: "0 0 10px rgba(90,15,20,0.8)",
                    transition: "height 800ms ease-out, opacity 800ms ease-out",
                    transitionDelay: "300ms",
                  }}
                />
                {part}
                <span
                  className="absolute right-0 top-0 w-[2px] bg-[#5A0F14]"
                  style={{
                    height: rigged ? "100%" : "0%",
                    opacity: rigged ? 1 : 0,
                    boxShadow: "0 0 10px rgba(90,15,20,0.8)",
                    transition: "height 800ms ease-out, opacity 800ms ease-out",
                    transitionDelay: "300ms",
                  }}
                />
              </span>
            ) : (
              // Le texte normal
              <span key={i}>{part}</span>
            )
          )}
        </span>
      );
    });
  };

  return (
    <section className="relative flex min-h-[90svh] w-full items-start justify-center overflow-hidden bg-black px-6 pb-20 pt-40 sm:min-h-[85svh] sm:pt-50">
      <NavBar />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity"
        style={{
          backgroundImage: "url('/hero/about-bg.webp')",
          opacity: visible ? 0.4 : 0,
          transform: visible ? "scale(1)" : "scale(1.1)",
          transition: "opacity 2500ms ease-out, transform 2500ms ease-out",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.85)_40%,rgba(90,15,20,0.1)_60%,rgba(0,0,0,0.98)_100%)]" />

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl pb-12 text-center">
        <h1
          className="mb-10 text-[36px] font-black leading-[1.2] tracking-tight text-white drop-shadow-2xl sm:text-[64px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "200ms",
          }}
        >
          {renderStatement()}
        </h1>

        <p
          className="text-[25px] font-medium tracking-wide text-neutral-200 sm:text-[35px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "500ms",
          }}
        >
          {aboutHeroCopy.subline}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{
          opacity: visible ? 0.6 : 0,
          transition: "opacity 1000ms ease-out",
          transitionDelay: "2000ms",
        }}
      >
        <div className="relative h-14 w-[1px] overflow-hidden bg-white/10">
          <div className="ha-scan absolute left-0 h-full w-full bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.8),transparent)]" />
        </div>
      </div>
    </section>
  );
}