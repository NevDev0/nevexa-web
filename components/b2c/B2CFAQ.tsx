"use client";

import { useState } from "react";
import { faqCopy } from "@/content/b2c.en";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#111111] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {faqCopy.title}
          </h2>
        </div>

        {/* Underline */}
        <div className="mb-12 flex justify-center">
          <div className="h-px w-12 bg-[#5A0F14]" />
        </div>

        {/* FAQ List */}
        <div>
          {faqCopy.questions.map((item, index) => {
            const isOpen = openId === item.id;
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`relative overflow-hidden border-b border-white/7 ${
                  index === 0 ? "border-t border-white/7" : ""
                }`}
              >
                {/* Background number */}
                <div
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-0 select-none text-[100px] font-bold leading-none tracking-tighter transition-all duration-500"
                  style={{
                    color: isOpen
                      ? "rgba(90,15,20,0.12)"
                      : "rgba(255,255,255,0.03)",
                    transform: isOpen
                      ? "translateY(-55%) scale(1.05)"
                      : "translateY(-50%) scale(1)",
                  }}
                >
                  {num}
                </div>

                {/* Question row */}
                <button
                  onClick={() => toggle(item.id)}
                  className="relative z-10 flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[15px] leading-snug tracking-wide transition-colors duration-300"
                    style={{
                      fontWeight: 300,
                      color: isOpen
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.75)",
                    }}
                  >
                    {item.question}
                  </span>

                  {/* + → × icon */}
                  <div
                    className="relative h-6 w-6 flex-shrink-0 transition-transform duration-400"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    {/* Horizontal */}
                    <span
                      className="absolute left-1/2 top-1/2 h-[1.5px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-sm transition-colors duration-300"
                      style={{ background: isOpen ? "#5A0F14" : "rgba(255,255,255,0.4)" }}
                    />
                    {/* Vertical */}
                    <span
                      className="absolute left-1/2 top-1/2 h-[14px] w-[1.5px] -translate-x-1/2 -translate-y-1/2 rounded-sm transition-colors duration-300"
                      style={{ background: isOpen ? "#5A0F14" : "rgba(255,255,255,0.4)" }}
                    />
                  </div>
                </button>

                {/* Answer — smooth height */}
                <div
                  className="relative z-10 overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? "400px" : "0px" }}
                >
                  <div className="pb-6">
                    <p
                      className="text-[13px] leading-relaxed tracking-wide"
                      style={{
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {item.answer.split(" ").map((word, i) => (
                        <span
                          key={i}
                          className="inline-block transition-all duration-300"
                          style={{
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? "translateY(0)" : "translateY(6px)",
                            transitionDelay: isOpen
                              ? `${Math.min(i * 20, 440)}ms`
                              : "0ms",
                          }}
                        >
                          {word}&nbsp;
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Active burgundy line */}
                <div
                  className="absolute bottom-0 left-0 h-px bg-[#5A0F14] transition-all duration-500"
                  style={{ width: isOpen ? "100%" : "0%" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}