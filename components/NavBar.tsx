"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { headerContent } from "@/content/header.en";
import ContactChoiceModal from "@/components/ContactChoiceModal";

type Lang = "EN" | "FR";

const SOCIALS = [
  {
    id: "facebook",
    name: "Facebook",
    url: "#",
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
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("EN");
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [drawerOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen || modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen, modalOpen]);

  const isActive = useCallback(
    (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href),
    [pathname]
  );

  const handleContactClick = () => {
    setDrawerOpen(false);
    setTimeout(() => setModalOpen(true), 350);
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/75 to-transparent">
        {/* Breathing Room: sm:h-[88px] au lieu de 72px pour aérer le top */}
        <div className="relative flex h-20 items-center justify-between px-6 sm:h-[88px] sm:px-10">

          {/* LEFT: Hamburger - Plus fin, plus compact, plus élégant */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="group flex flex-col justify-center items-start gap-[4px] w-10 h-10 -ml-1 z-10"
            aria-label={headerContent.drawer.openLabel}
            aria-expanded={drawerOpen}
          >
            <span className="block h-px w-5 bg-white transition-all duration-300 group-hover:w-6" />
            <span className="block h-px w-3 bg-white transition-all duration-300 group-hover:w-6" />
          </button>

          {/* CENTER: Logo */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            aria-label="Nevexa — Home"
          >
            <Image
              src={headerContent.logo.mobile}
              alt={headerContent.logo.alt}
              width={36}
              height={36}
              className="block sm:hidden h-9 w-auto object-contain"
              priority
            />
            <Image
              src={headerContent.logo.desktop}
              alt={headerContent.logo.alt}
              width={180}
              height={67}
              className="hidden sm:block h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* RIGHT: Lang + CTA */}
          <div className="flex items-center gap-6 z-10">
            
            {/* Lang Switcher Minimaliste - Plus de fond gris */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => setLang("EN")}
                className={`text-[11px] tracking-wider transition-colors duration-200 ${lang === "EN" ? "text-white font-bold" : "text-white/50 font-medium hover:text-white/80"}`}
                aria-pressed={lang === "EN"}
              >
                EN
              </button>
              <div className="h-2.5 w-px bg-white/20" />
              <button
                onClick={() => setLang("FR")}
                className={`text-[11px] tracking-wider transition-colors duration-200 ${lang === "FR" ? "text-white font-bold" : "text-white/50 font-medium hover:text-white/80"}`}
                aria-pressed={lang === "FR"}
              >
                FR
              </button>
            </div>

            {/* Bouton Contact - Padding affiné */}
            <button
              onClick={handleContactClick}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#5A0F14] bg-[#5A0F14] px-5 py-1.5 text-[12px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#7a141b] hover:border-[#7a141b] hover:scale-[1.03]"
            >
              {headerContent.cta.label}
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
       {drawerOpen && (
      <div
       className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
       aria-hidden="true"
     onClick={() => setDrawerOpen(false)}
    />
      )}

      {/* DRAWER */}
      <div
        ref={drawerRef}
        className={[
          "fixed top-0 left-0 z-50 h-[100svh] w-[80vw] max-w-[300px]",
          "bg-[#080808] border-r border-white/[0.06]",
          "flex flex-col transition-transform duration-[380ms] ease-in-out",
          drawerOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <Image
            src={headerContent.logo.drawer}
            alt={headerContent.logo.alt}
            width={130}
            height={48}
            className="h-7 w-auto object-contain"
          />
          <button
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-neutral-400 hover:text-white hover:border-white/30 transition-all duration-200"
            aria-label={headerContent.drawer.closeLabel}
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Lang switcher Minimaliste Mobile ── */}
        <div className="flex px-6 pt-8 pb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang("EN")}
              className={`text-[11px] tracking-wider transition-all duration-200 ${lang === "EN" ? "text-white font-bold" : "text-neutral-500 font-medium hover:text-neutral-300"}`}
              aria-pressed={lang === "EN"}
            >
              EN
            </button>
            <div className="h-3 w-px bg-white/10" />
            <button
              onClick={() => setLang("FR")}
              className={`text-[11px] tracking-wider transition-all duration-200 ${lang === "FR" ? "text-white font-bold" : "text-neutral-500 font-medium hover:text-neutral-300"}`}
              aria-pressed={lang === "FR"}
            >
              FR
            </button>
          </div>
        </div>

        {/* ── Nav links ── */}
        <nav className="flex-1 flex flex-col px-6 pt-3" aria-label="Navigation">
          {headerContent.nav.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                opacity: drawerOpen ? 1 : 0,
                transform: drawerOpen ? "translateX(0)" : "translateX(-16px)",
                transitionProperty: "opacity, transform, color",
                transitionDuration: "350ms",
                transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transitionDelay: drawerOpen ? `${idx * 55}ms` : "0ms",
              }}
              className={[
                "flex items-center justify-between py-6 border-b border-white/[0.05]",
                "text-[17px] font-medium tracking-wide",
                isActive(item.href) ? "text-white" : "text-neutral-500 hover:text-white",
              ].join(" ")}
            >
              <span>{item.label}</span>
              {isActive(item.href) && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#5A0F14]" />
              )}
            </Link>
          ))}

          {/* CTA — juste sous About */}
          <button
            onClick={handleContactClick}
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#5A0F14] py-3.5 text-[13px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#7a141b]"
          >
            {headerContent.cta.label}
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </nav>

        {/* ── Socials — centrés en bas ── */}
        <div className="flex items-center justify-center gap-8 px-6 py-6 border-t border-white/[0.06]">
          {SOCIALS.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex items-center justify-center w-11 h-11 text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      <ContactChoiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subject="Inquiry — Nevexa"
      />
    </>
  );
}