"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqCopy } from "@/content/b2c.en";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-black px-6 py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-3xl">
        
        {/* Header avec Fade-In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl">
            {faqCopy.title}
          </h2>
          <div className="mx-auto h-px w-30 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]" />
        </motion.div>

        {/* FAQ List */}
        <div className="border-t border-white/10">
          {faqCopy.questions.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative border-b border-white/10"
              >
                {/* Ligne Question */}
                <button
                  onClick={() => toggle(item.id)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left outline-none sm:py-8"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[15px] font-medium tracking-wide transition-colors duration-300 sm:text-[16px] ${
                    isOpen ? "text-white" : "text-white/60 group-hover:text-white"
                  }`}>
                    {item.question}
                  </span>

                  {/* Icone Animée (+ vers x) */}
                  <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                    {/* Le PLUS blanc (visible quand fermé) */}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute h-[2px] w-4 bg-white/60 group-hover:bg-white"
                    />
                    <motion.span
                      animate={{ rotate: isOpen ? 0 : 90, opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute h-4 w-[2px] bg-white/60 group-hover:bg-white"
                    />
                    
                    {/* La CROIX rouge (visible quand ouvert) */}
                    <motion.span
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: isOpen ? 45 : -45, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute h-[2px] w-4 bg-[#5A0F14]"
                    />
                    <motion.span
                      initial={{ rotate: 45, opacity: 0 }}
                      animate={{ rotate: isOpen ? -45 : 45, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute h-4 w-[2px] bg-[#5A0F14]"
                    />
                  </div>
                </button>

                {/* Zone de Réponse (Animation fluide de hauteur) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-8 sm:pr-12">
                        <p className="text-[14px] leading-relaxed text-white/50 sm:text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Ligne Rouge Active en bas du bloc ouvert */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-[-1px] left-0 h-[1px] w-full origin-left bg-[#5A0F14] shadow-[0_0_10px_rgba(90,15,20,0.8)]"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}