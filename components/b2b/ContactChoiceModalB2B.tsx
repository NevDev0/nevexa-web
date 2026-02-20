"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import { contactModalB2BCopy } from "@/content/b2b.en";

const EMAIL = "contact@nevexacars.com";
const WHATSAPP_URL = "https://wa.me/14374842769";

interface ContactChoiceModalB2BProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
}

export default function ContactChoiceModalB2B({
  isOpen,
  onClose,
  subject = "B2B Inquiry — Nevexa",
}: ContactChoiceModalB2BProps) {
  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-black/70 backdrop-blur-sm md:items-center"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={stopPropagation}
        className="w-full rounded-t-3xl bg-neutral-950 px-4 pb-18 pt-5 shadow-xl md:max-w-lg md:rounded-2xl md:px-6 md:pb-6 md:pt-5"
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
              {contactModalB2BCopy.heading}
            </p>
            <p className="mt-0.5 text-sm text-neutral-300">
              {contactModalB2BCopy.subheading}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-xs text-neutral-400 transition-colors hover:bg-white/5"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {/* Email */}
          <Link
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`}
            className="group flex items-center gap-4 rounded-xl border border-[#5A0F14]/60 bg-[#5A0F14]/8 px-5 py-4 text-sm text-white transition-all duration-300 hover:border-[#5A0F14] hover:bg-[#5A0F14]/15"
            onClick={onClose}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5A0F14]/60 bg-[#5A0F14]/10 transition-colors group-hover:border-[#5A0F14]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-neutral-200">
                <path
                  d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.2l8 5 8-5V7H4Zm0 3.25V18h16v-7.75l-7.56 4.73a1 1 0 0 1-1.08 0L4 10.25Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">{contactModalB2BCopy.email.label}</span>
              <span className="text-xs text-neutral-400">{contactModalB2BCopy.email.description}</span>
            </div>
            <svg className="ml-auto h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* WhatsApp */}
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-[#5A0F14]/60 bg-[#5A0F14]/8 px-5 py-4 text-sm text-white transition-all duration-300 hover:border-[#5A0F14] hover:bg-[#5A0F14]/15"
            onClick={onClose}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5A0F14]/60 bg-[#5A0F14]/10 transition-colors group-hover:border-[#5A0F14]">
              <svg aria-hidden="true" viewBox="0 0 32 32" className="h-4 w-4 text-neutral-200">
                <path
                  d="M16 3C9.383 3 4 8.383 4 15c0 2.054.551 4.022 1.6 5.77L4 29l8.434-1.566A11.84 11.84 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3Zm0 2c5.534 0 10 4.466 10 10s-4.466 10-10 10a9.83 9.83 0 0 1-4.91-1.332l-.355-.207-4.99.926.955-4.834-.23-.373A9.77 9.77 0 0 1 6 15c0-5.534 4.466-10 10-10Zm-4.104 5.5a1.01 1.01 0 0 0-.74.356c-.192.225-.668.652-.668 1.586 0 .934.684 1.838.78 1.965.096.128 1.34 2.13 3.287 2.996 1.946.867 1.946.578 2.296.547.35-.03 1.126-.46 1.285-.905.16-.445.16-.826.114-.905-.046-.08-.178-.128-.373-.225-.195-.096-1.153-.57-1.332-.636-.178-.064-.308-.096-.437.097-.128.192-.502.635-.615.764-.113.128-.225.145-.42.048-.195-.096-.825-.304-1.572-.968-.58-.517-.97-1.155-1.083-1.35-.113-.192-.012-.296.084-.392.086-.085.195-.225.292-.337.097-.112.129-.192.194-.32.064-.128.032-.24-.017-.337-.048-.096-.426-1.03-.585-1.412-.145-.35-.29-.363-.42-.369Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">{contactModalB2BCopy.whatsapp.label}</span>
              <span className="text-xs text-neutral-400">{contactModalB2BCopy.whatsapp.description}</span>
            </div>
            <svg className="ml-auto h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}