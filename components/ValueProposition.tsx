import { valuePropsCopy } from "../content/en";

export default function ValueProposition() {
  return (
    <section className="w-full bg-black px-6 pt-16 pb-16 text-white">
      <div className="mx-auto max-w-md">
        {/* Titre */}
        <div className="mb-2 text-center">
          <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
            {valuePropsCopy.title}
          </h2>
        </div>

        {/* Trust line — EDGE marketing */}
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-sm font-semibold tracking-wide text-white sm:text-base">
            {valuePropsCopy.trustLine}
          </p>

          {/* Underline dark red */}
          <div className="mt-2 h-[2px] w-16 rounded-full bg-[#5A0F14]" />
        </div>

        {/* Grille 2×2 mobile, 4×1 desktop */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {valuePropsCopy.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              {/* Bulle — LOCKÉE */}
              <div className="mb-3 flex items-center justify-center">
                {/* Anneau externe */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20">
                  {/* Anneau blanc intermédiaire */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                    {/* Cœur dark red */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5A0F14] text-xs font-semibold text-white">
                      {item.id}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Label */}
              <div className="text-sm font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
