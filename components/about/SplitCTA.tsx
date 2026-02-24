"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { splitCTACopy } from "@/content/about.en";

export default function SplitCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const isAnimatingRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Canvas particles setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 6 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.fillStyle = `rgba(90, 15, 20, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      // Seulement si toujours animating
      if (isAnimatingRef.current) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    }

    // Expose start/stop via ref
    (canvas as any)._start = () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      animFrameRef.current = requestAnimationFrame(animate);
    };
    (canvas as any)._stop = () => {
      isAnimatingRef.current = false;
      cancelAnimationFrame(animFrameRef.current);
    };

    return () => {
      isAnimatingRef.current = false;
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // IntersectionObserver — start/stop rAF proprement
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const canvas = canvasRef.current as any;
        if (entry.isIntersecting) {
          setVisible(true);
          setAnimating(true);
          canvas?._start?.();
        } else {
          setAnimating(false);
          canvas?._stop?.();
        }
      },
      { threshold: 0.2 }
    );

    const t = setTimeout(() => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    }, 100);

    return () => { clearTimeout(t); observer.disconnect(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden px-6 py-20 sm:py-28"
      style={{
        background: "radial-gradient(circle at center, rgba(90,15,20,0.08) 0%, #0E0F11 70%)",
      }}
    >
      {/* Particles canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Top separator with pulsing dot */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-px w-full bg-white/[0.06]" />
        <div
          className="absolute h-2 w-2 rounded-full bg-[#5A0F14]"
          style={{
            animationName: "nevexa-cta-pulse",
            animationDuration: "2s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationPlayState: animating ? "running" : "paused",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* Title */}
        <h2
          className="mb-3 text-[32px] font-extrabold tracking-[-0.01em] text-white sm:text-[48px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "100ms",
          }}
        >
          {splitCTACopy.title}
        </h2>

        {/* Underline */}
        <div className="mb-14 flex justify-center">
          <div
            className="h-px bg-[#5A0F14]"
            style={{
              width: visible ? "80px" : "0px",
              opacity: visible ? 1 : 0,
              transition: "width 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 700ms ease",
              transitionDelay: "300ms",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {splitCTACopy.buttons.map((button, index) => (
            <div
              key={index}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transitionDelay: `${500 + index * 180}ms`,
              }}
            >
              <div className="mb-4 flex items-center justify-center gap-2">
                <div
                  className={`h-1 w-1 rounded-full ${
                    button.variant === "solid" ? "bg-[#5A0F14]" : "bg-white/40"
                  }`}
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                  {button.label}
                </span>
              </div>

              <Link
                href={button.href}
                className={`group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full text-[15px] font-semibold sm:h-16 sm:text-[16px] ${
                  button.variant === "outline"
                    ? "border-2 border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/[0.05] hover:-translate-y-1"
                    : "border-2 border-[#5A0F14] bg-[#5A0F14] text-white hover:bg-[#6A1F24] hover:-translate-y-1"
                }`}
                style={{
                  boxShadow:
                    button.variant === "outline"
                      ? "0 4px 20px rgba(255,255,255,0.04)"
                      : "0 4px 24px rgba(90,15,20,0.35)",
                  transition: "background-color 300ms ease, transform 300ms ease",
                }}
              >
                <span>{button.buttonText}</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>

      {/*
        nevexa-cta-pulse → animationName inline → keyframe ici ✅
      */}
      <style jsx>{`
        @keyframes nevexa-cta-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>

    </section>
  );
}