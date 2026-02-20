"use client";

import { useEffect, useRef, useState } from "react";
import { realityCopy } from "@/content/about.en";

export default function TheReality() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const t = setTimeout(() => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    }, 100);

    return () => { clearTimeout(t); observer.disconnect(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[50svh] w-full items-center justify-center overflow-hidden bg-black px-6 py-20 sm:min-h-[55svh] sm:py-24"
    >

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Top separator */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">

        {/*
          Signature animation TheReality : fade opacity seul (pas de translate)
          Contraste avec Manifesto (translateX) et Hero (translateY)
          Un seul highlight — "hidden damage" uniquement. Règle : rareté = valeur.
        */}

        {/* Paragraph 1 */}
        <p
          className="mb-8 text-[18px] leading-[1.9] text-white/75 sm:mb-10 sm:text-[26px] sm:leading-[1.7]"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "0ms",
          }}
        >
          Every year, thousands of West African buyers pay premium prices for vehicles with{" "}
          <span
            style={{
              background: visible ? "rgba(90,15,20,0.4)" : "transparent",
              padding: visible ? "2px 8px" : "0",
              borderRadius: "6px",
              transition: "background 700ms ease, padding 700ms ease",
              transitionDelay: "600ms",
            }}
          >
            hidden damage
          </span>
          . The resale system profits from information asymmetry.
        </p>

        {/* Paragraph 2 — delayed, bolder */}
        <p
          className="text-[18px] font-semibold leading-[1.9] text-white sm:text-[26px] sm:leading-[1.7]"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "500ms",
          }}
        >
          Nevexa was built to eliminate that abuse entirely.
        </p>

      </div>

      {/* Bottom separator */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />

    </section>
  );
}