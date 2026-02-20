"use client";

import { useEffect, useRef, useState } from "react";
import { realityCopy } from "@/content/about.en";

export default function TheReality() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Helper function to highlight keywords in a paragraph
  const renderTextWithHighlights = (text: string, highlights: string[], baseDelay: number = 0) => {
    let currentText = text;
    const parts: { text: string; highlighted: boolean }[] = [];
    let lastIndex = 0;

    // Sort highlights by position in text
    const sortedHighlights = [...highlights].sort((a, b) => {
      return currentText.indexOf(a) - currentText.indexOf(b);
    });

    sortedHighlights.forEach((keyword) => {
      const index = currentText.indexOf(keyword, lastIndex);
      if (index !== -1) {
        // Add text before keyword
        if (index > lastIndex) {
          parts.push({
            text: currentText.substring(lastIndex, index),
            highlighted: false,
          });
        }
        // Add highlighted keyword
        parts.push({
          text: keyword,
          highlighted: true,
        });
        lastIndex = index + keyword.length;
      }
    });

    // Add remaining text
    if (lastIndex < currentText.length) {
      parts.push({
        text: currentText.substring(lastIndex),
        highlighted: false,
      });
    }

    return parts.map((part, i) =>
      part.highlighted ? (
        <span
          key={i}
          className={`inline-block transition-all duration-700 ${
            visible ? "text-white" : "text-white/60"
          }`}
          style={{
            transitionDelay: `${baseDelay + 300 + i * 200}ms`,
            textShadow: visible ? "0 0 20px rgba(255,255,255,0.4)" : "none",
            background: visible ? "rgba(90,15,20,0.35)" : "transparent",
            padding: visible ? "2px 8px" : "0",
            borderRadius: "6px",
            boxShadow: visible ? "0 2px 12px rgba(90,15,20,0.3)" : "none",
          }}
        >
          {part.text}
        </span>
      ) : (
        <span key={i}>{part.text}</span>
      )
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-black px-6 py-20 sm:min-h-[55vh] sm:py-24"
    >
      
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Top separator */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        
        {/* First paragraph */}
        <p
          className={`mb-8 text-[17px] leading-[2.0] text-white/80 transition-all duration-700 sm:mb-10 sm:text-[28px] sm:leading-[1.7] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {renderTextWithHighlights(
            realityCopy.paragraphs[0].text,
            realityCopy.paragraphs[0].highlights,
            0
          )}
        </p>

        {/* Second paragraph (Nevexa conclusion) */}
        <p
          className={`text-[17px] leading-[2.0] text-white/80 transition-all duration-700 sm:text-[28px] sm:leading-[1.7] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {renderTextWithHighlights(
            realityCopy.paragraphs[1].text,
            realityCopy.paragraphs[1].highlights,
            400
          )}
        </p>

      </div>

      {/* Bottom separator */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />

    </section>
  );
}