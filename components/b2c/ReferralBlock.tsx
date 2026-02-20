"use client";

import { useState, useEffect, useRef } from "react";
import { referralCopy } from "@/content/b2c.en";

export default function ReferralBlock() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    yourName: "",
    yourWhatsApp: "",
    friendName: "",
    friendWhatsApp: "",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ─── INTERSECTION OBSERVER ───
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ─── PARTICLES ───
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    const particles: Array<{
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number;
    }> = [];

    for (let i = 0; i < 8; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(90, 15, 20, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            "Your Name": formData.yourName,
            "Your WhatsApp": formData.yourWhatsApp,
            "Friend Name": formData.friendName,
            "Friend WhatsApp": formData.friendWhatsApp,
            "Submitted At": new Date().toISOString(),
          },
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ yourName: "", yourWhatsApp: "", friendName: "", friendWhatsApp: "" });
          setSubmitted(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-black px-6 py-12">

      {/* Radial gradient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-full max-w-4xl -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse at top, rgba(90,15,20,0.12), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">

        {/* Title */}
        <h2
          className={`mb-4 text-center text-2xl font-bold uppercase tracking-[0.12em] text-white transition-all duration-700 sm:text-3xl ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {referralCopy.title}
        </h2>

        {/* Underline */}
        <div className="mx-auto -mb-8 flex items-center justify-center gap-2">
          <div
            className={`h-px bg-white/10 transition-all duration-700 delay-100 ${visible ? "w-8" : "w-0"}`}
          />
          <div
            className={`h-px bg-[#5A0F14] transition-all duration-700 delay-150 ${visible ? "w-16" : "w-0"}`}
          />
          <div
            className={`h-px bg-white/10 transition-all duration-700 delay-200 ${visible ? "w-8" : "w-0"}`}
          />
        </div>

        {/* Hero Number with ring — overflow visible pour ne pas clipper le SVG */}
        <div className="relative mx-auto -mb-10 flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">

          {/* Particles canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full"
            style={{ width: "100%", height: "100%" }}
          />

          {/* $1,000 — fade up simple, fiable cross-browser */}
          <div
            className="relative text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(20px)",
              transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.23, 1, 0.32, 1)",
              transitionDelay: "900ms",
            }}
          >
            <div className="mb-2 text-7xl font-black tracking-tighter text-[#5A0F14] sm:text-8xl">
              $1,000
            </div>
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
              Per referral
            </div>
          </div>

        </div>

        {/* Description */}
        <p
          className={`mb-12 text-center text-[15px] leading-relaxed text-white/50 transition-all duration-700 sm:text-[16px] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          Introduce a friend looking for a premium vehicle.<br />
          If they complete a purchase, you receive up to $1,000 USD.
        </p>

        {/* Form Card — max-w-2xl au lieu de max-w-3xl pour desktop plus élégant */}
        <div
          className={`relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#5A0F14]/30 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-700 sm:p-10 ${
            submitted ? "flip" : ""
          } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(90,15,20,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
            transitionDelay: "600ms",
          }}
        >

          {/* Corner glow */}
          <div
            className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(90,15,20,0.15), transparent 70%)" }}
          />

          {/* Front face — Form */}
          <div className={`form-front ${submitted ? "hidden" : ""}`}>
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Section 1 — You */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-white/30" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Your information
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <input type="text" name="yourName" placeholder="Your name" value={formData.yourName} onChange={handleChange} required disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/25 bg-white/[0.06] py-4 pl-12 pr-5 text-[15px] text-white placeholder:text-white/40 transition-all duration-300 focus:border-[#5A0F14]/50 focus:bg-white/[0.08] focus:shadow-[0_0_20px_rgba(90,15,20,0.15)] focus:outline-none disabled:opacity-50"
                    />
                  </div>
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <input type="tel" name="yourWhatsApp" placeholder="Your WhatsApp" value={formData.yourWhatsApp} onChange={handleChange} required disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/25 bg-white/[0.06] py-4 pl-12 pr-5 text-[15px] text-white placeholder:text-white/40 transition-all duration-300 focus:border-[#5A0F14]/50 focus:bg-white/[0.08] focus:shadow-[0_0_20px_rgba(90,15,20,0.15)] focus:outline-none disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center">
                <div className="h-px flex-1 bg-white/10" />
                <div className="mx-4 h-1.5 w-1.5 rounded-full bg-[#5A0F14]" />
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Section 2 — Friend */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#5A0F14]/80" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5A0F14]/90">
                    Friend's information
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <input type="text" name="friendName" placeholder="Friend's name" value={formData.friendName} onChange={handleChange} required disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/25 bg-white/[0.06] py-4 pl-12 pr-5 text-[15px] text-white placeholder:text-white/40 transition-all duration-300 focus:border-[#5A0F14]/50 focus:bg-white/[0.08] focus:shadow-[0_0_20px_rgba(90,15,20,0.15)] focus:outline-none disabled:opacity-50"
                    />
                  </div>
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <input type="tel" name="friendWhatsApp" placeholder="Friend's WhatsApp" value={formData.friendWhatsApp} onChange={handleChange} required disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/25 bg-white/[0.06] py-4 pl-12 pr-5 text-[15px] text-white placeholder:text-white/40 transition-all duration-300 focus:border-[#5A0F14]/50 focus:bg-white/[0.08] focus:shadow-[0_0_20px_rgba(90,15,20,0.15)] focus:outline-none disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Submit — sm:min-w-[280px] pour plus de présence sur desktop */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative mx-auto flex w-full items-center justify-center gap-3 overflow-hidden rounded-full py-5 text-[15px] font-bold text-black transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 sm:w-auto sm:min-w-[280px] sm:px-12"
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #f5f4f1 100%)",
                    boxShadow: "0 4px 14px rgba(255,255,255,0.25), 0 2px 6px rgba(0,0,0,0.2), 0 1px 2px rgba(90,15,20,0.1)",
                  }}
                >
                  <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
                  <span className="relative">
                    {isSubmitting ? "Submitting..." : referralCopy.submitButton}
                  </span>
                  {!isSubmitting && (
                    <svg className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Back face — Success */}
          {submitted && (
            <div className="form-back flex flex-col items-center justify-center py-12">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#5A0F14]/40 bg-[#5A0F14]/10">
                <svg className="h-10 w-10 text-[#5A0F14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-center text-[16px] font-medium leading-relaxed text-white/80">
                {referralCopy.successMessage}
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}