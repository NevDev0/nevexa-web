"use client";

import { useEffect, useRef, useState } from "react";
import { realityCopy } from "@/content/about.en";

export default function TheReality() {
  const [visible, setVisible] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setHighlighted(true), 700);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderTextWithHighlights = (text: string, highlights: string[]) => {
    let parts = [text];
    highlights.forEach((highlight) => {
      const newParts: string[] = [];
      parts.forEach((part) => {
        const split = part.split(new RegExp(`(${highlight})`, "gi"));
        newParts.push(...split);
      });
      parts = newParts;
    });

    return parts.map((part, i) => {
      const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
      if (isHighlight) {
        return (
          <span
            key={i}
            className="relative inline-block font-semibold"
            style={{
              color: highlighted ? "#5A0F14" : "rgba(255,255,255,0.8)",
              transition: "color 1000ms ease-out",
              transitionDelay: "500ms",
            }}
          >
            {part}
            <span
              className="absolute -bottom-1 left-0 h-[1px] bg-[#5A0F14]"
              style={{
                width: highlighted ? "100%" : "0%",
                transition: "width 1000ms ease-out",
                transitionDelay: "800ms",
              }}
            />
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-16 sm:py-22"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,15,20,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* Paragraphes */}
        {realityCopy.paragraphs.map((para, index) => (
          <p
            key={index}
            className={`mb-12 leading-[1.8] text-white/80 last:mb-0 ${
              index === 2
                ? "text-[22px] font-bold text-white sm:text-[32px]"
                : "text-[18px] sm:text-[24px]"
            }`}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1000ms ease-out, transform 1000ms ease-out",
              transitionDelay: `${200 + index * 800}ms`,
            }}
          >
            {renderTextWithHighlights(para.text, para.highlights)}
          </p>
        ))}

        {/* Founder */}
        <div
          className="mt-20 border-t border-white/10 pt-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1000ms ease-out, transform 1000ms ease-out",
            transitionDelay: `${200 + realityCopy.paragraphs.length * 800}ms`,
          }}
        >
          <span className="mb-8 block text-[14px] font-bold uppercase tracking-[0.3em] text-[#5A0F14] sm:text-[20px]">
            {realityCopy.founder.header}
          </span>
          <blockquote className="mb-12 text-[20px] font-medium italic leading-[1.6] text-white/90 sm:text-[26px]">
            "{realityCopy.founder.quote}"
          </blockquote>
          <div className="flex flex-col items-center gap-2">
            <div className="mb-2 h-px w-8 bg-[#5A0F14]" />
            <span className="text-[16px] font-bold uppercase tracking-wider text-white">
              {realityCopy.founder.signature}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              {realityCopy.founder.role}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}