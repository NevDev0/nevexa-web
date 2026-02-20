"use client";

import { useState, useEffect, useRef } from "react";
import { whyImportCopy } from "@/content/en";

// Teintes de fond par accordion ouvert
const bgTints: Record<string, string> = {
  null: "#F2F2F2",
  "recent-models": "#EEECEA",
  "competitive-pricing": "#ECEAEA",
  "verified-history": "#EAEAEC",
};

export default function WhyImport() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [underlineWidth, setUnderlineWidth] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // IntersectionObserver — cascade au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setUnderlineWidth(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const currentBg = bgTints[openId ?? "null"];

  return (
    <section
      ref={sectionRef}
      id="why-import"
      className="w-full px-6 py-16 text-black"
      style={{
        backgroundColor: currentBg,
        transition: "background-color 600ms ease-in-out",
      }}
    >
      <div className="mx-auto max-w-4xl">

        {/* Titre — cascade A */}
        <div className="mb-3 text-center">
          <h2
            className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out",
              transitionDelay: "0ms",
            }}
          >
            {whyImportCopy.title}
          </h2>
        </div>

        {/* Underline animée — E */}
        <div className="mb-8 flex justify-center">
          <div
            className="h-px bg-[#5A0F14]"
            style={{
              width: underlineWidth ? "80px" : "0px",
              transition: "width 600ms ease-out",
              transitionDelay: "300ms",
            }}
          />
        </div>

        {/* Intro — cascade A */}
        <p
          className="mb-8 text-center text-lg font-medium text-neutral-800 sm:text-xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 600ms ease-out, transform 600ms ease-out",
            transitionDelay: "200ms",
          }}
        >
          {whyImportCopy.intro}
        </p>

        {/* Accordéons */}
        <div className="space-y-0">
          {whyImportCopy.accordions.map((accordion, index) => {
            const isOpen = openId === accordion.id;
            const isLast = index === whyImportCopy.accordions.length - 1;

            return (
              <div
                key={accordion.id}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 600ms ease-out, transform 600ms ease-out",
                  transitionDelay: `${300 + index * 80}ms`,
                }}
              >
                {/* Header cliquable */}
                <button
                  onClick={() => toggleAccordion(accordion.id)}
                  className="group flex w-full items-center justify-between py-6 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Titre avec trait burgund au hover — C */}
                  <span className="relative text-lg font-semibold sm:text-xl">
                    <span
                      className="transition-colors duration-300"
                      style={{ color: isOpen ? "#5A0F14" : "inherit" }}
                    >
                      {accordion.title}
                    </span>
                    {/* Trait slide sous le titre */}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px bg-[#5A0F14]"
                      style={{
                        width: isOpen ? "100%" : "0%",
                        transition: "width 400ms ease-out",
                      }}
                    />
                  </span>

                  {/* D — Croix SVG fine avec rotation */}
                  <span
                    className="ml-4 flex-shrink-0 text-[#5A0F14]"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 300ms ease-in-out",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <line x1="10" y1="2" x2="10" y2="18" />
                      <line x1="2" y1="10" x2="18" y2="10" />
                    </svg>
                  </span>
                </button>

                {/* Contenu — B — slide + max-height */}
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    transition: "max-height 400ms ease-in-out, opacity 300ms ease-in-out",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    className="pb-6 pr-12"
                    style={{
                      transform: isOpen ? "translateY(0)" : "translateY(8px)",
                      transition: "transform 400ms ease-out",
                    }}
                  >
                    <p className="text-base leading-relaxed text-neutral-700">
                      {accordion.content}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {!isLast && <div className="h-px bg-neutral-200" />}
              </div>
            );
          })}
        </div>

        {/* Divider final */}
        <div className="mt-0 h-px bg-neutral-200" />
      </div>
    </section>
  );
}