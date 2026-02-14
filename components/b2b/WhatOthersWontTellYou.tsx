"use client";

import { useEffect, useRef, useState } from "react";
import { whatOthersWontTellYou } from "@/content/b2b.en";

export default function WhatOthersWontTellYou() {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for entrance
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // Faster cascade - start sooner
            whatOthersWontTellYou.dossierItems.forEach((_, i) => {
              setTimeout(() => {
                setRevealedCards((prev) => [...prev, i]);
              }, 800 + i * 250); // 800ms start + 250ms between cards
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleCardInteraction = (index: number) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0E0F11] px-6 pb-0 pt-12 sm:pt-16"
    >
      {/* Diagonal scan lines background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-px w-[200%] bg-gradient-to-r from-transparent via-[#5A0F14]/30 to-transparent"
          style={{
            top: "20%",
            transformOrigin: "left",
            animation: isVisible
              ? "diagScan 8s ease-in-out infinite"
              : "none",
          }}
        />
        <div
          className="absolute h-px w-[200%] bg-gradient-to-r from-transparent via-[#5A0F14]/30 to-transparent"
          style={{
            top: "50%",
            transformOrigin: "left",
            animation: isVisible
              ? "diagScan 8s ease-in-out infinite 2.5s"
              : "none",
          }}
        />
        <div
          className="absolute h-px w-[200%] bg-gradient-to-r from-transparent via-[#5A0F14]/30 to-transparent"
          style={{
            top: "80%",
            transformOrigin: "left",
            animation: isVisible
              ? "diagScan 8s ease-in-out infinite 5s"
              : "none",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl pb-16 sm:pb-20">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3.5 opacity-0"
          }`}
        >
          <h2 className="mb-3 text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {whatOthersWontTellYou.title}
          </h2>
          <div
            className={`mx-auto mb-5 h-px bg-[#5A0F14] transition-all duration-700 ${
              isVisible ? "w-18" : "w-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
          <p className="text-[15px] leading-relaxed text-white/70">
            {whatOthersWontTellYou.subtitle}
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {whatOthersWontTellYou.dossierItems.map((item, index) => {
            const isRevealed = revealedCards.includes(index);
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                onClick={() => handleCardInteraction(index)}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative cursor-pointer overflow-hidden rounded-lg bg-[#0a0a0a] p-7 transition-all ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                } ${
                  isActive
                    ? "scale-105 shadow-[0_20px_60px_rgba(90,15,20,0.3)]"
                    : "scale-100 shadow-none"
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 120}ms` : "0ms",
                  transitionDuration: isActive ? "250ms" : "600ms",
                }}
              >
                {/* Gradient border */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-lg p-px transition-all duration-500 ${
                    isRevealed ? "opacity-30" : "opacity-0"
                  } ${isActive ? "!opacity-100" : ""}`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(90,15,20,0.4), transparent 40%, transparent 60%, rgba(90,15,20,0.2))",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    transitionDelay: isRevealed ? "400ms" : "0ms",
                  }}
                />

                {/* Active state enhanced border */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-lg transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(90,15,20,0.8), transparent 30%, transparent 70%, rgba(90,15,20,0.4))",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                  }}
                />

                {/* Watermark number */}
                <div
                  className={`pointer-events-none absolute right-4 top-4 text-[120px] font-black leading-none tracking-tighter tabular-nums transition-all duration-700 ${
                    isRevealed
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-8 opacity-0"
                  } ${
                    isRevealed
                      ? "text-white/[0.015]"
                      : "text-transparent"
                  } ${
                    isActive
                      ? "scale-110 rotate-[-3deg] !text-[#5A0F14]/[0.08]"
                      : "scale-100 rotate-0"
                  }`}
                  style={{
                    transitionDelay: isRevealed ? "100ms" : "0ms",
                    transitionDuration: isActive ? "250ms" : "700ms",
                  }}
                >
                  {item.num}
                </div>

                {/* Content */}
                <div className="relative z-[2]">
                  {/* Label */}
                  <div
                    className={`mb-2.5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-500 ${
                      isRevealed
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    } ${
                      isActive ? "text-[#5A0F14]" : "text-white/20"
                    }`}
                    style={{
                      transitionDelay: isRevealed ? "500ms" : "0ms",
                      transitionDuration: isActive ? "200ms" : "500ms",
                    }}
                  >
                    <div
                      className={`h-1 w-1 rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-[#5A0F14] shadow-[0_0_8px_rgba(90,15,20,0.6)]"
                          : "bg-white/20"
                      }`}
                    />
                    <span>Point {item.num}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`mb-3.5 text-base font-bold leading-[1.3] text-white/90 transition-all duration-500 ${
                      isRevealed
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isRevealed ? "600ms" : "0ms",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className={`relative mb-3.5 h-px overflow-hidden bg-white/6 transition-all duration-500 ${
                      isRevealed ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: isRevealed ? "700ms" : "0ms",
                    }}
                  >
                    <div
                      className={`absolute left-0 top-0 h-full bg-gradient-to-r from-[#5A0F14] to-transparent transition-all duration-700 ${
                        isRevealed ? "w-full" : "w-0"
                      } ${isActive ? "from-[#5A0F14] via-[#5A0F14]/50" : ""}`}
                      style={{
                        transitionDelay: isRevealed ? "750ms" : "0ms",
                        transitionDuration: isActive ? "300ms" : "700ms",
                      }}
                    />
                  </div>

                  {/* Problem */}
                  <p
                    className={`mb-3 text-[13px] leading-relaxed text-white/70 transition-all duration-500 ${
                      isRevealed
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isRevealed ? "850ms" : "0ms",
                    }}
                  >
                    {item.problem}
                  </p>

                  {/* Solution */}
                  <p
                    className={`border-l-2 pl-3 text-[13px] font-[450] leading-relaxed transition-all ${
                      isRevealed
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    } ${
                      isActive
                        ? "border-[#5A0F14] text-white/95"
                        : "border-[#5A0F14]/50 text-white/85"
                    }`}
                    style={{
                      transitionDelay: isRevealed ? "950ms" : "0ms",
                      transitionDuration: isActive ? "200ms" : "500ms",
                    }}
                  >
                    {item.solution}
                  </p>
                </div>

                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_0%,rgba(90,15,20,0.1),transparent_60%)] transition-opacity duration-250 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient transition to FAQ section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-90 bg-gradient-to-b from-transparent via-[#0E0F11]/40 to-[#F3EFEA]" />

      <style jsx>{`
        @keyframes diagScan {
          0%,
          100% {
            opacity: 0;
            transform: translateX(-100%) rotate(-25deg);
          }
          10%,
          90% {
            opacity: 1;
          }
          50% {
            transform: translateX(0) rotate(-25deg);
          }
        }
      `}</style>
    </section>
  );
}