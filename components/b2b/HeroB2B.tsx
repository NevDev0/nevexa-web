"use client";

import { useState, useEffect, useRef } from "react";
import { b2bHeroCopy } from "@/content/b2b.en";
import ContactChoiceModalB2B from "@/components/b2b/ContactChoiceModalB2B";
import NavBar from "@/components/NavBar";

export default function HeroB2B() {
  const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Petit délai pour laisser le DOM se stabiliser avant de déclencher
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── NAVBAR ── */}
      <NavBar />

      <section ref={sectionRef} className="relative w-full overflow-hidden min-h-[85svh]">

        {/* Background image — scale CSS au lieu de Framer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero/b2b-hero-background.webp')",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(1.1)",
            transition: "opacity 2500ms ease-out, transform 2500ms ease-out",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

        {/* ── CONTENT ── */}
        <div className="relative z-10 flex min-h-[90svh] flex-col items-center justify-center px-6 pb-20 pt-16 text-center">
          <div className="flex max-w-xl flex-col items-center">

            {/* Badge */}
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 800ms ease-out, transform 800ms ease-out",
                transitionDelay: "350ms",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#5A0F14] shadow-[0_0_8px_rgba(90,15,20,0.8)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                {b2bHeroCopy.badge}
              </span>
            </div>

            {/* H1 */}
            <h1
              className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 800ms ease-out, transform 800ms ease-out",
                transitionDelay: "500ms",
              }}
            >
              {b2bHeroCopy.title}
            </h1>

            {/* Subtitle */}
            <p
              className="mb-10 text-[15px] leading-relaxed text-white/80 sm:text-[18px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 800ms ease-out, transform 800ms ease-out",
                transitionDelay: "650ms",
              }}
            >
              {b2bHeroCopy.subtitle}
            </p>

            {/* CTAs */}
            <div
              className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 800ms ease-out, transform 800ms ease-out",
                transitionDelay: "800ms",
              }}
            >
              <button
                onClick={() => setModalOpen(true)}
                className="group flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-white px-8 text-[14px] font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-200 sm:w-auto"
              >
                {b2bHeroCopy.ctaPrimary}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <a
                href="#capabilities"
                className="flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-[14px] font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/20 sm:w-auto"
              >
                {b2bHeroCopy.ctaSecondary}
              </a>
            </div>

            {/* Disclaimer */}
            <p
              className="mt-10 max-w-sm text-xs text-white/40"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 800ms ease-out",
                transitionDelay: "950ms",
              }}
            >
              {b2bHeroCopy.disclaimer}
            </p>

          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactChoiceModalB2B
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subject="B2B Inquiry — Nevexa"
      />
    </>
  );
}