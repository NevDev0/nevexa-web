"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { choosePathCopy } from "@/content/en";

type Card = (typeof choosePathCopy.cards)[0];

function PathCard({
  card,
  index,
  className,
  innerClassName,
  isDesktop,
  isVisibleFromParent,
}: {
  card: Card;
  index: number;
  className?: string;
  innerClassName?: string;
  isDesktop: boolean;
  isVisibleFromParent: boolean;
}) {
  const [isVisibleMobile, setIsVisibleMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const isVisible = isDesktop ? isVisibleFromParent : isVisibleMobile;

  // Observer individuel — mobile uniquement
  useEffect(() => {
    if (isDesktop) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleMobile(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    const t = setTimeout(() => {
      if (cardRef.current) observer.observe(cardRef.current);
    }, 100);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [isDesktop]);

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)";
    if (index === 0) return "translateX(-60px)";  // Individuals — gauche toujours
    if (isDesktop) return "translateY(-60px)";     // B2B + Financing — haut sur desktop
    return "translateX(60px)";                     // B2B + Financing — droite sur mobile
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: "opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <Link
        href={card.href}
        className={`group relative block overflow-hidden rounded-lg ${innerClassName ?? ""}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${card.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

        {card.badge && (
          <div
            className="absolute right-4 top-4 z-10 rounded-full bg-[#5A0F14] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
            style={{ animation: "badge-pulse 2s ease-in-out infinite" }}
          >
            {card.badge}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className="mb-2 font-bold text-white">{card.title}</h3>
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
            {card.ctaLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ChoosePath() {
  const [visible, setVisible] = useState(false);
  const [underlineWidth, setUnderlineWidth] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setUnderlineWidth(true), 200);
          // Desktop — cascade bien espacée depuis le parent
          if (window.matchMedia("(min-width: 768px)").matches) {
            setTimeout(() => setVisibleCards((p) => [true, p[1], p[2]]), 300);
            setTimeout(() => setVisibleCards((p) => [p[0], true, p[2]]), 750);
            setTimeout(() => setVisibleCards((p) => [p[0], p[1], true]), 1200);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black px-6 pb-24 pt-16 text-white"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F2F2F2]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <div className="mb-3 text-center">
          <h2
            className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms ease-out, transform 600ms ease-out",
            }}
          >
            {choosePathCopy.label}
          </h2>
        </div>

        <div className="mb-12 flex justify-center">
          <div
            className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
            style={{
              width: underlineWidth ? "80px" : "0px",
              transition: "width 600ms ease-out",
              transitionDelay: "200ms",
            }}
          />
        </div>

        <div className="flex flex-col gap-6 md:h-[500px] md:flex-row">

          <PathCard
            card={choosePathCopy.cards[0]}
            index={0}
            className="md:w-[58%]"
            innerClassName="h-[280px] md:h-full"
            isDesktop={isDesktop}
            isVisibleFromParent={visibleCards[0]}
          />

          <div className="flex flex-col gap-6 md:w-[42%]">
            <PathCard
              card={choosePathCopy.cards[1]}
              index={1}
              className="md:flex-1"
              innerClassName="h-[220px] md:h-full"
              isDesktop={isDesktop}
              isVisibleFromParent={visibleCards[1]}
            />
            <PathCard
              card={choosePathCopy.cards[2]}
              index={2}
              className="md:flex-1"
              innerClassName="h-[220px] md:h-full"
              isDesktop={isDesktop}
              isVisibleFromParent={visibleCards[2]}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 0 12px rgba(90,15,20,0.8), 0 0 24px rgba(90,15,20,0.4); }
          50% { box-shadow: 0 0 20px rgba(90,15,20,1), 0 0 40px rgba(90,15,20,0.6); }
        }
      `}</style>
    </section>
  );
}