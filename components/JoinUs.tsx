import { joinUsCopy } from "../content/en";

export default function JoinUs() {
  const { label, intro, channels } = joinUsCopy;

  if (!channels || channels.length === 0) return null;

  return (
    <section className="w-full bg-black px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Top separator (same logic as footer) */}
<div className="mx-auto mb-10 h-px w-full max-w-6xl bg-white/10" />

        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-base font-semibold uppercase tracking-[0.30em] text-neutral-300">
            {label}
          </p>
          <div className="mx-auto mt-2 h-px w-10 bg-[#5A0F14]" />
          {intro && (
            <p className="mx-auto mt-4 max-w-md text-sm text-neutral-400 sm:text-base">
              {intro}
            </p>
          )}
        </div>

        {/* Channels list — Ferrari style */}
        <div className="space-y-4">
          {channels.map((channel) => (
            <div key={channel.id} className="flex items-center">
              {/* Icon = CTA */}
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={channel.name}
                className="mr-4 flex h-8 w-8 items-center justify-center text-neutral-200 transition-opacity hover:opacity-80"
              >
                {channel.id === "facebook" && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.309c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0Z" />
                  </svg>
                )}

                {channel.id === "instagram" && (
                  // Outline / fine Instagram icon
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="0.75" fill="currentColor" />
                  </svg>
                )}

                {channel.id === "linkedin" && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0 8h5v16H0V8Zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8.1V24h-5v-7.8c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.2V24h-5V8Z" />
                  </svg>
                )}
              </a>

              {/* Label */}
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-200">
                {channel.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
