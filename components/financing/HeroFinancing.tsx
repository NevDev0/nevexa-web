"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { financingHeroCopy } from "@/content/financing.en";
import NavBar from "@/components/NavBar";

export default function HeroFinancing() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("waitlist");
    if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[90svh] w-full flex-col items-center justify-start overflow-hidden bg-[#0A0A0A] pb-12 pt-20">
      {/* ── NAVBAR ── */}
      <NavBar />

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        {/* Image de fond */}
        <Image
          src="/hero/financing-bg.webp"
          alt="Luxury vehicle financing silhouette"
          fill
          className="object-cover object-center opacity-100 mix-blend-luminosity"
          priority
        />

        {/* Grille fintech */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        {/* Dégradés */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />

        {/* Lueur rouge — fade in CSS */}
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A0F14]/5 blur-[120px]"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1500ms ease-out",
          }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 mx-auto mt-12 flex w-full max-w-5xl flex-col items-center px-6 text-center sm:mt-18">

        {/* Badges */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 800ms ease-out, transform 800ms ease-out",
            transitionDelay: "0ms",
          }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
            {financingHeroCopy.badges.earlyAccess}
          </span>
          <span className="flex items-center gap-2 rounded-full border border-[#5A0F14]/50 bg-[#5A0F14]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff4d4d] shadow-[0_0_20px_rgba(90,15,20,0.3)] backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>
            {financingHeroCopy.badges.comingSoon}
          </span>
        </div>

        {/* Title */}
        <h1
          className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 800ms ease-out, transform 800ms ease-out",
            transitionDelay: "200ms",
          }}
        >
          Vehicle Financing <br />
          <span className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent">
            Reimagined.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-10 max-w-2xl text-[16px] leading-relaxed text-neutral-400 sm:text-[18px] md:text-[20px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 800ms ease-out, transform 800ms ease-out",
            transitionDelay: "400ms",
          }}
        >
          {financingHeroCopy.subtitle}
        </p>

        {/* CTA */}
        <div
          className="mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 800ms ease-out, transform 800ms ease-out",
            transitionDelay: "600ms",
          }}
        >
          <button
            onClick={scrollToForm}
            className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-10 text-[13px] font-bold uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Join Priority Waitlist</span>
            <div className="absolute inset-0 bg-neutral-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>

        {/* Clarification box */}
        <div
          className="max-w-xl rounded-lg border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.95)",
            transition: "opacity 800ms ease-out, transform 800ms ease-out",
            transitionDelay: "800ms",
          }}
        >
          <p className="text-[11px] leading-relaxed tracking-wide text-neutral-500">
            <span className="mr-2 font-bold uppercase text-[#5A0F14]">Notice</span>
            {financingHeroCopy.clarification}
          </p>
        </div>

        {/* Scroll indicator desktop */}
        <div
          className="absolute -bottom-22 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-6 md:flex"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1000ms ease-out",
            transitionDelay: "1500ms",
          }}
        >
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">Scroll to explore</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-white/20 to-transparent">
            <div className="hf-scan h-1/2 w-full bg-white/60" />
          </div>
        </div>

      </div>
    </section>
  );
}