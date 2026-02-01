"use client";

import { useState, FormEvent } from "react";
import { waitlistFormCopy } from "@/content/financing.en";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    clientType: "",
    estimatedBudget: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulation backend (console.log)
    console.log("=== WAITLIST FORM SUBMISSION ===");
    console.log("Full Name:", formData.fullName);
    console.log("Email:", formData.email);
    console.log("Country:", formData.country);
    console.log("Client Type:", formData.clientType);
    console.log("Estimated Budget:", formData.estimatedBudget);
    console.log("Timestamp:", new Date().toISOString());
    console.log("================================");

    // Afficher le message de succès
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Success state - remplace le formulaire
  if (submitted) {
    return (
      <section className="w-full bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-2xl">
          {/* Section Title */}
          <div className="mb-2 text-center">
            <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-200">
              {waitlistFormCopy.title}
            </h2>
          </div>

          {/* Underline accent rouge */}
          <div className="mb-12 flex flex-col items-center">
            <div className="mx-auto -mt-1 mb-6 h-px w-18 bg-[#5A0F14]" />
          </div>

          {/* Success message */}
          <div className="rounded-lg border border-[#5A0F14]/30 bg-[#5A0F14]/10 p-8 text-center">
            {/* Checkmark icon */}
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#5A0F14] bg-[#5A0F14]/20">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#5A0F14]"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Success message text */}
            <h3 className="mb-3 text-xl font-semibold text-white">
              You're on the Waitlist!
            </h3>
            <p className="text-sm leading-relaxed text-neutral-300">
              {waitlistFormCopy.successMessage}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Form state - formulaire actif
  return (
    <section className="w-full bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-2xl">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neutral-200">
            {waitlistFormCopy.title}
          </h2>
        </div>

        {/* Underline accent rouge */}
        <div className="mb-6 flex flex-col items-center">
          <div className="mx-auto -mt-1 mb-6 h-px w-18 bg-[#5A0F14]" />
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Grid 2 colonnes desktop, stack mobile */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                {waitlistFormCopy.fields.fullName.label}
                {waitlistFormCopy.fields.fullName.required && (
                  <span className="ml-1 text-[#5A0F14]">*</span>
                )}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={waitlistFormCopy.fields.fullName.placeholder}
                required={waitlistFormCopy.fields.fullName.required}
                className="w-full rounded border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                {waitlistFormCopy.fields.email.label}
                {waitlistFormCopy.fields.email.required && (
                  <span className="ml-1 text-[#5A0F14]">*</span>
                )}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={waitlistFormCopy.fields.email.placeholder}
                required={waitlistFormCopy.fields.email.required}
                className="w-full rounded border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              />
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                {waitlistFormCopy.fields.country.label}
                {waitlistFormCopy.fields.country.required && (
                  <span className="ml-1 text-[#5A0F14]">*</span>
                )}
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder={waitlistFormCopy.fields.country.placeholder}
                required={waitlistFormCopy.fields.country.required}
                className="w-full rounded border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              />
            </div>

            {/* Client Type */}
            <div>
              <label
                htmlFor="clientType"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                {waitlistFormCopy.fields.clientType.label}
                {waitlistFormCopy.fields.clientType.required && (
                  <span className="ml-1 text-[#5A0F14]">*</span>
                )}
              </label>
              <select
                id="clientType"
                name="clientType"
                value={formData.clientType}
                onChange={handleChange}
                required={waitlistFormCopy.fields.clientType.required}
                className="w-full rounded border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
              >
                {waitlistFormCopy.fields.clientType.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Estimated Budget - Full width */}
          <div>
            <label
              htmlFor="estimatedBudget"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              {waitlistFormCopy.fields.estimatedBudget.label}
              {waitlistFormCopy.fields.estimatedBudget.required && (
                <span className="ml-1 text-[#5A0F14]">*</span>
              )}
            </label>
            <select
              id="estimatedBudget"
              name="estimatedBudget"
              value={formData.estimatedBudget}
              onChange={handleChange}
              required={waitlistFormCopy.fields.estimatedBudget.required}
              className="w-full rounded border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white focus:border-[#5A0F14] focus:outline-none focus:ring-1 focus:ring-[#5A0F14]"
            >
              {waitlistFormCopy.fields.estimatedBudget.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="rounded bg-[#5A0F14] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#5A0F14]/90 focus:outline-none focus:ring-2 focus:ring-[#5A0F14] focus:ring-offset-2 focus:ring-offset-black"
            >
              {waitlistFormCopy.submitButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}