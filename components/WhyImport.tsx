"use client";

import { whyImportCopy } from "@/content/en";
import { motion, Variants } from "framer-motion";

export default function WhyImport() {
  // 1. LA MAGIE DU SMOOTH : Configuration "Luxe"
  // Pas de durée fixe, mais une physique de ressort amorti.
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Délai fluide entre chaque item
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40, // On part de plus bas pour donner du poids
      filter: "blur(10px)", // Petit flou au départ pour la douceur (optionnel mais classe)
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        type: "spring", // C'est CA qui change tout
        stiffness: 70,  // Tension faible = mouvement lent et gracieux
        damping: 20,    // Amortissement pour éviter que ça rebondisse comme un cartoon
        mass: 1
      } 
    },
  };

  return (
    <section className="relative w-full bg-[#050505] px-6 py-24 text-white lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* --- COLONNE GAUCHE (TITRE) --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }} // Déclenche un peu avant
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-[#8A1F24]">
                {whyImportCopy.title}
              </motion.h2>
              
              <motion.h3 variants={itemVariants} className="text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Superior</span>
                <span className="block text-white/40">Standards.</span>
                <span className="block text-[#8A1F24]">Max Security.</span>
              </motion.h3>
              
              <motion.p variants={itemVariants} className="mt-8 text-lg font-light leading-relaxed text-neutral-400">
                {whyImportCopy.intro}
              </motion.p>

              <motion.div variants={itemVariants} className="mt-12 h-px w-24 bg-gradient-to-r from-[#8A1F24] to-transparent" />
            </motion.div>
          </div>

          {/* --- COLONNE DROITE (LISTE) --- */}
          <div className="lg:col-span-7 lg:pl-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              variants={containerVariants}
              className="divide-y divide-white/10 border-t border-b border-white/10 lg:border-b-0"
            >
              {whyImportCopy.accordions.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants} // Utilise la même physique smooth
                  className="group py-10 lg:py-12"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    
                    {/* Icone */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8A1F24]/10 text-[#8A1F24] transition-colors duration-500 group-hover:bg-[#8A1F24] group-hover:text-white">
                      {getIcon(item.id)}
                    </div>

                    <div className="flex-1">
                      <h4 className="mb-2 text-lg font-bold uppercase tracking-wide text-white group-hover:text-[#8A1F24] transition-colors duration-500 sm:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500 sm:text-base">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Icons mapping (Toujours pareil)
function getIcon(id: string) {
  switch (id) {
    case "inventory-quality": 
      return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case "export-security": 
      return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
    case "heavy-duty-specs": 
      return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
    default: return null;
  }
}