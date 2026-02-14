"use client";

import { valuePropsCopy } from "@/content/en";

export default function ValueProposition() {
  return (
    <section className="w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {valuePropsCopy.title}
          </h2>
        </div>

        {/* Trust line + Underline */}
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-2 text-sm font-semibold text-white sm:text-base">
            {valuePropsCopy.trustLine}
          </p>
          <div className="h-px w-20 bg-[#5A0F14]" />
        </div>

        {/* Timeline Steps avec Images Background */}
        <div className="relative space-y-6">
          {valuePropsCopy.steps.map((step, index) => {
            const isLast = index === valuePropsCopy.steps.length - 1;

            return (
              <div key={step.id} className="relative">
                {/* Step Card avec Background Image */}
                <div
                  className="group relative overflow-hidden rounded-lg border border-white/15 transition-all duration-300 hover:scale-[1.02] hover:border-white/25"
                  style={{
                    backgroundImage: `url(${step.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "140px",
                  }}
                >
                  {/* Overlay dark + blur */}
                  <div
                    className="absolute inset-0 bg-black/75 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/70"
                  />

                  {/* Content */}
                  <div className="relative z-10 flex items-start gap-4 p-6">
                    {/* Timeline Dot + Line */}
                    <div className="relative flex flex-col items-center">
                      {/* Dot */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5A0F14] text-sm font-bold">
                        {step.id}
                      </div>

                      {/* Vertical Line (sauf pour le dernier step) */}
                      {!isLast && (
                        <div className="mt-2 h-[calc(100%+24px)] w-px bg-white/20" />
                      )}
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                        {step.label}
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-200 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}