"use client";

import { useState } from "react";
import { useCases } from "@/content/b2b.en";

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("revendeurs");

  // Trouve le contenu du tab actif
  const activeContent = useCases.tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="w-full bg-black px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Title + Underline */}
        <div className="mb-12 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.18em] text-neutral-200">
            {useCases.title}
          </h2>
          <div className="mx-auto mt-2 mb-6 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8 flex gap-4 overflow-x-auto border-b border-white/10 scrollbar-hide">
          {useCases.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 border-b-2 px-6 py-3 text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? "border-[#5A0F14] text-white"
                  : "border-transparent text-neutral-400 hover:text-neutral-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeContent && (
          <div className="mx-auto max-w-3xl">
            {/* Icon Placeholder */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 text-sm font-bold text-white">
              {activeContent.iconPlaceholder}
            </div>

            {/* Title */}
            <h3 className="mb-6 text-xl font-semibold text-white sm:text-2xl">
              {activeContent.title}
            </h3>

            {/* Besoin typique */}
            <div className="mb-6">
              <p className="mb-2 text-sm font-semibold text-neutral-300">
                {activeContent.needTitle}
              </p>
              <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                "{activeContent.needText}"
              </p>
            </div>

            {/* Ce que Nevexa apporte */}
            <div className="mb-6">
              <p className="mb-3 text-sm font-semibold text-neutral-300">
                {activeContent.valueTitle}
              </p>
              <ul className="space-y-2">
                {activeContent.valuePoints.map((point, index) => (
                  <li
                    key={index}
                    className="text-sm leading-relaxed text-neutral-400 sm:text-base"
                  >
                    - {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Volume idéal */}
            <div>
              <p className="mb-2 text-sm font-semibold text-neutral-300">
                {activeContent.volumeTitle}
              </p>
              <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                {activeContent.volumeText}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}