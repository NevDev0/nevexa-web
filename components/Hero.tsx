"use client";

import Link from "next/link";
import { heroCopy } from "../content/en";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero/journey.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient (noir + touche rouge Nevexa) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#5A0F14]/15 to-black/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-20 text-center text-white">
        {/* Title */}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {heroCopy.title}
        </h1>

        {/* Subtitle */}
        <p className="mb-12 text-lg font-medium tracking-wide text-neutral-300 sm:text-xl">
          {heroCopy.subtitle}
        </p>

        {/* CTAs */}
        <div className="mx-auto flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center sm:gap-6">
          {/* Individuals CTA (Primary) */}
          <Link
            href="/b2c"
            className="group flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-100 sm:h-14 sm:px-10 sm:text-base"
          >
            <span>{heroCopy.ctaIndividuals}</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
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

          {/* Professionals CTA (Secondary) */}
          <Link
            href="/b2b"
            className="group flex h-12 items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:h-14 sm:px-10 sm:text-base"
          >
            <span>{heroCopy.ctaProfessionals}</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
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

      {/* Scroll Indicator (bounce animation) */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white opacity-50"
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