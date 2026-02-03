"use client";

import { useState } from "react";
import { faqB2B } from "@/content/b2b.en";

export default function FAQB2B() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="w-full bg-[#F2F2F2] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Section Title + Underline */}
        <div className="mb-8 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.18em] text-neutral-900">
            {faqB2B.title}
          </h2>
          <div className="mx-auto mt-2 mb-6 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqB2B.questions.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-white/10 bg-neutral-900"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleQuestion(item.id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-white sm:text-base">
                  {item.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-xl text-white">
                  {openQuestion === item.id ? "−" : "+"}
                </span>
              </button>

              {/* Answer (conditional render) */}
              {openQuestion === item.id && (
                <div className="border-t border-white/10 px-6 py-4">
                  <p className="text-sm leading-relaxed text-neutral-100 sm:text-base">
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