"use client";

import { useEffect, useState } from "react";
import { b2bHeroCopy } from "@/content/b2b.en";
import ContactChoiceModalB2B from "@/components/b2b/ContactChoiceModalB2B";

export default function HeroB2B() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const baseTransition =
    "transition-all duration-700 cubic-bezier(0.25, 0.46, 0.45, 0.94)";

  return (
    <>
      <section className="relative w-full overflow-hidden min-h-[85svh]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero/b2b-hero-background.jpg')",
            transition: "transform 2000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: visible
              ? typeof window !== "undefined" && window.matchMedia("(min-width: 640px)").matches
                ? "scale(1)"
                : "scale(1.5)"
              : "scale(1.03)",
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[90svh] flex-col items-center justify-center px-6 pb-20 pt-12 text-center">
          <div className="max-w-lg">

            {/* Badge */}
            <div
              className={`${baseTransition} mb-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-4 py-1.5 backdrop-blur-sm`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "0ms",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#5A0F14]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                {b2bHeroCopy.badge}
              </span>
            </div>

            {/* H1 */}
            <h1
              className={`${baseTransition} mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "120ms",
              }}
            >
              {b2bHeroCopy.title}
            </h1>

            {/* Subtitle */}
            <p
              className={`${baseTransition} mb-10 text-sm leading-relaxed text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.8)] sm:text-base`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "300ms",
              }}
            >
              {b2bHeroCopy.subtitle}
            </p>

            {/* CTAs */}
            <div
              className={`${baseTransition} flex flex-col items-center gap-3 sm:flex-row sm:justify-center`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "400ms",
              }}
            >
              {/* Primary CTA — opens modal */}
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-white/90 px-8 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-neutral-100 sm:w-auto"
              >
                {b2bHeroCopy.ctaPrimary}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              {/* Secondary CTA — scrolls to capabilities */}
              <a
                href="#capabilities"
                className="inline-flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full border border-white/70 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/20 sm:w-auto"
              >
                {b2bHeroCopy.ctaSecondary}
              </a>
            </div>

            {/* Disclaimer */}
            <p
              className={`${baseTransition} mt-8 text-xs text-neutral-400`}
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: "520ms",
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