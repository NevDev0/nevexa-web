"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { headerContent as headerEn } from "@/content/header.en";
import { headerContent as headerFr } from "@/content/header.fr";
import ContactChoiceModal from "@/components/ContactChoiceModal";

const WHATSAPP_NUMBER = "1XXXXXXXXXX"; // ← remplace par ton numéro sans +

const SOCIALS = [
  {
    id: "x",
    name: "X",
    url: "https://x.com/nevexacars?s=21",
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
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  const headerContent = language === "fr" ? headerFr : headerEn;

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
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/90 to-transparent">
        {/* Layout linéaire gauche → droite : logo | nav | spacer | pill */}
        <div className="relative flex items-center h-20 lg:h-[88px] px-6 lg:px-10 gap-10">

          {/* Hamburger mobile — à gauche, visible < lg uniquement */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="group flex lg:hidden flex-col justify-center items-start gap-[4px] w-10 h-10 -ml-1 shrink-0"
            aria-label={headerContent.drawer.openLabel}
            aria-expanded={drawerOpen}
          >
            <span className="block h-px w-5 bg-white transition-all duration-300 group-hover:w-6" />
            <span className="block h-px w-3 bg-white transition-all duration-300 group-hover:w-6" />
          </button>

          {/* Logo :
              - Mobile : centré via absolute (comportement original)
              - Desktop : dans le flux normal, tout à gauche */}
          <Link
            href="/"
            aria-label="Nevexa — Home"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 shrink-0"
          >
            <Image
              src={headerContent.logo.mobile}
              alt={headerContent.logo.alt}
              width={36}
              height={36}
              className="block lg:hidden h-9 w-auto object-contain"
              priority
            />
            <Image
              src={headerContent.logo.desktop}
              alt={headerContent.logo.alt}
              width={180}
              height={67}
              className="hidden lg:block h-6 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav links desktop — suit le logo */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {headerContent.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative text-[13px] font-medium tracking-widest uppercase transition-colors duration-200",
                  "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-[#941A22] after:transition-all after:duration-300",
                  isActive(item.href)
                    ? "text-white after:w-full"
                    : "text-white/50 hover:text-white after:w-0 hover:after:w-full",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Spacer — pousse la pill vers la droite */}
          <div className="hidden lg:block flex-1" />

          {/* Pill fusionnée EN/FR + CTA — desktop uniquement */}
          <div className="hidden lg:flex items-center rounded-full border border-[#5A0F14] overflow-hidden shrink-0">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 text-[11px] tracking-wider transition-colors duration-200 ${language === "en" ? "text-white font-bold" : "text-white/40 font-medium hover:text-white/70"}`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <div className="self-stretch w-px bg-[#5A0F14]" />
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1.5 text-[11px] tracking-wider transition-colors duration-200 ${language === "fr" ? "text-white font-bold" : "text-white/40 font-medium hover:text-white/70"}`}
              aria-pressed={language === "fr"}
            >
              FR
            </button>
            <div className="self-stretch w-px bg-[#5A0F14]" />
            <button
              onClick={handleContactClick}
              className="flex items-center gap-2 bg-[#5A0F14] px-5 py-1.5 text-[12px] font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-[#7a141b]"
            >
              {headerContent.cta.label}
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Mobile uniquement : placeholder symétrique au hamburger pour que le logo absolu soit visuellement centré */}
          <div className="lg:hidden w-10 ml-auto shrink-0" aria-hidden="true" />

        </div>
      </div>

      {/* ── WHATSAPP WIDGET FLOTTANT ── */}
      {!modalOpen && (
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nous contacter sur WhatsApp"
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-110"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          {/* WhatsApp icon */}
          <svg viewBox="0 0 24 24" className="relative h-7 w-7 text-white" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      )}

      {/* OVERLAY */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* DRAWER (mobile only) */}
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
        {/* Header */}
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

        {/* Lang Switcher Mobile */}
        <div className="flex px-6 pt-8 pb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage("en")}
              className={`text-[11px] tracking-wider transition-all duration-200 ${language === "en" ? "text-white font-bold" : "text-neutral-500 font-medium hover:text-neutral-300"}`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <div className="h-3 w-px bg-white/10" />
            <button
              onClick={() => setLanguage("fr")}
              className={`text-[11px] tracking-wider transition-all duration-200 ${language === "fr" ? "text-white font-bold" : "text-neutral-500 font-medium hover:text-neutral-300"}`}
              aria-pressed={language === "fr"}
            >
              FR
            </button>
          </div>
        </div>

        {/* Nav links */}
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

          {/* CTA */}
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

        {/* Socials */}
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