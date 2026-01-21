import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black px-4 pb-8 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-neutral-400 md:flex-row md:justify-between md:gap-0">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo/nevexa-vertical-white.svg"
            alt="Nevexa Cars"
            className="h-10 w-auto opacity-80"
            draggable={false}
          />
        </div>

        {/* Navigation */}
        <nav
          className="flex items-center gap-4"
          aria-label="Footer navigation"
        >
          <Link
            href="/legal-notice"
            className="transition-colors hover:text-neutral-200"
          >
            Legal Notice
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-neutral-200"
          >
            Contact
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
