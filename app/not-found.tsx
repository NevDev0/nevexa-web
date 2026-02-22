import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-6 text-white">

      {/* Logo */}
      <div className="mb-16">
        <img
          src="/logo/nevexa-vertical-white3.svg"
          alt="Nevexa"
          className="h-20 w-auto opacity-90"
          draggable={false}
        />
      </div>

      {/* 404 */}
      <div className="mb-6 text-center">
        <span className="text-[120px] font-bold leading-none tracking-tight text-white/10 sm:text-[160px]">
          404
        </span>
      </div>

      {/* Underline */}
      <div className="mb-8 h-px w-12 bg-[#5A0F14]" />

      {/* Message */}
      <h1 className="mb-3 text-center text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
        Page not found
      </h1>
      <p className="mb-12 text-center text-sm font-light leading-relaxed text-neutral-400 sm:text-base">
        The page you&apos;re looking for doesn&apos;t exist<br className="hidden sm:block" /> or has been moved.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-10 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90"
      >
        Back to home
      </Link>

    </main>
  );
}