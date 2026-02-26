"use client";

import { useEffect, useRef, useState } from "react";
import { brandsCopy } from "@/content/en";

export default function Brands() {
  const [visible, setVisible] = useState(false);
  const [underlineWidth, setUnderlineWidth] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const loop = [...brandsCopy.logos, ...brandsCopy.logos];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setUnderlineWidth(true), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black px-6 py-6 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Titre — A cascade */}
        <div className="mb-3 text-center">
          <h2
            className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out",
              transitionDelay: "0ms",
            }}
          >
            {brandsCopy.title}
          </h2>
        </div>

        {/* Underline animée — A */}
        <div className="mb-12 flex justify-center">
          <div
            className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
            style={{
              width: underlineWidth ? "80px" : "0px",
              transition: "width 600ms ease-out",
              transitionDelay: "200ms",
            }}
          />
        </div>

        {/* Marquee — B fade-in */}
        <div
          className="relative mb-6 overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 800ms ease-out",
            transitionDelay: "400ms",
          }}
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent" />

          {/* Marquee Track */}
          <div className="nevexa-marquee-track gap-6">
            {loop.map((logo, idx) => (
              <div
                key={idx}
                className="group flex h-24 w-36 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-neutral-900 shadow-lg shadow-black/50 transition-all duration-300 hover:border-white/30 hover:bg-neutral-800 hover:shadow-xl hover:shadow-black/60"
                title={logo.name}
                aria-label={logo.name}
              >
                <div className="nevexa-brand-spotlight transition-transform duration-700 ease-in-out">
                  <div
                    style={{
                      transform: `scale(${(logo as any).scale ?? 1})`,
                      transformOrigin: "center",
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-8 max-w-[100px] object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal note */}
        <div
          className="text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 600ms ease-out",
            transitionDelay: "600ms",
          }}
        >
          <p className="text-[10px] italic tracking-wide text-neutral-600">
            {brandsCopy.legalNote}
          </p>
        </div>
      </div>
    </section>
  );
}