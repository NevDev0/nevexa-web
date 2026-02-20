"use client";
import { financingHeroCopy } from "@/content/financing.en";

export default function HeroFinancing() {
  return (
    <section className="relative w-full overflow-hidden bg-black">

      {/* ── Background : glow radial burgundy top + scan lines ── */}
      <div className="absolute inset-0 z-0">
        {/* Glow radial burgundy — haut centre */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2"
          style={{
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(90,15,20,0.35) 0%, rgba(90,15,20,0.10) 45%, transparent 70%)",
          }}
        />
        {/* Glow radial blanc — centré sur le titre (Option B) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "600px",
            height: "260px",
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.01) 50%, transparent 75%)",
          }}
        />
        {/* Scan lines diagonales */}
        <div className="hero-financing-scanlines absolute inset-0" />
      </div>

      {/* ── Contenu principal ── */}
      <div className="relative z-10 flex min-h-[90svh] flex-col items-center justify-center px-6 pb-20 pt-20 text-center">
        <div className="max-w-2xl">

          {/* Badges */}
          <div className="hero-financing-item-1 mb-10 flex items-center justify-center gap-4">
            <span className="hero-financing-badge-pulse inline-flex items-center rounded-full bg-[#5A0F14]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/90">
              {financingHeroCopy.badges.earlyAccess}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70">
              {financingHeroCopy.badges.comingSoon}
            </span>
          </div>

          {/* H1 — text-shadow glow (Option A) */}
          <h1
            className="hero-financing-item-2 mb-10 text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl sm:leading-tight"
            style={{
              textShadow:
                "0 0 40px rgba(255,255,255,0.08), 0 0 80px rgba(255,255,255,0.04)",
            }}
          >
            {financingHeroCopy.title}
          </h1>

          {/* Subtitle */}
          <p className="hero-financing-item-3 mb-10 text-sm leading-relaxed text-neutral-300 sm:text-base sm:leading-relaxed">
            {financingHeroCopy.subtitle}
          </p>

          {/* Clarification card */}
          <div className="hero-financing-item-4 mx-auto max-w-lg rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-center gap-2">
              <svg className="h-3.5 w-3.5 flex-shrink-0 text-[#5A0F14]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A0F14]">
                Important
              </span>
            </div>
            <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
              {financingHeroCopy.clarification}
            </p>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator (visuel uniquement) ── */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="hero-financing-scroll-mouse relative h-8 w-5 rounded-full border border-white/20">
          <div className="hero-financing-scroll-dot absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/50" />
        </div>
      </div>

      <style>{`
        /* Entrance cascade — items renumérotés après suppression underline */
        .hero-financing-item-1 { opacity: 0; animation: hf-fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards; }
        .hero-financing-item-2 { opacity: 0; animation: hf-fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.45s forwards; }
        .hero-financing-item-3 { opacity: 0; animation: hf-fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.7s forwards; }
        .hero-financing-item-4 { opacity: 0; animation: hf-fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.95s forwards; }

        @keyframes hf-fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Border pulse — Early Access */
        .hero-financing-badge-pulse {
          border: 1px solid rgba(90,15,20,0.4);
          animation: hf-border-pulse 3s ease-in-out infinite;
        }
        @keyframes hf-border-pulse {
          0%, 100% { border-color: rgba(90,15,20,0.4); box-shadow: 0 0 0px rgba(90,15,20,0); }
          50%       { border-color: rgba(90,15,20,0.9); box-shadow: 0 0 8px rgba(90,15,20,0.3); }
        }

        /* Scan lines */
        .hero-financing-scanlines::before,
        .hero-financing-scanlines::after {
          content: '';
          position: absolute;
          width: 200%;
          height: 1px;
          background: rgba(255,255,255,0.025);
          transform-origin: left center;
        }
        .hero-financing-scanlines::before {
          top: 35%; left: -50%;
          transform: rotate(-18deg);
          animation: hf-scan 9s ease-in-out infinite;
        }
        .hero-financing-scanlines::after {
          top: 65%; left: -50%;
          transform: rotate(-18deg);
          animation: hf-scan 9s ease-in-out infinite 4.5s;
        }
        @keyframes hf-scan {
          0%, 100% { opacity: 0.015; }
          50%       { opacity: 0.05; }
        }

        /* Scroll indicator */
        .hero-financing-scroll-mouse {
          opacity: 0;
          animation: hf-fade-up 0.6s ease 1.6s forwards;
        }
        .hero-financing-scroll-dot {
          animation: hf-scroll-dot 2s ease-in-out infinite;
        }
        @keyframes hf-scroll-dot {
          0%   { opacity: 0; transform: translateX(-50%) translateY(0); }
          30%  { opacity: 1; }
          80%  { opacity: 0; transform: translateX(-50%) translateY(10px); }
          100% { opacity: 0; transform: translateX(-50%) translateY(10px); }
        }
      `}</style>
    </section>
  );
}