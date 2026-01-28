import { whyImportCopy } from "@/content/en";

export default function WhyImport() {
  return (
    <section id="why-import" className="w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-2 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-200">
            {whyImportCopy.title}
          </h2>
        </div>

        {/* Underline accent (#5A0F14) */}
        <div className="mb-6 flex flex-col items-center">
          <div className="mx-auto -mt-1 mb-6 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Intro */}
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-neutral-300 sm:text-base">
          {whyImportCopy.intro}
        </p>

        {/* Grid 3 Arguments (1 col mobile / 3 cols desktop) */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {whyImportCopy.arguments.map((arg) => (
            <div key={arg.id} className="flex flex-col">
              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-white">
                {arg.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-neutral-400">
                {arg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}