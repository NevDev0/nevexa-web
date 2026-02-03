"use client";

import { useState } from "react";
import { whyImportCopy } from "@/content/en";

export default function WhyImport() {
  // State: quel accordion est ouvert? (null = tous fermés)
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="why-import" 
      className="w-full bg-[#F2F2F2] px-6 py-16 text-black"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Title - PLUS IMPOSANT */}
        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {whyImportCopy.title}
          </h2>
        </div>

        {/* Underline accent (#5A0F14) */}
        <div className="mb-8 flex justify-center">
          <div className="h-px w-20 bg-[#5A0F14]" />
        </div>

        {/* Intro courte - PLUS VISIBLE */}
        <p className="mb-8 text-center text-lg font-medium text-neutral-800 sm:text-xl">
          {whyImportCopy.intro}
        </p>

        {/* Accordions */}
        <div className="space-y-0">
          {whyImportCopy.accordions.map((accordion, index) => {
            const isOpen = openId === accordion.id;
            const isLast = index === whyImportCopy.accordions.length - 1;

            return (
              <div key={accordion.id}>
                {/* Accordion Header (cliquable) - PLUS BOLD */}
                <button
                  onClick={() => toggleAccordion(accordion.id)}
                  className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#5A0F14]"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold sm:text-xl">
                    {accordion.title}
                  </span>
                  
                  {/* Icône +/− avec rotation */}
                  <span 
                    className="text-3xl font-light transition-transform duration-300"
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Accordion Content (expandable) */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="pb-6 pr-12">
                    <p className="text-base leading-relaxed text-neutral-700">
                      {accordion.content}
                    </p>
                  </div>
                </div>

                {/* Divider (sauf pour le dernier item) */}
                {!isLast && (
                  <div className="h-px bg-neutral-200" />
                )}
              </div>
            );
          })}
        </div>

        {/* Divider final (ferme la section proprement) */}
        <div className="mt-0 h-px bg-neutral-200" />
      </div>
    </section>
  );
}