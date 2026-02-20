"use client";

import { manifestoCopy } from "@/content/about.en";

export default function Manifesto() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/aboutstructure.jpg')",
          animation: "nevexa-slow-zoom 25s ease-out forwards",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.92) 50%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* Grain texture */}
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
        <div className="mx-auto mb-16 h-px w-full max-w-6xl bg-white/[0.06] sm:mb-20" />

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
                minHeight: "420px",
              }}
            >
              {/* Top accent line for middle pillar */}
              {index === 1 && (
                <div
                  className="absolute left-1/2 top-0 h-[2px] w-[60%] -translate-x-1/2"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(90,15,20,0.8), transparent)",
                  }}
                />
              )}

              {/* Title */}
              <h3
                className="mb-8 text-[17px] font-extrabold uppercase tracking-[0.08em]"
                style={{ color: index === 1 ? "#5A0F14" : "#fff" }}
              >
                {pillar.title}
              </h3>

              {/* Content */}
              <div className="space-y-4">
                {pillar.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[14px] leading-[1.75] text-white/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Stack */}
        <div className="mx-auto w-full max-w-2xl space-y-8 sm:hidden">
          {manifestoCopy.pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="relative"
              style={{
                borderLeft: index === 1 ? "4px solid rgba(90,15,20,0.7)" : "4px solid rgba(255,255,255,0.15)",
                background: index === 1 
                  ? "linear-gradient(180deg, rgba(90,15,20,0.06) 0%, rgba(0,0,0,0.4) 100%)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.4) 100%)",
                padding: "32px 24px",
              }}
            >
              {/* Title */}
              <h3
                className="mb-6 text-[15px] font-extrabold uppercase tracking-[0.08em]"
                style={{ color: index === 1 ? "#5A0F14" : "#fff" }}
              >
                {pillar.title}
              </h3>

              {/* Content */}
              <div className="space-y-3">
                {pillar.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[13px] leading-[1.7] text-white/65"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Foundation base */}
        <div className="mx-auto mt-16 w-full max-w-6xl sm:mt-20">
          <div
            className="relative flex h-20 items-center justify-center border-t-2"
            style={{
              background: "linear-gradient(180deg, rgba(90,15,20,0.15) 0%, rgba(0,0,0,0.8) 100%)",
              borderColor: "rgba(90,15,20,0.4)",
            }}
          >
            {/* Vertical separators (desktop only) */}
            <div
              className="absolute left-1/3 top-0 hidden h-full w-px bg-white/[0.08] sm:block"
            />
            <div
              className="absolute right-1/3 top-0 hidden h-full w-px bg-white/[0.08] sm:block"
            />

            {/* Text */}
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/30 sm:text-[11px]">
              Foundation
            </span>
          </div>
        </div>

      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes nevexa-slow-zoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1.0); }
        }
      `}</style>

    </section>
  );
}