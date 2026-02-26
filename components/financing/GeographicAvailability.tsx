"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { geographicAvailabilityCopy } from "@/content/financing.en";

export default function GeographicAvailability() {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Changé à 1024 pour le layout côte à côte
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeouts = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 4000),
      setTimeout(() => setStep(4), 5500),
      setTimeout(() => setStep(5), 7000),
      setTimeout(() => setStep(6), 8500),
      setTimeout(() => setStep(7), 10000),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [hasStarted]);

  const getMarkerSize = (countryId: string, isMobile: boolean) => {
    if (isMobile) {
      if (countryId === "nigeria") return { dot: "h-2.5 w-2.5", ring: "h-5 w-5" };
      return { dot: "h-1.5 w-1.5", ring: "h-3 w-3" };
    } else {
      if (countryId === "nigeria") return { dot: "h-4 w-4", ring: "h-8 w-8" };
      return { dot: "h-2.5 w-2.5", ring: "h-5 w-5" };
    }
  };

  const getLabelPosition = (position: string) => {
    const positions = {
      top: "bottom-full mb-2",
      bottom: "top-full mt-2",
      left: "right-full mr-2 top-1/2 -translate-y-1/2",
      right: "left-full ml-2 top-1/2 -translate-y-1/2",
      "bottom-left": "top-full mt-1 right-1",
      "bottom-right": "top-full mt-1 left-1",
      "top-right": "bottom-full mt-4 left-4",
    };
    return positions[position as keyof typeof positions] || positions.bottom;
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black px-6 py-20 text-white sm:py-32">
      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-10 text-center lg:mb-10">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-[0.15em] text-white sm:text-4xl">
            {geographicAvailabilityCopy.title}
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#8A1F24] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]" />
          <p className="mt-8 text-base text-neutral-400 sm:text-lg max-w-2xl mx-auto">
            {geographicAvailabilityCopy.subtitle}
          </p>
        </div>

        {/* Layout Flex : Carte à gauche, Légende à droite sur Desktop */}
        <div className="relative mx-auto flex w-full flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          
          {/* MAP CONTAINER */}
          <div className="relative w-full max-w-3xl lg:w-[65%]">
            <div
              className="relative w-full transition-opacity duration-1000"
              style={{ opacity: step >= 1 ? 1 : 0 }}
            >
              {/* Glow radial centré sur l'Afrique de l'Ouest */}
              <div
                className="pointer-events-none absolute z-0"
                style={{
                  left: "38%",
                  top: "42%",
                  transform: "translate(-50%, -50%)",
                  width: isMobile ? "250px" : "400px",
                  height: isMobile ? "250px" : "400px",
                  background: "radial-gradient(circle at center, rgba(138,31,36,0.15) 0%, rgba(90,15,20,0.05) 50%, transparent 70%)",
                  opacity: step >= 2 ? 1 : 0,
                  transition: "opacity 1.5s ease",
                }}
              />

              {/* Map Image */}
              <div className="relative aspect-[4/3] w-full sm:aspect-square">
                <Image
                  src="/images/africa-map.webp"
                  alt="Africa Map"
                  fill
                  className="object-contain"
                  style={{
                    filter: "invert(1) brightness(0.8)",
                    opacity: 0.35,
                  }}
                />
              </div>

              {/* Country Markers */}
              {geographicAvailabilityCopy.countries.map((country, index) => {
                const markerSize = getMarkerSize(country.id, isMobile);
                const isNigeria = country.id === "nigeria";
                const isVisible = step >= index + 2;

                return (
                  <div
                    key={country.id}
                    className="absolute"
                    style={{
                      left: isMobile ? country.x.mobile : country.x.desktop,
                      top: isMobile ? country.y.mobile : country.y.desktop,
                      transform: "translate(-50%, -50%)",
                      opacity: isVisible ? 1 : 0,
                      translate: isVisible ? "0 0" : "0 -10px",
                      transition: "opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), translate 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    {/* Glow derrière Nigeria */}
                    {isNigeria && step >= 2 && (
                      <div className="absolute inset-0 -z-10">
                        <div className="h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8A1F24] opacity-25 blur-2xl" />
                      </div>
                    )}

                    {/* Marker */}
                    <div className="relative flex items-center justify-center">
                      <div className="relative">
                        {/* Outer ring */}
                        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${markerSize.ring}`}>
                          <div className={`h-full w-full rounded-full border border-[#8A1F24] ${isNigeria ? "nigeria-ring-pulse" : ""}`} />
                        </div>

                        {/* Inner dot */}
                        <div
                          className={`rounded-full bg-white shadow-lg ${markerSize.dot}`}
                          style={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)" }}
                        />
                      </div>

                      {/* Label */}
                      <div className={`absolute whitespace-nowrap ${getLabelPosition(country.labelPosition)}`}>
                        <div className="rounded-md bg-black/90 px-2.5 py-1.5 backdrop-blur-md border border-white/5">
                          <div className="font-bold tracking-wide text-white text-[11px] sm:text-sm">{country.name}</div>
                          {/* Contraste amélioré ici : text-[#FF7A7A] au lieu de text-[#5A0F14] */}
                          <div className="text-center font-semibold tracking-widest text-[#FF7A7A] text-[9px] sm:text-[11px] mt-0.5">
                            {country.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Ripple depuis Nigeria */}
              {step >= 2 && step < 7 && (
                <div
                  className="pointer-events-none absolute"
                  style={{
                    left: "42%",
                    top: "45%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8A1F24]/40"
                    style={{ animation: "ripple 3s ease-out 4s forwards" }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* LÉGENDE (Maintenant à droite sur Desktop) */}
          <div className="flex w-full max-w-sm flex-col justify-center gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm lg:w-[35%] lg:p-8 transition-opacity duration-1000 delay-500" style={{ opacity: step >= 2 ? 1 : 0 }}>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-neutral-500">Launch Timeline</h3>
            
            <div className="flex items-center gap-4">
              <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                <div className="absolute h-full w-full rounded-full border border-[#8A1F24] opacity-50" />
                <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <span className="text-sm font-medium text-neutral-300">{geographicAvailabilityCopy.legend.firstMarket}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center ml-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-white opacity-80" />
              </div>
              <span className="text-sm font-medium text-neutral-300">{geographicAvailabilityCopy.legend.expansion}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center ml-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
              </div>
              <span className="text-sm font-medium text-neutral-500">{geographicAvailabilityCopy.legend.additionalmarkets}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center transition-opacity duration-1000 delay-1000" style={{ opacity: step >= 3 ? 1 : 0 }}>
          <p className="mb-8 text-sm text-neutral-400 sm:text-base max-w-xl mx-auto">
            {geographicAvailabilityCopy.cta.text}
          </p>
          <button
             onClick={() => {
              const form = document.getElementById("waitlist");
              if (form) form.scrollIntoView({ behavior: "smooth" });
            }}
            className="cta-button group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#5A0F14]/30 bg-gradient-to-br from-[#5A0F14] to-[#8A1F24] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105"
          >
            {geographicAvailabilityCopy.cta.button}
          </button>
        </div>
      </div>

      {/* Remplacement du fond F3EFEA par un fondu noir élégant */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <style jsx>{`
        @keyframes ripple {
          0%   { opacity: 0.8; transform: translate(-50%, -50%) scale(0.2); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(2.5); }
        }
      `}</style>
    </section>
  );
}