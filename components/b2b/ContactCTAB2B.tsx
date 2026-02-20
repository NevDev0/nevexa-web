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
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
          <path
            d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.2l8 5 8-5V7H4Zm0 3.25V18h16v-7.75l-7.56 4.73a1 1 0 0 1-1.08 0L4 10.25Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
      title: "Email",
      tagline: "For fleet sourcing & partnerships",
      action: contactCTAB2B.ctaPrimary,
      href: "mailto:contact@nevexacars.com",
    },
    {
      id: "whatsapp",
      icon: (
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
          <path d="M16 3C9.383 3 4 8.383 4 15c0 2.054.551 4.022 1.6 5.77L4 29l8.434-1.566A11.84 11.84 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3Zm0 2c5.534 0 10 4.466 10 10s-4.466 10-10 10a9.83 9.83 0 0 1-4.91-1.332l-.355-.207-4.99.926.955-4.834-.23-.373A9.77 9.77 0 0 1 6 15c0-5.534 4.466-10 10-10Zm-4.104 5.5a1.01 1.01 0 0 0-.74.356c-.192.225-.668.652-.668 1.586 0 .934.684 1.838.78 1.965.096.128 1.34 2.13 3.287 2.996 1.946.867 1.946.578 2.296.547.35-.03 1.126-.46 1.285-.905.16-.445.16-.826.114-.905-.046-.08-.178-.128-.373-.225-.195-.096-1.153-.57-1.332-.636-.178-.064-.308-.096-.437.097-.128.192-.502.635-.615.764-.113.128-.225.145-.42.048-.195-.096-.825-.304-1.572-.968-.58-.517-.97-1.155-1.083-1.35-.113-.192-.012-.296.084-.392.086-.085.195-.225.292-.337.097-.112.129-.192.194-.32.064-.128.032-.24-.017-.337-.048-.096-.426-1.03-.585-1.412-.145-.35-.29-.363-.42-.369Z" />
        </svg>
      ),
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

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {channels.map((channel, index) => {
            const isHovered = hoveredCard === channel.id;

            return (
              <div
                key={channel.id}
                onMouseEnter={() => setHoveredCard(channel.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-lg bg-[#0a0a0a] transition-all ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } ${
                  isHovered
                    ? "shadow-[0_20px_60px_rgba(90,15,20,0.3)]"
                    : "shadow-none"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 150}ms` : "0ms",
                  transitionDuration: "500ms",
                }}
              >
                {/* Gradient border */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-lg transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-30"
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(90,15,20,0.6), transparent 50%, rgba(90,15,20,0.3))",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                  }}
                />

                {/* Horizontal layout on mobile, vertical on desktop */}
                <div className="relative z-10 flex items-center gap-4 p-5 md:flex-col md:items-start md:p-6">
                  {/* Icon */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isHovered
                        ? "border-[#5A0F14] bg-[#5A0F14]/10 text-white"
                        : "border-white/10 bg-white/5 text-white/60"
                    }`}
                  >
                    {channel.icon}
                  </div>

                  {/* Text + CTA */}
                  <div className="flex flex-1 items-center justify-between gap-3 md:mt-3 md:w-full md:flex-col md:items-start md:gap-4">
                    <div>
                      <h3 className="text-base font-bold tracking-tight md:text-xl">
                        {channel.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-white/55 md:mt-1 md:text-sm">
                        {channel.tagline}
                      </p>
                    </div>

                    <a
                      href={channel.href}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                        isHovered
                          ? "bg-[#5A0F14] text-white"
                          : "bg-white/5 text-white/75"
                      }`}
                    >
                      <span>{channel.action}</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
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
                </div>

                {/* Card glow */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_0%,rgba(90,15,20,0.15),transparent_60%)] transition-opacity duration-250 ${
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
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-sm text-white/50">{contactCTAB2B.note}</p>
        </div>
      </div>
    </section>
  );
}