"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { geographicAvailabilityCopy } from "@/content/financing.en";

export default function GeographicAvailability() {
  const [visible, setVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(geographicAvailabilityCopy.timeline.length).fill(false)
  );
  const [visibleCountries, setVisibleCountries] = useState<boolean[]>(
    new Array(geographicAvailabilityCopy.countries.length).fill(false)
  );
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          geographicAvailabilityCopy.countries.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCountries((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 1000 + i * 1000);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    timelineRefs.current.forEach((el, i) => {
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
            }, i * 200);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "-50px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black py-20 sm:py-32"
    >
      {/* ── BACKGROUND ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,1)_90%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ── HEADER ── */}
        <div className="mb-2 text-center lg:mb-12">
          <h2
            className="mb-6 text-3xl font-bold uppercase tracking-[0.2em] text-white md:text-5xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {geographicAvailabilityCopy.title}
          </h2>
          <div
            className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-[#8A1F24] to-transparent shadow-[0_0_20px_#8A1F24]"
            style={{
              width: visible ? "100px" : "0px",
              transition: "width 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transitionDelay: "200ms",
            }}
          />
          <p
            className="mx-auto max-w-2xl text-lg font-light text-neutral-400"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 800ms ease-out",
              transitionDelay: "300ms",
            }}
          >
            {geographicAvailabilityCopy.subtitle}
          </p>
        </div>

        {/* ── CONTENT GRID ── */}
        <div className="flex flex-col items-start gap-16 lg:grid lg:grid-cols-12">

          {/* ── MAP ── */}
          <div
            className="relative flex h-[400px] w-full items-center justify-center sm:h-[500px] lg:col-span-7 lg:h-[600px]"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 1000ms ease-out",
              transitionDelay: "200ms",
            }}
          >
            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8A1F24] opacity-20 blur-[100px]" />

            <div className="relative h-full w-full">
              <Image
                src="/images/africa-map.png"
                alt="Africa Map Coverage"
                fill
                className="object-contain opacity-30 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                priority
              />

              {geographicAvailabilityCopy.countries.map((country, index) => {
                const isNigeria = country.id === "nigeria";
                const isVisible = visibleCountries[index];

                return (
                  <div
                    key={country.id}
                    className="absolute left-[var(--x-mob)] top-[var(--y-mob)] md:left-[var(--x-desk)] md:top-[var(--y-desk)]"
                    style={{
                      "--x-mob": country.x.mobile,
                      "--y-mob": country.y.mobile,
                      "--x-desk": country.x.desktop,
                      "--y-desk": country.y.desktop,
                      transform: isVisible
                        ? "scale(1) translate(-50%, -50%)"
                        : "scale(0) translate(-50%, -50%)",
                      transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    } as React.CSSProperties}
                  >
                    <div className="relative flex items-center justify-center">
                      {isNigeria && (
                        <div className="nigeria-ring-pulse absolute h-20 w-20 rounded-full border border-[#8A1F24]/30 bg-[#8A1F24]/10" />
                      )}

                      <div
                        className={`relative z-10 rounded-full border border-white/20 shadow-[0_0_15px_#8A1F24] ${
                          isNigeria ? "h-4 w-4 bg-[#8A1F24]" : "h-2 w-2 bg-neutral-500"
                        }`}
                      />

                      {/* Label — position vient directement du content via labelClass */}
                      <div
                        className={`absolute z-20 min-w-[100px] ${country.labelClass}`}
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                          transition: "opacity 500ms ease-out, transform 500ms ease-out",
                          transitionDelay: "200ms",
                        }}
                      >
                        {/* Mobile */}
                        <div className="flex items-center gap-2 whitespace-nowrap rounded border border-white/20 bg-black/80 px-2 py-1 shadow-lg backdrop-blur-md md:hidden">
                          <span className="text-[10px] font-bold uppercase tracking-wide text-white">
                            {country.name}
                          </span>
                          <span className="font-mono text-[10px] text-[#FF5A5A]">
                            {country.year}
                          </span>
                        </div>

                        {/* Desktop */}
                        <div className="hidden rounded-sm border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md md:block">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8A1F24]" />
                            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">Target</span>
                          </div>
                          <div className="mb-1 text-sm font-bold uppercase leading-none tracking-wide text-white">
                            {country.name}
                          </div>
                          <div className="font-mono text-[10px] text-[#FF5A5A]">
                            Deploy: {country.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── TIMELINE ── */}
          <div className="-mt-20 relative pl-4 sm:mt-5 lg:col-span-5 lg:pl-0">
            <div className="absolute bottom-0 left-[19px] top-4 w-[2px] bg-gradient-to-b from-[#8A1F24] via-[#8A1F24]/20 to-transparent opacity-50" />

            <div className="space-y-12">
              {geographicAvailabilityCopy.timeline.map((item, index) => {
                const isFirst = index === 0;
                const isVisible = visibleItems[index];

                return (
                  <div
                    key={index}
                    ref={(el) => { timelineRefs.current[index] = el; }}
                    className="relative pl-12"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(20px)",
                      transition: "opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    <div className={`absolute left-[11px] top-1.5 z-10 flex h-[18px] w-[18px] -translate-x-1/2 items-center justify-center rounded-full border border-[#8A1F24]/50 bg-black ${isFirst ? "shadow-[0_0_15px_#8A1F24]" : ""}`}>
                      <div className={`rounded-full transition-all duration-500 ${isFirst ? "h-2 w-2 bg-[#8A1F24]" : "h-1.5 w-1.5 bg-neutral-800"}`} />
                    </div>

                    <div className="flex flex-col">
                      <span className={`mb-2 text-4xl font-bold tracking-tighter ${isFirst ? "text-white" : "text-neutral-600"}`}>
                        {item.year}
                      </span>
                      <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#FF5A5A]">
                        {item.badge}
                      </span>
                      <h3 className="mb-1 text-lg font-medium text-white">{item.title}</h3>
                      <p className="max-w-sm text-sm leading-relaxed text-neutral-400">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div
              className="mt-12 pl-12"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 800ms ease-out",
                transitionDelay: "800ms",
              }}
            >
              <p className="mb-6 border-l-2 border-white/10 py-1 pl-4 text-sm text-neutral-300">
                {geographicAvailabilityCopy.cta.text}
              </p>
              <button
                onClick={scrollToWaitlist}
                className="cta-button group relative flex items-center gap-4 overflow-hidden bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-[#701015] hover:text-white"
              >
                <div className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:ga-shimmer" />
                <span className="relative z-10">Join Waitlist</span>
                <svg className="relative z-10 h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}