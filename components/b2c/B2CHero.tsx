"use client";

import { b2cHeroCopy } from "@/content/b2c.en";
import Image from "next/image";

export default function B2CHero() {
  const handleScrollToCatalog = () => {
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactAdvisor = () => {
    // TODO: Wire to contact modal or WhatsApp
    console.log("Open contact modal");
  };

  return (
    <div className="relative w-full">
      {/* SECTION 1 — Background Image Zone (30vh) */}
      <section className="relative h-[30vh] w-full overflow-hidden">
        {/* Background Image - object-center pour même crop sur tous devices */}
        <Image
          src="/hero/b2c-hero-background.jpg"
          alt="Premium automotive background"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "blur(1px)" }}
        />

        {/* Overlay gradient (comme Homepage) pour visibilité texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

        {/* Text ABOVE vehicle - BLANC avec gradient derrière */}
        <div className="absolute inset-x-0 top-[5vh] z-10 flex justify-center px-6">
          <h1 className="text-center text-xl font-bold leading-tight text-white drop-shadow-2xl sm:text-2xl">
            {b2cHeroCopy.title}
          </h1>
        </div>
      </section>

      {/* SECTION 2 — White Floor Zone (55vh) */}
      <section className="relative h-[55vh] w-full bg-white">
        {/* CTAs and content BELOW badge (badge is now separate) */}
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center px-6">
          <div className="w-full max-w-md space-y-14 text-center">
            {/* CTAs */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={handleScrollToCatalog}
                className="group w-full rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  {b2cHeroCopy.ctaPrimary}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </span>
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={handleContactAdvisor}
                className="group w-full rounded-full border-2 border-black bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:bg-black hover:text-white sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  {b2cHeroCopy.ctaSecondary}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </span>
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs leading-relaxed text-neutral-700">
              {b2cHeroCopy.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* BADGE — OUTSIDE section flow, positioned absolutely with FIXED spacing */}
      <div className="absolute left-1/2 top-[calc(30vh+120px)] z-30 -translate-x-1/2 pointer-events-none">
        <span className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-700 shadow-sm pointer-events-auto">
          {b2cHeroCopy.badge}
        </span>
      </div>

      {/* VEHICLE — Positioned ON white floor (in white section) */}
      <div className="absolute left-[55%] top-[30vh] z-20 w-[120%] -translate-x-1/2 -translate-y-1/2 sm:w-[70%] md:w-[65%] lg:w-[55%] pointer-events-none">
        <Image
          src="/hero/b2c-hero-escalade1.png"
          alt="Premium luxury vehicle"
          width={1200}
          height={800}
          priority
          className="w-full h-auto object-contain"
          style={{
            filter: "drop-shadow(0 35px 70px rgba(0,0,0,0.5))",
          }}
        />
      </div>
    </div>
  );
}