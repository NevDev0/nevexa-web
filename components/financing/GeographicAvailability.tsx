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
    // Detect screen size
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Observer pour détecter quand la section est visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.2 } // Déclenche quand 20% de la section est visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Démarrer les animations uniquement quand hasStarted = true
  useEffect(() => {
    if (!hasStarted) return;

    const timeouts = [
      setTimeout(() => setStep(1), 1500),   // Map visible
      setTimeout(() => setStep(2), 4000),   // Nigeria
      setTimeout(() => setStep(3), 5500),   // Senegal
      setTimeout(() => setStep(4), 7000),   // Ghana
      setTimeout(() => setStep(5), 8500),   // Ivory Coast
      setTimeout(() => setStep(6), 10000),  // Cameroun
      setTimeout(() => setStep(7), 12000),  // Final message
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [hasStarted]);

  // Get marker sizes based on screen - MOBILE ET DESKTOP SÉPARÉS
  const getMarkerSize = (countryId: string, isMobile: boolean) => {
    if (isMobile) {
      // MOBILE - Tous les markers
      if (countryId === "nigeria") {
        return { dot: "h-2 w-2", ring: "h-4 w-4" }; // Nigeria mobile
      }
      return { dot: "h-1.5 w-1.5", ring: "h-3 w-3" }; // Autres mobile
    } else {
      // DESKTOP - Tous les markers
      if (countryId === "nigeria") {
        return { dot: "h-4 w-4", ring: "h-9 w-9" }; // Nigeria desktop
      }
      return { dot: "h-3 w-3", ring: "h-7 w-7" }; // Autres desktop
    }
  };

  // Get label position styles
  const getLabelPosition = (position: string) => {
    const positions = {
      top: "bottom-full mb-2",
      bottom: "top-full mt-2",
      left: "right-full mr-1 top-1/2 -translate-y-1/2",
      right: "left-full ml-2 top-1/2 -translate-y-1/2",
      "bottom-left": "top-full mt-0 right-2", "bottom-right": "top-full mt-0 left-2",
      "top-right": "bottom-full mt-4 left-3",
    };
    return positions[position as keyof typeof positions] || positions.bottom;
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black px-6 py-12 text-white">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6 text-center lg:mb-2">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] text-white sm:text-3xl">
            {geographicAvailabilityCopy.title}
          </h2>
          <div className="mx-auto h-0.5 w-20 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_10px_rgba(90,15,20,0.5)]" />
          <p className="mt-6 text-sm text-white/80 sm:text-base">
            {geographicAvailabilityCopy.subtitle}
          </p>
        </div>

        {/* Map Container */}
        <div className="relative mx-auto w-full max-w-3xl">
          <div
            className="relative w-full transition-opacity duration-1000"
            style={{ opacity: step >= 1 ? 1 : 0 }}
          >
            {/* Map Image - Inverted Colors */}
            <div className="relative aspect-square w-full">
              <Image
                src="/images/africa-map.jpg"
                alt="Africa Map"
                fill
                className="object-contain"
                style={{
                  filter: "invert(1) brightness(0.9)",
                  opacity: 0.40,
                }}
              />
            </div>

            {/* Country Markers */}
            {geographicAvailabilityCopy.countries.map((country, index) => {
              const markerSize = getMarkerSize(country.id, isMobile);

              return (
                <div
                  key={country.id}
                  className="absolute"
                  style={{
                    left: isMobile ? country.x.mobile : country.x.desktop,
                    top: isMobile ? country.y.mobile : country.y.desktop,
                    transform: "translate(-50%, -50%)",
                    opacity: step >= index + 2 ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {/* Glow Effect for Nigeria */}
                  {country.id === "nigeria" && step >= 2 && (
                    <div className="absolute inset-0 -z-10 animate-pulse">
                      <div className="h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A0F14] opacity-30 blur-2xl" />
                    </div>
                  )}

                  {/* Marker Dot */}
                  <div className="relative flex items-center justify-center">
                    <div className="relative">
                      {/* Outer Ring */}
                      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#5A0F14]/40 ${markerSize.ring}`} />
                      
                      {/* Inner Dot */}
                      <div
                        className={`rounded-full bg-white shadow-lg ${markerSize.dot}`}
                        style={{
                          boxShadow: "0 0 15px rgba(90, 15, 20, 0.8)",
                        }}
                      />
                    </div>

                    {/* Country Name & Year - Positioned */}
                    <div className={`absolute whitespace-nowrap ${getLabelPosition(country.labelPosition)}`}>
                      <div className={`rounded-md bg-black/80 px-2 py-1 backdrop-blur-sm ${isMobile ? 'text-sm' : 'text-lg'}`}>
                        <div className="font-bold text-white">{country.name}</div>
                        <div className={`text-center font-semibold text-[#5A0F14] ${isMobile ? 'text-xs' : 'text-[15px]'}`}>
                          {country.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Ripple Effect from Nigeria */}
            {step >= 2 && step < 7 && (
              <div
                className="pointer-events-none absolute"
                style={{
                  left: isMobile ? "42%" : "42%",
                  top: isMobile ? "50%" : "45%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#5A0F14]/30"
                  style={{
                    animation: "ripple 3s ease-out 4s forwards",
                  }}
                />
              </div>
            )}
          </div>

        {/* Legend - Mobile: below map, Desktop: left side */}
        <div className="mx-auto mt-5 flex w-full max-w-md flex-col gap-2 text-sm lg:ml-0 lg:-mt-55 lg:w-1/3 lg:max-w-none sm:text-base">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#5A0F14] shadow-[0_0_10px_rgba(90,15,20,0.8)]" />
            <span className="text-white/80 lg:text-white">{geographicAvailabilityCopy.legend.firstMarket}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full border-2 border-[#5A0F14] bg-transparent shadow-[0_0_10px_rgba(90,15,20,0.8)]" />
            <span className="text-white/80 lg:text-white">{geographicAvailabilityCopy.legend.expansion}</span>
          </div>
          <div className="flex items-center gap-3 lg:mb-16">
            <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full border-2 border-black bg-white shadow-[0_0_10px_rgba(90,15,20,0.8)]" />
            <span className="text-white/80 lg:text-white">{geographicAvailabilityCopy.legend.additionalmarkets}</span>
          </div>
        </div>
      </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-10 text-sm text-white/70 sm:text-base">
            {geographicAvailabilityCopy.cta.text}
          </p>
          <a
            href="#waitlist"
            className="cta-button inline-block rounded-lg border border-white/10 bg-gradient-to-br from-[#5A0F14] to-[#8A1F24] px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all hover:-translate-y-1 sm:px-10 sm:py-4"
          >
            {geographicAvailabilityCopy.cta.button}
          </a>
        </div>
      </div>  {/* ← Fermeture du max-w-5xl */}

      {/* Gradient transition to FAQ section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b via-black to-[#F3EFEA]/95" />

      <style jsx>{`
        @keyframes ripple {
          0% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(3);
          }
        }
        
        @keyframes pulseSubtle {
          0%, 100% { 
            box-shadow: 0 4px 20px rgba(90, 15, 20, 0.5); 
          }
          50% { 
            box-shadow: 0 4px 30px rgba(90, 15, 20, 0.8); 
          }
        }
        
        .cta-button {
          animation: pulseSubtle 2s ease-in-out infinite;
        }
        
        .cta-button:hover {
          box-shadow: 0 8px 35px rgba(90, 15, 20, 0.7);
        }
      `}</style>
    </section>
  );
}