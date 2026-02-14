import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black px-6 pb-8 pt-6 text-white">
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