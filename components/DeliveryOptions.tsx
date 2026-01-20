type DeliveryOption = {
    id: "port" | "door";
    title: string;
    description: string;
  };
  
  const OPTIONS: DeliveryOption[] = [
    {
      id: "port",
      title: "Port-to-Port",
      description: "Delivery to the destination port.",
    },
    {
      id: "door",
      title: "Door-to-Door",
      description: "Delivery directly to your address.",
    },
  ];
  
  export default function DeliveryOptions() {
    return (
      <section className="w-full bg-black px-4 py-16 text-white">
        <div className="mx-auto w-full max-w-6xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.30em] text-neutral-300">
              Delivery options
            </p>
          </div>
  
          {/* Options: mobile = 1 col, desktop = 2 cols */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {OPTIONS.map((option) => (
              <div
                key={option.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                {/* Petit visuel / icône placeholder */}
                <div className="mb-4 h-12 w-12 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent" />
  
                <h3 className="mb-1 text-base font-semibold text-white">
                  {option.title}
                </h3>
  
                <p className="text-sm text-neutral-400">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  