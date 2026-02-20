"use client";

import { useEffect, useState } from "react";
import { aboutHeroCopy } from "@/content/about.en";

export default function HeroAbout() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Fix: split on "rigged" but keep surrounding punctuation clean
  const renderStatement = () => {
    // Split cleanly — avoid capturing the period
    const parts = aboutHeroCopy.statement.split(/(rigged)/gi);

    return parts.map((part, i) =>
      part.toLowerCase() === "rigged" ? (
        <span
          key={i}
          className="relative inline-block transition-all duration-700"
          style={{
            background: visible ? "rgba(90,15,20,0.45)" : "transparent",
            padding: visible ? "0 8px" : "0",
            borderRadius: "6px",
            boxShadow: visible ? "0 2px 16px rgba(90,15,20,0.4)" : "none",
          }}
        >
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <section className="relative flex min-h-[80svh] w-full items-center justify-center overflow-hidden bg-black px-6 py-20 sm:min-h-[80svh]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero/partnerhero.jpg')",
          animation: "nevexa-slow-zoom 20s ease-out forwards",
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

      {/* Scan lines */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {[
          { top: "25%", delay: "0s", opacity: 0.12 },
          { top: "50%", delay: "-6s", opacity: 0.08 },
          { top: "75%", delay: "-12s", opacity: 0.10 },
        ].map((line, i) => (
          <div
            key={i}
            className="absolute h-px w-[200%] -left-[50%]"
            style={{
              top: line.top,
              opacity: line.opacity,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 60%, transparent 100%)",
              transform: "rotate(-25deg)",
              animation: `nevexa-scan-move 15s linear infinite`,
              animationDelay: line.delay,
            }}
          />
        ))}
      </div>

      {/* Content — centered on all breakpoints */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* Main statement */}
        <h1
          className={`mb-6 text-[34px] font-black leading-[1.15] tracking-[-0.02em] text-white sm:text-[56px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{
            transition: "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "200ms",
            textShadow: "0 2px 40px rgba(0,0,0,0.6)",
          }}
        >
          {renderStatement()}
        </h1>

        {/* Subline — no highlight, just clean typography */}
        <p
          className={`text-[18px] font-medium tracking-[0.01em] text-white/70 sm:text-[22px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{
            transition: "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "500ms",
          }}
        >
          {aboutHeroCopy.subline}
        </p>

      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transition: "opacity 700ms ease",
          transitionDelay: "900ms",
        }}
      >
        <div className="relative h-12 w-px overflow-hidden rounded-sm bg-white/[0.08]">
          <div
            className="absolute left-0 top-0 h-full w-full"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4), transparent)",
              animation: "nevexa-scroll-line 2.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Keyframes */}
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