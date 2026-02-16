"use client";

import { useState } from "react";
import { faqFinancingCopy } from "@/content/financing.en";

export default function FAQFinancing() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#F3EFEA]/95 px-6 py-16 text-black">
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {faqFinancingCopy.title}
          </h2>
        </div>

        {/* Underline */}
        <div className="mb-12 flex justify-center">
          <div className="h-px w-12 bg-[#5A0F14]" />
        </div>

        {/* FAQ List - Minimal Accordion Style */}
        <div className="space-y-0">
          {faqFinancingCopy.questions.map((item, index) => {
            const isOpen = openId === item.id;
            const isFirst = index === 0;

            return (
              <div
                key={item.id}
                className={`border-black/10 ${
                  isFirst ? "border-t" : ""
                } border-b transition-all duration-300 ${
                  isOpen ? "bg-white/30" : "bg-transparent hover:bg-white/20"
                }`}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left transition-all duration-300"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[16px] leading-snug tracking-wide transition-all duration-300 ${
                      isOpen
                        ? "font-medium text-black"
                        : "font-normal text-black/85"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* + → × icon */}
                  <div
                    className="relative h-6 w-6 flex-shrink-0 transition-transform duration-400"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    {/* Horizontal */}
                    <span
                      className={`absolute left-1/2 top-1/2 h-[1.5px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-sm transition-colors duration-300 ${
                        isOpen ? "bg-[#5A0F14]" : "bg-black/40"
                      }`}
                    />
                    {/* Vertical */}
                    <span
                      className={`absolute left-1/2 top-1/2 h-[14px] w-[1.5px] -translate-x-1/2 -translate-y-1/2 rounded-sm transition-colors duration-300 ${
                        isOpen ? "bg-[#5A0F14]" : "bg-black/40"
                      }`}
                    />
                  </div>
                </button>

                {/* Answer - Simple slide down */}
                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="pb-6 pr-12">
                    <p className="text-[14px] leading-relaxed text-black/70">
                      {item.answer}
                    </p>
                  </div>
                </div>

                {/* Active burgundy bottom line */}
                {isOpen && (
                  <div className="h-px w-full bg-[#5A0F14] transition-all duration-400" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}