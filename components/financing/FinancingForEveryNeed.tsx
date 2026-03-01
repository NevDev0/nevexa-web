"use client";

import { useEffect, useRef, useState } from "react";
import { financingProfilesCopy } from "@/content/financing.en";

export default function FinancingForEveryNeed() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0E0F11] py-20 sm:py-32"
    >
      {/* ── BACKGROUND FX ── */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {/* Particles background — CSS only */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="ffen-particle absolute h-1 w-1 rounded-full bg-[#5A0F14]/30 blur-[1px]"
              style={{
                left: `${(i * 13) % 100}%`,
                top: `${(i * 23) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + (i % 5)}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ── HEADER ── */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] text-white sm:text-3xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 800ms ease-out, transform 800ms ease-out",
            }}
          >
            {financingProfilesCopy.title}
          </h2>
          <div
            className="mx-auto mb-6 h-0.5 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_10px_rgba(90,15,20,0.5)]"
            style={{
              width: visible ? "80px" : "0px",
              transition: "width 600ms ease-out",
              transitionDelay: "200ms",
            }}
          />
          <p
            className="mx-auto max-w-2xl text-[15px] font-medium leading-relaxed text-white/60 sm:text-[16px]"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 800ms ease-out",
              transitionDelay: "300ms",
            }}
          >
            {financingProfilesCopy.intro}
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-12 scrollbar-hide sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
          {financingProfilesCopy.profiles.map((profile, index) => (
            <div
              key={profile.id}
              className="relative flex min-w-[85vw] snap-center flex-col sm:min-w-0"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 500ms ease-out, transform 500ms ease-out",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-[#1A1A20] via-[#0E0E12] to-[#050505] p-8 text-center transition-all duration-500 hover:border-[#5A0F14]/50 hover:shadow-[0_20px_60px_rgba(90,15,20,0.2),inset_0_0_40px_rgba(90,15,20,0.05)]">

                {/* Internal glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,15,20,0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card particles — CSS */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="ffen-card-particle absolute h-1 w-1 rounded-full bg-[#5A0F14]"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${80 - i * 20}%`,
                        animationDelay: `${index + i}s`,
                        animationDuration: `${3 + i}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Icon avec anneau tournant */}
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-white/5" />
                  <div className="absolute inset-0 animate-spin rounded-full border-r-2 border-t-2 border-[#5A0F14]" style={{ animationDuration: "3s" }} />
                  <div
                    className="relative z-10 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-[#5A0F14]"
                    dangerouslySetInnerHTML={{ __html: profile.icon }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col items-center">
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-white">
                    {profile.title}
                  </h3>
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#5A0F14]/80">
                    Target:{" "}
                    <span className="font-medium normal-case tracking-normal text-white/60">
                      {profile.targets}
                    </span>
                  </p>
                  <div className="mx-auto mb-4 h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:via-[#5A0F14]/50" />
                  <div className="mt-auto">
                    <p className="mb-3 text-xs text-white/50">
                      <strong className="mb-1 block text-white/80">Example:</strong>
                      {profile.example}
                    </p>
                    <span className="inline-block rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 text-[10px] font-bold text-white/80 transition-colors group-hover:border-[#5A0F14]/30 group-hover:bg-[#5A0F14]/10">
                      {profile.range}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe indicator */}
        <div className="mt-4 flex justify-center sm:hidden">
          <div className="h-1 w-16 overflow-hidden rounded-full bg-white/10">
            <div className="ffen-swipe-indicator h-full w-1/3 bg-[#5A0F14]" />
          </div>
        </div>

      </div>
    </section>
  );
}