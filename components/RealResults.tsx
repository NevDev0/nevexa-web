// components/RealResults.tsx
import Image from "next/image";
import { results } from "../data/results";
import { realResultsCopy } from "../content/en";

export default function RealResults() {
  if (!results || results.length === 0) {
    return null;
  }

  const { label, intro } = realResultsCopy;

  return (
    <section className="w-full bg-black px-4 py-12 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-base font-semibold uppercase tracking-[0.30em] text-neutral-300">
            {label}
          </p>

          {/* Underline accent (#5A0F14) */}
          <div className="mx-auto mt-2 mb-6 h-px w-14 bg-[#5A0F14]" />

          {intro && (
            <p className="mx-auto mt-4 max-w-md text-sm text-neutral-300 sm:text-base">
              {intro}
            </p>
          )}
        </div>

        {/* Cards: simple grid, no horizontal scroll */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {results.map((item, index) => {
            const isLast = index === results.length - 1;

            return (
              <figure
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                {/* 3.1 — rythme vertical : image un peu plus haute sur la dernière carte */}
                <div
                  className={`relative mb-4 w-full overflow-hidden rounded-xl ${
                    isLast ? "h-44 md:h-48" : "h-40 md:h-44"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  {/* 3.3 — micro-tag plus discret */}
                  {item.tag && (
                    <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                      {item.tag}
                    </p>
                  )}

                  {/* 3.2 + 3.3 — caption plus affirmée, mieux détachée */}
                  <figcaption className="text-sm font-medium text-neutral-100">
                    {item.caption}
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
