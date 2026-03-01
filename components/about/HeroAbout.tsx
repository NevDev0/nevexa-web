"use client";

import { motion, Variants } from "framer-motion"; // On ajoute Variants ici
import { aboutHeroCopy } from "@/content/about.en";
import NavBar from "@/components/NavBar";

// 1. On définit explicitement les types pour que l'erreur disparaisse
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function HeroAbout() {
  const renderStatement = () => {
    const parts = aboutHeroCopy.statement.split(/(rigged)/gi);
    return parts.map((part, i) =>
      part.toLowerCase() === "rigged" ? (
        <motion.span
          key={i}
          initial={{ color: "rgba(255,255,255,1)", scale: 0.95 }}
          animate={{ 
            color: "#5A0F14", 
            scale: 1,
            textShadow: "0 0 40px rgba(90,15,20,0.9), 0 0 15px rgba(90,15,20,0.6)"
          }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative inline-block px-3"
        >
          <motion.span 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute left-0 top-0 w-[2px] bg-[#5A0F14]"
            style={{ boxShadow: "0 0 10px rgba(90,15,20,0.8)" }}
          />
          {part}
          <motion.span 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute right-0 top-0 w-[2px] bg-[#5A0F14]"
            style={{ boxShadow: "0 0 10px rgba(90,15,20,0.8)" }}
          />
        </motion.span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <section className="relative flex min-h-[90svh] w-full items-start justify-center overflow-hidden bg-black px-6 pt-40 pb-20 sm:min-h-[90svh] sm:pt-50">
      <NavBar />

      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity"
        style={{ backgroundImage: "url('/hero/about-bg.webp')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.85)_40%,rgba(90,15,20,0.1)_60%,rgba(0,0,0,0.98)_100%)]" />

      <div 
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mx-auto w-full max-w-4xl text-center pb-12"
      >
        <motion.h1 
          variants={itemVariants}
          className="mb-10 text-[36px] font-black leading-[1.2] tracking-tight text-white sm:text-[64px] drop-shadow-2xl"
        >
          {renderStatement()}
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-[24px] font-medium tracking-wide text-neutral-300 sm:text-[30px]"
        >
          {aboutHeroCopy.subline}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="relative h-14 w-[1px] overflow-hidden bg-white/10">
          <motion.div
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 h-full w-full bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.8),transparent)]"
          />
        </div>
      </motion.div>
    </section>
  );
}