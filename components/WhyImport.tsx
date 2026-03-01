"use client";

import { whyImportCopy } from "@/content/en";
import { useEffect, useRef } from "react";

export default function WhyImport() {
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
            setTimeout(() => el.classList.add("wi-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-10% 0px -10% 0px" }
    );

    animatables.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050505] px-6 py-24 text-white lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">

          {/* --- COLONNE GAUCHE (TITRE) --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">

            <h2
              data-animate
              data-delay="200"
              className="wi-fade-up mb-6 text-xs font-black uppercase tracking-[0.3em] text-[#8A1F24]"
            >
              {whyImportCopy.title}
            </h2>

            <h3
              data-animate
              data-delay="350"
              className="wi-fade-up text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="block text-white">Superior</span>
              <span className="block text-white/40">Standards.</span>
              <span className="block text-[#8A1F24]">Max Security.</span>
            </h3>

            <p
              data-animate
              data-delay="500"
              className="wi-fade-up mt-8 text-lg font-light leading-relaxed text-neutral-400"
            >
              {whyImportCopy.intro}
            </p>

            <div
              data-animate
              data-delay="650"
              className="wi-fade-up mt-12 h-px w-24 bg-gradient-to-r from-[#8A1F24] to-transparent"
            />
          </div>

          {/* --- COLONNE DROITE (LISTE) --- */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="divide-y divide-white/10 border-b border-t border-white/10 lg:border-b-0">
              {whyImportCopy.accordions.map((item, index) => (
                <div
                  key={item.id}
                  data-animate
                  data-delay={`${200 + index * 150}`}
                  className="wi-fade-up group py-10 lg:py-12"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                    {/* Icone */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8A1F24]/10 text-[#8A1F24] transition-colors duration-500 group-hover:bg-[#8A1F24] group-hover:text-white">
                      {getIcon(item.id)}
                    </div>

                    <div className="flex-1">
                      <h4 className="mb-2 text-lg font-bold uppercase tracking-wide text-white transition-colors duration-500 group-hover:text-[#8A1F24] sm:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-neutral-400 transition-colors duration-500 group-hover:text-neutral-300 sm:text-base">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function getIcon(id: string) {
  switch (id) {
    case "inventory-quality":
      return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case "export-security":
      return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
    case "heavy-duty-specs":
      return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
    default: return null;
  }
}