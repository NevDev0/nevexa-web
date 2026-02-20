"use client";

import { useState, useEffect, useRef } from "react";
import { faqFinancingCopy } from "@/content/financing.en";

export default function FAQFinancing() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            faqFinancingCopy.questions.forEach((_, i) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, i]);
              }, 200 + i * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F3EFEA] px-6 py-16 text-black"
    >
      <div className="relative z-10 mx-auto max-w-3xl">

        {/* Header */}
        <div
          className={`mb-3 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {faqFinancingCopy.title}
          </h2>
        </div>

        {/* Underline */}
        <div
          className={`mb-12 flex justify-center transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="h-px w-12 bg-[#5A0F14]" />
        </div>

        {/* FAQ List — style B2B timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute bottom-8 left-[11px] top-8 w-px bg-black/8" />

          {faqFinancingCopy.questions.map((item, index) => {
            const isOpen = openId === item.id;
            const isLast = index === faqFinancingCopy.questions.length - 1;
            const isItemVisible = visibleItems.includes(index);

            return (
              <div
                key={item.id}
                className={`relative transition-all duration-500 ${
                  !isLast ? "mb-4" : ""
                } ${
                  isItemVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isItemVisible ? `${index * 80}ms` : "0ms",
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-5 z-10">
                  <div
                    className={`h-6 w-6 rounded-full border-2 shadow-sm transition-all duration-300 ${
                      isOpen
                        ? "scale-110 border-[#5A0F14] bg-[#5A0F14] shadow-[0_0_12px_rgba(90,15,20,0.3)]"
                        : "scale-100 border-black/20 bg-white"
                    }`}
                  >
                    {isOpen && (
                      <div className="absolute inset-1 rounded-full bg-white/30" />
                    )}
                  </div>
                </div>

                {/* Question card */}
                <div
                  className={`ml-12 overflow-hidden rounded-lg border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#5A0F14]/30 shadow-md"
                      : "border-black/8 shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[15px] leading-snug tracking-wide transition-colors duration-300 ${
                        isOpen ? "font-normal text-black" : "font-light text-black/85"
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* + → × */}
                    <div
                      className="relative h-6 w-6 flex-shrink-0"
                      style={{
                        transition: "transform 0.3s ease",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <span
                        className="absolute left-1/2 top-1/2 h-px w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-sm transition-colors duration-300"
                        style={{ background: isOpen ? "#5A0F14" : "rgba(0,0,0,0.4)" }}
                      />
                      <span
                        className="absolute left-1/2 top-1/2 h-[14px] w-px -translate-x-1/2 -translate-y-1/2 rounded-sm transition-colors duration-300"
                        style={{ background: isOpen ? "#5A0F14" : "rgba(0,0,0,0.4)" }}
                      />
                    </div>
                  </button>

                  {/* Answer — grid-rows trick, fiable iOS Safari */}
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-6 pb-6 transition-all duration-300 ${
                          isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                        }`}
                        style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
                      >
                        <p className="text-[13px] font-light leading-relaxed tracking-wide text-black/70">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Burgundy bottom line */}
                  <div
                    className="h-px bg-[#5A0F14] transition-all duration-500"
                    style={{ width: isOpen ? "100%" : "0%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}