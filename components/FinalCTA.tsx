"use client";

import { useState, useEffect, useRef, MouseEvent } from "react";
import Link from "next/link";

const EMAIL = "contact@nevexacars.com";
const WHATSAPP_URL = "https://wa.me/14374842769";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="w-full bg-[#0E0F11] px-6 py-16 text-white">
        <div className="mx-auto w-full max-w-3xl">

          {/* Logo */}
          <div
            className={`mb-12 flex justify-center transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <img
              src="/logo/nevexa-vertical-white.svg"
              alt="Nevexa"
              className="h-16 w-auto opacity-90"
              draggable={false}
            />
          </div>

          {/* Title */}
          <div
            className={`mb-3 text-center transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
              Contact
            </h2>
          </div>

          {/* Underline */}
          <div className="mb-8 flex justify-center">
            <div
              className={`mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)] ${
                visible ? "w-12" : "w-0"
              }`}
            />
          </div>

          {/* Main headline */}
          <h3
            className={`mb-4 text-center text-2xl font-light tracking-wide text-white transition-all duration-700 delay-300 sm:text-3xl ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Speak with a Nevexa advisor
          </h3>

          {/* Subtext */}
          <p
            className={`mb-10 text-center text-sm font-light leading-relaxed text-neutral-400 transition-all duration-700 delay-[400ms] sm:text-base ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            No forms. No waiting. Choose how you want to connect
            <br className="hidden sm:block" /> and we&apos;ll take it from there.
          </p>

          {/* CTA */}
          <div
            className={`flex justify-center transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              type="button"
              onClick={open}
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-10 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-[1.02]"
            >
              Get in touch
            </button>
          </div>

        </div>
      </section>

      {/* Contact Choice Modal */}
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
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("New inquiry — Nevexa website")}`}
                className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors hover:bg-white/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-neutral-200">
                    <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.2l8 5 8-5V7H4Zm0 3.25V18h16v-7.75l-7.56 4.73a1 1 0 0 1-1.08 0L4 10.25Z" fill="currentColor" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold">Email</span>
                  <span className="text-xs text-neutral-400">Open your default mail client</span>
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
                  <svg aria-hidden="true" viewBox="0 0 32 32" className="h-4 w-4 text-neutral-200">
                    <path d="M16 3C9.383 3 4 8.383 4 15c0 2.054.551 4.022 1.6 5.77L4 29l8.434-1.566A11.84 11.84 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3Zm0 2c5.534 0 10 4.466 10 10s-4.466 10-10 10a9.83 9.83 0 0 1-4.91-1.332l-.355-.207-4.99.926.955-4.834-.23-.373A9.77 9.77 0 0 1 6 15c0-5.534 4.466-10 10-10Zm-4.104 5.5a1.01 1.01 0 0 0-.74.356c-.192.225-.668.652-.668 1.586 0 .934.684 1.838.78 1.965.096.128 1.34 2.13 3.287 2.996 1.946.867 1.946.578 2.296.547.35-.03 1.126-.46 1.285-.905.16-.445.16-.826.114-.905-.046-.08-.178-.128-.373-.225-.195-.096-1.153-.57-1.332-.636-.178-.064-.308-.096-.437.097-.128.192-.502.635-.615.764-.113.128-.225.145-.42.048-.195-.096-.825-.304-1.572-.968-.58-.517-.97-1.155-1.083-1.35-.113-.192-.012-.296.084-.392.086-.085.195-.225.292-.337.097-.112.129-.192.194-.32.064-.128.032-.24-.017-.337-.048-.096-.426-1.03-.585-1.412-.145-.35-.29-.363-.42-.369Z" fill="currentColor" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold">WhatsApp</span>
                  <span className="text-xs text-neutral-400">Open chat in WhatsApp</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}