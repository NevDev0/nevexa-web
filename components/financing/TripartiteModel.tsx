"use client";

import { useEffect, useRef, useState } from "react";
import { howItWorksCopy } from "@/content/financing.en";
import Image from "next/image";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for entrance animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0E0F11] px-6 py-16 text-white sm:py-12"
    >
      {/* Particle Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <ParticleGrid />
      </div>

      {/* Scan Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-px w-[200%] bg-gradient-to-r from-transparent via-[#5A0F14]/30 to-transparent"
          style={{
            top: "20%",
            animation: isVisible ? "diagScan 8s ease-in-out infinite" : "none",
          }}
        />
        <div
          className="absolute h-px w-[200%] bg-gradient-to-r from-transparent via-[#5A0F14]/30 to-transparent"
          style={{
            top: "60%",
            animation: isVisible
              ? "diagScan 8s ease-in-out infinite 2.5s"
              : "none",
          }}
        />
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div
          className={`mb-10 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <h2 className="mb-3 text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {howItWorksCopy.title}
          </h2>
          <div
            className={`mx-auto mb-6 h-px bg-[#5A0F14] transition-all duration-700 ${
              isVisible ? "w-18" : "w-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
          <p className="text-sm leading-relaxed text-white/70 sm:text-[15px]">
            {howItWorksCopy.subtitle}
          </p>
        </div>

        {/* Actors */}
        <div className="flex flex-col gap-2 md:flex-row md:justify-center md:gap-12 lg:gap-16">
          {howItWorksCopy.actors.map((actor, index) => {
            const isLast = index === howItWorksCopy.actors.length - 1;

            return (
              <div key={actor.id} className="relative md:flex-1 md:max-w-[240px]">
                {/* Actor Card */}
                <div
                  className={`group relative overflow-hidden rounded-xl border backdrop-blur-md transition-all duration-600 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-5 opacity-0"
                  } ${
                    index === 0
                      ? "border-white/20 bg-black/60 hover:border-white/20"
                      : index === 1
                      ? "border-[#5A0F14] bg-black/60 hover:border-[#5A0F14]/80"
                      : "border-[#5A0F14]/50 bg-black/60 hover:border-[#5A0F14]/70"
                  }`}
                  style={{
                    transitionDelay: `${800 + index * 200}ms`,
                  }}
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(90,15,20,0.1),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-4 p-5 md:flex-col md:text-center md:p-6">
                    {/* Icon */}
                    <div
                      className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 md:h-20 md:w-20 ${
                        index === 0
                          ? "border-2 border-white/30 bg-gradient-to-br from-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:border-white/50 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                          : index === 1
                          ? "border-2 border-[#5A0F14] bg-gradient-to-br from-[#5A0F14] to-[#7A1F24] shadow-[0_0_30px_rgba(90,15,20,0.5)] group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(90,15,20,0.8)]"
                          : "border-2 border-[#5A0F14] bg-gradient-to-br from-[#5A0F14]/10 to-transparent shadow-[0_0_20px_rgba(90,15,20,0.3)] group-hover:border-[#7A1F24] group-hover:shadow-[0_0_40px_rgba(90,15,20,0.5)]"
                      }`}
                    >
                      {index === 0 ? (
                        <UserIcon />
                      ) : index === 1 ? (
                        <BankIcon />
                      ) : (
                        <Image
                          src="/logo/brandmark-white.svg"
                          alt="Nevexa"
                          width={40}
                          height={40}
                          className="transition-all duration-300 group-hover:scale-110 md:h-12 md:w-12"
                        />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 md:flex-none">
                      <div className="mb-2 flex items-center gap-2.5 md:flex-col md:gap-2">
                        <h3 className="text-base font-semibold md:text-lg">{actor.label}</h3>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                            index === 0
                              ? "border border-white/30 bg-white/5 text-white/80"
                              : index === 1
                              ? "bg-white text-[#5A0F14]"
                              : "border border-[#5A0F14] bg-[#5A0F14]/10 text-white/80"
                          }`}
                        >
                          {actor.tag}
                        </span>
                      </div>
                      <p className="text-sm text-white/65 md:text-[15px]">
                        {actor.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connection Line (Mobile Vertical) - NOW VISIBLE */}
                {!isLast && (
                  <div className="relative mx-auto h-8 w-0.5 md:hidden">
                    {/* Animated gradient line */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-b from-white/30 via-[#5A0F14]/60 to-[#5A0F14]/80 transition-all duration-700 ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${1000 + index * 200}ms`,
                      }}
                    >
                      {/* Animated glow that travels down */}
                      <div
                        className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#5A0F14] blur-sm"
                        style={{
                          animation: isVisible
                            ? `slideDown 2s ease-in-out infinite ${index * 0.5}s`
                            : "none",
                        }}
                      />
                    </div>

                    {/* Arrow at bottom */}
                    <div
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${1200 + index * 200}ms`,
                      }}
                    >
                      <div className="h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#5A0F14]/80" />
                    </div>
                  </div>
                )}

                {/* Connection Line (Desktop Horizontal) */}
                {!isLast && (
                  <div
                    className={`absolute left-full top-1/2 hidden h-0.5 w-12 -translate-y-1/2 bg-gradient-to-r from-white/20 to-[#5A0F14]/40 transition-opacity duration-700 md:block lg:w-16 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${1000 + index * 200}ms`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes diagScan {
          0%,
          100% {
            opacity: 0;
            transform: translateX(-100%) rotate(-25deg);
          }
          10%,
          90% {
            opacity: 1;
          }
          50% {
            transform: translateX(0) rotate(-25deg);
          }
        }

        @keyframes slideDown {
          0% {
            top: 0;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

// ─── PARTICLE GRID COMPONENT ───
function ParticleGrid() {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: string; top: string; delay: string }>
  >([]);

  // Generate particles only on client side
  useEffect(() => {
    setParticles(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
      }))
    );
  }, []);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute h-0.5 w-0.5 rounded-full bg-white/40"
          style={{
            left: p.left,
            top: p.top,
            animation: `pulse 3s ease-in-out infinite ${p.delay}`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.5);
          }
        }
      `}</style>
    </>
  );
}

// ─── ICON COMPONENTS ───
function UserIcon() {
  return (
    <svg
      className="h-9 w-9 fill-white md:h-11 md:w-11"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
      <path d="M12 14C6.477 14 2 16.477 2 19.5C2 20.328 2.672 21 3.5 21H20.5C21.328 21 22 20.328 22 19.5C22 16.477 17.523 14 12 14Z" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg
      className="h-9 w-9 fill-white md:h-11 md:w-11"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 7V9H22V7L12 2Z" />
      <path d="M4 10V18H6V10H4Z" />
      <path d="M8 10V18H10V10H8Z" />
      <path d="M14 10V18H16V10H14Z" />
      <path d="M18 10V18H20V10H18Z" />
      <path d="M2 19H22V21H2V19Z" />
    </svg>
  );
}