"use client";

import { useEffect, useState } from "react";
import { heroCopy } from "../content/en";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  // On n’active la vidéo qu’après une interaction (scroll / clic)
  useEffect(() => {
    const enableVideo = () => {
      setCanPlayVideo(true);
    };

    window.addEventListener("scroll", enableVideo, { once: true });
    window.addEventListener("click", enableVideo, { once: true });

    const idleTimeout = window.setTimeout(enableVideo, 4000); // "idle" simple

    return () => {
      window.removeEventListener("scroll", enableVideo);
      window.removeEventListener("click", enableVideo);
      window.clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background poster (prioritaire pour le LCP) */}
      <div className="absolute inset-0">
        <img
          src="/hero-poster.jpg"
          alt="Vehicle shipping from Canada to Africa"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Vidéo lazy par-dessus le poster, activée après interaction/idle */}
      {canPlayVideo && false && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay : un seul gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90" />

      {/* Contenu principal */}
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <div className="max-w-md">
          <h1 className="mb-3 text-3xl font-semibold leading-snug sm:text-4xl sm:leading-snug">
            {heroCopy.title}
          </h1>

          <h2 className="mb-8 text-sm leading-relaxed text-neutral-300 sm:text-base">
            {heroCopy.subtitle}
          </h2>

          {/* CTA zone — mobile: empilés, full width */}
          <div className="mx-auto flex w-full max-w-xs flex-col gap-3">
            {/* CTA primaire B2C */}
            <Link
              href="/b2c"
              className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-colors duration-200 ease-out hover:bg-neutral-100 focus:bg-neutral-100"
            >
              {heroCopy.ctaIndividuals}
            </Link>

            {/* CTA secondaire B2B */}
            <Link
              href="/b2b"
              className="w-full rounded-full border border-white/70 bg-transparent px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 ease-out hover:border-white focus:border-white"
            >
              {heroCopy.ctaProfessionals}
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
}
