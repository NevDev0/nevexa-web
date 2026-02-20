"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { splitCTACopy } from "@/content/about.en";

export default function SplitCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);

  // Particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create 6 particles
    for (let i = 0; i < 6; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

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

      requestAnimationFrame(animate);
    }

    animate();

    return () => ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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

      {/* Top separator with pulsing center dot */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-px w-full bg-white/[0.06]" />
        <div
          className="absolute h-2 w-2 rounded-full bg-[#5A0F14]"
          style={{
            animation: "nevexa-pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        
        {/* Title */}
        <h2
          className={`mb-3 text-[32px] font-extrabold tracking-[-0.01em] text-white transition-all duration-700 sm:text-[48px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {splitCTACopy.title}
        </h2>

        {/* Underline */}
        <div className="mb-16 flex justify-center">
          <div
            className={`h-px bg-[#5A0F14] transition-all duration-700 ${
              visible ? "w-[120px] opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          
          {splitCTACopy.buttons.map((button, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
            >
              {/* Label */}
              <div className="mb-4 flex items-center justify-center gap-2">
                <div className={`h-1 w-1 rounded-full ${button.variant === "solid" ? "bg-[#5A0F14]/60" : "bg-white/30"}`} />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                  {button.label}
                </span>
              </div>

              {/* Button */}
              <Link
                href={button.href}
                className={`group relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-lg text-[15px] font-semibold transition-all duration-300 sm:h-20 sm:text-[16px] ${
                  button.variant === "outline"
                    ? "border-2 border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/[0.05] hover:-translate-y-1"
                    : "border-2 border-[#5A0F14] bg-[#5A0F14] text-white hover:bg-[#6A1F24] hover:-translate-y-1"
                }`}
                style={{
                  boxShadow:
                    button.variant === "outline"
                      ? "0 4px 20px rgba(255,255,255,0.05)"
                      : "0 4px 20px rgba(90,15,20,0.3), 0 2px 8px rgba(90,15,20,0.2)",
                }}
              >
                <span>{button.buttonText}</span>
                
                {/* Arrow */}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>

                {/* Shine effect on hover (solid button only) */}
                {button.variant === "solid" && (
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      transform: "translateX(-100%)",
                      animation: "nevexa-shine 0.7s ease-out",
                    }}
                  />
                )}
              </Link>
            </div>
          ))}

        </div>

      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes nevexa-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes nevexa-shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(200%); }
        }
      `}</style>

    </section>
  );
}