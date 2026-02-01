"use client";

import { commissionStructureCopy } from "@/content/partnership.en";

export default function CommissionStructure() {
  return (
    <section className="w-full bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-200">
            {commissionStructureCopy.title}
          </h2>
        </div>

        {/* Underline accent rouge */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mx-auto -mt-1 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Tableau Commission */}
        <div className="mb-8 overflow-hidden rounded-lg border border-white/10 bg-neutral-950">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-white/10 bg-neutral-900">
            <div className="border-r border-white/10 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-300">
                Category
              </p>
            </div>
            <div className="border-r border-white/10 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-300">
                Vehicle Value
              </p>
            </div>
            <div className="px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-300">
                Commission
              </p>
            </div>
          </div>

          {/* Table Rows */}
          {commissionStructureCopy.table.map((row, index) => (
            <div
              key={row.category}
              className={`grid grid-cols-3 ${
                index < commissionStructureCopy.table.length - 1
                  ? "border-b border-white/5"
                  : ""
              }`}
            >
              <div className="border-r border-white/10 px-4 py-4">
                <p className="text-sm font-semibold text-white">
                  {row.category}
                </p>
              </div>
              <div className="border-r border-white/10 px-4 py-4">
                <p className="text-sm text-neutral-300">{row.vehicleValue}</p>
              </div>
              <div className="px-4 py-4">
                <p className="text-sm font-medium text-white">
                  {row.commission}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Terms */}
        <div className="mb-8 rounded-lg border border-white/10 bg-neutral-950 p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {commissionStructureCopy.paymentTerms.title}
          </h3>
          <ul className="space-y-2">
            {commissionStructureCopy.paymentTerms.terms.map((term, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm leading-relaxed text-neutral-300"
              >
                <span className="-mt-0.5 text-neutral-500">•</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Method */}
        <div className="mb-8 rounded-lg border border-white/10 bg-neutral-950 p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {commissionStructureCopy.paymentMethod.title}
          </h3>
          <ul className="space-y-2">
            {commissionStructureCopy.paymentMethod.methods.map((method, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm leading-relaxed text-neutral-300"
              >
                <span className="-mt-0.5 text-[#5A0F14]">→</span>
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Note */}
        <div className="rounded-lg border border-white/10 bg-neutral-900 p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
            Legal Note:
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-300">
            {commissionStructureCopy.legalNote}
          </p>
        </div>
      </div>
    </section>
  );
}