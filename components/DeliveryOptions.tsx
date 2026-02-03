"use client";

import { deliveryOptionsCopy } from "@/content/en";

export default function DeliveryOptions() {
  const { label, intro, options } = deliveryOptionsCopy;

  return (
    <section className="relative min-h-[500px] w-full overflow-hidden px-6 py-20 text-white sm:min-h-[600px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/delivery/cargoshipdelivery.jpg)",
        }}
      />

      {/* Overlay Dark */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {label}
          </h2>
        </div>

        {/* Underline accent (#5A0F14) */}
        <div className="mb-6 flex justify-center">
          <div className="h-px w-20 bg-[#5A0F14]" />
        </div>

        {/* Intro text */}
        {intro && (
          <p className="mx-auto mb-16 max-w-2xl text-center text-base font-semibold leading-relaxed text-neutral-300 sm:text-lg">
            {intro}
          </p>
        )}

        {/* Options Grid - SANS CARDS MAIS AVEC BLUR ZONE */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {options.map((option) => {
            const isCommon = option.id === "port-to-port";
            
            return (
              <div key={option.id} className="relative text-center md:text-left">
                {/* Zone blur derrière le texte (invisible visuellement mais améliore lisibilité) */}
                <div className="absolute inset-0 -m-8 rounded-2xl bg-black/20 backdrop-blur-sm" />
                
                {/* Contenu par-dessus */}
                <div className="relative z-10">
                  {/* Badge avec icône pour "Most Common" */}
                  <div className="mb-4 flex justify-center md:justify-start">
                    {isCommon ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#5A0F14] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Most common
                      </span>
                    ) : (
                      <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Turnkey service
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                    {option.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-neutral-200 sm:text-lg">
                    {option.description}
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