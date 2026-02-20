"use client";

import { useEffect, useState } from "react";
import { partnershipHeroCopy } from "@/content/partnership.en";

export default function HeroPartnership() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black flex flex-col items-center justify-center px-6">

      {/* ── Background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero/partnerhero.jpg')",
          animation: "nevexa-slow-zoom 20s ease-out forwards",
        }}
      />

      {/* ── Overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.75) 40%, rgba(90,15,20,0.08) 60%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* ── Grain texture ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Scan lines ── */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {[
          { top: "20%", delay: "0s", opacity: 0.3 },
          { top: "55%", delay: "-3s", opacity: 0.2 },
          { top: "80%", delay: "-6s", opacity: 0.15 },
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
              animation: `nevexa-scan-move 8s linear infinite`,
              animationDelay: line.delay,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col items-center text-center sm:max-w-2xl">

        {/* Badge */}
        <div
          className={`mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.18] px-4 py-1.5 transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <div
            className="h-1.5 w-1.5 rounded-full bg-[#5A0F14]"
            style={{ animation: "nevexa-pulse-dot 2s ease-in-out infinite" }}
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">
            {partnershipHeroCopy.badge}
          </span>
        </div>

        {/* Title */}
        <h1
          className={`mb-5 text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white transition-all duration-700 sm:text-[52px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "160ms" }}
        >
          {/* Mobile : 3 lignes */}
          <span className="sm:hidden">
            Become a<br />
            Nevexa<br />
            <span className="text-white/55">Partner</span>
          </span>
          {/* Desktop : 2 lignes */}
          <span className="hidden sm:inline">
            Become a Nevexa<br />
            <span className="text-white/55">Partner</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mb-8 max-w-[320px] text-[15px] leading-[1.65] text-white/70 transition-all duration-700 sm:max-w-[480px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          {partnershipHeroCopy.subtitle}
        </p>

        {/* Separator */}
        <div
          className={`mb-6 h-px bg-gradient-to-r from-transparent via-[#5A0F14]/80 to-transparent transition-all duration-700 ${
            visible ? "w-20 opacity-100" : "w-0 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        />

        {/* Clarification box */}
        <div
          className={`max-w-[340px] rounded-xl border border-white/[0.07] bg-black/30 px-5 py-4 backdrop-blur-sm transition-all duration-700 sm:max-w-[480px] sm:bg-black/40 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "480ms" }}
        >
          <p className="text-[13px] italic leading-[1.6] tracking-[0.01em] text-white/60">
            {partnershipHeroCopy.clarification}
          </p>
        </div>

      </div>

      {/* ── Scroll indicator ── */}
      <div
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transition-all duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "640ms" }}
      >
        <div className="relative h-10 w-px overflow-hidden rounded-sm bg-white/10">
          <div
            className="absolute left-0 top-0 h-full w-full"
            style={{
              background: "linear-gradient(to bottom, transparent, #5A0F14, transparent)",
              animation: "nevexa-scroll-line 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5] h-28 bg-gradient-to-b from-transparent to-black" />

      {/* ── Keyframes ── */}
      <style jsx>{`
        @keyframes nevexa-slow-zoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.0); }
        }
        @keyframes nevexa-scan-move {
          from { transform: rotate(-25deg) translateX(-10%); }
          to   { transform: rotate(-25deg) translateX(10%); }
        }
        @keyframes nevexa-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(0.8); }
        }
        @keyframes nevexa-scroll-line {
          from { top: -100%; }
          to   { top: 100%; }
        }
      `}</style>

    </section>
  );
}