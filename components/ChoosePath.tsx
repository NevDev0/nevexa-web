import Link from "next/link";

type PathCard = {
  id: "b2c" | "b2b" | "finance";
  title: string;
  cta: string;
  href: string;
  status: "active" | "early";
};

const PATHS: PathCard[] = [
  {
    id: "b2c",
    title: "Individuals",
    cta: "Find my vehicle",
    href: "/b2c",
    status: "active",
  },
  {
    id: "b2b",
    title: "Professionals",
    cta: "Discover our offer",
    href: "/b2b",
    status: "active",
  },
  {
    id: "finance",
    title: "Financing",
    cta: "Learn more",
    href: "/finance-early-access",
    status: "early",
  },
];

const NEVEXA_DARK_RED = "#5A0F14";

export default function ChoosePath() {
  return (
    <section className="w-full bg-black px-4 pt-16 pb-16 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
<div className="mb-6 flex flex-col items-center text-center">
  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
    Choose your path
  </p>

  {/* underline dark red (discret, signature) */}
  <div className="mt-2 mb-2 h-px w-8 bg-[#5A0F14]" />
</div>

        {/* Cards: mobile = 1 col, desktop = 3 cols */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PATHS.map((card) => {
            const isEarly = card.status === "early";

            return (
              <div
                key={card.id}
                className={[
                  "relative overflow-hidden rounded-2xl bg-white/5 p-5",
                  "border",
                  isEarly
                    ? "border-[color:var(--nevexa-dark-red)]/90"
                    : "border-white/10 hover:border-[color:var(--nevexa-dark-red)]",
                  "transition-colors duration-200 ease-out",
                ].join(" ")}
                style={
                  {
                    ["--nevexa-dark-red" as any]: NEVEXA_DARK_RED,
                  } as React.CSSProperties
                }
              >
                {/* Badge EARLY ACCESS pour Financement */}
                {isEarly && (
                  <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5A0F14]">
                    Early Access
                  </div>
                )}

                {/* Placeholder visuel (perf > images pour l’instant) */}
                <div className="mb-5 h-28 w-full rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent" />

                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {card.title}
                  </h3>

                  <Link
                    href={card.href}
                    className={[
                      "inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-semibold",
                      "transition-colors duration-200 ease-out",
                      isEarly
                        ? "border border-[#5A0F14]/70 bg-transparent text-[white] hover:bg-[#5A0F14]/10"
                        : "bg-neutral-100 text-black hover:bg-white"

                    ].join(" ")}
                    aria-label={`${card.title} — ${card.cta}`}
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
