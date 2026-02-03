"use client";

import { partnerApplicationCopy } from "@/content/partnership.en";
import { useState, useEffect } from "react";

export default function PartnerApplication() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 5000);
  };

  const FormContent = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {!isSubmitted ? (
        <>
          {/* Grid 2 colonnes desktop, stack mobile */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                {partnerApplicationCopy.fields.fullName.label}
                {partnerApplicationCopy.fields.fullName.required && (
                  <span className="text-[#5A0F14]"> *</span>
                )}
              </label>
              <input
                type="text"
                required={partnerApplicationCopy.fields.fullName.required}
                placeholder={partnerApplicationCopy.fields.fullName.placeholder}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              />
            </div>

            {/* Country */}
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                {partnerApplicationCopy.fields.country.label}
                {partnerApplicationCopy.fields.country.required && (
                  <span className="text-[#5A0F14]"> *</span>
                )}
              </label>
              <input
                type="text"
                required={partnerApplicationCopy.fields.country.required}
                placeholder={partnerApplicationCopy.fields.country.placeholder}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              />
            </div>

            {/* City */}
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                {partnerApplicationCopy.fields.city.label}
                {partnerApplicationCopy.fields.city.required && (
                  <span className="text-[#5A0F14]"> *</span>
                )}
              </label>
              <input
                type="text"
                required={partnerApplicationCopy.fields.city.required}
                placeholder={partnerApplicationCopy.fields.city.placeholder}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                {partnerApplicationCopy.fields.email.label}
                {partnerApplicationCopy.fields.email.required && (
                  <span className="text-[#5A0F14]"> *</span>
                )}
              </label>
              <input
                type="email"
                required={partnerApplicationCopy.fields.email.required}
                placeholder={partnerApplicationCopy.fields.email.placeholder}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                {partnerApplicationCopy.fields.whatsapp.label}
                {partnerApplicationCopy.fields.whatsapp.required && (
                  <span className="text-[#5A0F14]"> *</span>
                )}
              </label>
              <input
                type="tel"
                required={partnerApplicationCopy.fields.whatsapp.required}
                placeholder={partnerApplicationCopy.fields.whatsapp.placeholder}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              />
            </div>

            {/* Professional Profile */}
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                {partnerApplicationCopy.fields.professionalProfile.label}
                {partnerApplicationCopy.fields.professionalProfile.required && (
                  <span className="text-[#5A0F14]"> *</span>
                )}
              </label>
              <select
                required={partnerApplicationCopy.fields.professionalProfile.required}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              >
                {partnerApplicationCopy.fields.professionalProfile.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Your Network */}
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                {partnerApplicationCopy.fields.yourNetwork.label}
                {partnerApplicationCopy.fields.yourNetwork.required && (
                  <span className="text-[#5A0F14]"> *</span>
                )}
              </label>
              <select
                required={partnerApplicationCopy.fields.yourNetwork.required}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              >
                {partnerApplicationCopy.fields.yourNetwork.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Primary Channel */}
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                {partnerApplicationCopy.fields.primaryChannel.label}
                {partnerApplicationCopy.fields.primaryChannel.required && (
                  <span className="text-[#5A0F14]"> *</span>
                )}
              </label>
              <select
                required={partnerApplicationCopy.fields.primaryChannel.required}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              >
                {partnerApplicationCopy.fields.primaryChannel.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sample Lead Profile — Full width */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-300">
              {partnerApplicationCopy.fields.sampleLeadProfile.label}
              {partnerApplicationCopy.fields.sampleLeadProfile.required && (
                <span className="text-[#5A0F14]"> *</span>
              )}
            </label>
            <textarea
              required={partnerApplicationCopy.fields.sampleLeadProfile.required}
              placeholder={partnerApplicationCopy.fields.sampleLeadProfile.placeholder}
              maxLength={partnerApplicationCopy.fields.sampleLeadProfile.maxLength}
              rows={4}
              className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-[#5A0F14] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#7A0F14]"
            >
              {partnerApplicationCopy.submitButton}
            </button>
          </div>
        </>
      ) : (
        /* Success Message */
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-6 text-center">
          <p className="text-sm leading-relaxed text-green-300">
            {partnerApplicationCopy.successMessage}
          </p>
        </div>
      )}
    </form>
  );

  // Attendre le client-side avant de rendre
  if (!isMounted) {
    return null;
  }

  return (
    <section className="w-full bg-black px-6 -py-4 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-200">
            {partnerApplicationCopy.title}
          </h2>
        </div>

        {/* Underline accent rouge */}
        <div className="mb-6 flex flex-col items-center">
          <div className="mx-auto -mt-1 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Desktop : Formulaire inline */}
        <div className="hidden md:block">
          <FormContent />
        </div>

        {/* Mobile : Button trigger modal */}
        <div className="flex justify-center md:hidden">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-neutral-900 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/40"
          >
            <span>📝</span>
            <span>Submit Application</span>
          </button>
        </div>

        {/* Modal Mobile */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:hidden">
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-neutral-950 p-6">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-2xl text-white hover:text-[#5A0F14]"
              >
                ×
              </button>

              {/* Title Modal */}
              <h3 className="mb-6 text-center text-lg font-semibold uppercase tracking-wider text-white">
                {partnerApplicationCopy.title}
              </h3>

              {/* Form */}
              <FormContent />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}