"use client";

import { useState, useRef, useEffect } from "react";
import { faqPartnershipCopy } from "@/content/partnership.en";

export default function FAQPartnership() {
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
        <div className="mb-12 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.18em] text-neutral-200">
            {faqPartnershipCopy.title}
          </h2>
          <div className="mx-auto mt-2 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Carousel Container */}
        <div ref={carouselRef} className="carousel-container mb-6 px-2">
          {faqPartnershipCopy.questions.map((item, index) => (
            <div key={item.id} className="carousel-item">
              <div className="h-full rounded-lg border border-white/10 bg-neutral-900 p-5 sm:p-6">
                {/* Question Number Badge */}
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#5A0F14] bg-[#5A0F14]/20 text-sm font-bold text-[#5A0F14]">
                  {index + 1}
                </div>

                {/* Question */}
                <h3 className="mb-3 text-base font-semibold leading-snug text-white sm:text-lg">
                  {item.question}
                </h3>

                {/* Answer */}
                <p className="text-sm leading-relaxed text-neutral-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators (Dots) */}
        <div className="flex items-center justify-center gap-2">
          {faqPartnershipCopy.questions.map((_, index) => (
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
                activeSlide === index ? "w-8 bg-[#5A0F14]" : "w-2 bg-white/30"
              }`}
              aria-label={`Go to question ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}