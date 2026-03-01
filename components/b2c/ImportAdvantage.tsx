"use client";

import { useRef } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";
import { importAdvantageCopy } from "@/content/b2c.en";
import { useEffect, useState } from "react";

// --- Composant interne pour animer les chiffres proprement ---
function AnimatedNumber({ from, to, visible }: { from: number; to: number; visible: boolean }) {
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (visible && from !== to) {
      const controls = animate(from, to, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(value) {
          setCurrent(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, visible]);

  return <span>{current}</span>;
}

export default function ImportAdvantage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // useInView de Framer Motion remplace l'IntersectionObserver complexe
  const isVisible = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black px-6 py-20 text-white sm:py-32"
    >
      {/* Background Radial Light (Remplace le Canvas gourmand) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,15,20,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {importAdvantageCopy.title}
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isVisible ? { width: "8rem" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]" 
          />
        </motion.div>

        {/* Stats List */}
        <div className="flex flex-col gap-2">
          {importAdvantageCopy.stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="group relative border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02]"
            >
              {/* Corner accent (Liseré rouge en haut à gauche) */}
              <motion.div
                initial={{ opacity: 0, height: 0, width: 0 }}
                animate={isVisible ? { opacity: 1, height: 16, width: 16 } : {}}
                transition={{ duration: 0.3, delay: i * 0.15 + 0.5 }}
                className="pointer-events-none absolute left-0 top-0 border-l-2 border-t-2 border-[#5A0F14]"
              />

              <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-12">
                
                {/* Number Section */}
                <div className="flex items-baseline justify-center sm:justify-start">
                  {stat.prefix && (
                    <span className="text-2xl font-light text-white/50">{stat.prefix}</span>
                  )}
                  <span className="text-5xl font-light tracking-tight tabular-nums sm:text-6xl">
                    <AnimatedNumber from={stat.numberFrom} to={stat.number} visible={isVisible} />
                  </span>
                  {stat.suffix && (
                    <span className="ml-2 text-xl font-bold text-[#5A0F14] sm:text-2xl">{stat.suffix}</span>
                  )}
                </div>

                {/* Dots Separator (Caché sur mobile pour la clarté) */}
                <div className="hidden flex-col items-center gap-2 sm:flex">
                  {[0, 1, 2].map((j) => (
                    <motion.div
                      key={j}
                      animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: j * 0.4 }}
                      className="h-1.5 w-1.5 rounded-full bg-[#5A0F14]"
                    />
                  ))}
                </div>

                {/* Label Section */}
                <div className="text-center sm:text-right">
                  <p className="text-[15px] font-bold tracking-wide text-white">
                    {stat.label}
                  </p>
                  <div className="mt-2 text-[13px] leading-relaxed text-white/50">
                    {stat.sublabel.split("\n").map((line, idx) => (
                      <span key={idx} className="block">{line}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: stat.barWidth } : {}}
                  transition={{ duration: 1.5, delay: i * 0.2 + 0.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#5A0F14] to-red-600"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-left">
            {importAdvantageCopy.disclaimer}
          </p>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <motion.div 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-[#5A0F14] shadow-[0_0_8px_rgba(90,15,20,0.8)]" 
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
              {importAdvantageCopy.badge}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}