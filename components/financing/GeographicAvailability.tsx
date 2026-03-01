"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { geographicAvailabilityCopy } from "@/content/financing.en";

export default function GeographicAvailability() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-20 sm:py-32">
      
      {/* ── BACKGROUND ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Grille subtile pour donner de la texture au noir */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        {/* Vignettage pour focus le centre */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,1)_90%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* ── HEADER ── */}
        <div className="mb-8 lg:mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold uppercase tracking-[0.2em] text-white md:text-5xl"
          >
            {geographicAvailabilityCopy.title}
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-[#8A1F24] to-transparent shadow-[0_0_20px_#8A1F24]" 
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg text-neutral-400 font-light"
          >
            {geographicAvailabilityCopy.subtitle}
          </motion.p>
        </div>

        {/* ── CONTENT GRID ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 items-start">
          
          {/* 1. MAP VISUALIZER (Left / Top) - Span 7 cols */}
          <motion.div 
            className="relative w-full lg:col-span-7 h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
             {/* Glow Rouge d'ambiance derrière l'Afrique */}
             <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8A1F24] opacity-20 blur-[100px]" />

            <div className="relative h-full w-full">
              {/* Carte : Ajout de 'invert' et 'opacity-30' pour transformer les lignes noires en gris clair sur fond noir */}
              <Image
                src="/images/africa-map.png"
                alt="Africa Map Coverage"
                fill
                className="object-contain invert opacity-30 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                priority
              />

              {/* PAYS & LABELS LOOP */}
              {geographicAvailabilityCopy.countries.map((country, index) => {
                const isNigeria = country.id === "nigeria";
                
                return (
                  <motion.div
                  key={country.id}
                  // On utilise des classes Tailwind pour basculer entre les variables Mobile et Desktop
                  className="absolute left-[var(--x-mob)] top-[var(--y-mob)] md:left-[var(--x-desk)] md:top-[var(--y-desk)]"
                  style={{ 
                    // On injecte tes valeurs du fichier de config ici
                    "--x-mob": country.x.mobile,
                    "--y-mob": country.y.mobile,
                    "--x-desk": country.x.desktop,
                    "--y-desk": country.y.desktop,
                  } as any}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 1 + 1, type: "spring" }}
                >
                    <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                      
                      {/* Pulse Ring (Nigeria Custom CSS) */}
                      {isNigeria && (
                        <div className="absolute h-20 w-20 rounded-full border border-[#8A1F24]/30 bg-[#8A1F24]/10 nigeria-ring-pulse" />
                      )}
                      
                      {/* Dot Central */}
                      <div className={`relative z-10 rounded-full border border-white/20 bg-[#8A1F24] shadow-[0_0_15px_#8A1F24] ${isNigeria ? 'h-4 w-4' : 'h-2 w-2 bg-neutral-500'}`} />

                      {/* HUD Label */}
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.8 + 1.2 }} 
                        className={`absolute z-20 min-w-[100px]
                          ${country.labelPosition === 'top' ? 'bottom-full mb-4 left-1/2 -translate-x-1/2' : ''}
                          ${country.labelPosition === 'bottom' ? 'top-full mt-2 mr-12' : ''}
                          ${country.labelPosition === 'left' ? 'right-full mr-4 top-1/2 -translate-y-1/2' : ''}
                          ${country.labelPosition === 'right' ? 'left-full ml-4 top-1/2 -translate-y-1/2' : ''}
                          ${country.labelPosition === 'top-right' ? 'left-full bottom-full -mb-1 ml-2 sm:mb-1' : ''}
                          ${country.labelPosition === 'top-left' ? 'right-full bottom-full -mr-10 mb-4 sm:mr-4 mb-2' : ''}
                          ${country.labelPosition === 'bottom-left' ? 'right-full top-full mr-2 mt-2' : ''}
                          ${country.labelPosition === 'bottom-right' ? 'left-full top-full -mb-2 ml-1 sm:mt-1' : ''}
                          ${!country.labelPosition ? 'bottom-full mb-4 left-1/2 -translate-x-1/2' : ''} 
                        `}
                      >
                        {/* ======================================================= */}
                        {/* 1. VERSION MOBILE (Visible uniquement sur petit écran)  */}
                        {/* ======================================================= */}
                        <div className="md:hidden backdrop-blur-md bg-black/80 border border-white/20 px-2 py-1 rounded shadow-lg flex items-center gap-2 whitespace-nowrap">
                        <span className="text-[10px] font-bold text-white uppercase tracking-wide">
                          {country.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#FF5A5A]">
                           {country.year}
                           </span>
                           </div>

              {/* ======================================================= */}
              {/* 2. VERSION DESKTOP (Ton design original intact)         */}
              {/* ======================================================= */}
            <div className="hidden md:block backdrop-blur-md bg-white/5 border border-white/10 p-3 rounded-sm shadow-2xl">
             <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8A1F24] animate-pulse"/>
             <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Target</span>
                 </div>
                    <div className="text-sm font-bold text-white tracking-wide uppercase leading-none mb-1">
                    {country.name}
                     </div>
                     <div className="text-[10px] font-mono text-[#FF5A5A]">
                       Deploy: {country.year}
                      </div>
                      </div>
                      </motion.div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 2. TIMELINE VERTICALE (Right) - Span 5 cols */}
          <div className="-mt-20 sm:mt-5 lg:col-span-5 relative pl-4 lg:pl-0">
            {/* Barre Verticale "Beam" */}
            <div className="absolute left-[19px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-[#8A1F24] via-[#8A1F24]/20 to-transparent opacity-50" />

            <div className="space-y-12">
              {geographicAvailabilityCopy.timeline.map((item, index) => {
                const isFirst = index === 0;
                
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative pl-12"
                  >
                    {/* Timeline Node */}
                    <div className={`absolute left-[11px] top-1.5 h-[18px] w-[18px] -translate-x-1/2 rounded-full border border-[#8A1F24]/50 bg-black z-10 flex items-center justify-center
                      ${isFirst ? 'shadow-[0_0_15px_#8A1F24]' : ''}
                    `}>
                      <div className={`rounded-full transition-all duration-500 ${isFirst ? 'bg-[#8A1F24] h-2 w-2' : 'bg-neutral-800 h-1.5 w-1.5'}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col">
                      <span className={`text-4xl font-bold tracking-tighter mb-2 ${isFirst ? 'text-white' : 'text-neutral-600'}`}>
                        {item.year}
                      </span>
                      <span className="inline-block mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#FF5A5A]">
                        {item.badge}
                      </span>
                      <h3 className="text-lg text-white font-medium mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA intégré en bas de timeline */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 pl-12"
            >
              <p className="mb-6 text-sm text-neutral-300 border-l-2 border-white/10 pl-4 py-1">
                {geographicAvailabilityCopy.cta.text}
              </p>
              
              <button
                onClick={scrollToWaitlist}
                className="cta-button group relative flex items-center gap-4 bg-white hover:bg-[#701015] px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all overflow-hidden"
              >
                {/* Effet Shine au survol */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                
                <span className="relative z-10">Join Waitlist</span>
                <svg className="relative z-10 h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}