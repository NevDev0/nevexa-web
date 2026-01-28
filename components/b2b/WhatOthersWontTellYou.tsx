"use client";

import { useState, useRef, useEffect } from "react";
import { whatOthersWontTellYou } from "@/content/b2b.en";

export default function WhatOthersWontTellYou() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Détecte le slide actif lors du scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const slideWidth = carousel.offsetWidth * 0.9; // 90% de la largeur (mobile)
      const newSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(newSlide);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-black px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Title + Underline */}
        <div className="mb-6 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.18em] text-neutral-200">
            {whatOthersWontTellYou.title}
          </h2>
          <div className="mx-auto mt-2 mb-4 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Intro — Brutal tagline */}
        <p className="mb-8 text-center text-base leading-relaxed text-neutral-300 sm:text-lg">
          {whatOthersWontTellYou.intro}
        </p>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="carousel-container mb-6 px-2"
        >
          {whatOthersWontTellYou.arguments.map((argument) => (
            <div
              key={argument.id}
              className="carousel-item"
            >
              <div className="h-full rounded-lg border border-white/10 bg-neutral-900 p-6">
                {/* Icon Placeholder */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 text-xs font-bold text-white">
                  {argument.iconPlaceholder}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
                  {argument.title}
                </h3>

                {/* Text (3-4 phrases) */}
                <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                  {argument.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators (Dots) */}
        <div className="flex items-center justify-center gap-2">
          {whatOthersWontTellYou.arguments.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const carousel = carouselRef.current;
                if (!carousel) return;
                const slideWidth = carousel.offsetWidth * 0.9;
                carousel.scrollTo({
                  left: slideWidth * index,
                  behavior: "smooth",
                });
              }}
              className={`h-2 rounded-full transition-all ${
                activeSlide === index
                  ? "w-8 bg-[#5A0F14]"
                  : "w-2 bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Swipe hint (mobile only) */}
        <p className="mt-4 text-center text-xs text-neutral-500 sm:hidden">
          ← Swipe to explore more →
        </p>
      </div>
    </section>
  );
}