"use client";

import { useEffect, useRef, useState } from "react";
import { aboutHeroCopy } from "@/content/about.en";
import NavBar from "@/components/NavBar";

export default function HeroAbout() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Entrance — déclenché après 100ms
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimating(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderStatement = () => {
    const parts = aboutHeroCopy.statement.split(/(rigged)/gi);
    return parts.map((part, i) =>
      part.toLowerCase() === "rigged" ? (
        <span
          key={i}
          className="relative inline-block"
          style={{
            background: visible ? "rgba(90,15,20,0.45)" : "transparent",
            padding: visible ? "0 8px" : "0",
            borderRadius: "6px",
            boxShadow: visible ? "0 2px 16px rgba(90,15,20,0.4)" : "none",
            transition: "background 700ms ease, padding 700ms ease, box-shadow 700ms ease",
          }}
        >
          {part}
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
      className="relative flex min-h-[90svh] w-full items-center justify-center overflow-hidden bg-black px-6 py-20 sm:min-h-[90svh]"
    >
      {/* ── NAVBAR ── */}
      <NavBar />

      {/* Background image — slow zoom forwards, s'arrête seul */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero/partnerhero.webp')",
          animationName: "nevexa-slow-zoom",
          animationDuration: "20s",
          animationTimingFunction: "ease-out",
          animationFillMode: "forwards",
          animationPlayState: animating ? "running" : "paused",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.90) 40%, rgba(90,15,20,0.08) 60%, rgba(0,0,0,0.96) 100%)",
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

      {/* Scan lines — pausées via animationPlayState */}
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
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* Main statement */}
        <h1
          className="mb-8 text-[34px] font-black leading-[1.15] tracking-[-0.02em] text-white sm:text-[56px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "200ms",
            textShadow: "0 2px 40px rgba(0,0,0,0.6)",
          }}
        >
          {renderStatement()}
        </h1>

        {/* Subline */}
        <p
          className="text-[20px] font-medium tracking-[0.01em] text-white/80 sm:text-[22px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "500ms",
          }}
        >
          {aboutHeroCopy.subline}
        </p>

      </div>

      {/* Scroll indicator — pausé quand hors viewport */}
      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 700ms ease 900ms",
        }}
      >
        <div className="relative h-12 w-px overflow-hidden rounded-sm bg-white/[0.08]">
          <div
            className="absolute left-0 top-0 h-full w-full"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4), transparent)",
              animationName: "nevexa-scroll-line",
              animationDuration: "2.5s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationPlayState: animating ? "running" : "paused",
            }}
          />
        </div>
      </div>

      {/*
        RÈGLE KEYFRAMES :
        Toutes appelées via animationName (style inline) → keyframes ici dans le composant ✅
      */}
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