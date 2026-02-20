"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#0E0F11] px-6 pb-8 pt-4 text-white"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 600ms ease-out",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 border-t border-white/5 pt-6 text-xs text-neutral-400">
        {/* Logo Horizontal */}
        <div className="flex justify-center">
          <img
            src="/logo/WORDMARK_HORIZONTAL_1_WHITE_copy.svg"
            alt="Nevexa"
            className="h-6 w-auto opacity-70"
            draggable={false}
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4" aria-label="Footer navigation">
          <Link
            href="/legal-notice"
            className="transition-colors hover:text-neutral-200"
          >
            Legal Notice
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-[11px] text-neutral-500">
          © {year} Nevexa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}