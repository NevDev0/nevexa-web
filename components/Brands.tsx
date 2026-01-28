import { brandsCopy } from "../content/en";

export default function Brands() {
  // Duplique pour boucle infinie
  const loop = [...brandsCopy.logos, ...brandsCopy.logos];

  return (
    <section className="w-full bg-black px-6 pt-10 pb-14 text-white">
      {/* Title */}
      <div className="mb-6 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
          {brandsCopy.title}
        </h2>
      </div>
      {/* Underline accent (#5A0F14) */}
      <div className="mx-auto -mt-4 mb-10 h-px w-14 bg-[#5A0F14]" />

      {/* Marquee */}
      <div className="relative mb-4 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent" />

        <div className="nevexa-marquee-track gap-8 px-2">
          {loop.map((logo, idx) => (
            <div
              key={idx}
              className="flex h-12 w-[100px] items-center justify-center"
              title={logo.name}
              aria-label={logo.name}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  transform: `scale(${(logo as any).scale ?? 1})`,
                  transformOrigin: "center",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-6 max-w-[90px] object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal note */}
      <div className="text-center">
        <p className="mt-2 text-[9px] italic tracking-wide text-neutral-600">
          {brandsCopy.legalNote}
        </p>
      </div>
    </section>
  );
}
