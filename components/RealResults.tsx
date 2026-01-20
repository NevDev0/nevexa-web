import Image from "next/image";
import { results } from "../data/results";

export default function RealResults() {
  if (!results || results.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-black px-4 py-18 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-neutral-300">
            Real Results
          </p>
        </div>

        {/* Mobile: horizontal carousel (swipeable) */}
        <div className="md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {results.map((item) => (
              <figure
                key={item.id}
                className="snap-start min-w-[80%] rounded-2xl border border-white/10 bg-white/5 p-3"
              >
                <div className="relative mb-3 h-48 w-full overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-sm text-neutral-300">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Desktop: simple grid (≤ 3 items) */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4">
          {results.map((item) => (
            <figure
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-3"
            >
              <div className="relative mb-3 h-40 w-full overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-neutral-300">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
