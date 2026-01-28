"use client";

import { useState } from "react";
import { faqCopy } from "@/content/b2c.en";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Section Title */}
        <div className="mb-2 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-300">
            {faqCopy.title}
          </h2>
        </div>

        {/* Underline accent (#5A0F14) */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mx-auto mt-1 mb-4 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqCopy.questions.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg border border-white/10 bg-neutral-900"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleQuestion(item.id)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={openId === item.id}
              >
                <span className="text-base font-semibold text-white sm:text-lg">
                  {item.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-xl text-white">
                  {openId === item.id ? "−" : "+"}
                </span>
              </button>

              {/* Answer (expanded) */}
              {openId === item.id && (
                <div className="border-t border-white/10 px-5 py-4">
                  <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}