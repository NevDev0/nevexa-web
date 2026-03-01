"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { builtForScaleCopy } from "@/content/b2b.en";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function BuiltForScale() {
  // Par défaut, on affiche la carte "Corporate" sur mobile car c'est ton plus gros volume
  const [activeTab, setActiveTab] = useState("corporate"); 

  const CardContent = ({ profile, index }: { profile: any, index: number }) => {
    const isFeatured = profile.id === "corporate";
    return (
      <>
        {/* Liseré supérieur */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-[#5A0F14] transition-opacity duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100`} />

        <div className="flex flex-1 flex-col p-6 sm:p-10">
          <div className="mb-8 border-b border-white/10 pb-6">
            <h3 className={`mb-2 text-xl font-bold uppercase tracking-wider ${isFeatured ? "text-[#5A0F14]" : "text-white"}`}>
              {profile.name}
            </h3>
            <p className="text-[13px] leading-relaxed text-white/60">
              {profile.subtitle}
            </p>
          </div>

          <ul className="mb-10 flex-1 space-y-5">
            {profile.capabilities.map((cap: any, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5A0F14]" />
                <div className="text-[14px] leading-relaxed text-white/70">
                  <strong className="font-semibold text-white/95">{cap.title}</strong>{" "}
                  <span className="opacity-80">{cap.description}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-white/5 pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">Typical Volume</span>
              <span className="text-[13px] font-bold tracking-wider text-white">{profile.volume.label}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${profile.volume.percentage}%` }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#5A0F14] to-red-600"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  // On trouve le profil actif pour le mobile
  const activeProfileData = builtForScaleCopy.profiles.find(p => p.id === activeTab);

  return (
    <section id="capabilities" className="relative w-full overflow-hidden bg-[#0E0F11] px-6 py-16 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,15,20,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.15em] text-white sm:text-3xl">
            {builtForScaleCopy.title}
          </h2>
          <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]" />
          <p className="text-[18px] font-medium tracking-wide text-white/70 sm:text-[20px]">
            {builtForScaleCopy.subtitle}
          </p>
        </motion.div>

        {/* =========================================
            VERSION DESKTOP (Grille Massive) 
        ========================================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="hidden grid-cols-1 gap-8 sm:grid sm:grid-cols-3"
        >
          {builtForScaleCopy.profiles.map((profile, index) => {
            const isFeatured = profile.id === "corporate";
            return (
              <motion.div
                key={profile.id}
                variants={cardVariants}
                className={`group relative flex flex-col overflow-hidden rounded-xl border transition-all duration-500 hover:-translate-y-2 ${
                  isFeatured 
                  ? "border-[#5A0F14]/40 bg-[#0a0a0a] bg-[linear-gradient(180deg,rgba(90,15,20,0.15)_0%,transparent_100%)] shadow-2xl" 
                  : "border-white/10 bg-[#0a0a0a] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_100%)] hover:border-white/20"
                }`}
              >
                <CardContent profile={profile} index={index} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* =========================================
            VERSION MOBILE (Tabs "Executive") 
        ========================================= */}
        <div className="sm:hidden">
          {/* Sélecteur Pilule */}
          <div className="mb-6 flex w-full rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            {builtForScaleCopy.profiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => setActiveTab(profile.id)}
                className="relative flex-1 py-3 text-[11px] font-bold uppercase tracking-wider outline-none"
              >
                {activeTab === profile.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full bg-[#5A0F14] shadow-[0_0_10px_rgba(90,15,20,0.5)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${activeTab === profile.id ? "text-white" : "text-white/60"}`}>
                  {profile.name}
                </span>
              </button>
            ))}
          </div>

          {/* Carte Active (avec Crossfade) */}
          <div className="relative min-h-[480px]">
            <AnimatePresence mode="wait">
              {activeProfileData && (
                <motion.div
                  key={activeProfileData.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`relative flex w-full flex-col overflow-hidden rounded-xl border ${
                    activeProfileData.id === "corporate"
                    ? "border-[#5A0F14]/40 bg-[#0a0a0a] bg-[linear-gradient(180deg,rgba(90,15,20,0.15)_0%,transparent_100%)]" 
                    : "border-white/10 bg-[#0a0a0a] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_100%)]"
                  }`}
                >
                  <CardContent profile={activeProfileData} index={0} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="inline-block rounded-full border border-white/10 bg-white/5 px-6 py-2 text-[12px] font-medium tracking-[0.08em] text-white/50">
            {builtForScaleCopy.footerNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}