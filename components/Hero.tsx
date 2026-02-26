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
      // Play immediately, ignore the promise rejection if it fails initially
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
        poster="/hero/hero-poster.webp"
        // @ts-expect-error fetchPriority not yet in React video types
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
        // Force hardware acceleration for the video layer
        style={{ transformOrigin: "center center", transform: "translateZ(0)" }}
      >
        <source src="/hero/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient - Top dark */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/95 via-black/60 to-transparent md:from-black/80 md:via-black/40" />

      {/* Overlay Gradient - Bottom dark */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/50 to-transparent md:from-black/85 md:via-black/40" />

      {/* Subtle red glow global */}
      <div className="absolute inset-0 bg-[#5A0F14]/5 pointer-events-none" />

      {/* ========== MOBILE LAYOUT ========== */}
      <div className="absolute top-26 inset-x-0 z-10 px-6 text-center md:hidden">
        <h1
          // Removed tracking-tight to improve legibility if stroke is removed
          className="mb-8 text-4xl font-bold leading-tight text-white transition-all duration-[600ms] ease-out"
          style={{
            // OPTIMIZATION: Reduced to a single, efficient drop-shadow for contrast
            textShadow: "0px 4px 12px rgba(0,0,0,0.8)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "400ms",
            // Will-change hints the browser to prepare for animation, preventing lag
            willChange: "transform, opacity",
          }}
        >
          {heroCopy.title}
        </h1>

        <div
          className="flex flex-wrap justify-center gap-x-1 transition-all duration-[600ms] ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "1400ms",
            willChange: "transform, opacity",
          }}
        >
          {["Sourcing.", "Inspection.", "Delivery."].map((word, i) => (
            <span
              key={word}
              className="text-base font-medium tracking-wide text-neutral-200 transition-all duration-500 ease-out"
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                opacity: mounted ? 1 : 0,
                transitionDelay: `${200 + i * 120}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 inset-x-0 z-10 px-6 md:hidden">
        <div className="flex flex-col gap-3">
          <Link
            href="/b2c"
            className="group flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-neutral-100 shadow-lg shadow-black/20"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out, background-color 300ms, scale 300ms",
              transitionDelay: "1800ms",
              willChange: "transform, opacity",
            }}
          >
            <span>{heroCopy.ctaIndividuals}</span>
            <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            href="/b2b"
            // OPTIMIZATION: Removed backdrop-blur-sm, it's very expensive over video
            className="group flex h-12 items-center justify-center rounded-full border border-white/50 bg-black/40 px-8 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/10"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out, background-color 300ms, scale 300ms",
              transitionDelay: "2200ms",
              willChange: "transform, opacity",
            }}
          >
            <span>{heroCopy.ctaProfessionals}</span>
            <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div
          className="mt-12 flex justify-center pointer-events-none"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 600ms ease-out",
            transitionDelay: "4000ms",
          }}
        >
          <div className="animate-bounce">
            <svg className="h-5 w-5 text-white opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP LAYOUT ========== */}
      <div className="relative z-10 mx-auto hidden w-full max-w-4xl px-6 py-20 text-center text-white md:block">
        <h1
          className="mb-6 text-5xl font-bold leading-tight lg:text-6xl transition-all duration-[600ms] ease-out"
          style={{
            // OPTIMIZATION: Simplified shadow for desktop
            textShadow: "0px 6px 16px rgba(0,0,0,0.8)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(28px)",
            transitionDelay: "400ms",
            willChange: "transform, opacity",
          }}
        >
          {heroCopy.title}
        </h1>

        <div
          className="mb-12 flex flex-wrap justify-center gap-x-2"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 600ms ease-out, transform 600ms ease-out",
            transitionDelay: "1000ms",
            willChange: "transform, opacity",
          }}
        >
          {["Sourcing.", "Inspection.", "Delivery."].map((word, i) => (
            <span
              key={word}
              className="text-xl font-medium tracking-wide text-neutral-300 transition-all duration-500 ease-out"
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                opacity: mounted ? 1 : 0,
                transitionDelay: `${200 + i * 130}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="flex flex-row justify-center gap-6">
          <Link
            href="/b2c"
            className="group flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-neutral-100 shadow-xl shadow-black/20"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out, background-color 300ms, scale 300ms",
              transitionDelay: "1800ms",
              willChange: "transform, opacity",
            }}
          >
            <span>{heroCopy.ctaIndividuals}</span>
            <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            href="/b2b"
             // OPTIMIZATION: Removed backdrop-blur-sm
            className="group flex h-14 items-center justify-center rounded-full border border-white/50 bg-black/40 px-10 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/10"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out, background-color 300ms, scale 300ms",
              transitionDelay: "2200ms",
              willChange: "transform, opacity",
            }}
          >
            <span>{heroCopy.ctaProfessionals}</span>
            <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator desktop */}
      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce pointer-events-none md:block"
        style={{
          opacity: mounted ? 0.5 : 0,
          transition: "opacity 600ms ease-out",
          transitionDelay: "4400ms",
        }}
      >
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}