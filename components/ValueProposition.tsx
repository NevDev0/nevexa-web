"use client";

import { useEffect, useRef, useState } from "react";
import { valuePropsCopy } from "@/content/en";

// --- SOUS-COMPOSANT CARTE ---
function StepCard({
  step,
  index,
  isLast,
  isDesktop,
  isVisibleFromParent,
}: {
  step: (typeof valuePropsCopy.steps)[0];
  index: number;
  isLast: boolean;
  isDesktop: boolean;
  isVisibleFromParent: boolean;
}) {
  const [isVisibleMobile, setIsVisibleMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const fromLeft = index % 2 === 0;
  const isVisible = isDesktop ? isVisibleFromParent : isVisibleMobile;
  const transform = isVisible
    ? "translateX(0)"
    : fromLeft
    ? "translateX(-70px)"
    : "translateX(70px)";

  useEffect(() => {
    if (isDesktop) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleMobile(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const t = setTimeout(() => {
      if (cardRef.current) observer.observe(cardRef.current);
    }, 100);

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [isDesktop]);

  return (
    <div
      ref={cardRef}
      className="relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform,
        transition:
          "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        willChange: "opacity, transform",
      }}
    >
      <div
        className="group relative min-h-[140px] overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] sm:items-start"
        style={{
          backgroundImage: `url(${step.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute -inset-2 bg-black/75 backdrop-blur-[3px] transition-all duration-300 group-hover:bg-black/65" />

        {/* Bordure */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-lg border border-white/20 transition-colors duration-300 group-hover:border-white/30" />

        {/* Contenu */}
        <div className="relative z-10 flex items-start gap-4 p-6">
          <div className="relative flex flex-col items-center">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5A0F14] text-sm font-bold transition-shadow duration-500"
              style={{
                boxShadow: isVisible
                  ? "0 0 20px rgba(90,15,20,0.6), 0 0 40px rgba(90,15,20,0.3)"
                  : "none",
              }}
            >
              {step.id}
            </div>
            {!isLast && (
              <div className="mt-2 h-[calc(100%+24px)] w-px bg-white/20 sm:hidden" />
            )}
          </div>

          <div className="flex-1 pt-1">
            <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
              {step.label}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-200 sm:text-base">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- COMPOSANT PRINCIPAL ---
export default function ValueProposition() {
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(valuePropsCopy.steps.length).fill(false)
  );
  const sectionRef = useRef<HTMLElement>(null);

  // Détecter Desktop
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 640);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Observer global — titre + cascade desktop
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (window.innerWidth >= 640) {
            valuePropsCopy.steps.forEach((_, i) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, 300 + i * 200);
            });
          }

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black px-6 py-16 text-white lg:py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* ── HEADER ── */}
        <div className="mb-12 text-center sm:mb-20">
          <p
            className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#8A1F24]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 800ms ease-out, transform 800ms ease-out",
            }}
          >
            {valuePropsCopy.trustLine}
          </p>
          <h2
            className="text-3xl font-bold uppercase tracking-widest sm:text-4xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 800ms ease-out, transform 800ms ease-out",
              transitionDelay: "100ms",
            }}
          >
            {valuePropsCopy.title}
          </h2>
        </div>

        {/* ── GRILLE DES CARTES ── */}
        <div className="relative space-y-8 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0">

          {/* Ligne verticale mobile */}
          <div
            className="absolute left-[35px] top-10 w-px sm:hidden"
            style={{
              height: "calc(100% - 80px)",
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="w-full bg-gradient-to-b from-[#5A0F14] to-[#5A0F14]/20"
              style={{
                height: visible ? "100%" : "0%",
                transition: "height 1500ms ease-out",
                transitionDelay: "400ms",
              }}
            />
          </div>

          {valuePropsCopy.steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isLast={index === valuePropsCopy.steps.length - 1}
              isDesktop={isDesktop}
              isVisibleFromParent={visibleSteps[index]}
            />
          ))}
        </div>

      </div>
    </section>
  );
}