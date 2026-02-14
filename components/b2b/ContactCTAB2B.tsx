"use client";

import { useState, useEffect, useRef } from "react";
import { contactCTAB2B } from "@/content/b2b.en";

export default function ContactCTAB2B() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const channels = [
    {
      id: "email",
      icon: "✉",
      title: "Email",
      tagline: "For fleet sourcing & partnerships",
      action: contactCTAB2B.ctaPrimary,
      href: "mailto:contact@nevexacars.com",
    },
    {
      id: "whatsapp",
      icon: "💬",
      title: "WhatsApp",
      tagline: "For urgent questions",
      action: contactCTAB2B.ctaSecondary,
      href: "https://wa.me/14374842769",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0E0F11] px-6 py-12 sm:py-20"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div
          className={`mb-4 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {contactCTAB2B.title}
          </h2>
          <div
            className={`mx-auto mb-5 h-px bg-[#5A0F14] transition-all duration-700 ${
              isVisible ? "w-18" : "w-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
          <p className="text-[15px] leading-relaxed text-white/70">
            {contactCTAB2B.subtitle}
          </p>
        </div>

        {/* Split Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {channels.map((channel, index) => {
            const isHovered = hoveredCard === channel.id;

            return (
              <div
                key={channel.id}
                onClick={() => setHoveredCard(channel.id)}
                onMouseEnter={() => setHoveredCard(channel.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative cursor-pointer overflow-hidden rounded-lg bg-[#0a0a0a] p-4 transition-all ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } ${
                  isHovered
                    ? "scale-105 shadow-[0_20px_60px_rgba(90,15,20,0.3)]"
                    : "scale-100"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 150}ms` : "0ms",
                  transitionDuration: isHovered ? "250ms" : "500ms",
                }}
              >
                {/* Gradient border */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-lg p-px transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-30"
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(90,15,20,0.6), transparent 50%, rgba(90,15,20,0.3))",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon badge */}
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 text-2xl transition-all duration-200 ${
                      isHovered
                        ? "scale-110 border-[#5A0F14] bg-[#5A0F14]/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    {channel.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-1.5 text-xl font-bold tracking-tight">
                    {channel.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mb-5 text-sm leading-relaxed text-white/65">
                    {channel.tagline}
                  </p>

                  {/* Button */}
                  <a
                    href={channel.href}
                    className={`group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isHovered
                        ? "bg-[#5A0F14] text-white"
                        : "bg-white/5 text-white/75"
                    }`}
                  >
                    <span className="relative z-10">{channel.action}</span>
                    
                    {/* Arrow */}
                    <svg
                      className={`relative z-10 h-4 w-4 transition-transform duration-200 ${
                        isHovered ? "translate-x-1" : "translate-x-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                {/* Card glow */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(90,15,20,0.15),transparent_60%)] transition-opacity duration-250 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div
          className={`mt-8 text-center transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-sm text-white/50">{contactCTAB2B.note}</p>
        </div>
      </div>
    </section>
  );
}