"use client";

import { motion, Variants } from "framer-motion";
import { contactCTAB2B } from "@/content/b2b.en";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
};

export default function ContactCTAB2B() {
  const channels = [
    {
      id: "email",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor">
          <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.2l8 5 8-5V7H4Zm0 3.25V18h16v-7.75l-7.56 4.73a1 1 0 0 1-1.08 0L4 10.25Z" fill="currentColor" stroke="none" />
        </svg>
      ),
      title: "Email",
      tagline: "Fleet sourcing & partnerships",
      action: contactCTAB2B.ctaPrimary,
      href: "mailto:contact@nevexacars.com",
    },
    {
      id: "whatsapp",
      icon: (
        <svg viewBox="0 0 32 32" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor">
          <path d="M16 3C9.383 3 4 8.383 4 15c0 2.054.551 4.022 1.6 5.77L4 29l8.434-1.566A11.84 11.84 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3Zm0 2c5.534 0 10 4.466 10 10s-4.466 10-10 10a9.83 9.83 0 0 1-4.91-1.332l-.355-.207-4.99.926.955-4.834-.23-.373A9.77 9.77 0 0 1 6 15c0-5.534 4.466-10 10-10Zm-4.104 5.5a1.01 1.01 0 0 0-.74.356c-.192.225-.668.652-.668 1.586 0 .934.684 1.838.78 1.965.096.128 1.34 2.13 3.287 2.996 1.946.867 1.946.578 2.296.547.35-.03 1.126-.46 1.285-.905.16-.445.16-.826.114-.905-.046-.08-.178-.128-.373-.225-.195-.096-1.153-.57-1.332-.636-.178-.064-.308-.096-.437.097-.128.192-.502.635-.615.764-.113.128-.225.145-.42.048-.195-.096-.825-.304-1.572-.968-.58-.517-.97-1.155-1.083-1.35-.113-.192-.012-.296.084-.392.086-.085.195-.225.292-.337.097-.112.129-.192.194-.32.064-.128.032-.24-.017-.337-.048-.096-.426-1.03-.585-1.412-.145-.35-.29-.363-.42-.369Z" />
        </svg>
      ),
      title: "WhatsApp",
      tagline: "For urgent questions",
      action: contactCTAB2B.ctaSecondary,
      href: "https://wa.me/14374842769",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0E0F11] px-6 py-20 sm:py-32">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(90,15,20,0.12)_0%,transparent_70%)]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-12 text-center sm:mb-20">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {contactCTAB2B.title}
          </h2>
          <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)]" />
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-[18px]">
            {contactCTAB2B.subtitle}
          </p>
        </motion.div>

        {/* Channels Grid/Flex */}
        <div className="flex flex-row gap-3 sm:grid sm:grid-cols-2 sm:gap-6">
          {channels.map((channel) => (
            <motion.a
              key={channel.id}
              variants={itemVariants}
              href={channel.href}
              className="group relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 text-center transition-all duration-500 hover:border-[#5A0F14]/40 sm:p-12"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#5A0F14]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Icon Circle */}
              <div className="relative mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all duration-500 group-hover:bg-[#5A0F14] group-hover:shadow-[0_0_20px_rgba(90,15,20,0.6)] sm:mb-8 sm:h-16 sm:w-16">
                {channel.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="relative text-[15px] font-bold text-white sm:mb-2 sm:text-2xl transition-colors group-hover:text-[#5A0F14]">
                {channel.title}
              </h3>
              
              {/* Hidden on mobile to save space */}
              <p className="relative hidden text-[14px] leading-relaxed text-white/40 sm:mb-8 sm:block">
                {channel.tagline}
              </p>
              
              {/* Action Button Label */}
              <div className="relative mt-2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#5A0F14] sm:mt-auto sm:text-[13px] sm:text-white/80 transition-all group-hover:text-white">
                {channel.action}
                <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Disclaimer/Note */}
        <motion.div variants={itemVariants} className="mt-12 text-center sm:mt-20">
          <p className="inline-block rounded-full border border-white/5 bg-white/5 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 sm:text-[12px]">
            {contactCTAB2B.note}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}