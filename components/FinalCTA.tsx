"use client";

import { useState, MouseEvent } from "react";
import Link from "next/link";

const EMAIL = "contact@nevexacars.com";
const WHATSAPP_URL = "https://wa.me/14374842769";

// Social links (anciennement dans JoinUs)
const SOCIALS = [
  {
    id: "facebook",
    name: "Facebook",
    url: "#", // TODO
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.309c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0Z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/nevexacars/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nevexa-cars/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0 8h5v16H0V8Zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8.1V24h-5v-7.8c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.2V24h-5V8Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <section className="w-full bg-black px-6 py-16 text-white">
        <div className="mx-auto w-full max-w-3xl">
          {/* Logo Nevexa en haut */}
          <div className="mb-12 flex justify-center">
            <img
              src="/logo/nevexa-vertical-white.svg"
              alt="Nevexa"
              className="h-16 w-auto opacity-90"
              draggable={false}
            />
          </div>

          {/* Section Title */}
          <div className="mb-3 text-center">
            <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
              Contact
            </h2>
          </div>

          {/* Underline accent (#5A0F14) */}
          <div className="mb-8 flex justify-center">
            <div className="h-px w-20 bg-[#5A0F14]" />
          </div>

          {/* Titre principal */}
          <h3 className="mb-4 text-center text-2xl font-semibold text-white sm:text-3xl">
            Speak with a Nevexa advisor
          </h3>

          {/* Sous-texte */}
          <p className="mb-8 text-center text-sm text-neutral-400 sm:text-base">
            No forms. No waiting. Choose how you want to connect and we'll take
            it from there.
          </p>

          {/* CTA principal */}
          <div className="mb-12 flex justify-center">
            <button
              type="button"
              onClick={open}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition-colors hover:bg-white/90 md:w-auto"
            >
              Get in touch
            </button>
          </div>

          {/* Separator */}
          <div className="my-10 h-px w-full bg-white/10" />

          {/* Social Links (intégrés) */}
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Follow us
            </p>
            <div className="flex justify-center gap-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-white transition-opacity hover:opacity-70"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal / Bottom sheet (inchangé) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex items-end justify-center bg-black/60 backdrop-blur-sm md:items-center"
          onClick={close}
          aria-modal="true"
          role="dialog"
        >
          <div
            onClick={stopPropagation}
            className="w-full rounded-t-3xl bg-neutral-950 px-4 pb-6 pt-5 shadow-xl md:max-w-md md:rounded-2xl md:px-6 md:pb-6 md:pt-5"
          >
            {/* Header modal */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.20em] text-neutral-300">
                Choose how you&apos;d like to connect
              </h3>
              <button
                type="button"
                onClick={close}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-xs text-neutral-400 hover:bg-white/5"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-3 md:flex-row">
              {/* Email */}
              <Link
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  "New inquiry — Nevexa website"
                )}`}
                className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors hover:bg-white/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-neutral-200"
                  >
                    <path
                      d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.2l8 5 8-5V7H4Zm0 3.25V18h16v-7.75l-7.56 4.73a1 1 0 0 1-1.08 0L4 10.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold">Email</span>
                  <span className="text-xs text-neutral-400">
                    Open your default mail client
                  </span>
                </div>
              </Link>

              {/* WhatsApp */}
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors hover:bg-white/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    className="h-4 w-4 text-neutral-200"
                  >
                    <path
                      d="M16 3C9.383 3 4 8.383 4 15c0 2.054.551 4.022 1.6 5.77L4 29l8.434-1.566A11.84 11.84 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3Zm0 2c5.534 0 10 4.466 10 10s-4.466 10-10 10a9.83 9.83 0 0 1-4.91-1.332l-.355-.207-4.99.926.955-4.834-.23-.373A9.77 9.77 0 0 1 6 15c0-5.534 4.466-10 10-10Zm-4.104 5.5a1.01 1.01 0 0 0-.74.356c-.192.225-.668.652-.668 1.586 0 .934.684 1.838.78 1.965.096.128 1.34 2.13 3.287 2.996 1.946.867 1.946.578 2.296.547.35-.03 1.126-.46 1.285-.905.16-.445.16-.826.114-.905-.046-.08-.178-.128-.373-.225-.195-.096-1.153-.57-1.332-.636-.178-.064-.308-.096-.437.097-.128.192-.502.635-.615.764-.113.128-.225.145-.42.048-.195-.096-.825-.304-1.572-.968-.58-.517-.97-1.155-1.083-1.35-.113-.192-.012-.296.084-.392.086-.085.195-.225.292-.337.097-.112.129-.192.194-.32.064-.128.032-.24-.017-.337-.048-.096-.426-1.03-.585-1.412-.145-.35-.29-.363-.42-.369Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold">WhatsApp</span>
                  <span className="text-xs text-neutral-400">
                    Open chat in WhatsApp
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}