"use client";

import { useEffect, useRef, useState } from "react";
import { financingProfilesCopy } from "@/content/financing.en";

export default function FinancingForEveryNeed() {
  const [isVisible, setIsVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setAnimating(true);
          } else {
            // Pause animations when out of viewport
            setAnimating(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black px-6 py-12 text-white sm:py-16"
    >
      {/* Background Particles — paused when not visible */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <BackgroundParticles animating={animating} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          className="mb-8 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 700ms ease, transform 700ms ease",
          }}
        >
          <h2 className="mb-3 bg-gradient-to-r from-white to-white/70 bg-clip-text text-xl font-bold uppercase tracking-[0.12em] text-transparent sm:text-[1.75rem]">
            {financingProfilesCopy.title}
          </h2>
          <div
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_10px_rgba(90,15,20,0.5)]"
            style={{
              width: isVisible ? "96px" : "0px",
              transition: "width 700ms ease 200ms",
            }}
          />
        </div>

        {/* Intro */}
        <div
          className="mx-auto mb-8 max-w-3xl text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 700ms ease 400ms, transform 700ms ease 400ms",
          }}
        >
          <p className="text-[0.95rem] leading-relaxed text-white/80">
            {financingProfilesCopy.intro}
          </p>
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="sm:hidden">
          <div className="financing-carousel">
            {financingProfilesCopy.profiles.map((profile, index) => (
              <ProfileCard key={profile.id} profile={profile} index={index} animating={animating} />
            ))}
          </div>

          {/* Swipe indicator */}
          <div className="mt-6 flex flex-col items-center gap-1.5">
            <div
              className="relative h-6 w-10 rounded-full border border-white/20"
              style={{ borderRadius: "999px" }}
            >
              <div
                className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/50"
                style={{
                  left: "6px",
                  animation: animating ? "ffn-swipe-slide 2s ease-in-out infinite" : "none",
                }}
              />
            </div>
          </div>
        </div>

        {/* Desktop: 4-column grid (AJUSTÉ ICI AVEC items-stretch) */}
        <div className="hidden sm:grid sm:grid-cols-4 sm:gap-6 lg:gap-7 items-stretch">
          {financingProfilesCopy.profiles.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} index={index} animating={animating} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .ffn-swipe-dot {
          animation: ffn-swipe-slide 2s ease-in-out infinite;
        }
        @keyframes ffn-swipe-slide {
          0%   { opacity: 0; left: 6px; }
          20%  { opacity: 1; }
          80%  { opacity: 0; left: calc(100% - 12px); }
          100% { opacity: 0; left: calc(100% - 12px); }
        }
      `}</style>
    </section>
  );
}

// ─── PROFILE CARD ───
function ProfileCard({
  profile,
  index,
  animating,
}: {
  profile: any;
  index: number;
  animating: boolean;
}) {
  return (
    <div className="financing-card-item h-full">
      <div className="profile-card group relative flex h-full flex-col cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-[#5A0F14]/12 via-[#141419]/80 to-[#0A0A0F]/90 p-10 sm:p-8 backdrop-blur-md hover:border-[#5A0F14]/50 hover:shadow-[0_20px_60px_rgba(90,15,20,0.4),0_0_0_1px_rgba(90,15,20,0.2),inset_0_0_40px_rgba(90,15,20,0.1)]"
        style={{
          transition: "border-color 500ms ease, box-shadow 500ms ease, transform 500ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Card Particles — paused when section not visible */}
        <div className="card-particles pointer-events-none absolute inset-0">
          <CardParticles animating={animating} />
        </div>

        {/* Gradient Overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#5A0F14]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Icon */}
          <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center">
            <div
              className="icon-glow absolute h-full w-full rounded-full border-2 border-transparent border-t-[#5A0F14] border-r-[#5A0F14]"
              style={{
                animation: animating
                  ? `icon-spin 3s linear infinite ${index * 0.5}s`
                  : "none",
              }}
            />
            <div
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              dangerouslySetInnerHTML={{ __html: profile.icon }}
            />
          </div>

          {/* Title */}
          <h3 className="mb-3 text-center text-xl font-bold text-white">
            {profile.title}
          </h3>

          {/* For */}
          <div className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-white/50">
            For:
          </div>

          {/* Targets */}
          <p className="mb-4 text-center text-[0.9375rem] leading-relaxed text-white/80">
            {profile.targets}
          </p>

          {/* Divider avec le mt-auto pour tout aligner en bas */}
          <div className="mt-auto mx-auto mb-4 h-0.5 w-12 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent transition-all duration-300 group-hover:w-20" />

          {/* Example */}
          <p className="mb-4 text-center text-sm text-white/65">
            <span className="font-semibold text-white/95">Example:</span>{" "}
            {profile.example}
          </p>

          {/* Range Badge */}
          <span className="mx-auto block w-fit rounded-full border border-[#5A0F14]/40 bg-[#5A0F14]/20 px-4 py-2 text-sm font-semibold text-white/95 transition-all duration-300 group-hover:border-[#5A0F14]/60 group-hover:bg-[#5A0F14]/30 group-hover:shadow-[0_0_20px_rgba(90,15,20,0.3)]">
            {profile.range}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── BACKGROUND PARTICLES ───
function BackgroundParticles({ animating }: { animating: boolean }) {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: string; top: string; delay: string; duration: string }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${6 + Math.random() * 4}s`,
      }))
    );
  }, []);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute h-[3px] w-[3px] rounded-full bg-[#5A0F14] shadow-[0_0_10px_rgba(90,15,20,0.5)]"
          style={{
            left: p.left,
            top: p.top,
            animationName: "floatParticle",
            animationDuration: p.duration,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: p.delay,
            animationPlayState: animating ? "running" : "paused",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50%       { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
        }
        @keyframes icon-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

// ─── CARD PARTICLES ───
function CardParticles({ animating }: { animating: boolean }) {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: string; top: string; delay: string; duration: string }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${2 + Math.random() * 2}s`,
      }))
    );
  }, []);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-[#5A0F14] shadow-[0_0_8px_rgba(90,15,20,0.8)]"
          style={{
            left: p.left,
            top: p.top,
            animationName: "cardParticleFloat",
            animationDuration: p.duration,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: p.delay,
            animationPlayState: animating ? "running" : "paused",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes cardParticleFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
          50%       { transform: translateY(-20px) scale(1.5); opacity: 1; }
        }
      `}</style>
    </>
  );
}