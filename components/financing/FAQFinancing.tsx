"use client";

import { useEffect, useRef, useState } from "react";
import { faqFinancingCopy } from "@/content/financing.en";

export default function FAQFinancing() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          faqFinancingCopy.questions.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, 200 + i * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
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
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {faqFinancingCopy.title}
          </h2>
        </div>

        {/* Underline */}
        <div className="mb-12 flex justify-center">
          <div
            className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
            style={{
              width: isVisible ? "48px" : "0px",
              transition: "width 600ms ease 200ms",
            }}
          />
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col">
          {faqFinancingCopy.questions.map((item, index) => {
            const isItemVisible = visibleItems.includes(index);
            const isLast = index === faqFinancingCopy.questions.length - 1;
            const num = String(item.id).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`relative overflow-hidden py-8 ${!isLast ? "border-b border-black/10" : ""} ${index === 0 ? "border-t border-black/10" : ""}`}
                style={{
                  opacity: isItemVisible ? 1 : 0,
                  transform: isItemVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 600ms ease, transform 600ms ease",
                }}
              >
                {/* Large background number */}
                <div
                  className="pointer-events-none absolute right-0 top-1/2 select-none text-[110px] font-bold leading-none tracking-tighter"
                  style={{
                    color: "rgba(90,15,20,0.06)",
                    transform: "translateY(-50%)",
                  }}
                >
                  {num}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Number label + Question */}
                  <div className="mb-3 flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: "#5A0F14" }}
                    >
                      {num}
                    </span>
                    <h3 className="text-[15px] font-semibold leading-snug tracking-wide text-black">
                      {item.question}
                    </h3>
                  </div>

                  {/* Answer */}
                  <p
                    className="pl-7 text-[13px] leading-relaxed tracking-wide"
                    style={{ fontWeight: 300, color: "rgba(0,0,0,0.6)" }}
                  >
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