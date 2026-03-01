"use client";

import { motion, Variants } from "framer-motion";
import { realityCopy } from "@/content/about.en";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.8, delayChildren: 0.2 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function TheReality() {
  const renderTextWithHighlights = (text: string, highlights: string[]) => {
    let parts = [text];
    highlights.forEach((highlight) => {
      const newParts: string[] = [];
      parts.forEach((part) => {
        const split = part.split(new RegExp(`(${highlight})`, "gi"));
        newParts.push(...split);
      });
      parts = newParts;
    });

    return parts.map((part, i) => {
      const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase());
      if (isHighlight) {
        return (
          <motion.span
            key={i}
            initial={{ color: "rgba(255,255,255,0.8)" }}
            whileInView={{ color: "#5A0F14" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative inline-block font-semibold"
          >
            {part}
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-1 left-0 h-[1px] bg-[#5A0F14]"
            />
          </motion.span>
        );
      }
      return part;
    });
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-16 sm:py-22">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,15,20,0.08)_0%,transparent_70%)]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto w-full max-w-4xl text-center"
      >
        {/* Paragraphes de Réalité */}
        {realityCopy.paragraphs.map((para, index) => (
          <motion.p
            key={index}
            variants={textVariants}
            className={`leading-[1.8] text-white/80 mb-12 last:mb-0 ${
              index === 2 ? "text-[22px] font-bold text-white sm:text-[32px]" : "text-[18px] sm:text-[24px]"
            }`}
          >
            {renderTextWithHighlights(para.text, para.highlights)}
          </motion.p>
        ))}

        {/* SECTION FOUNDER FUSIONNÉE */}
        <motion.div 
          variants={textVariants}
          className="mt-20 border-t border-white/10 pt-20"
        >
          <span className="mb-8 block text-[14px] font-bold uppercase tracking-[0.3em] text-[#5A0F14] sm:text-[20px] ">
            {realityCopy.founder.header}
          </span>
          
          <blockquote className="mb-12 text-[20px] font-medium italic leading-[1.6] text-white/90 sm:text-[26px]">
            "{realityCopy.founder.quote}"
          </blockquote>

          <div className="flex flex-col items-center gap-2">
            <div className="h-px w-8 bg-[#5A0F14] mb-2" />
            <span className="text-[16px] font-bold uppercase tracking-wider text-white">
              {realityCopy.founder.signature}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              {realityCopy.founder.role}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}