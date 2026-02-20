"use client";

import { useEffect, useRef, useState } from "react";
import { manifestoCopy } from "@/content/about.en";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(min-width: 640px)").matches) {
          // Desktop: cascade séquentielle depuis le parent
          setTimeout(() => setVisibleCards([true, false, false]), 200);
          setTimeout(() => setVisibleCards([true, true, false]), 550);
          setTimeout(() => setVisibleCards([true, true, true]), 900);
        } else {
          // Mobile: cascade plus rapide
          setTimeout(() => setVisibleCards([true, false, false]), 150);
          setTimeout(() => setVisibleCards([true, true, false]), 400);
          setTimeout(() => setVisibleCards([true, true, true]), 650);
        }
      },
      { threshold: 0.15 }
    );

    // setTimeout 100ms — iOS Safari garantit que l'état initial est peint
    const t = setTimeout(() => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    }, 100);

    return () => { clearTimeout(t); observer.disconnect(); };
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black py-16 sm:py-20"
    >

      {/* Background image — keyframe via style inline → dans <style jsx> */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/aboutstructure.jpg')",
          animation: "nevexa-manifesto-zoom 25s ease-out forwards",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.92) 50%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6">

        {/* Top separator */}
        <div className="mx-auto mb-14 h-px w-full max-w-6xl bg-white/[0.06] sm:mb-16" />

        {/* Desktop: 3 pillars */}
        <div className="mx-auto hidden w-full max-w-6xl grid-cols-3 gap-10 sm:grid">
          {manifestoCopy.pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="relative"
              style={{
                borderLeft: index === 1 ? "3px solid rgba(90,15,20,0.6)" : "3px solid rgba(255,255,255,0.12)",
                borderRight: index === 1 ? "3px solid rgba(90,15,20,0.6)" : "3px solid rgba(255,255,255,0.12)",
                background: index === 1
                  ? "linear-gradient(180deg, rgba(90,15,20,0.04) 0%, rgba(0,0,0,0.5) 100%)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(0,0,0,0.5) 100%)",
                padding: "48px 28px",
                minHeight: "320px",
                // Transition CSS pure — pas de conflit avec keyframe (éléments différents)
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index] ? "translateX(0)" : "translateX(-40px)",
                transition: "opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {/* Top accent for middle pillar */}
              {index === 1 && (
                <div
                  className="absolute left-1/2 top-0 h-[2px] w-[60%] -translate-x-1/2"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(90,15,20,0.8), transparent)",
                  }}
                />
              )}

              <h3
                className="mb-8 text-[15px] font-extrabold uppercase tracking-[0.1em]"
                style={{ color: index === 1 ? "#5A0F14" : "#fff" }}
              >
                {pillar.title}
              </h3>

              <div className="space-y-4">
                {pillar.content.map((paragraph, i) => (
                  <p key={i} className="text-[14px] leading-[1.8] text-white/65">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stack */}
        <div className="mx-auto w-full max-w-2xl space-y-6 sm:hidden">
          {manifestoCopy.pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="relative"
              style={{
                borderLeft: index === 1 ? "4px solid rgba(90,15,20,0.7)" : "4px solid rgba(255,255,255,0.15)",
                background: index === 1
                  ? "linear-gradient(180deg, rgba(90,15,20,0.06) 0%, rgba(0,0,0,0.4) 100%)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.4) 100%)",
                padding: "28px 20px",
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index] ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <h3
                className="mb-5 text-[13px] font-extrabold uppercase tracking-[0.1em]"
                style={{ color: index === 1 ? "#5A0F14" : "#fff" }}
              >
                {pillar.title}
              </h3>
              <div className="space-y-3">
                {pillar.content.map((paragraph, i) => (
                  <p key={i} className="text-[13px] leading-[1.75] text-white/65">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Foundation base */}
        <div className="mx-auto mt-14 w-full max-w-6xl sm:mt-16">
          <div
            className="relative flex h-16 items-center justify-center border-t-2"
            style={{
              background: "linear-gradient(180deg, rgba(90,15,20,0.12) 0%, rgba(0,0,0,0.8) 100%)",
              borderColor: "rgba(90,15,20,0.35)",
            }}
          >
            <div className="absolute left-1/3 top-0 hidden h-full w-px bg-white/[0.06] sm:block" />
            <div className="absolute right-1/3 top-0 hidden h-full w-px bg-white/[0.06] sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
              Foundation
            </span>
          </div>
        </div>

      </div>

      {/*
        RÈGLE KEYFRAMES :
        nevexa-manifesto-zoom → appelée via style={{ animation: "nevexa-manifesto-zoom ..." }}
        → keyframe dans <style jsx> du composant ✅ (pas dans globals.css)
      */}
      <style jsx>{`
        @keyframes nevexa-manifesto-zoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1.0); }
        }
      `}</style>

    </section>
  );
}