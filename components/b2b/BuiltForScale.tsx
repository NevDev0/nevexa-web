"use client";

import { useState, useEffect, useRef } from "react";
import { builtForScaleCopy } from "@/content/b2b.en";

export default function BuiltForScale() {
  const [activeTab, setActiveTab] = useState("corporate");
  const [visible, setVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(true);
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

  const goToTab = (id: string) => {
    if (id === activeTab) return;
    setCardVisible(false);
    setTimeout(() => {
      setActiveTab(id);
      setCardVisible(true);
    }, 200);
  };

  const activeProfileData = builtForScaleCopy.profiles.find((p) => p.id === activeTab);

  const CardContent = ({ profile }: { profile: (typeof builtForScaleCopy.profiles)[0]; }) => {
    const isFeatured = profile.id === "corporate";
    return (
      <>
        {/* Liseré supérieur */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-[#5A0F14] opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />

        <div className="flex flex-1 flex-col p-6 sm:p-10">
          <div className="mb-8 border-b border-white/10 pb-6">
            <h3 className={`mb-2 text-xl font-bold uppercase tracking-wider ${isFeatured ? "text-[#5A0F14]" : "text-white"}`}>
              {profile.name}
            </h3>
            <p className="text-[13px] leading-relaxed text-white/70">{profile.subtitle}</p>
          </div>

          <ul className="mb-10 flex-1 space-y-5">
            {profile.capabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5A0F14]" />
                <div className="text-[14px] leading-relaxed text-white/70">
                  <strong className="font-semibold text-white/95">{cap.title}</strong>{" "}
                  <span className="opacity-80">{cap.description}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-white/5 pt-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">Typical Volume</span>
              <span className="text-[13px] font-bold tracking-wider text-white">{profile.volume.label}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full bg-gradient-to-r from-[#5A0F14] to-red-600"
                style={{
                  width: visible ? `${profile.volume.percentage}%` : "0%",
                  transition: "width 1000ms ease-out",
                  transitionDelay: "200ms",
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative w-full overflow-hidden bg-[#0E0F11] px-6 py-16 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,15,20,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── HEADER ── */}
        <div className="mb-10 text-center sm:mb-12">
          <h2
            className="mb-4 text-2xl font-bold uppercase tracking-[0.15em] text-white sm:text-3xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 800ms ease-out, transform 800ms ease-out",
            }}
          >
            {builtForScaleCopy.title}
          </h2>
          <div
            className="mx-auto mb-6 h-px bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
            style={{
              width: visible ? "96px" : "0px",
              transition: "width 600ms ease-out",
              transitionDelay: "150ms",
            }}
          />
          <p
            className="text-[18px] font-medium tracking-wide text-white/70 sm:text-[20px]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 800ms ease-out, transform 800ms ease-out",
              transitionDelay: "200ms",
            }}
          >
            {builtForScaleCopy.subtitle}
          </p>
        </div>

        {/* ── DESKTOP : Grille 3 colonnes ── */}
        <div className="hidden grid-cols-1 gap-8 sm:grid sm:grid-cols-3">
          {builtForScaleCopy.profiles.map((profile, index) => {
            const isFeatured = profile.id === "corporate";
            return (
              <div
                key={profile.id}
                className={`group relative flex flex-col overflow-hidden rounded-xl border transition-all duration-500 hover:-translate-y-2 ${
                  isFeatured
                    ? "border-[#5A0F14]/40 bg-[#0a0a0a] bg-[linear-gradient(180deg,rgba(90,15,20,0.15)_0%,transparent_100%)] shadow-2xl"
                    : "border-white/10 bg-[#0a0a0a] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_100%)] hover:border-white/20"
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: "opacity 800ms ease-out, transform 800ms ease-out",
                  transitionDelay: `${200 + index * 200}ms`,
                }}
              >
                <CardContent profile={profile} />
              </div>
            );
          })}
        </div>

        {/* ── MOBILE : Tabs ── */}
        <div className="sm:hidden">
          {/* Sélecteur pilule */}
          <div className="mb-6 flex w-full rounded-full border border-white/10 bg-white/5 p-1">
            {builtForScaleCopy.profiles.map((profile) => {
              const isActive = activeTab === profile.id;
              return (
                <button
                  key={profile.id}
                  onClick={() => goToTab(profile.id)}
                  className="relative flex-1 py-3 text-[11px] font-bold uppercase tracking-wider outline-none"
                >
                  {/* Pill indicator */}
                  <div
                    className="absolute inset-0 rounded-full bg-[#5A0F14] shadow-[0_0_10px_rgba(90,15,20,0.5)] transition-opacity duration-200"
                    style={{ opacity: isActive ? 1 : 0 }}
                  />
                  <span
                    className="relative z-10 transition-colors duration-300"
                    style={{ color: isActive ? "white" : "rgba(255,255,255,0.6)" }}
                  >
                    {profile.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Carte active avec fade */}
          <div className="relative min-h-[480px]">
            {activeProfileData && (
              <div
                className={`relative flex w-full flex-col overflow-hidden rounded-xl border ${
                  activeProfileData.id === "corporate"
                    ? "border-[#5A0F14]/40 bg-[#0a0a0a] bg-[linear-gradient(180deg,rgba(90,15,20,0.15)_0%,transparent_100%)]"
                    : "border-white/10 bg-[#0a0a0a] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_100%)]"
                }`}
                style={{
                  opacity: cardVisible ? 1 : 0,
                  transform: cardVisible ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 200ms ease-in-out, transform 200ms ease-in-out",
                }}
              >
                <CardContent profile={activeProfileData} />
              </div>
            )}
          </div>
        </div>

        {/* ── FOOTER NOTE ── */}
        <div
          className="mt-8 text-center sm:mt-12"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1000ms ease-out",
            transitionDelay: "800ms",
          }}
        >
          <p className="inline-block rounded-full border border-white/10 bg-white/5 px-6 py-2 text-[12px] font-medium tracking-[0.08em] text-white/60">
            {builtForScaleCopy.footerNote}
          </p>
        </div>

      </div>
    </section>
  );
}