"use client";

import { useEffect, useRef, useState } from "react";
import { roleAndLimitsCopy } from "@/content/partnership.en";

export default function RoleAndLimits() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [youItems, setYouItems] = useState<number[]>([]);
  const [nevItems, setNevItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);

        [0, 1, 2].forEach((i) => {
          setTimeout(() => setYouItems((prev) => [...prev, i]), 350 + i * 80);
        });

        [0, 1, 2, 3, 4].forEach((i) => {
          setTimeout(() => setNevItems((prev) => [...prev, i]), 700 + i * 80);
        });

        observer.disconnect();
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black px-6 py-14"
    >
      {/* ── Top separator ── */}
      <div className="absolute top-0 left-6 right-6 h-px bg-white/[0.04]" />

      {/* ── Header ── */}
      <div
        className={`mb-10 flex flex-col items-center text-center transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <div className="relative flex w-full items-center justify-center">
          <div className="absolute left-0 right-0 h-px bg-white/[0.08]" />
          <div className="relative z-10 flex flex-col items-center gap-2 bg-black px-4">
            <h2 className="text-[17px] font-bold uppercase tracking-[0.13em] text-white">
              {roleAndLimitsCopy.title}
            </h2>
            <div
              className={`h-px bg-[#5A0F14] transition-all duration-700 delay-300 ${
                visible ? "w-10" : "w-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* ════════════════════════════
          MOBILE layout (stacked)
          DESKTOP layout (side by side)
      ════════════════════════════ */}
      <div className="flex flex-col gap-0 sm:flex-row sm:items-stretch sm:gap-6">

        {/* ── YOU bloc ── */}
        <div
          className={`relative overflow-hidden rounded-t-xl border border-white/10 bg-white/[0.015] px-5 py-6 transition-all duration-700 delay-200 sm:flex-1 sm:rounded-xl ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {/* YOU watermark */}
          <span
            className="pointer-events-none absolute -top-2 -right-2 select-none text-[120px] font-black leading-none tracking-tighter text-white/[0.03]"
            aria-hidden
          >
            YOU
          </span>

          {/* Tag */}
          <div className="mb-5 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
              As a Partner
            </span>
          </div>

          {/* Can do items */}
          <div className="flex flex-col">
            {roleAndLimitsCopy.partnerRole.canDo.map((text, i) => (
              <div
                key={i}
                className={`flex items-start gap-3.5 border-b border-white/[0.04] py-3 transition-all duration-500 last:border-0 ${
                  youItems.includes(i)
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-2.5 opacity-0"
                }`}
              >
                <span className="mt-0.5 w-5 flex-shrink-0 text-[11px] font-bold tracking-[0.06em] text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.18]">
                  <svg width="7" height="6" viewBox="0 0 10 8" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1,4 3.5,6.5 9,1" />
                  </svg>
                </div>
                <span className="text-[13.5px] leading-[1.55] text-white/72">{text}</span>
              </div>
            ))}
          </div>

          {/* Prohibited header */}
          <div className="mb-3.5 mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
            <div className="h-px flex-1 bg-gradient-to-r from-[#5A0F14]/60 to-transparent" />
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#5A0F14]/80">
              Strictly prohibited
            </span>
          </div>

          {/* Prohibited items */}
          <div className="flex flex-col">
            {roleAndLimitsCopy.partnerRole.cannotDo.map((text, i) => (
              <div
                key={i}
                className="redacted-item group flex cursor-default items-start gap-3 border-b border-white/[0.03] py-2.5 last:border-0"
              >
                <div className="mt-0.5 flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-sm border border-[#5A0F14]/60">
                  <svg width="6" height="6" viewBox="0 0 8 8" fill="none" stroke="rgba(90,15,20,0.6)" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="1" y1="1" x2="7" y2="7" />
                    <line x1="7" y1="1" x2="1" y2="7" />
                  </svg>
                </div>
                {/* 
                  Mobile: always readable (no strikethrough, full opacity)
                  Desktop: strikethrough by default, readable on hover
                */}
                <span className="redacted-text text-[13px] leading-[1.5]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pivot arrow only ── */}
        <div
          className={`flex items-center justify-center transition-all duration-500 delay-[420ms] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Mobile: vertical arrow */}
          <span
            className={`text-[20px] text-[#5A0F14] transition-all duration-500 delay-[700ms] sm:hidden ${
              visible ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
            }`}
          >
            ↓
          </span>

          {/* Desktop: horizontal arrow */}
          <span
            className={`hidden text-[20px] text-[#5A0F14] transition-all duration-500 delay-[700ms] sm:inline-block ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
            }`}
          >
            →
          </span>
        </div>

        {/* ── NEVEXA bloc ── */}
        <div
          className={`relative overflow-hidden rounded-b-xl border border-[#5A0F14]/30 bg-[#0C0D0F] px-5 py-6 transition-all duration-700 delay-[540ms] sm:flex-1 sm:rounded-xl ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {/* N watermark */}
          <span
            className="pointer-events-none absolute -bottom-4 -right-2 select-none text-[140px] font-black leading-none tracking-tighter text-white/[0.03]"
            aria-hidden
          >
            N
          </span>

          {/* corner glow */}
          <div
            className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(90,15,20,0.1), transparent 70%)" }}
          />

          {/* Tag */}
          <div className="mb-5 flex items-center gap-2">
            <div
              className="h-1.5 w-1.5 rounded-full bg-[#5A0F14]"
              style={{ animation: "nevexa-glow-pulse 2.5s ease-in-out infinite" }}
            />
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#5A0F14]/80">
              Nevexa takes over
            </span>
          </div>

          <p className="mb-4 text-[13px] font-medium tracking-[0.02em] text-white/45">
            Full control from here.
          </p>

          {/* Nevexa items */}
          <div className="flex flex-col">
            {roleAndLimitsCopy.nevexaRole.responsibilities.map((text, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 border-b border-white/[0.04] py-[11px] transition-all duration-500 last:border-0 ${
                  nevItems.includes(i)
                    ? "translate-x-0 opacity-100"
                    : "translate-x-2.5 opacity-0"
                }`}
              >
                <div className="mt-2 flex-shrink-0">
                  <div
                    className={`h-px bg-[#5A0F14] transition-all duration-500 ${
                      nevItems.includes(i) ? "w-4" : "w-0"
                    }`}
                    style={{ transitionDelay: `${100 + i * 80}ms` }}
                  />
                </div>
                <span className="text-[13.5px] leading-[1.55] text-white/65">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Keyframes + redacted responsive styles ── */}
      <style jsx>{`
        @keyframes nevexa-glow-pulse {
          0%, 100% { box-shadow: 0 0 6px rgba(90,15,20,0.6); }
          50%       { box-shadow: 0 0 12px rgba(90,15,20,0.9); }
        }

        /* Mobile: always readable, no strikethrough */
        .redacted-text {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
        }

        /* Desktop: strikethrough by default, hover to reveal */
        @media (hover: hover) and (pointer: fine) {
          .redacted-text {
            color: rgba(255,255,255,0.28);
            text-decoration: line-through;
            text-decoration-color: rgba(90,15,20,0.4);
            text-decoration-thickness: 1px;
            transition: color 0.3s ease, text-decoration-color 0.3s ease;
          }
          .redacted-item:hover .redacted-text {
            color: rgba(255,255,255,0.55);
            text-decoration-color: transparent;
          }
        }
      `}</style>
    </section>
  );
}