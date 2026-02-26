"use client";

import { useEffect, useRef, useState } from "react";
import { faqB2B } from "@/content/b2b.en";

export default function FAQB2B() {
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
            faqB2B.questions.forEach((_, i) => {
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
      className="relative w-full bg-[#F3EFEA] px-6 py-12 text-black sm:py-16"
    >
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div
          className={`mb-3 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {faqB2B.title}
          </h2>
        </div>

        {/* Underline */}
        <div
          className={`mx-auto mb-10 h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="h-px w-12 bg-[#5A0F14]" />
        </div>

        {/* FAQ List */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute bottom-8 left-[11px] top-8 w-px bg-black/8" />

          {faqB2B.questions.map((item, index) => {
            const isOpen = openId === item.id;
            const isLast = index === faqB2B.questions.length - 1;
            const isItemVisible = visibleItems.includes(index);

            return (
              <div
                key={item.id}
                className={`relative transition-all duration-500 ${
                  !isLast ? "mb-6" : ""
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
                <div className="absolute left-0 top-6 z-10">
                  <div
                    className={`h-6 w-6 rounded-full border-2 shadow-sm transition-all duration-300 ${
                      isOpen
                        ? "scale-110 border-[#5A0F14] bg-[#5A0F14] shadow-[0_0_12px_rgba(90,15,20,0.4)]"
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
                  className={`group relative ml-12 cursor-pointer overflow-hidden rounded-lg border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#5A0F14]/30 shadow-md"
                      : "border-black/8 shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(item.id)}
                    className="relative z-10 flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[15px] leading-snug tracking-wide transition-colors duration-300 ${
                        isOpen ? "font-normal text-black" : "font-light text-black/90"
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* + → × icon */}
                    <div
                      className="relative h-6 w-6 flex-shrink-0 transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <span
                        className={`absolute left-1/2 top-1/2 h-[1.5px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-sm transition-colors duration-300 ${
                          isOpen ? "bg-[#5A0F14]" : "bg-black/40"
                        }`}
                      />
                      <span
                        className={`absolute left-1/2 top-1/2 h-[14px] w-[1.5px] -translate-x-1/2 -translate-y-1/2 rounded-sm transition-colors duration-300 ${
                          isOpen ? "bg-[#5A0F14]" : "bg-black/40"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Answer — simple fade-in, no word-by-word */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isOpen ? "400px" : "0px" }}
                  >
                    <div
                      className={`px-6 pb-6 transition-all duration-400 ${
                        isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                      }`}
                      style={{ transitionDelay: isOpen ? "150ms" : "0ms" }}
                    >
                      <p className="text-[13px] font-light leading-relaxed tracking-wide text-black/80">
                        {item.answer}
                      </p>
                    </div>
                  </div>

                  {/* Active burgundy bottom line */}
                  <div
                    className="absolute bottom-0 left-0 h-px bg-[#5A0F14] transition-all duration-500"
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