"use client";

import { useEffect, useRef, useState } from "react";
import { faqFinancingCopy } from "@/content/financing.en";

export default function FAQFinancing() {
  const [visible, setVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F3EFEA]/90 px-6 py-12 text-black sm:py-16"
    >
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div
          className="mb-3 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease-out, transform 600ms ease-out",
          }}
        >
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {faqFinancingCopy.title}
          </h2>
        </div>

        {/* Underline */}
        <div className="mb-12 flex justify-center">
          <div
            className="h-px bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
            style={{
              width: visible ? "48px" : "0px",
              transition: "width 800ms ease-out",
              transitionDelay: "400ms",
            }}
          />
        </div>

        {/* Items */}
        <div className="flex flex-col">
          {faqFinancingCopy.questions.map((item, index) => {
            const isLast = index === faqFinancingCopy.questions.length - 1;
            const num = String(item.id).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`relative overflow-hidden py-8 ${
                  !isLast ? "border-b border-black/10" : ""
                } ${index === 0 ? "border-t border-black/10" : ""}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 600ms ease-out, transform 600ms ease-out",
                  transitionDelay: `${200 + index * 150}ms`,
                }}
              >
                {/* Numéro décoratif */}
                <div
                  className="pointer-events-none absolute right-0 top-1/2 select-none text-[80px] font-bold leading-none tracking-tighter sm:text-[110px]"
                  style={{
                    color: "rgba(90,15,20,0.06)",
                    transform: "translateY(-50%)",
                  }}
                >
                  {num}
                </div>

                {/* Contenu */}
                <div className="relative z-10">
                  <div className="mb-3 flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-[11px] font-bold uppercase tracking-widest text-[#5A0F14]">
                      {num}
                    </span>
                    <h3 className="text-[15px] font-semibold leading-snug tracking-wide text-black">
                      {item.question}
                    </h3>
                  </div>
                  <p className="pl-7 text-[13px] font-light leading-relaxed tracking-wide text-black/60">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}