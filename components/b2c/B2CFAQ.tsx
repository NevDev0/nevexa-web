"use client";

import { useState, useEffect, useRef } from "react";
import { faqCopy } from "@/content/b2c.en";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const answerRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // Observer pour le header
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
      className="w-full bg-black px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-3xl">

        {/* ── HEADER ── */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out",
            }}
          >
            {faqCopy.title}
          </h2>
          <div
            className="mx-auto h-px bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
            style={{
              width: visible ? "120px" : "0px",
              transition: "width 600ms ease-out",
              transitionDelay: "150ms",
            }}
          />
        </div>

        {/* ── FAQ LIST ── */}
        <div className="border-t border-white/10">
          {faqCopy.questions.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="relative border-b border-white/10"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 500ms ease-out, transform 500ms ease-out",
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {/* ── QUESTION ── */}
                <button
                  onClick={() => toggle(item.id)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left outline-none sm:py-8"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[15px] font-medium tracking-wide transition-colors duration-300 sm:text-[16px]"
                    style={{ color: isOpen ? "white" : "rgba(255,255,255,0.6)" }}
                  >
                    {item.question}
                  </span>

                  {/* ── ICONE + / × ── */}
                  <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                    {/* Barre horizontale */}
                    <span
                      className="absolute h-[2px] w-4 transition-all duration-300"
                      style={{
                        backgroundColor: isOpen ? "#5A0F14" : "rgba(255,255,255,0.6)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    />
                    {/* Barre verticale */}
                    <span
                      className="absolute h-4 w-[2px] transition-all duration-300"
                      style={{
                        backgroundColor: isOpen ? "#5A0F14" : "rgba(255,255,255,0.6)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        opacity: isOpen ? 0 : 1,
                      }}
                    />
                  </div>
                </button>

                {/* ── RÉPONSE (hauteur animée en CSS) ── */}
                <div
                  className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  style={{
                    maxHeight: isOpen
                      ? `${answerRefs.current[item.id]?.scrollHeight ?? 500}px`
                      : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition:
                      "max-height 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 300ms ease-out",
                  }}
                >
                  <div
                    ref={(el) => { answerRefs.current[item.id] = el; }}
                    className="pb-8 pr-8 sm:pr-12"
                  >
                    <p className="text-[14px] leading-relaxed text-white/50 sm:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>

                {/* ── LIGNE ROUGE ACTIVE ── */}
                <div
                  className="absolute bottom-[-1px] left-0 h-[1px] w-full origin-left bg-[#5A0F14] shadow-[0_0_10px_rgba(90,15,20,0.8)] transition-transform duration-400"
                  style={{
                    transform: isOpen ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}