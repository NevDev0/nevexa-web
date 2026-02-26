"use client";

import { useEffect, useRef, useState } from "react";
import { importAdvantageCopy } from "@/content/b2c.en";

export default function ImportAdvantage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>({});

  // ─── CANVAS PARTICLE GRID ───
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let dots: {
      x: number; y: number; r: number;
      opacity: number; speed: number; phase: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 400;
      initDots();
    };

    const initDots = () => {
      dots = [];
      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push({
            x: i * spacing + (Math.random() - 0.5) * 10,
            y: j * spacing + (Math.random() - 0.5) * 10,
            r: Math.random() * 0.8 + 0.2,
            opacity: Math.random() * 0.3 + 0.05,
            speed: Math.random() * 0.003 + 0.001,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        const o = d.opacity * (0.5 + 0.5 * Math.sin(t * d.speed + d.phase));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${o * 0.4})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ─── INTERSECTION OBSERVER ───
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ─── COUNT UP ───
  useEffect(() => {
    if (!visible) return;

    importAdvantageCopy.stats.forEach((stat, i) => {
      const from = stat.numberFrom;
      const to = stat.number;
      if (from === to) {
        setCounts((prev) => ({ ...prev, [stat.id]: to }));
        return;
      }

      const delay = 200 + i * 150;
      const duration = to > 50 ? 1000 : 600;
      const steps = 30;
      const stepTime = duration / steps;
      let current = from;
      const inc = (to - from) / steps;

      setTimeout(() => {
        const timer = setInterval(() => {
          current += inc;
          if (current >= to) {
            setCounts((prev) => ({ ...prev, [stat.id]: to }));
            clearInterval(timer);
          } else {
            setCounts((prev) => ({ ...prev, [stat.id]: Math.floor(current) }));
          }
        }, stepTime);
      }, delay);
    });
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      // py-20 au lieu de py-16 — plus de respiration top/bottom sur mobile
      className="relative w-full overflow-hidden bg-black px-6 py-12 text-white"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Header — text-center explicite pour garantir centrage sur mobile */}
        <div
          className={`mb-3 text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <h2 className="text-center text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {importAdvantageCopy.title}
          </h2>
        </div>

        {/* Underline */}
        <div className="mb-12 flex justify-center">
          <div
            className={`mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)] ${
              visible ? "w-18" : "w-0"
            }`}
          />
        </div>

        {/* Stats rows */}
        <div className="flex flex-col">
          {importAdvantageCopy.stats.map((stat, i) => (
            <StatRow
              key={stat.id}
              stat={stat}
              count={counts[stat.id] ?? stat.numberFrom}
              visible={visible}
              delay={i * 150}
            />
          ))}
        </div>

        {/* Bottom */}
        <div
          className={`mt-10 flex items-center justify-between transition-all duration-700 delay-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.14em] text-white/65">
            {importAdvantageCopy.disclaimer.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </span>
          <div className="flex items-center gap-2 rounded-full border border-white/55 px-3 py-1.5">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5A0F14]" />
            <span className="text-[10px] uppercase tracking-[0.10em] text-white/65">
              {importAdvantageCopy.badge}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── STAT ROW ───

interface StatRowProps {
  stat: (typeof importAdvantageCopy.stats)[number];
  count: number;
  visible: boolean;
  delay: number;
}

function StatRow({ stat, count, visible, delay }: StatRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative border-b border-white/5 py-7 transition-all duration-500 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
      }`}
      style={{ transitionDelay: `${delay + 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover flash */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(90,15,20,0.04), transparent)",
        }}
      />

      {/* Row content */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">

        {/* Number */}
        <div className="flex items-baseline gap-1">
          {stat.prefix && (
            <span className="text-2xl font-extralight text-white/90">
              {stat.prefix}
            </span>
          )}
          <span className="text-[clamp(36px,8vw,52px)] font-thin leading-none tracking-tight tabular-nums">
            {count}
          </span>
          {stat.suffix && (
            // Espace ajouté avant le suffix via ml-1 pour séparer "6" de "–8 wks"
            <span className="ml-1 text-xl font-extralight text-[#5A0F14]">
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Center dots
            - Animation CSS pure via className .nevexa-dot
            - Cascade via animation shorthand complet en inline style
            - Pas de mix shorthand/non-shorthand pour éviter l'erreur React */}
        <div className="flex flex-col items-center gap-1 px-6 sm:px-10">
          {[0, 1, 2].map((j) => (
            <div
              key={j}
              className="nevexa-dot rounded-full bg-[#5A0F14]"
              style={{
                width: "5px",
                height: "5px",
                // Shorthand complet — pas de animationDelay séparé
                animation: hovered
                  ? "none"
                  : `nevexa-dot-pulse 1.8s ease-in-out ${j * 0.4}s infinite`,
                ...(hovered
                  ? {
                      opacity: 1 - j * 0.35,
                      transform: `scale(${1.3 - j * 0.15})`,
                      transition: `transform 300ms ease ${j * 60}ms, opacity 300ms ease ${j * 60}ms`,
                    }
                  : {}),
              }}
            />
          ))}
        </div>

        {/* Label */}
        <div className="text-right">
          <p className="text-sm font-medium tracking-wide text-white/90">
            {stat.label}
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/50">
            {stat.sublabel.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </p>
        </div>
      </div>

      {/* Progress bar — fond bg-white/8 au lieu de bg-white/4 pour plus de visibilité */}
      <div className="relative mt-3 h-px w-full overflow-hidden bg-white/8">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#5A0F14] to-[#5A0F14]/20 transition-all duration-1000"
          style={{
            width: visible ? stat.barWidth : "0%",
            left: hovered ? "12px" : "0px",
            opacity: hovered ? 0.7 : 1,
            transitionDelay: `${delay + 400}ms`,
          }}
        />
      </div>

      {/* Corner accent */}
      <div
        className={`pointer-events-none absolute left-0 top-0 border-l-2 border-t-2 border-[#5A0F14] transition-all duration-300 ${
          visible ? "h-4 w-4 opacity-100" : "h-0 w-0 opacity-0"
        }`}
        style={{ transitionDelay: `${delay + 500}ms` }}
      />
    </div>
  );
}