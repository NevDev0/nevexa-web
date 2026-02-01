import { b2bCapabilities } from "@/content/b2b.en";

export default function B2BCapabilities() {
  return (
    <section className="w-full bg-black px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Section Title + Underline */}
        <div className="mb-12 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.18em] text-neutral-200">
            {b2bCapabilities.title}
          </h2>
          <div className="mx-auto mt-2 mb-6 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Single Column Stack — Plus d'espace, focus sur contenu */}
        <div className="space-y-10">
          {b2bCapabilities.items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-white/10 border-t-[3px] border-t-[#5A0F14] bg-neutral-900 p-8"
            >
              {/* Title */}
              <h3 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}