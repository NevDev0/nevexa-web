"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { financingProfilesCopy } from "@/content/financing.en";

export default function FinancingForEveryNeed() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0E0F11] py-24 sm:py-32">
      
      {/* ── BACKGROUND FX ── */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {mounted && <BackgroundParticles />}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* ── HEADER ── */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] text-white sm:text-3xl"
          >
            {financingProfilesCopy.title}
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mb-6 h-0.5 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_10px_rgba(90,15,20,0.5)]" 
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl text-[15px] font-medium leading-relaxed text-white/60 sm:text-[16px]"
          >
            {financingProfilesCopy.intro}
          </motion.p>
        </div>

        {/* ── CARDS CAROUSEL (Mobile Swipe / Desktop Grid) ── */}
        <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-12 scrollbar-hide sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
          
          {financingProfilesCopy.profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative flex min-w-[85vw] snap-center flex-col sm:min-w-0"
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-[#1A1A20] via-[#0E0E12] to-[#050505] p-8 text-center transition-all duration-500 hover:border-[#5A0F14]/50 hover:shadow-[0_20px_60px_rgba(90,15,20,0.2),inset_0_0_40px_rgba(90,15,20,0.05)]">
                
                {/* Internal Glow Effect */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,15,20,0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Floating Particles inside Card */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
                  <CardParticles delay={index} />
                </div>

                {/* Icon with Rotating Ring */}
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-white/5" />
                  <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#5A0F14] animate-[spin_3s_linear_infinite]" />
                  
                  <div 
                    className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:text-[#5A0F14] text-white"
                    dangerouslySetInnerHTML={{ __html: profile.icon }} 
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col items-center">
                  <h3 className="mb-2 text-xl font-bold text-white group-hover:text-white transition-colors">
                    {profile.title}
                  </h3>
                  
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#5A0F14]/80">
                    Target: <span className="text-white/60 font-medium normal-case tracking-normal">{profile.targets}</span>
                  </p>

                  <div className="mx-auto mb-4 h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#5A0F14]/50 transition-all duration-500" />

                  <div className="mt-auto">
                    <p className="mb-3 text-xs text-white/50">
                      <strong className="text-white/80 block mb-1">Example:</strong>
                      {profile.example}
                    </p>
                    <span className="inline-block rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 text-[10px] font-bold text-white/80 transition-colors group-hover:border-[#5A0F14]/30 group-hover:bg-[#5A0F14]/10">
                      {profile.range}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Mobile Swipe Indicator */}
        <div className="mt-4 flex justify-center sm:hidden">
          <div className="h-1 w-16 rounded-full bg-white/10 overflow-hidden">
             <motion.div 
               animate={{ x: ["-100%", "100%"] }}
               transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
               className="h-full w-1/3 bg-[#5A0F14]"
             />
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── OPTIMIZED PARTICLES ───
function BackgroundParticles() {
  // Positions fixes pour éviter l'hydratation mismatch & lag
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${(i * 13) % 100}%`,
    top: `${(i * 23) % 100}%`,
    delay: i * 0.5
  }));

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-[#5A0F14]/30 blur-[1px]"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5 + (p.id % 5), repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

function CardParticles({ delay }: { delay: number }) {
  // Moins de particules par carte pour la perf
  const particles = [1, 2, 3]; 

  return (
    <>
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#5A0F14]"
          style={{ 
            left: `${20 + (i * 30)}%`, 
            top: `${80 - (i * 20)}%` 
          }}
          animate={{ y: [0, -40], opacity: [0, 1, 0] }}
          transition={{ 
            duration: 3 + i, 
            repeat: Infinity, 
            delay: delay + i, 
            ease: "easeOut" 
          }}
        />
      ))}
    </>
  );
}