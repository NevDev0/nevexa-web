"use client";

import { motion, Variants } from "framer-motion";
import { faqFinancingCopy } from "@/content/financing.en";

export default function FAQFinancing() {
  // On définit les types explicitement pour supprimer l'erreur "red underline"
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Gère la cascade automatiquement
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative w-full bg-[#F3EFEA]/90 px-6 py-12 text-black sm:py-16"
    >
      <div className="mx-auto max-w-3xl">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-3 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {faqFinancingCopy.title}
          </h2>
        </motion.div>

        {/* Barre soulignée animée */}
        <div className="mb-12 flex justify-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto h-px bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]"
          />
        </div>

        {/* Conteneur des items FAQ */}
        <motion.div variants={containerVariants} className="flex flex-col">
          {faqFinancingCopy.questions.map((item, index) => {
            const isLast = index === faqFinancingCopy.questions.length - 1;
            const num = String(item.id).padStart(2, "0");

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative overflow-hidden py-8 ${
                  !isLast ? "border-b border-black/10" : ""
                } ${index === 0 ? "border-t border-black/10" : ""}`}
              >
                {/* Numéro géant en arrière-plan */}
                <div
                  className="pointer-events-none absolute right-0 top-1/2 select-none text-[80px] sm:text-[110px] font-bold leading-none tracking-tighter"
                  style={{
                    color: "rgba(90,15,20,0.06)",
                    transform: "translateY(-50%)",
                  }}
                >
                  {num}
                </div>

                {/* Contenu de la question */}
                <div className="relative z-10">
                  <div className="mb-3 flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-[11px] font-bold uppercase tracking-widest text-[#5A0F14]">
                      {num}
                    </span>
                    <h3 className="text-[15px] font-semibold leading-snug tracking-wide text-black">
                      {item.question}
                    </h3>
                  </div>

                  <p className="pl-7 text-[13px] font-light leading-relaxed tracking-wide text-black/60">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}