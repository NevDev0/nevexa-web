import { pricingFramework } from "@/content/b2b.en";

export default function PricingFramework() {
  return (
    <section className="w-full bg-black px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Title + Underline */}
        <div className="mb-12 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.18em] text-neutral-200">
            {pricingFramework.title}
          </h2>
          <div className="mx-auto mt-2 mb-6 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* 3 Tiers Grid — Mobile: stack, Desktop: 3 columns */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {pricingFramework.tiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-lg border border-white/10 bg-neutral-900 p-8 text-center"
            >
              {/* Badge Volume */}
              <div className="mb-6 inline-block rounded-full border border-[#5A0F14] bg-[#5A0F14]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-200">
                {tier.volume}
              </div>

              {/* Icon Placeholder */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 text-sm font-bold text-white">
                {tier.iconPlaceholder}
              </div>

              {/* Tier Name */}
              <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">
                {tier.name}
              </h3>

              {/* Features List */}
              <ul className="mb-6 space-y-3">
                {tier.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm leading-relaxed text-neutral-400 sm:text-base"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="mx-auto mb-6 h-px w-16 bg-white/10" />

              {/* Ideal For */}
              <p className="text-sm text-neutral-400 sm:text-base">
                {tier.idealFor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}