"use client";

import { useEffect, useRef, useState } from "react";
import { valuePropsCopy } from "@/content/en";

// Card reçoit isVisible depuis le parent sur desktop
// et gère son propre observer sur mobile
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

  // Observer individuel — mobile uniquement
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
      }}
    >
      {/* ── CONTENEUR PRINCIPAL (Sans bordure, gère juste la forme et l'image) ── */}
      <div
        className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] min-h-[140px] sm:items-start"
        style={{
          backgroundImage: `url(${step.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 1. OVERLAY DE FLOU ÉTENDU : Le -inset-2 pousse le flou hors du cadre pour cacher les bords moches */}
        <div className="absolute -inset-2 bg-black/75 backdrop-blur-[3px] transition-all duration-300 group-hover:bg-black/65" />

        {/* 2. VRAIE BORDURE HOMOGÈNE : Posée par-dessus le flou, au pixel près */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-lg border border-white/20 transition-colors duration-300 group-hover:border-white/30" />

        {/* ── CONTENT ── */}
        <div className="relative z-10 flex items-start gap-4 p-6">

          {/* Dot avec glow */}
          <div className="relative flex flex-col items-center">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5A0F14] text-sm font-bold"
              style={{
                boxShadow: isVisible
                  ? "0 0 20px rgba(90,15,20,0.6), 0 0 40px rgba(90,15,20,0.3)"
                  : "none",
                transition: "box-shadow 600ms ease-out",
                transitionDelay: "300ms",
              }}
            >
              {step.id}
            </div>
            {/* Ligne verticale — mobile uniquement */}
            {!isLast && (
              <div className="mt-2 h-[calc(100%+24px)] w-px bg-white/20 sm:hidden" />
            )}
          </div>

          {/* Text */}
          <div className="flex-1 pt-1">
            <h3 className="mb-2 text-lg font-semibold sm:text-xl">
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

export default function ValueProposition() {
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(valuePropsCopy.steps.length).fill(false)
  );
  const sectionRef = useRef<HTMLElement>(null);

  // Détecter desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Observer section — header + cascade desktop
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Desktop : cascade séquentielle propre depuis le parent
          if (window.matchMedia("(min-width: 640px)").matches) {
            valuePropsCopy.steps.forEach((_, i) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, 300 + i * 180);
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
      className="w-full bg-black px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-4xl">

        {/* Titre */}
        <div className="mb-3 text-center">
          <h2
            className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out",
              transitionDelay: "0ms",
            }}
          >
            {valuePropsCopy.title}
          </h2>
        </div>

        {/* Trust line + Underline */}
        <div className="mb-12 flex flex-col items-center text-center">
          <p
            className="mb-2 text-sm font-semibold text-white sm:text-base"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out",
              transitionDelay: "100ms",
            }}
          >
            {valuePropsCopy.trustLine}
          </p>
          <div
            className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
            style={{
              width: visible ? "180px" : "0px",
              transition: "width 600ms ease-out",
              transitionDelay: "200ms",
            }}
          />
        </div>

        {/* Cards — colonne mobile / grid 2x2 desktop */}
        <div className="relative space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6">

          {/* Ligne de connexion — mobile uniquement */}
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
                transition: "height 1200ms ease-out",
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