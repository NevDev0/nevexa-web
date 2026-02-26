"use client";

import { useEffect, useRef, useState } from "react";
import { builtForScaleCopy } from "@/content/b2b.en";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
}

interface ProfileAnchor {
  x: number;
  y: number;
  active: boolean;
}

export default function BuiltForScale() {
  const [activeProfile, setActiveProfile] = useState<string | null>("resellers");
  const [sectionVisible, setSectionVisible] = useState(false);
  const [profilesVisible, setProfilesVisible] = useState<string[]>([]);

  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animFrameRef = useRef<number>(0);
  const isAnimatingRef = useRef<boolean>(false);

  // Intersection Observer for entrance animations + RAF pause
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            isAnimatingRef.current = true;

            builtForScaleCopy.profiles.forEach((profile, i) => {
              setTimeout(() => {
                setProfilesVisible((prev) => [...prev, profile.id]);
              }, 200 + i * 120);
            });
          } else {
            // Pause RAF when section not visible
            isAnimatingRef.current = false;
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Canvas setup and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initNodes();
    };

    const initNodes = () => {
      nodesRef.current = [];
      const count = 40;
      for (let i = 0; i < count; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          r: Math.random() * 1.2 + 0.3,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const getProfileAnchors = (): ProfileAnchor[] => {
      const anchors: ProfileAnchor[] = [];
      const section = sectionRef.current;
      if (!section) return anchors;

      section.querySelectorAll("[data-signal]").forEach((el) => {
        const profileId = el.getAttribute("data-signal");
        const rect = el.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();

        anchors.push({
          x: rect.left - sectionRect.left + rect.width / 2,
          y: rect.top - sectionRect.top + rect.height / 2,
          active: profileId === activeProfile,
        });
      });

      return anchors;
    };

    const drawCanvas = (t: number) => {
      // Pause animation when section not visible
      if (!isAnimatingRef.current) {
        animFrameRef.current = requestAnimationFrame(drawCanvas);
        return;
      }

      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const anchors = getProfileAnchors();
      const activeAnchor = anchors.find((a) => a.active);
      const nodes = nodesRef.current;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      const maxDist = 100;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.001 + n.phase);
        const baseAlpha = 0.12;

        let boost = 0;
        if (activeAnchor) {
          const dx = n.x - activeAnchor.x;
          const dy = n.y - activeAnchor.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            boost = (1 - dist / 150) * 0.15;
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle =
          boost > 0.05
            ? `rgba(90,15,20,${(baseAlpha + boost) * pulse})`
            : `rgba(255,255,255,${baseAlpha * pulse})`;
        ctx.fill();
      });

      if (activeAnchor) {
        nodes.forEach((n) => {
          const dx = n.x - activeAnchor.x;
          const dy = n.y - activeAnchor.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.06;
            ctx.beginPath();
            ctx.moveTo(activeAnchor.x, activeAnchor.y);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(90,15,20,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      }

      animFrameRef.current = requestAnimationFrame(drawCanvas);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animFrameRef.current = requestAnimationFrame(drawCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [activeProfile]);

  const toggleProfile = (profileId: string) => {
    setActiveProfile((prev) => (prev === profileId ? null : profileId));
  };

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0E0F11] px-6 py-12 sm:py-16"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div
          className={`mb-8 text-center transition-all duration-700 ${
            sectionVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <h2 className="mb-3 text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {builtForScaleCopy.title}
          </h2>
          <div
            className={`mx-auto mb-4 h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)] ${
              sectionVisible ? "w-18" : "w-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
          <p className="text-[15px] font-normal tracking-wide text-white/60">
            {builtForScaleCopy.subtitle}
          </p>
        </div>

        {/* Profile Cards */}
        <div className="flex flex-col gap-0.5">
          {builtForScaleCopy.profiles.map((profile, index) => {
            const isActive = activeProfile === profile.id;
            const isCardVisible = profilesVisible.includes(profile.id); // ← fix shadowing
            const isDimmed = activeProfile && activeProfile !== profile.id;

            return (
              <div
                key={profile.id}
                onClick={() => toggleProfile(profile.id)}
                className={`relative cursor-pointer overflow-hidden rounded-sm border border-white/10 transition-all duration-500 ${
                  isCardVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                } ${isDimmed ? "scale-[0.98] opacity-35" : ""} ${
                  isActive ? "before:opacity-100" : "before:opacity-0"
                } before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_0%_50%,rgba(90,15,20,0.06),transparent_70%)] before:transition-opacity before:duration-500`}
                style={{
                  transitionDelay: isCardVisible ? `${index * 80}ms` : "0ms",
                }}
              >
                {/* Header (always visible) */}
                <div
                  className={`flex items-center gap-3.5 px-5 transition-all duration-400 ${
                    isDimmed ? "py-3.5" : "py-4.5"
                  }`}
                >
                  {/* Signal dot */}
                  <div className="relative h-2.5 w-2.5 flex-shrink-0" data-signal={profile.id}>
                    <div
                      className={`absolute left-0.5 top-0.5 h-1.5 w-1.5 rounded-full transition-all duration-400 ${
                        isActive
                          ? "bg-[#5A0F14] shadow-[0_0_8px_rgba(90,15,20,0.6)]"
                          : "bg-white/25"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 rounded-full border transition-all duration-400 ${
                        isActive ? "border-[#5A0F14]/40" : "border-white/8"
                      }`}
                      style={{
                        animation: isActive ? "pulse-ring 2s ease-in-out infinite" : "none",
                      }}
                    />
                  </div>

                  {/* Signal line */}
                  <div
                    className={`h-px flex-shrink-0 bg-gradient-to-r transition-all duration-400 ${
                      isActive
                        ? "w-8 from-[#5A0F14]/60 to-[#5A0F14]/15"
                        : "w-6 from-white/8 to-white/15"
                    }`}
                  />

                  {/* Profile info */}
                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
                    >
                      {profile.name}
                    </div>
                    {!isDimmed && (
                      <div
                        className={`mt-0.5 text-xs transition-all duration-300 ${
                          isActive ? "text-white/55" : "text-white/35"
                        }`}
                      >
                        {profile.subtitle}
                      </div>
                    )}
                  </div>

                  {/* Chevron */}
                  <svg
                    className={`h-4 w-4 flex-shrink-0 transition-all duration-400 ${
                      isActive ? "rotate-90 opacity-50" : "rotate-0 opacity-25"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>

                  {/* Progress track */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/4">
                    <div
                      className={`h-full bg-gradient-to-r from-[#5A0F14] to-[#5A0F14]/10 transition-all duration-800 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                      style={{ transitionDelay: "200ms" }}
                    />
                  </div>
                </div>

                {/* Body (expandable) */}
                <div
                  className={`overflow-hidden transition-all duration-600 ${
                    isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-6 pl-[4.375rem] pt-1">
                    <div className="flex flex-col gap-0">
                      {profile.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2.5 border-b border-white/3 py-2.5 transition-all duration-400 ${
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-2.5 opacity-0"
                          }`}
                          style={{
                            transitionDelay: isActive ? `${150 + i * 80}ms` : "0ms",
                          }}
                        >
                          <div
                            className={`mt-2 h-px w-3 flex-shrink-0 bg-[#5A0F14] transition-transform duration-400 ${
                              isActive ? "scale-x-100" : "scale-x-0"
                            }`}
                            style={{
                              transformOrigin: "left",
                              transitionDelay: isActive ? `${180 + i * 80}ms` : "0ms",
                            }}
                          />
                          <div className="text-[13px] leading-relaxed text-white/70">
                            <strong className="font-medium text-white/90">
                              {cap.title}
                            </strong>{" "}
                            {cap.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Volume indicator */}
                    <div
                      className={`mt-4 flex items-center gap-3 transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ transitionDelay: isActive ? "500ms" : "0ms" }}
                    >
                      <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.1em] text-white/35">
                        Volume
                      </span>
                      <div className="relative h-0.5 flex-1 overflow-hidden rounded-sm bg-white/6">
                        <div
                          className="h-full rounded-sm bg-gradient-to-r from-[#5A0F14] to-[#5A0F14]/30 transition-all duration-1000"
                          style={{
                            width: isActive ? `${profile.volume.percentage}%` : "0%",
                            transitionDelay: isActive ? "550ms" : "0ms",
                          }}
                        />
                      </div>
                      <span className="whitespace-nowrap text-xs font-medium tabular-nums text-white/55">
                        {profile.volume.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div
          className={`mt-10 text-center transition-opacity duration-600 ${
            sectionVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-[13px] tracking-[0.06em] text-white/55">
            {builtForScaleCopy.footerNote}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}