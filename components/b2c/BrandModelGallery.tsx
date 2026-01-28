"use client";

import { useState } from "react";
import { brandModelGallery } from "@/content/b2c.en";

type BrandId = keyof typeof brandModelGallery.models;

export default function BrandModelGallery() {
  const [activeBrand, setActiveBrand] = useState<BrandId>("land-rover");

  const activeModels = brandModelGallery.models[activeBrand] || [];
  const currentBrandIndex = brandModelGallery.brands.findIndex(
    (b) => b.id === activeBrand
  );

  const handlePrev = () => {
    const prevIndex =
      currentBrandIndex === 0
        ? brandModelGallery.brands.length - 1
        : currentBrandIndex - 1;
    setActiveBrand(brandModelGallery.brands[prevIndex].id as BrandId);
  };

  const handleNext = () => {
    const nextIndex =
      currentBrandIndex === brandModelGallery.brands.length - 1
        ? 0
        : currentBrandIndex + 1;
    setActiveBrand(brandModelGallery.brands[nextIndex].id as BrandId);
  };

  const handleModalOpen = () => {
    // TODO: Wire to contact modal
    console.log("Open contact modal");
  };

  return (
    <section className="w-full bg-black -mt-8 px-4 py-16 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-300">
            Inspirational Catalog
          </p>
          {/* Underline accent (#5A0F14) */}
          <div className="mx-auto mt-2 mb-6 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Badge */}
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full border border-[#5A0F14] bg-[#5A0F14]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
            {brandModelGallery.badge}
          </span>
        </div>

        {/* Brand Selector with Prev/Next */}
        <div className="relative mb-12 px-12">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black text-white"
            aria-label="Previous brand"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Brand Selector Container with Fade Edges */}
          <div className="relative">
            {/* Left fade edge */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-black to-transparent" />
            
            {/* Right fade edge */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-black to-transparent" />

            {/* Scrollable brand buttons */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {brandModelGallery.brands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => setActiveBrand(brand.id as BrandId)}
                  className={`flex-shrink-0 rounded-lg border px-6 py-3 text-sm font-semibold ${
                    activeBrand === brand.id
                      ? "border-[#5A0F14] bg-[#5A0F14]/10 text-white"
                      : "border-white/20 bg-transparent text-neutral-400"
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black text-white"
            aria-label="Next brand"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Model Cards Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activeModels.map((model) => (
            <div
              key={model.id}
              className="overflow-hidden rounded-lg border border-white/10 bg-neutral-900"
            >
              {/* Placeholder Image with color */}
              <div
                className="flex h-48 w-full items-center justify-center text-xs uppercase tracking-wider text-white/30"
                style={{ backgroundColor: model.placeholderColor }}
              >
                {model.name}
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Model Name */}
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {model.name}
                </h3>

                {/* Year */}
                <p className="mb-2 text-xs text-neutral-400">{model.year}</p>

                {/* Price */}
                <p className="mb-4 text-sm font-semibold text-white">
                  {model.price}
                </p>

                {/* CTA */}
                <button
                  onClick={handleModalOpen}
                  className="w-full rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
                >
                  Request this model
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Sourcing CTA */}
        <div className="mb-8 text-center">
          <p className="mb-4 text-sm text-neutral-400">
            {brandModelGallery.customSourcingCta.text}
          </p>
          <button
            onClick={handleModalOpen}
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black"
          >
            {brandModelGallery.customSourcingCta.buttonLabel}
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-neutral-500">
          {brandModelGallery.disclaimer}
        </p>
      </div>
    </section>
  );
}