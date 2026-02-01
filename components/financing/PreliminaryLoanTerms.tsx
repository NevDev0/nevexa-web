"use client";

import { preliminaryLoanTermsCopy } from "@/content/financing.en";

export default function PreliminaryLoanTerms() {
  return (
    <section className="w-full bg-black px-6 py-14 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-200">
            {preliminaryLoanTermsCopy.title}
          </h2>
        </div>

        {/* Underline accent rouge */}
        <div className="mb-4 flex flex-col items-center">
          <div className="mx-auto -mt-1 mb-2 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Subtitle */}
        <p className="mb-12 text-center text-sm italic text-neutral-500">
          {preliminaryLoanTermsCopy.subtitle}
        </p>

        {/* BLOC 1 : LOAN TERMS OVERVIEW (format tabulaire) */}
        <div className="mb-8 overflow-hidden rounded-lg border border-white/10">
          {/* Header du bloc */}
          <div className="border-b border-white/10 bg-neutral-900 px-6 py-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Loan Terms Overview
            </h3>
          </div>

          {/* Contenu tabulaire */}
          <div className="divide-y divide-white/5 bg-neutral-950">
            {/* Duration */}
            <div className="px-6 py-4">
              <div className="mb-2 text-sm font-medium text-neutral-400">
                Duration
              </div>
              <div className="mb-2 text-lg font-semibold text-white">
                12 to 48 months
              </div>
              <div className="text-sm text-neutral-500">
                → Depending on vehicle value and borrower profile
              </div>
            </div>

            {/* Down Payment */}
            <div className="px-6 py-4">
              <div className="mb-2 text-sm font-medium text-neutral-400">
                Down Payment
              </div>
              <div className="mb-2 text-lg font-semibold text-white">
                20-30% minimum
              </div>
              <div className="space-y-1 text-sm text-neutral-500">
                <div>→ Minimum 20-30% of vehicle value required upfront</div>
                <div>→ Remainder financed through banking partner</div>
              </div>
            </div>

            {/* Interest Rates */}
            <div className="px-6 py-4">
              <div className="mb-2 text-sm font-medium text-neutral-400">
                Interest Rates
              </div>
              <div className="mb-2 text-lg font-semibold text-white">
                8-18% APR
              </div>
              <div className="space-y-1 text-sm text-neutral-500">
                <div>→ Annual percentage rate (indicative)</div>
                <div>→ Final rate determined by banking partner after credit assessment</div>
                <div>→ Rates vary by country, creditworthiness, and market conditions</div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOC 2 : MONTHLY PAYMENT EXAMPLE (card stylisée - garde l'original) */}
        <div className="mb-8 overflow-hidden rounded-lg border border-white/10">
          {/* Header */}
          <div className="border-b border-white/10 bg-neutral-900 px-6 py-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Monthly Payment Example
            </h3>
          </div>

          {/* Contenu */}
          <div className="bg-neutral-950 p-6">
            {/* Calcul détaillé */}
            <div className="mb-4 space-y-2 rounded border border-white/5 bg-black/30 p-4 font-mono text-sm">
              <div className="flex justify-between text-neutral-400">
                <span>Vehicle:</span>
                <span className="text-white">
                  {preliminaryLoanTermsCopy.terms[3].calculation?.vehicle}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Down payment:</span>
                <span className="text-white">
                  {preliminaryLoanTermsCopy.terms[3].calculation?.downPayment}{" "}
                  <span className="text-xs text-neutral-500">
                    ({preliminaryLoanTermsCopy.terms[3].calculation?.downPaymentPercent})
                  </span>
                </span>
              </div>
              <div className="my-2 h-px bg-white/10" />
              <div className="flex justify-between text-neutral-400">
                <span>Loan amount:</span>
                <span className="text-white">
                  {preliminaryLoanTermsCopy.terms[3].calculation?.loanAmount}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Term:</span>
                <span className="text-white">
                  {preliminaryLoanTermsCopy.terms[3].calculation?.term}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Interest rate:</span>
                <span className="text-white">
                  {preliminaryLoanTermsCopy.terms[3].calculation?.interestRate}
                </span>
              </div>
            </div>

            {/* Résultat final */}
            <div className="flex items-center gap-3 rounded border border-[#5A0F14]/30 bg-[#5A0F14]/10 p-4">
              <span className="text-sm font-medium text-neutral-400">
                Estimated monthly payment:
              </span>
              <span className="text-2xl font-semibold text-white">
                {preliminaryLoanTermsCopy.terms[3].calculation?.estimatedMonthly}
              </span>
            </div>
          </div>
        </div>

        {/* BLOC 3 : ELIGIBILITY CRITERIA */}
        <div className="mb-8 overflow-hidden rounded-lg border border-white/10">
          {/* Header */}
          <div className="border-b border-white/10 bg-neutral-900 px-6 py-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Eligibility Criteria (Preliminary)
            </h3>
          </div>

          {/* Contenu */}
          <div className="bg-neutral-950 px-6 py-4">
            <ul className="space-y-2">
              {preliminaryLoanTermsCopy.terms[4].details?.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm leading-relaxed text-neutral-400"
                >
                  <span className="-mt-0.5 text-[#5A0F14]">→</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DISCLAIMER — Card dédiée bordure rouge (garde l'original) */}
        <div className="rounded-lg border-2 border-[#5A0F14] bg-[#5A0F14]/5 p-6">
          <div className="flex items-start gap-3">
            {/* Warning icon SVG */}
            <div className="mt-0.5 flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#5A0F14]"
              >
                <path
                  d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Disclaimer text */}
            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#5A0F14]">
                Important Disclaimer
              </h4>
              <p className="text-sm leading-relaxed text-neutral-400">
                {preliminaryLoanTermsCopy.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}