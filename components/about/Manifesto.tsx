"use client";

import { useEffect, useRef, useState } from "react";
import { manifestoCopy } from "@/content/about.en";
import { Globe, Crown, Target } from "lucide-react";

export default function Manifesto() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Observer pour déclencher l'animation quand on arrive sur la section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // On coupe l'écoute une fois visible (perf)
        }
      },
      { threshold: 0.2 } // Déclenche quand 20% de la section est visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Helper pour les icônes (inchangé, juste propre)
  const getIcon = (id: string, isMiddle: boolean) => {
    const iconProps = {
      size: 22,
      strokeWidth: 1.25,
      className: isMiddle ? "text-[#5A0F14]" : "text-white/40",
    };

    let IconComponent;
    switch (id) {
      case "our-origin": IconComponent = Globe; break;
      case "our-standard": IconComponent = Crown; break;
      case "what-we-are": IconComponent = Target; break;
      default: return null;
    }

    return (
      <div className={`mb-8 flex h-12 w-12 items-center justify-center rounded-full border ${
        isMiddle ? "border-[#5A0F14]/30 bg-[#5A0F14]/5" : "border-white/10 bg-white/5"
      }`}>
        {IconComponent && <IconComponent {...iconProps} />}
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden bg-black py-16 sm:py-24"
    >
      {/* 1. BACKGROUND AVEC ZOOM FLUIDE CSS */}
      {/* On passe de scale-110 à scale-100. will-change prévient le navigateur. */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 will-change-transform"
        style={{
          backgroundImage: "url('/images/aboutstructure.webp')",
          transform: isVisible ? "scale(1)" : "scale(1.08)",
          transition: "transform 2000ms ease-out", // 2 secondes, comme ton code original
        }}
      />
      
      {/* Gradient Overlay (Statique) */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.88)_50%,rgba(0,0,0,0.92)_100%)]" />

      <div className="relative z-10 px-6">
        
        {/* Ligne séparatrice */}
        <div className="mx-auto mb-14 h-px w-full max-w-6xl bg-white/[0.06] sm:mb-20" />

        {/* GRILLE DES PILLIERS */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-10">
          {manifestoCopy.pillars.map((pillar, index) => {
            const isMiddle = index === 1;
            return (
              <div
                key={pillar.id}
                className={`relative border-l-[3px] p-8 transition-all duration-700 ease-out sm:min-h-[380px] sm:p-10 will-change-transform ${
                  isMiddle 
                  ? "border-[#5A0F14] bg-[linear-gradient(180deg,rgba(90,15,20,0.08)_0%,rgba(0,0,0,0.6)_100%)] sm:border-x-[3px]" 
                  : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0.5)_100%)]"
                }`}
                style={{
                  // ANIMATION CSS LOGIC :
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                  // Délai calculé (0s, 0.2s, 0.4s) pour l'effet "Stagger"
                  transitionDelay: `${index * 500}ms`, 
                }}
              >
                {/* Ligne décorative (milieu seulement) */}
                {isMiddle && (
                  <div className="absolute left-1/2 top-0 hidden h-[2px] w-[60%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#5A0F14,transparent)] sm:block" />
                )}

                {getIcon(pillar.id, isMiddle)}

                <h2 className={`mb-6 text-[14px] font-extrabold uppercase tracking-[0.15em] ${isMiddle ? "text-[#5A0F14]" : "text-white"}`}>
                  {pillar.title}
                </h2>

                <div className="space-y-4">
                  {pillar.content.map((paragraph, i) => (
                    <p key={i} className="text-[14px] font-light leading-[1.8] text-white/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloc "Foundation" du bas */}
        <div className="mx-auto mt-20 w-full max-w-6xl">
          <div className="relative flex h-24 items-center justify-center border-t-2 border-[#5A0F14]/30 bg-[linear-gradient(180deg,rgba(90,15,20,0.15)_0%,rgba(0,0,0,0.8)_100%)]">
            <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-white/60">
              Foundation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}