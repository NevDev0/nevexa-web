import Link from "next/link";
import { importAdvantageCopy } from "@/content/b2c.en";

export default function ImportAdvantage() {
  return (
    <section className="w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-2xl">
        {/* Section Title */}
        <div className="mb-2 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-300">
            {importAdvantageCopy.title}
          </h2>
        </div>

        {/* Underline accent (#5A0F14) */}
        <div className="mb-6 flex flex-col items-center">
          <div className="mx-auto mt-1 mb-6 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* 3 Points */}
        <ul className="mb-6 space-y-3">
          {importAdvantageCopy.points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              {/* Bullet point */}
              <span className="mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
              <span className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* Link to Homepage */}
        <div className="text-center">
          <Link
            href={importAdvantageCopy.linkHref}
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white"
          >
            {importAdvantageCopy.linkText}
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}