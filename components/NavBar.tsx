"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { headerContent } from "@/content/header.en";

type Lang = "EN" | "FR";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const isActive = useCallback(
    (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href),
    [pathname]
  );

  return (
    <>
      {/* ── NAVBAR — absolute, superposé sur le hero, ne ronge pas ── */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black to-transparent">
        <div className="relative flex h-16 items-center justify-between px-5 sm:h-[72px] sm:px-8">

          {/* LEFT: Hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="group flex flex-col justify-center items-start gap-[5px] w-10 h-10 -ml-1 z-10"
            aria-label={headerContent.drawer.openLabel}
            aria-expanded={drawerOpen}
          >
            <span className="block h-px w-6 bg-white transition-all duration-300 group-hover:w-7" />
            <span className="block h-px w-4 bg-white transition-all duration-300 group-hover:w-7" />
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
              className="block sm:hidden h-7 w-auto object-contain"
              priority
            />
            <Image
              src={headerContent.logo.desktop}
              alt={headerContent.logo.alt}
              width={180}
              height={67}
              className="hidden sm:block h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* RIGHT: Lang + CTA */}
          <div className="flex items-center gap-2.5 z-10">
            <div className="flex items-center rounded-full border border-white/25 overflow-hidden">
              {headerContent.languages.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={[
                    "px-2.5 py-1 text-[11px] font-semibold tracking-wider transition-colors duration-200",
                    lang === l ? "bg-white/15 text-white" : "text-white/50 hover:text-white/80",
                  ].join(" ")}
                  aria-pressed={lang === l}
                >
                  {l}
                </button>
              ))}
            </div>

            <Link
              href={headerContent.cta.href}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#5A0F14] px-4 py-2 text-[12px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#6e1219] hover:scale-[1.03]"
            >
              {headerContent.cta.label}
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={[
          "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300",
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden="true"
        onClick={() => setDrawerOpen(false)}
      />

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
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <Image
            src={headerContent.logo.desktop}
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

        <nav className="flex-1 flex flex-col px-6 pt-6" aria-label="Navigation">
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
                transitionDelay: drawerOpen ? `${idx * 45}ms` : "0ms",
              }}
              className={[
                "flex items-center justify-between py-4 border-b border-white/[0.05]",
                "text-[15px] font-medium tracking-wide",
                isActive(item.href) ? "text-white" : "text-neutral-500 hover:text-white",
              ].join(" ")}
            >
              <span>{item.label}</span>
              {isActive(item.href) && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#5A0F14]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="px-6 py-8 flex flex-col gap-4 border-t border-white/[0.06]">
          <Link
            href={headerContent.cta.href}
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-[#5A0F14] py-3.5 text-[13px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#6e1219]"
          >
            {headerContent.cta.label}
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <div className="flex items-center justify-center rounded-full border border-white/15 overflow-hidden self-center">
            {headerContent.languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={[
                  "px-5 py-2 text-[12px] font-semibold tracking-wider transition-all duration-200",
                  lang === l ? "bg-white/10 text-white" : "text-neutral-500 hover:text-neutral-300",
                ].join(" ")}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}