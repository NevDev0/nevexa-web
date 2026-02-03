"use client";

import Link from "next/link";
import { choosePathCopy } from "@/content/en";

export default function ChoosePath() {
  return (
    <section className="relative w-full bg-black px-6 pb-24 pt-16 text-white">
      {/* Gradient de transition en bas (noir → transparent) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F2F2F2]" />
      
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {choosePathCopy.label}
          </h2>
        </div>

        {/* Underline accent (#5A0F14) */}
        <div className="mb-12 flex justify-center">
          <div className="h-px w-20 bg-[#5A0F14]" />
        </div>

        {/* Cards Grid - Mobile: 1 col, Desktop: 3 cols */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {choosePathCopy.cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative block h-72 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              />

              {/* Overlay Gradient (bottom dark) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

              {/* Badge EARLY ACCESS (top-right) */}
              {card.badge && (
                <div className="absolute right-4 top-4 z-10 rounded-full bg-[#5A0F14] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                  {card.badge}
                </div>
              )}

              {/* Content (bottom-left) */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {card.title}
                </h3>

                {/* CTA Button */}
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  {card.ctaLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}