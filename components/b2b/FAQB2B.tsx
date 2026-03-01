"use client";

import { useState, useEffect, useRef } from "react";
import { faqB2B } from "@/content/b2b.en";

export default function FAQB2B() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const answerRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

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
      className="relative w-full bg-[#F3EFEA] px-6 py-16 text-black sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">

          {/* ── COLONNE GAUCHE : Titre sticky ── */}
          <div className="lg:col-span-4">
            <div
              className="sticky top-32"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-20px)",
                transition: "opacity 800ms ease-out, transform 800ms ease-out",
              }}
            >
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
                {faqB2B.title}
              </h2>
              <div
                className="h-px bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
                style={{
                  width: visible ? "96px" : "0px",
                  transition: "width 600ms ease-out",
                  transitionDelay: "200ms",
                }}
              />
              <p className="mt-6 text-[18px] leading-relaxed text-black/90">
                {faqB2B.description}
              </p>
            </div>
          </div>

          {/* ── COLONNE DROITE : Accordéon ── */}
          <div className="lg:col-span-8">
            <div className="border-t border-black/10">
              {faqB2B.questions.map((item, index) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border-b border-black/10"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(20px)",
                      transition: "opacity 600ms ease-out, transform 600ms ease-out",
                      transitionDelay: `${200 + index * 100}ms`,
                    }}
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggle(item.id)}
                      className="group flex w-full items-center justify-between py-6 text-left outline-none sm:py-8"
                    >
                      <span
                        className="pr-8 text-[16px] transition-colors duration-300 sm:text-[18px]"
                        style={{
                          fontWeight: isOpen ? 700 : 500,
                          color: isOpen ? "#5A0F14" : "black",
                        }}
                      >
                        {item.question}
                      </span>

                      {/* Icône +/- */}
                      <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/20 transition-colors duration-300 group-hover:border-[#5A0F14]">
                        <span
                          className="absolute h-[1.5px] w-3 bg-black transition-all duration-300 group-hover:bg-[#5A0F14]"
                          style={{ opacity: isOpen ? 0 : 1 }}
                        />
                        <span
                          className="absolute h-[1.5px] w-3 bg-black transition-all duration-300 group-hover:bg-[#5A0F14]"
                          style={{
                            transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
                            transition: "transform 300ms ease-out",
                          }}
                        />
                      </div>
                    </button>

                    {/* Réponse — max-height CSS */}
                    <div
                      className="overflow-hidden"
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
                        className="pb-8 pr-12 text-[15px] leading-relaxed text-black/90 sm:text-[16px]"
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}