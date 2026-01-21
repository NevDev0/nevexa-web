// components/DeliveryOptions.tsx
import { deliveryOptionsCopy } from "../content/en";

export default function DeliveryOptions() {
  const { label, intro, options } = deliveryOptionsCopy;

  return (
    <section className="w-full bg-black px-4 py-16 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-neutral-300">
            {label}
          </p>

          {/* Underline accent (#5A0F14) */}
          <div className="mx-auto mt-2 h-px w-10 bg-[#5A0F14]" />

          {/* Intro text */}
          {intro && (
            <p className="mx-auto mt-4 max-w-md text-sm text-neutral-300 sm:text-base">
              {intro}
            </p>
          )}
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {options.map((option) => (
            <article
              key={option.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-4">
                {/* Slot icône (placeholder) */}
                <div className="h-12 w-12 flex-shrink-0 rounded-xl border border-white/15 bg-gradient-to-b from-white/10 to-transparent" />

                <div>
                  {/* Micro tag */}
                  <p className="mb-1 text-xs uppercase tracking-widest text-neutral-500">
                    {option.id === "port-to-port"
                      ? "Most common setup"
                      : "Turnkey where available"}
                  </p>

                  <h3 className="mb-1 text-base font-semibold text-white sm:text-lg">
                    {option.title}
                  </h3>

                  <p className="text-sm text-neutral-400">
                    {option.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
