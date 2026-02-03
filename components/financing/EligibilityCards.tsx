"use client";

import { useState, useRef, useEffect } from "react";
import { eligibilityCardsCopy } from "@/content/financing.en";

export default function EligibilityCards() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Détecte le slide actif lors du scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const slideWidth = carousel.offsetWidth * 0.85 + 16; // 85% width + gap
      const newSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(newSlide);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation par flèches
  const scrollToSlide = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const slideWidth = carousel.offsetWidth * 0.85 + 16;
    carousel.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    if (activeSlide > 0) {
      scrollToSlide(activeSlide - 1);
    }
  };

  const goToNext = () => {
    if (activeSlide < eligibilityCardsCopy.cards.length - 1) {
      scrollToSlide(activeSlide + 1);
    }
  };

  return (
    <section className="w-full bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-300">
            {eligibilityCardsCopy.title}
          </h2>
        </div>

        {/* Underline accent rouge */}
        <div className="mb-6 flex flex-col items-center">
          <div className="mx-auto -mt-1 mb-6 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Carousel Container avec peek des deux côtés */}
        <div className="relative">
          {/* Flèches navigation (desktop uniquement) */}
          <button
            onClick={goToPrevious}
            disabled={activeSlide === 0}
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-12 -translate-y-1/2 rounded-full border border-white/20 bg-black/80 p-3 backdrop-blur-sm transition-all hover:border-white/40 disabled:opacity-30 md:block"
            aria-label="Previous slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M13 4L7 10L13 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={activeSlide === eligibilityCardsCopy.cards.length - 1}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-12 rounded-full border border-white/20 bg-black/80 p-3 backdrop-blur-sm transition-all hover:border-white/40 disabled:opacity-30 md:block"
            aria-label="Next slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M7 4L13 10L7 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Carousel scrollable */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {eligibilityCardsCopy.cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0"
                style={{
                  width: "85%",
                  scrollSnapAlign: "start",
                }}
              >
                <div className="h-full overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-[#5A0F14]/5 via-transparent to-transparent p-6 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
                  {/* Grandes initiales stylisées */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center rounded border border-white/20 bg-black/30 px-4 py-2">
                      <span className="text-3xl font-bold tracking-tight text-white">
                        {card.initials}
                      </span>
                    </div>
                  </div>

                  {/* Label + Subtitle */}
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {card.label}
                  </h3>
                  {card.subtitle && (
                    <p className="mb-4 text-sm text-neutral-400">{card.subtitle}</p>
                  )}

                  {/* Designed for */}
                  <div className="mb-4">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Designed for:
                    </h4>
                    <ul className="space-y-1.5">
                      {card.designedFor.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm leading-relaxed text-neutral-400"
                        >
                          <span className="-mt-0.5 text-[#5A0F14]">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical profile */}
                  <div className="mb-0">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Typical profile:
                    </h4>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      {card.typicalProfile}
                    </p>
                  </div>

                  {/* Note optionnelle */}
                  {card.note && (
                    <div className="mt-4 rounded border border-white/5 bg-black/20 p-3">
                      <p className="text-xs italic leading-relaxed text-neutral-500">
                        Note: {card.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators (Dots ronds) */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {eligibilityCardsCopy.cards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                activeSlide === index
                  ? "bg-[#5A0F14] scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Swipe hint (mobile only) */}
        <p className="mt-4 text-center text-xs text-neutral-500 md:hidden">
          ← Swipe to explore →
        </p>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}