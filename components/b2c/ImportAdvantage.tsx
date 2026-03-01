"use client";

import { useRef, useEffect, useState } from "react";
import { importAdvantageCopy } from "@/content/b2c.en";

// --- Compteur animé sans Framer ---
function AnimatedNumber({ from, to, visible }: { from: number; to: number; visible: boolean }) {
  const [current, setCurrent] = useState(from);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!visible || from === to) return;

    const startTime = performance.now();
    const duration = 1500;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(from + (to - from) * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visible, from, to]);

  return <span>{current}</span>;
}

export default function ImportAdvantage() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
      className="relative w-full overflow-hidden bg-black px-6 py-20 text-white sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,15,20,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* ── HEADER ── */}
        <div className="mb-12 text-center">
          <h2
            className="mb-4 text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 800ms ease-out, transform 800ms ease-out",
            }}
          >
            {importAdvantageCopy.title}
          </h2>
          <div
            className="mx-auto h-px bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
            style={{
              width: visible ? "128px" : "0px",
              transition: "width 1000ms ease-out",
              transitionDelay: "300ms",
            }}
          />
        </div>

        {/* ── STATS LIST ── */}
        <div className="flex flex-col gap-2">
          {importAdvantageCopy.stats.map((stat, i) => (
            <div
              key={stat.id}
              className="group relative border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 800ms ease-out, transform 800ms ease-out",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Corner accent */}
              <div
                className="pointer-events-none absolute left-0 top-0 border-l-2 border-t-2 border-[#5A0F14]"
                style={{
                  opacity: visible ? 1 : 0,
                  height: visible ? "16px" : "0px",
                  width: visible ? "16px" : "0px",
                  transition: "opacity 300ms ease-out, height 300ms ease-out, width 300ms ease-out",
                  transitionDelay: `${i * 150 + 500}ms`,
                }}
              />

              <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-12">

                {/* Chiffre animé */}
                <div className="flex items-baseline justify-center sm:justify-start">
                  {stat.prefix && (
                    <span className="text-2xl font-light text-white/50">{stat.prefix}</span>
                  )}
                  <span className="text-5xl font-light tracking-tight tabular-nums sm:text-6xl">
                    <AnimatedNumber from={stat.numberFrom} to={stat.number} visible={visible} />
                  </span>
                  {stat.suffix && (
                    <span className="ml-2 text-xl font-bold text-[#5A0F14] sm:text-2xl">{stat.suffix}</span>
                  )}
                </div>

                {/* Dots séparateurs — CSS animation */}
                <div className="hidden flex-col items-center gap-2 sm:flex">
                  {[0, 1, 2].map((j) => (
                    <div
                      key={j}
                      className="ia-dot h-1.5 w-1.5 rounded-full bg-[#5A0F14]"
                      style={{ animationDelay: `${j * 0.4}s` }}
                    />
                  ))}
                </div>

                {/* Label */}
                <div className="text-center sm:text-right">
                  <p className="text-[15px] font-bold tracking-wide text-white">
                    {stat.label}
                  </p>
                  <div className="mt-2 text-[13px] leading-relaxed text-white/50">
                    {stat.sublabel.split("\n").map((line, idx) => (
                      <span key={idx} className="block">{line}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Barre de progression */}
              <div className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-white/5">
                <div
                  className="h-full bg-gradient-to-r from-[#5A0F14] to-red-600"
                  style={{
                    width: visible ? stat.barWidth : "0%",
                    transition: "width 1500ms ease-out",
                    transitionDelay: `${i * 200 + 500}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── FOOTER NOTE ── */}
        <div
          className="mt-16 flex flex-col items-center justify-between gap-6 sm:flex-row"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1000ms ease-out",
            transitionDelay: "1000ms",
          }}
        >
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-left">
            {importAdvantageCopy.disclaimer}
          </p>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <div className="ia-pulse h-2 w-2 rounded-full bg-[#5A0F14] shadow-[0_0_8px_rgba(90,15,20,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
              {importAdvantageCopy.badge}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}