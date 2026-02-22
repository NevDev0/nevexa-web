"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { heroCopy } from "../content/en";
import NavBar from "@/components/NavBar";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const t = setTimeout(() => setMounted(true), 300);
      return () => clearTimeout(t);
    });
    
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative flex min-h-[90svh] w-full items-center justify-center overflow-hidden bg-black">
      {/* ── NAVBAR ── */}
      <NavBar />

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        // @ts-expect-error fetchPriority not yet in React video types
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[35%_center] md:scale-[1.10] md:object-center"
        style={{ transformOrigin: "center center" }}
      >
        <source src="/hero/journey-optimized.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient - Top dark (avion zone) */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/95 via-black/60 to-transparent md:from-black/80 md:via-black/40" />

      {/* Overlay Gradient - Bottom dark (texte/CTAs zone) */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/50 to-transparent md:from-black/85 md:via-black/40" />

      {/* Subtle red glow global */}
      <div className="absolute inset-0 bg-[#5A0F14]/5" />

      {/* ========== MOBILE LAYOUT ========== */}
      {/* Titre en HAUT (zone avion sombre) */}
      <div className="absolute top-16 inset-x-0 z-10 px-6 text-center md:hidden">
        {/* A — Cascade: Title */}
        <h1
          className="mb-3 text-4xl font-bold leading-tight tracking-tight text-white transition-all duration-[600ms] ease-out"
          style={{
            textShadow:
              "0 0 40px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.95)",
            WebkitTextStroke: "0.5px rgba(255,255,255,0.08)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "400ms",
          }}
        >
          {heroCopy.title}
        </h1>

        {/* A — Cascade: Subtitle with B — word-by-word reveal */}
        <div
          className="flex flex-wrap justify-center gap-x-1 transition-all duration-[600ms] ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "1400ms",
          }}
        >
          {["Sourcing.", "Inspection.", "Delivery."].map((word, i) => (
            <span
              key={word}
              className="text-base font-medium tracking-wide text-neutral-200 transition-all duration-500 ease-out"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                opacity: mounted ? 1 : 0,
                transitionDelay: `${200 + i * 120}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* CTAs en BAS */}
      <div className="absolute bottom-20 inset-x-0 z-10 px-6 md:hidden">
        <div className="flex flex-col gap-3">
          {/* A — Cascade: CTA Individuals */}
          <Link
            href="/b2c"
            className="group flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-100"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition:
                "opacity 600ms ease-out, transform 600ms ease-out, background-color 300ms, scale 300ms",
              transitionDelay: "1800ms",
            }}
          >
            <span>{heroCopy.ctaIndividuals}</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </Link>

          {/* A — Cascade: CTA Professionals — backdrop-blur sur le Link directement */}
          <Link
            href="/b2b"
            className="group flex h-12 items-center justify-center rounded-full border-2 border-white bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/15"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition:
                "opacity 600ms ease-out, transform 600ms ease-out, background-color 300ms, scale 300ms",
              transitionDelay: "2200ms",
            }}
          >
            <span>{heroCopy.ctaProfessionals}</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </Link>
        </div>

        {/* C — Scroll indicator mobile */}
        <div
          className="mt-6 flex justify-center"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 600ms ease-out",
            transitionDelay: "4000ms",
          }}
        >
          <div className="animate-bounce">
            <svg
              className="h-5 w-5 text-white opacity-40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP LAYOUT ========== */}
      <div className="relative z-10 mx-auto hidden w-full max-w-4xl px-6 py-20 text-center text-white md:block">

        {/* Title */}
        <h1
          className="mb-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl"
          style={{
            textShadow:
              "0 0 60px rgba(0,0,0,0.8), 0 0 100px rgba(0,0,0,0.6), 0 6px 20px rgba(0,0,0,0.9)",
            WebkitTextStroke: "0.5px rgba(255,255,255,0.1)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 600ms ease-out, transform 600ms ease-out",
            transitionDelay: "400ms",
          }}
        >
          {heroCopy.title}
        </h1>

        {/* Subtitle — mot par mot */}
        <div
          className="mb-12 flex flex-wrap justify-center gap-x-2"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 600ms ease-out, transform 600ms ease-out",
            transitionDelay: "1000ms",
          }}
        >
          {["Sourcing.", "Inspection.", "Delivery."].map((word, i) => (
            <span
              key={word}
              className="text-xl font-medium tracking-wide text-neutral-300 transition-all duration-500 ease-out"
              style={{
                textShadow: "0 2px 16px rgba(0,0,0,0.8)",
                opacity: mounted ? 1 : 0,
                transitionDelay: `${200 + i * 130}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-row justify-center gap-6">
          {/* CTA Individuals */}
          <Link
            href="/b2c"
            className="group flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-100"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out, background-color 300ms, scale 300ms",
              transitionDelay: "1800ms",
            }}
          >
            <span>{heroCopy.ctaIndividuals}</span>
            <svg
              className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
          </Link>

          {/* CTA Professionals — backdrop-blur sur le Link directement */}
          <Link
            href="/b2b"
            className="group flex h-14 items-center justify-center rounded-full border-2 border-white bg-white/5 px-10 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/15"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out, background-color 300ms, scale 300ms",
              transitionDelay: "2200ms",
            }}
          >
            <span>{heroCopy.ctaProfessionals}</span>
            <svg
              className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
          </Link>
        </div>
      </div>

      {/* Scroll Indicator (desktop only) */}
      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce md:block"
        style={{
          opacity: mounted ? 0.5 : 0,
          transition: "opacity 600ms ease-out",
          transitionDelay: "4400ms",
        }}
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}