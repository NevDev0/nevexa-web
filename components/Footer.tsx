"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SOCIALS = [
  {
    id: "x",
    name: "X",
    url: "https://x.com/nevexacars",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/nevexacars/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
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

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-[#0E0F11] px-6 py-12 text-white">
      <div
        className="mx-auto flex w-full max-w-7xl flex-col items-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 800ms ease-out, transform 800ms ease-out",
        }}
      >
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">

          {/* Logo & copyright */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <img
              src="/logo/WORDMARK_HORIZONTAL_1_WHITE_copy.svg"
              alt="Nevexa"
              className="h-5 w-auto opacity-90 transition-opacity hover:opacity-100"
              draggable={false}
            />
            <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-500">
              © {year} Nevexa Automotive Inc.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-10">
            {SOCIALS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-neutral-400 transition-all duration-300 hover:scale-110 hover:text-[#5A0F14]"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal */}
          <nav className="flex items-center gap-6">
            <Link
              href="/legal-notice"
              className="text-[12px] font-medium tracking-wide text-neutral-500 transition-colors hover:text-white"
            >
              Legal Notice
            </Link>
          </nav>
        </div>

        <div className="mt-12 h-[1px] w-1/4 bg-gradient-to-r from-transparent via-[#5A0F14]/40 to-transparent" />
      </div>
    </footer>
  );
}