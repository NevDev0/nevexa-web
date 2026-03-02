"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { deliveryOptionsCopy as deliveryOptionsCopyEn } from "@/content/en";
import { deliveryOptionsCopy as deliveryOptionsCopyFr } from "@/content/fr";

export default function DeliveryOptions() {
  const { language } = useLanguage();
  const deliveryOptionsCopy = language === "fr" ? deliveryOptionsCopyFr : deliveryOptionsCopyEn;
  const { label, intro, options } = deliveryOptionsCopy;

  const [inView, setInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxY = `${(scrollY - 0.5) * -12}%`;

  const mostCommonLabel = language === "fr" ? "Le plus courant" : "Most common";
  const turnkeyLabel = language === "fr" ? "Service clé en main" : "Turnkey service";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[500px] w-full overflow-hidden px-6 py-16 text-white sm:min-h-[600px]"
    >
      <div
        className="absolute inset-[-8%]"
        style={{
          backgroundImage: "url(/delivery/cargoshipdelivery.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallaxY}) scale(${inView ? 1.0 : 1.06})`,
          transition: inView
            ? "transform 2000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "none",
          willChange: "transform",
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto max-w-5xl">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {label}
          </h2>
        </div>

        <div className="mb-6 flex justify-center">
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]" />
        </div>

        {intro && (
          <p className="mx-auto mb-16 max-w-2xl text-center text-base font-semibold leading-relaxed text-neutral-300 sm:text-lg">
            {intro}
          </p>
        )}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {options.map((option) => {
            const isCommon = option.id === "port-to-port";
            return (
              <div key={option.id} className="relative text-center md:text-left">
                <div className="absolute inset-0 -m-8 rounded-2xl bg-black/20 backdrop-blur-sm" />
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center md:justify-start">
                    {isCommon ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#5A0F14] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {mostCommonLabel}
                      </span>
                    ) : (
                      <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        {turnkeyLabel}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                    {option.title}
                  </h3>
                  <p className="text-base leading-relaxed text-neutral-200 sm:text-lg">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}