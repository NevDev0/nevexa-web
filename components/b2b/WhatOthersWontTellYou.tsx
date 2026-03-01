"use client";

import { useEffect, useRef, useState } from "react";
import { whatOthersWontTellYou } from "@/content/b2b.en";

export default function WhatOthersWontTellYou() {
  const [visible, setVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(whatOthersWontTellYou.dossierItems.length).fill(false)
  );
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Observer header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer individuel par item (même pattern que ValueProposition mobile)
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 100);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "-100px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0E0F11] px-6 pb-30 pt-16 sm:pb-30 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,15,20,0.03)_0%,transparent_80%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ── HEADER ── */}
        <div
          className="mb-20 text-center sm:mb-32"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 800ms ease-out, transform 800ms ease-out",
          }}
        >
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.15em] text-white sm:text-3xl">
            {whatOthersWontTellYou.title}
          </h2>
          <div
            className="mx-auto mb-6 h-px bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
            style={{
              width: visible ? "96px" : "0px",
              transition: "width 600ms ease-out",
              transitionDelay: "200ms",
            }}
          />
          <p className="text-[16px] font-medium tracking-wide text-white/60 sm:text-[18px]">
            {whatOthersWontTellYou.subtitle}
          </p>
        </div>

        {/* ── TIMELINE ── */}
        <div className="relative flex flex-col gap-24 sm:gap-32">
          {/* Ligne verticale centrale desktop */}
          <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-white/5 sm:left-1/2 sm:block sm:-translate-x-1/2" />

          {whatOthersWontTellYou.dossierItems.map((item, index) => {
            const isVisible = visibleItems[index];
            return (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el; }}
                className="relative"
              >
                {/* Numéro filigrane */}
                <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 text-[150px] font-black leading-none tracking-tighter text-white/[0.02] sm:-top-20 sm:text-[250px]">
                  {item.num}
                </div>

                {/* Titre du point */}
                <div
                  className="relative z-10 mb-12 text-center sm:mb-16"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 800ms ease-out, transform 800ms ease-out",
                  }}
                >
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A0F14]">
                    Case File {item.num}
                  </span>
                  <h3 className="text-xl font-bold tracking-wide text-white sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                {/* Split Problème / Solution */}
                <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-24">

                  {/* Point rouge + ligne verticale */}
                  <div className="absolute left-[-24px] top-0 flex h-full flex-col items-center sm:left-1/2 sm:-translate-x-1/2">
                    <div
                      className="h-3 w-3 rounded-full bg-[#5A0F14] shadow-[0_0_15px_rgba(90,15,20,0.8)] ring-4 ring-[#0E0F11]"
                      style={{
                        transform: isVisible ? "scale(1)" : "scale(0)",
                        transition: "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                      }}
                    />
                    <div
                      className="w-[2px] bg-gradient-to-b from-[#5A0F14] to-transparent"
                      style={{
                        height: isVisible ? "100%" : "0%",
                        transition: "height 1000ms ease-in-out",
                        transitionDelay: "200ms",
                      }}
                    />
                  </div>

                  {/* GAUCHE : Industry Norm */}
                  <div
                    className="relative pl-6 sm:pl-0 sm:pr-8 sm:text-right"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-30px)",
                      filter: isVisible ? "blur(0px)" : "blur(4px)",
                      transition: "opacity 800ms ease-out, transform 800ms ease-out, filter 800ms ease-out",
                      transitionDelay: "150ms",
                    }}
                  >
                    <div className="mb-4 flex items-center gap-3 sm:justify-end">
                      <span className="h-px w-6 bg-white/20 sm:order-2" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 sm:order-1">
                        The Industry Norm
                      </span>
                    </div>
                    <p className="text-[14px] leading-relaxed text-white/50 sm:text-[15px]">
                      {item.problem}
                    </p>
                  </div>

                  {/* DROITE : Nevexa Standard */}
                  <div
                    className="relative pl-6 sm:pl-8 sm:pt-16"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(30px)",
                      filter: isVisible ? "blur(0px)" : "blur(4px)",
                      transition: "opacity 800ms ease-out, transform 800ms ease-out, filter 800ms ease-out",
                      transitionDelay: "300ms",
                    }}
                  >
                    <div className="absolute -inset-4 z-0 rounded-2xl bg-[radial-gradient(ellipse_at_left,rgba(90,15,20,0.15)_0%,transparent_70%)] opacity-0 transition-opacity duration-1000 hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A0F14]">
                          Nevexa Standard
                        </span>
                        <span className="h-px w-6 bg-[#5A0F14]/50" />
                      </div>
                      <p className="text-[14px] font-medium leading-relaxed text-white/95 sm:text-[15px]">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient de transition — ne pas supprimer */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent via-[#0E0F11]/60 to-[#F3EFEA] sm:h-[50px]" />
    </section>
  );
}