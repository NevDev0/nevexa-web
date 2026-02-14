"use client";

import { useEffect, useRef, useState } from "react";
import { financingProfilesCopy } from "@/content/financing.en";

export default function FinancingForEveryNeed() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer
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
      className="relative w-full overflow-hidden bg-black px-6 py-12 text-white sm:py-16"
    >
      {/* Background Particles */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <BackgroundParticles />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mb-8 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <h2 className="mb-3 bg-gradient-to-r from-white to-white/70 bg-clip-text text-xl font-bold uppercase tracking-[0.12em] text-transparent sm:text-[1.75rem]">
            {financingProfilesCopy.title}
          </h2>
          <div
            className={`mx-auto h-0.5 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_10px_rgba(90,15,20,0.5)] transition-all duration-700 ${
              isVisible ? "w-24" : "w-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* Intro */}
        <div
          className={`mx-auto mb-8 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-[0.95rem] leading-relaxed text-white/85">
            {financingProfilesCopy.intro}
          </p>
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="sm:hidden">
          <div className="financing-carousel">
            {financingProfilesCopy.profiles.map((profile, index) => (
              <div key={profile.id} className="financing-card-item">
                <ProfileCard profile={profile} index={index} />
              </div>
            ))}
          </div>
          
          {/* Swipe Indicator */}
          <div className="-mt-1 flex items-center justify-center gap-2 text-white/40">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="text-xs uppercase tracking-wider">Swipe</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        {/* Desktop: 2x2 Grid */}
        <div className="hidden grid-cols-2 gap-8 sm:grid lg:gap-10">
          {financingProfilesCopy.profiles.map((profile, index) => (
            <div key={profile.id}>
              <ProfileCard profile={profile} index={index} />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

// ─── PROFILE CARD COMPONENT ───
function ProfileCard({ profile, index }: { profile: any; index: number }) {
  return (
    <div className="profile-card-container perspective-1000">
      <div className="profile-card group relative cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-[#5A0F14]/12 via-[#141419]/80 to-[#0A0A0F]/90 p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-[#5A0F14]/50 hover:shadow-[0_20px_60px_rgba(90,15,20,0.4),0_0_0_1px_rgba(90,15,20,0.2),inset_0_0_40px_rgba(90,15,20,0.1)]">
        
        {/* Card Particles */}
        <div className="card-particles pointer-events-none absolute inset-0">
          <CardParticles />
        </div>

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#5A0F14]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content */}
        <div className="relative z-10 -p-2">
          {/* Icon Container */}
          <div className="icon-container relative mx-auto mb-6 flex h-20 w-20 items-center justify-center">
            {/* Rotating Glow Ring */}
            <div className="icon-glow absolute h-full w-full rounded-full border-2 border-transparent border-t-[#5A0F14] border-r-[#5A0F14]" />

            {/* SVG Icon */}
            <div
              className="relative z-10 transition-transform duration-400 group-hover:scale-110"
              dangerouslySetInnerHTML={{ __html: profile.icon }}
            />
          </div>

          {/* Title */}
          <h3 className="mb-4 text-center text-2xl font-bold text-white transition-all duration-300 group-hover:text-shadow-glow">
            {profile.title}
          </h3>

          {/* For */}
          <div className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-white/50">
            For:
          </div>

          {/* Targets */}
          <p className="mb-5 text-center text-[0.9375rem] leading-relaxed text-white/80">
            {profile.targets}
          </p>

          {/* Divider */}
          <div className="divider mx-auto mb-5 h-0.5 w-12 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent transition-all duration-300 group-hover:w-20" />

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

      <style jsx>{`
        .profile-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0);
        }

        .profile-card:hover {
          transform: translateY(-12px) rotateX(2deg);
          box-shadow: 0 20px 60px rgba(90, 15, 20, 0.4),
            0 0 0 1px rgba(90, 15, 20, 0.2),
            inset 0 0 40px rgba(90, 15, 20, 0.1);
          border-color: rgba(90, 15, 20, 0.5);
        }

        /* Icon Glow Ring */
        .icon-glow {
          animation: rotateGlow 3s linear infinite;
        }

        @keyframes rotateGlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

// ─── BACKGROUND PARTICLES ───
function BackgroundParticles() {
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
            animation: `floatParticle ${p.duration} ease-in-out infinite ${p.delay}`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}

// ─── CARD PARTICLES ───
function CardParticles() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: string;
      top: string;
      delay: string;
      duration: string;
    }>
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
            animation: `cardParticleFloat ${p.duration} ease-in-out infinite ${p.delay}`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes cardParticleFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}