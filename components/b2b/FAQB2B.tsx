"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { faqB2B } from "@/content/b2b.en";

// Variantes pour l'apparition en cascade de la liste
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FAQB2B() {
  const [openId, setOpenId] = useState<number | null>(1); // On ouvre la première question par défaut

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#F3EFEA] px-6 py-16 sm:py-28 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* --- Colonne de Gauche : Titre (Sticky sur PC) --- */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
                {faqB2B.title}
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]" />
              <p className="mt-6 text-[18px] leading-relaxed text-black/90">
                Everything you need to know about our sourcing, pricing, and delivery process for corporate clients.
              </p>
            </motion.div>
          </div>

          {/* --- Colonne de Droite : L'Accordéon fluide --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8"
          >
            <div className="border-t border-black/10">
              {faqB2B.questions.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <motion.div
                    variants={itemVariants}
                    key={item.id}
                    className="border-b border-black/10"
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      className="group flex w-full items-center justify-between py-6 text-left outline-none sm:py-8"
                    >
                      <span
                        className={`pr-8 text-[16px] transition-colors duration-300 sm:text-[18px] ${
                          isOpen ? "font-bold text-[#5A0F14]" : "font-medium text-black group-hover:text-[#5A0F14]"
                        }`}
                      >
                        {item.question}
                      </span>

                      {/* Icône + / - Animée */}
                      <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/20 transition-colors duration-300 group-hover:border-[#5A0F14]">
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute h-[1.5px] w-3 bg-black group-hover:bg-[#5A0F14]"
                        />
                        <motion.span
                          animate={{ rotate: isOpen ? 0 : 90 }}
                          transition={{ duration: 0.3 }}
                          className="absolute h-[1.5px] w-3 bg-black group-hover:bg-[#5A0F14]"
                        />
                      </div>
                    </button>

                    {/* Contenu de la réponse avec AnimatePresence (Zéro saut de mise en page) */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pr-12 text-[15px] leading-relaxed text-black/90 sm:text-[16px]">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}