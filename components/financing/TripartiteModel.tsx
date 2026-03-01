"use client";

import { howItWorksCopy } from "@/content/financing.en";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function TripartiteModel() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatables = section.querySelectorAll<HTMLElement>("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? "0");
            setTimeout(() => {
              el.classList.add("tm-visible");
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatables.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0E0F11] px-6 py-16 text-white sm:py-24"
    >
      {/* BACKGROUND FX */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="tm-scan-line tm-scan-line-1" />
        <div className="tm-scan-line tm-scan-line-2" />
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="tm-particle"
              style={{
                top: `${(i * 7 + 13) % 100}%`,
                left: `${(i * 17 + 5) % 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div
          data-animate
          data-delay="0"
          className="tm-fade-up mb-10 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] sm:text-[1.75rem]">
            {howItWorksCopy.title}
          </h2>
          <div
            data-animate
            data-delay="200"
            className="tm-underline mx-auto mb-6 h-0.5 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_10px_rgba(90,15,20,0.5)]"
          />
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80 sm:text-[15px]">
            {howItWorksCopy.subtitle}
          </p>
        </div>

        {/* ACTORS CARDS */}
        <div className="flex flex-col gap-6 md:flex-row md:justify-center md:gap-8 lg:gap-12">
          {howItWorksCopy.actors.map((actor, index) => {
            const isLast = index === howItWorksCopy.actors.length - 1;

            const getBorderClass = () => {
              if (index === 0) return "border-white/20 hover:border-white/40";
              if (index === 1) return "border-[#5A0F14] hover:border-[#5A0F14]";
              return "border-[#5A0F14]/50 hover:border-[#5A0F14]";
            };

            const getIconBg = () => {
              if (index === 0)
                return "border-white/30 bg-gradient-to-br from-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]";
              if (index === 1)
                return "border-[#5A0F14] bg-gradient-to-br from-[#5A0F14] to-[#7A1F24] shadow-[0_0_30px_rgba(90,15,20,0.5)]";
              return "border-[#5A0F14] bg-gradient-to-br from-[#5A0F14]/10 to-transparent shadow-[0_0_20px_rgba(90,15,20,0.3)]";
            };

            const getTagClass = () => {
              if (index === 0) return "border border-white/30 bg-white/5 text-white/80";
              if (index === 1) return "bg-white text-[#5A0F14]";
              return "border border-[#5A0F14] bg-[#5A0F14]/10 text-white/80";
            };

            return (
              <div key={actor.id} className="relative flex-1 md:max-w-[280px]">
                {/* CARD */}
                <div
                  data-animate
                  data-delay={`${index * 150}`}
                  className={`tm-fade-up group relative h-full overflow-hidden rounded-xl border bg-black/60 backdrop-blur-md transition-colors duration-300 ${getBorderClass()}`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(90,15,20,0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-row items-center gap-5 p-6 md:flex-col md:items-center md:py-8 md:text-center">
                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-2 transition-transform duration-300 group-hover:scale-105 md:h-20 md:w-20 ${getIconBg()}`}>
                      {index === 0 ? (
                        <UserIcon />
                      ) : index === 1 ? (
                        <BankIcon />
                      ) : (
                        <Image
                          src="/logo/brandmark-white.svg"
                          alt="Nevexa"
                          width={40}
                          height={40}
                          className="md:h-12 md:w-12"
                        />
                      )}
                    </div>

                    <div className="flex-1 md:flex-none">
                      <div className="mb-2 flex items-center gap-3 md:flex-col md:justify-center">
                        <h3 className="text-lg font-bold text-white">{actor.label}</h3>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getTagClass()}`}>
                          {actor.tag}
                        </span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-white/60">
                        {actor.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CONNECTORS */}
                {!isLast && (
                  <>
                    <div
                      data-animate
                      data-delay={`${index * 150 + 300}`}
                      className="tm-scale-x absolute left-full top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-gradient-to-r from-white/20 to-[#5A0F14]/40 md:block lg:w-12"
                    />
                    <div
                      data-animate
                      data-delay={`${index * 150 + 300}`}
                      className="tm-scale-y relative left-1/2 -ml-[1px] block w-0.5 bg-gradient-to-b from-white/20 to-[#5A0F14]/40 md:hidden"
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UserIcon() {
  return (
    <svg className="h-8 w-8 fill-white md:h-10 md:w-10" viewBox="0 0 24 24">
      <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
      <path d="M12 14C6.477 14 2 16.477 2 19.5C2 20.328 2.672 21 3.5 21H20.5C21.328 21 22 20.328 22 19.5C22 16.477 17.523 14 12 14Z" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg className="h-8 w-8 fill-white md:h-10 md:w-10" viewBox="0 0 24 24">
      <path d="M12 2L2 7V9H22V7L12 2Z" />
      <path d="M4 10V18H6V10H4Z" />
      <path d="M8 10V18H10V10H8Z" />
      <path d="M14 10V18H16V10H14Z" />
      <path d="M18 10V18H20V10H18Z" />
      <path d="M2 19H22V21H2V19Z" />
    </svg>
  );
}