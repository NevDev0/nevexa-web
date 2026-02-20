"use client";

import { b2cHeroCopy } from "@/content/b2c.en";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactChoiceModal from "@/components/ContactChoiceModal";
import NavBar from "@/components/NavBar";

export default function B2CHero() {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleScrollToCatalog = () => {
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full">

      {/* ── NAVBAR — superposé, ne ronge pas le hero ── */}
      <NavBar />

      {/* SECTION 1 — Background Image Zone */}
      <section className="relative h-[35svh] w-full overflow-hidden sm:h-[40svh]">
        <Image
          src="/hero/b2c-hero2-background.jpg"
          alt="Premium automotive background"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "blur(1px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

        <div className="absolute inset-x-0 top-[10vh] z-10 flex justify-center px-6 md:top-[12vh]">
          <div
            className="absolute inset-0 -z-10 -m-8"
            style={{
              background: "radial-gradient(ellipse 80% 100% at 50% 40%, rgba(0,0,0,0.65) 0%, transparent 70%)",
            }}
          />
          <h1 className="text-center text-3xl font-bold leading-tight text-white drop-shadow-2xl sm:text-4xl md:text-5xl">
            {(["Your", "vehicle.", "No", "surprises."] as const).map((word, idx) => (
              <span
                key={word}
                className="inline-block"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${80 + idx * 150}ms, transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${80 + idx * 150}ms`,
                  marginRight: word === "vehicle." ? "0.5ch" : idx < 3 ? "0.5ch" : "0",
                }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>
      </section>

      {/* SECTION 2 — White Floor Zone */}
      <section
        className="relative h-[55svh] w-full -mt-px"
        style={{ background: "linear-gradient(to bottom, #f5f5f5, #ffffff)" }}
      >
        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center px-6">
          <div className="w-full max-w-md space-y-6 text-center">
            <div
              className="flex flex-col gap-4 w-full sm:w-auto"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(12px)",
                transition:
                  "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 600ms, transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 600ms",
              }}
            >
              <button
                type="button"
                onClick={handleScrollToCatalog}
                className="group w-full rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  {b2cHeroCopy.ctaPrimary}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button
                type="button"
                onClick={handleOpenModal}
                className="group w-full rounded-full border-2 border-black bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:bg-black hover:text-white sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  {b2cHeroCopy.ctaSecondary}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>

            <p
              className="text-xs leading-relaxed text-neutral-700"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 900ms",
              }}
            >
              {b2cHeroCopy.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* BADGE */}
      <div
        className="absolute left-1/2 top-[calc(35svh+120px)] z-30 -translate-x-1/2 pointer-events-none sm:top-[calc(40svh+160px)]"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 400ms",
        }}
      >
        <span className="inline-flex items-center whitespace-nowrap rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-700 shadow-sm pointer-events-auto">
          {b2cHeroCopy.badge}
        </span>
      </div>

      {/* VEHICLE */}
      <div
        className="absolute left-[55%] top-[35svh] z-20 w-[120%] sm:top-[40svh] sm:w-[70%] md:w-[65%] lg:w-[55%] pointer-events-none"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted
            ? "translateX(-50%) translateY(-50%)"
            : "translateX(-50%) translateY(-42%)",
          transition:
            "opacity 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms, transform 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms",
        }}
      >
        <Image
          src="/hero/b2c-hero-escalade1.png"
          alt="Premium luxury vehicle"
          width={1200}
          height={800}
          priority
          className="w-full h-auto object-contain"
          style={{ filter: "drop-shadow(0 35px 70px rgba(0,0,0,0.5))" }}
        />
      </div>

      <ContactChoiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        subject="Vehicle inquiry — Nevexa B2C"
      />
    </div>
  );
}