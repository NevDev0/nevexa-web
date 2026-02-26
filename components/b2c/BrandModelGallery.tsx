"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ContactChoiceModal from "@/components/ContactChoiceModal";
import {
  brandModelGallery,
  getModelGallery,
  getModelThumbnail,
  hasPhotos,
} from "@/content/b2c.en";

type BrandId = "land-rover" | "bmw" | "mercedes" | "lexus" | "toyota";

interface Model {
  id: string;
  name: string;
  displayName: string;
  subtitle?: string;
  fullName: string;
  year: string;
  price: string;
  category: string;
  horsepower: string;
  engineType: string;
  exteriorCount: number;
  interiorCount: number;
  description: string;
}

export default function BrandModelGallery() {
  const [activeBrand, setActiveBrand] = useState<BrandId>("land-rover");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedModel, setSelectedModel] = useState<{ brand: BrandId; model: Model } | null>(null);
  const [showContactChoice, setShowContactChoice] = useState(false);
  const [contactSubject, setContactSubject] = useState("");
  const [visible, setVisible] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });

  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const activeModels = (brandModelGallery.models[activeBrand] || []) as Model[];

  // ── SCROLL REVEAL ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ── SLIDING TAB INDICATOR ──
  useEffect(() => {
    const idx = brandModelGallery.brands.findIndex(b => b.id === activeBrand);
    const el = tabRefs.current[idx];
    const container = tabsRef.current;
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setTabIndicator({
        left: elRect.left - containerRect.left + container.scrollLeft,
        width: elRect.width,
      });
    }
  }, [activeBrand, visible]);

  // ── WIPE TRANSITION ON BRAND CHANGE ──
  const handleBrandChange = (brandId: BrandId) => {
    if (brandId === activeBrand || isTransitioning) return;
    setIsTransitioning(true);
    setCarouselIndex(0);
    setTimeout(() => {
      setActiveBrand(brandId);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);
  };

  // ── CAROUSEL SCROLL TRACKING ──
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const handleScroll = () => {
      const itemWidth = el.scrollWidth / activeModels.length;
      const idx = Math.round(el.scrollLeft / itemWidth);
      setCarouselIndex(Math.min(idx, activeModels.length - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [activeModels.length]);

  const handleContactModal = (subject?: string) => {
    setContactSubject(subject || "New inquiry — Nevexa website");
    setShowContactChoice(true);
  };

  return (
    // ── id="catalog" ajouté — permet au CTA hero "Explore catalog" de scroller ici ──
    <section id="catalog" ref={sectionRef} className="w-full overflow-x-hidden bg-[#0E0F11] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* ── HEADER ── */}
        <div className={`mb-3 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            {brandModelGallery.title}
          </h2>
        </div>

        <div className="mb-12 flex justify-center">
          <div className={`mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#5A0F14] to-transparent shadow-[0_0_15px_rgba(138,31,36,0.8)] ${visible ? "w-12" : "w-0"}`} />
        </div>

        {/* ── BRAND TABS WITH SLIDING INDICATOR ── */}
        <div className={`relative mb-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-black to-transparent lg:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-black to-transparent lg:hidden" />

          <div ref={tabsRef} className="scrollbar-hide relative flex gap-3 overflow-x-auto lg:justify-center">
            {/* Sliding burgundy background */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 rounded-lg bg-[#5A0F14]/15 transition-all duration-350 ease-out"
              style={{ left: tabIndicator.left, width: tabIndicator.width }}
            />

            {brandModelGallery.brands.map((brand, idx) => (
              <button
                key={brand.id}
                ref={el => { tabRefs.current[idx] = el; }}
                onClick={() => handleBrandChange(brand.id as BrandId)}
                className={`relative z-10 flex-shrink-0 rounded-lg border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  activeBrand === brand.id
                    ? "border-[#5A0F14] text-white"
                    : "border-white/15 bg-transparent text-neutral-500 hover:border-white/30 hover:text-white"
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>

        {/* ── CARDS WITH WIPE TRANSITION ── */}
        <div
          className="transition-all duration-250 ease-in-out"
          style={{
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? "translateX(12px)" : "translateX(0)",
          }}
        >
          {/* MOBILE: Carousel */}
          <div className="block lg:hidden">
            <div ref={carouselRef} className="carousel-container mb-4">
              {activeModels.map((model, idx) => (
                <div
                  key={model.id}
                  className="carousel-item"
                  style={{
                    // Opacity réduite sur les cards non-actives — effet peek premium
                    // transition smooth pour ne pas être abrupte au scroll
                    opacity: idx === carouselIndex ? 1 : 0.4,
                    transition: "opacity 300ms ease-in-out",
                  }}
                >
                  <ModelCard
                    model={model}
                    activeBrand={activeBrand}
                    visible={visible}
                    index={idx}
                    onExplore={() => {
                      if (hasPhotos(model.exteriorCount, model.interiorCount))
                        setSelectedModel({ brand: activeBrand, model });
                    }}
                  />
                </div>
              ))}
            </div>

            {/* ── PROGRESS BAR ── */}
            <div className="mb-8 px-2">
              <div className="h-px w-full overflow-hidden rounded-full bg-white/30">
                <div
                  className="h-full rounded-full bg-[#5A0F14] transition-all duration-400 ease-out"
                  style={{ width: `${((carouselIndex + 1) / activeModels.length) * 100}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between">
                <span className="text-[10px] uppercase tracking-wider text-white/80">
                  {String(carouselIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/80">
                  {String(activeModels.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* DESKTOP: Grid */}
          <div className="hidden lg:mb-12 lg:grid lg:grid-cols-3 lg:gap-8">
            {activeModels.map((model, idx) => (
              <ModelCard
                key={model.id}
                model={model}
                activeBrand={activeBrand}
                visible={visible}
                index={idx}
                onExplore={() => {
                  if (hasPhotos(model.exteriorCount, model.interiorCount))
                    setSelectedModel({ brand: activeBrand, model });
                }}
              />
            ))}
          </div>
        </div>

        {/* ── CUSTOM SOURCING CTA ── */}
        <div className={`mb-8 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="mb-4 text-sm text-neutral-400">
            {brandModelGallery.customSourcingCta.text}
          </p>
          <button
            onClick={() => handleContactModal("Custom Vehicle Sourcing Request")}
            className="rounded-full border border-white/30 bg-transparent px-8 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/35 hover:bg-white/5 hover:text-white/90"
          >
            {brandModelGallery.customSourcingCta.buttonLabel}
          </button>
        </div>

        <p className={`text-center text-xs text-neutral-500 transition-all duration-700 delay-[600ms] ${visible ? "opacity-100" : "opacity-0"}`}>
          {brandModelGallery.disclaimer}
        </p>
      </div>

      {selectedModel && (
        <GalleryModal
          brand={selectedModel.brand}
          model={selectedModel.model}
          onClose={() => setSelectedModel(null)}
          onRequest={(subject) => { setSelectedModel(null); handleContactModal(subject); }}
        />
      )}

      <ContactChoiceModal
        isOpen={showContactChoice}
        onClose={() => setShowContactChoice(false)}
        subject={contactSubject}
      />
    </section>
  );
}

// ═══════════════════════════════════════════
// MODEL CARD
// ═══════════════════════════════════════════

interface ModelCardProps {
  model: Model;
  activeBrand: BrandId;
  visible: boolean;
  index: number;
  onExplore: () => void;
}

function ModelCard({ model, activeBrand, visible, index, onExplore }: ModelCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Amplitude augmentée 7 → 10px pour un effet de profondeur plus perceptible
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={`group cursor-pointer transition-all duration-600 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${300 + index * 120}ms` }}
      onClick={onExplore}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
    >
      {/* Name */}
      <div className="mb-6 text-center">
        <h2 className="font-serif text-3xl italic tracking-wide text-white lg:text-4xl">
          {model.displayName}
        </h2>
        {model.subtitle && (
          <p className="mt-1 text-xs font-light tracking-widest text-neutral-400 md:text-sm">
            {model.subtitle}
          </p>
        )}
      </div>

      {/* Image with parallax */}
      <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/10 bg-black transition-all duration-300 group-hover:border-white/20 group-hover:shadow-xl group-hover:shadow-black/60">
        {hasPhotos(model.exteriorCount, model.interiorCount) ? (
          <Image
            src={getModelThumbnail(activeBrand, model.id)}
            alt={model.name}
            fill
            sizes="(max-width: 1024px) 90vw, 33vw"
            className="object-contain"
            style={{
              transition: "transform 0.4s ease-out",
              transform: isHovered
                ? `scale(1.05) translate(${mousePos.x}px, ${mousePos.y}px)`
                : "scale(1) translate(0px, 0px)",
            }}
            quality={75}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-600">Coming Soon</p>
            <p className="text-xs text-neutral-700">Available early 2026</p>
          </div>
        )}
      </div>

      {/* Category + Price */}
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="rounded-md border border-white/10 px-3 py-1 text-xs font-medium tracking-wide text-neutral-400">
          {model.category}
        </span>
        <span className="text-xs font-light tracking-wide text-white/60">
          {model.price}
        </span>
      </div>

      {/* Description */}
      <p className="mb-6 text-center text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
        {model.description}
      </p>

      {/* CTA — w-full sur desktop pour cohérence visuelle dans la grille */}
      <div className="flex justify-center">
        <button
          disabled={!hasPhotos(model.exteriorCount, model.interiorCount)}
          className="w-full rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-neutral-100 disabled:opacity-40 disabled:hover:scale-100"
        >
          Explore {model.displayName}
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// GALLERY MODAL
// ═══════════════════════════════════════════

interface GalleryModalProps {
  brand: BrandId;
  model: Model;
  onClose: () => void;
  onRequest: (subject: string) => void;
}

function GalleryModal({ brand, model, onClose, onRequest }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gallery = getModelGallery(brand, model.id, model.exteriorCount, model.interiorCount);

  const handlePrev = () => setCurrentIndex(p => p === 0 ? gallery.length - 1 : p - 1);
  const handleNext = () => setCurrentIndex(p => p === gallery.length - 1 ? 0 : p + 1);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20" aria-label="Close">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative w-full max-w-5xl" onClick={e => e.stopPropagation()}>
        <div className="mb-2 text-center">
          <h2 className="mb-4 font-serif text-4xl italic text-white md:text-5xl">{model.displayName}</h2>
          <p className="text-sm text-neutral-400">{model.fullName}</p>
        </div>

        <div className="relative mb-4 h-[35vh] w-full overflow-hidden rounded-lg bg-black md:h-[45vh]">
          <Image src={gallery[currentIndex]} alt={`${model.name} - ${currentIndex + 1}`} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-contain" quality={90} priority />

          <button onClick={handlePrev} className="absolute left-0.5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/80">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={handleNext} className="absolute right-0.5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/80">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="absolute bottom-4 right-2 z-10 rounded-lg bg-transparent px-2 py-1 backdrop-blur-md md:hidden">
            <p className="text-sm font-light tracking-wide text-[#F3EFEA]">{model.price}</p>
          </div>
        </div>

        {/* Desktop specs + price */}
        <div className="mb-3 hidden items-center justify-center gap-16 md:flex">
          <div className="flex items-center gap-6 text-sm text-neutral-200">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span>{model.horsepower}</span>
            </div>
            <div className="h-4 w-px bg-neutral-700" />
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              <span>{model.engineType}</span>
            </div>
          </div>
          <div className="rounded-lg bg-white/90 px-4 py-1">
            <p className="text-sm font-light tracking-wide text-[#5A0F14]">{model.price}</p>
          </div>
        </div>

        {/* Mobile specs */}
        <div className="mb-3 flex items-center justify-center gap-6 text-sm text-neutral-200 md:hidden">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span>{model.horsepower}</span>
          </div>
          <div className="h-4 w-px bg-neutral-700" />
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <span>{model.engineType}</span>
          </div>
        </div>

        <div className="mb-4 text-center">
          <span className="inline-block rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-white">
            {currentIndex + 1} / {gallery.length}
          </span>
        </div>

        <div className="scrollbar-hide mb-6 flex justify-center gap-2 overflow-x-auto pb-2">
          {gallery.map((photo, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)}
              className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${index === currentIndex ? "border-[#5A0F14]" : "border-transparent hover:border-white/30"}`}>
              <Image src={photo} alt={`Thumbnail ${index + 1}`} fill sizes="112px" className="object-cover" quality={60} />
            </button>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onRequest(`Request for ${model.fullName}`)}
            className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-100 sm:w-auto"
          >
            Request {model.displayName}
          </button>
        </div>
      </div>
    </div>
  );
}