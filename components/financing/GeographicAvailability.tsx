"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { geographicAvailabilityCopy as geographicAvailabilityCopyEn } from "@/content/financing.en";
import { geographicAvailabilityCopy as geographicAvailabilityCopyFr } from "@/content/financing.fr";

// 1. CONFIGURATION CENTRALISÉE DES POSITIONS (Unique source de vérité)
// Modifie tes positions ICI uniquement. Ça s'appliquera au FR et au EN.
const COUNTRY_POSITIONS = [
  {
    id: "nigeria",
    x: { mobile: "43%", desktop: "42%" },
    y: { mobile: "42%", desktop: "42%" },
    labelClass: "left-full bottom-full ml-2 -mb-1",
  },
  {
    id: "senegal",
    x: { mobile: "15%", desktop: "14%" },
    y: { mobile: "33%", desktop: "33.5%" },
    labelClass: "bottom-full mr-2 mb-3",
  },
  {
    id: "ghana",
    x: { mobile: "31%", desktop: "31%" },
    y: { mobile: "44%", desktop: "43%" },
    labelClass: "bottom-full right-1/2 mb-3 translate-x-1/2",
  },
  {
    id: "ivory-coast",
    x: { mobile: "26%", desktop: "26.8%" },
    y: { mobile: "44.6%", desktop: "45.1%" },
    labelClass: "top-full right-full mt-2 sm:mt-1",
  },
  {
    id: "cameroon",
    x: { mobile: "45.5%", desktop: "45.2%" },
    y: { mobile: "48.5%", desktop: "48.4%" },
    labelClass: "left-full top-full ml-1 mt-1",
  },
];

export default function GeographicAvailability() {
  const { language } = useLanguage();
  // On charge le bon fichier de texte selon la langue
  const geographicAvailabilityCopy = language === "fr" ? geographicAvailabilityCopyFr : geographicAvailabilityCopyEn;

  const joinWaitlistLabel = language === "fr" ? "Rejoindre la liste" : "Join Waitlist";
  const targetLabel = language === "fr" ? "Cible" : "Target";
  const deployLabel = language === "fr" ? "Dep" : "Dep";

  const [visible, setVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(geographicAvailabilityCopyEn.timeline.length).fill(false)
  );
  // On se base sur COUNTRY_POSITIONS pour la longueur des tableaux d'état
  const [visibleCountries, setVisibleCountries] = useState<boolean[]>(
    new Array(COUNTRY_POSITIONS.length).fill(false)
  );
  
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // On utilise COUNTRY_POSITIONS pour l'animation
          COUNTRY_POSITIONS.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCountries((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 1000 + i * 1000);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []); // Dépendance vide car COUNTRY_POSITIONS est constant

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    timelineRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 200);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "-50px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black py-20 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,1)_90%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-2 text-center lg:mb-12">
          <h2
            className="mb-6 text-3xl font-bold uppercase tracking-[0.2em] text-white md:text-5xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {geographicAvailabilityCopy.title}
          </h2>
          <div
            className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-[#8A1F24] to-transparent shadow-[0_0_20px_#8A1F24]"
            style={{
              width: visible ? "100px" : "0px",
              transition: "width 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transitionDelay: "200ms",
            }}
          />
          <p
            className="mb-6 mx-auto max-w-2xl text-lg font-light text-neutral-300"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 800ms ease-out",
              transitionDelay: "300ms",
            }}
          >
            {geographicAvailabilityCopy.subtitle}
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="flex flex-col items-start gap-2 lg:grid lg:grid-cols-12 lg:gap-16">

          {/* MAP */}
          <div
            className="w-full lg:col-span-7"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 1000ms ease-out",
              transitionDelay: "200ms",
            }}
          >
            <div
              className="relative mx-auto w-full max-w-[480px] lg:max-w-full"
              style={{ aspectRatio: "1 / 1" }}
            >
              {/* Glow Nigeria */}
              <div
                className="pointer-events-none absolute rounded-full bg-[#8A1F24] opacity-20 blur-[80px]"
                style={{
                  left: "43%",
                  top: "41.5%",
                  width: "18%",
                  height: "18%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <Image
                src="/images/africa-map.png"
                alt="Africa Map Coverage"
                fill
                className="object-cover opacity-30 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                priority
              />

              {/* BOUCLE SUR LA CONFIGURATION DE POSITION */}
              {COUNTRY_POSITIONS.map((position, index) => {
                // On va chercher le texte correspondant dans le fichier de langue via l'ID
                const countryText = geographicAvailabilityCopy.countries.find(c => c.id === position.id);
                // Si pas de traduction trouvée (sécurité), on ne rend rien
                if (!countryText) return null;

                const isNigeria = position.id === "nigeria";
                const isVisible = visibleCountries[index];

                return (
                  <div
                    key={position.id}
                    className="absolute left-[var(--x-mob)] top-[var(--y-mob)] md:left-[var(--x-desk)] md:top-[var(--y-desk)]"
                    // 2. CORRECTION TYPESCRIPT (as React.CSSProperties)
                    style={{
                      "--x-mob": position.x.mobile,
                      "--y-mob": position.y.mobile,
                      "--x-desk": position.x.desktop,
                      "--y-desk": position.y.desktop,
                      transform: isVisible
                        ? "scale(1) translate(-50%, -50%)"
                        : "scale(0) translate(-50%, -50%)",
                      transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    } as React.CSSProperties}
                  >
                    <div className="relative flex items-center justify-center">
                      {isNigeria && (
                        <div className="nigeria-ring-pulse absolute h-12 w-12 rounded-full border border-[#8A1F24]/30 bg-[#8A1F24]/10 sm:h-32 sm:w-32" />
                          )}

                      <div
                        className={`relative z-10 rounded-full border border-white/20 shadow-[0_0_12px_#8A1F24] ${
                        isNigeria
                         /* Nigeria : Plus gros sur mobile (h-4) et grand sur desktop (md:h-6) */
                        ? "h-4 w-4 bg-[#8A1F24] md:h-6 md:w-6"
                         /* Autres pays : Moyen sur mobile (h-2) et correct sur desktop (md:h-3) */
                         : "h-2 w-2 bg-neutral-500 md:h-3 md:w-3"
                         }`}
                          />

                      <div
                        className={`absolute z-20 ${position.labelClass}`}
                        style={{
                          opacity: isVisible ? 1 : 0,
                        }}
                      >
                        {/* Mobile */}
                        <div className="flex flex-col items-start rounded border border-white/20 bg-white/5 px-2 py-2 shadow-lg backdrop-blur-md md:hidden">
                          <span className="text-xs font-bold uppercase tracking-wide text-white leading-tight">
                            {countryText.name}
                          </span>
                          <span className="font-mono items-center text-xs text-[#FF5A5A] leading-tight">
                            {countryText.year}
                          </span>
                        </div>

                        {/* Desktop */}
                        <div className="hidden whitespace-nowrap rounded-sm border border-white/10 bg-white/5 px-3 py-2 shadow-2xl backdrop-blur-md md:block lg:px-4 lg:py-3">
                          <div className="mb-1.5 flex items-center gap-1.5">
                            <span className="h-1 w-1 animate-pulse rounded-full bg-[#8A1F24] lg:h-1.5 lg:w-1.5" />
                            <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 lg:text-[10px]">
                              {targetLabel}
                            </span>
                          </div>
                          <div className="mb-1.5 text-xs font-bold uppercase leading-none tracking-wide text-white lg:text-sm">
                            {countryText.name}
                          </div>
                          <div className="font-mono text-[9px] text-[#FF5A5A] lg:text-[10px]">
                            {deployLabel}: {countryText.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TIMELINE */}
          <div className="relative w-full pl-4 lg:col-span-5 lg:pl-0 lg:pt-8">
            <div className="absolute bottom-0 left-[19px] top-4 w-[2px] bg-gradient-to-b from-[#8A1F24] via-[#8A1F24]/20 to-transparent opacity-50" />

            <div className="space-y-12">
              {geographicAvailabilityCopy.timeline.map((item, index) => {
                const isFirst = index === 0;
                const isVisible = visibleItems[index];

                return (
                  <div
                    key={index}
                    ref={(el) => { timelineRefs.current[index] = el; }}
                    className="relative pl-12"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(20px)",
                      transition: "opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    <div
                      className={`absolute left-[11px] top-1.5 z-10 flex h-[18px] w-[18px] -translate-x-1/2 items-center justify-center rounded-full border border-[#8A1F24]/50 bg-black ${
                        isFirst ? "shadow-[0_0_15px_#8A1F24]" : ""
                      }`}
                    >
                      <div
                        className={`rounded-full transition-all duration-500 ${
                          isFirst ? "h-2 w-2 bg-[#8A1F24]" : "h-1.5 w-1.5 bg-neutral-800"
                        }`}
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className={`mb-2 text-4xl font-bold tracking-tighter ${isFirst ? "text-white" : "text-neutral-600"}`}>
                        {item.year}
                      </span>
                      <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#FF5A5A]">
                        {item.badge}
                      </span>
                      <h3 className="mb-1 text-lg font-medium text-white">{item.title}</h3>
                      <p className="max-w-sm text-sm leading-relaxed text-neutral-400">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div
              className="mt-8 pl-12"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 800ms ease-out",
                transitionDelay: "800ms",
              }}
            >
              <p className="mb-6 border-l-2 border-white/10 py-1 pl-4 text-sm text-neutral-300">
                {geographicAvailabilityCopy.cta.text}
              </p>
              <button
                onClick={scrollToWaitlist}
                className="cta-button group relative flex items-center gap-4 overflow-hidden bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-[#701015] hover:text-white"
              >
                <span className="relative z-10">{joinWaitlistLabel}</span>
                <svg
                  className="relative z-10 h-3 w-3 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}