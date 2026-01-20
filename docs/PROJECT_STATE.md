# NEVEXA — PROJECT STATE

## Stack
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Environment: Cursor (local)
- Red accent locked in #5A0F14
---

## Pages

### Homepage
Status: IN PROGRESS (V1 Launch)

Sections:
- Section 1 — Hero ✅
- Section 2 — How Nevexa operates ✅
- Section 3 — Brands marquee ✅
- Section 4 — Choose Your Path ✅
- Section 5 — Delivery Options ✅
- Section 6 — Real Results ✅
- Section 7 — Final CTA ⏳
- Section 8 — Footer ⏳

---

## Locked decisions (DO NOT REOPEN)

- Mobile-first strict
- Homepage built section by section
- Performance > aesthetics (V1)
- No design polish before full structure is complete
- Section 3 uses marquee with real brand logos + legal disclaimer
- No forms on homepage (direct contact only)

---

## Implementation notes


- Section 1 (Hero):
  - Rôle: section dense / impact, entrée de page
  - Hauteur: `min-h-[90vh]` (pas de full 100vh pour laisser sentir le scroll)
  - Layout: contenu légèrement remonté (`pt-24 pb-16`, centered, `max-w-md`)
  - Fond: image poster statique prioritaire pour le LCP + 1 seul gradient (`from-black/80 via-black/20 to-black/90`)
  - Vidéo: lazy-ready (interaction/idle), désactivée pour V1 (perf-first)
  - Typo:
    - H1: `text-3xl sm:text-4xl`, `font-semibold`, `leading-snug`
    - Subtitle: `text-sm sm:text-base`, `text-neutral-300`, `leading-relaxed`
  - CTA:
    - 2 boutons empilés, `max-w-xs`, pill full-width
    - Primary: fond blanc, texte noir, micro-hover `bg-neutral-100` (`transition-colors`)
    - Secondary: outline blanc (`border-white/70 → border-white` au hover)
    - Routes: `/b2c` et `/b2b`
  - Scroll hint:
    - Texte `Scroll` en bas de hero + micro fade loop très lent (Framer Motion)

- Section 2 (How Nevexa operates):
  - Rôle: section standard (calme, structurante) après la Hero
  - Layout: `pt-16 pb-16`, centered `max-w-md`
  - Titre: H2 renforcé (`text-2xl sm:text-3xl`, `font-semibold`)
  - Trust line (edge marketing):
    - Texte blanc (`font-semibold`, `tracking-wide`)
    - Underline signature `#5A0F14` (fin, centré)
    - Copy: "Official dealerships only. No auctions."
  - 4 steps:
    - Grille 2×2 mobile / 4 colonnes desktop
    - Bulles “process premium” lockées:
      - Anneau externe discret
      - Anneau intermédiaire blanc
      - Cœur `#5A0F14` avec numéro en blanc
    - Objectif: rendre la méthode lisible sans ajouter de texte/feature

- Section 3 (Brands marquee):
  - Brand logos normalisés manuellement (600×240)
  - Optical balance ajustée via `scale` par logo (dans `content/en.ts`)
  - Section “light” (respiration): padding réduit vs sections denses
  - Marquee:
    - Logos plus resserrés (3–4 visibles) via `gap` réduit + largeur item ajustée
    - Vitesse ralentie pour rendu premium (animation plus lente)
    - Pause au hover activée
    - `prefers-reduced-motion` respecté
  - Legal note affichée sous le bandeau (micro-typo)

- Section 4 (Choose Your Path):
  - Rôle: bloc décisionnel (2 chemins principaux + 1 option spéciale)
  - Structure: 3 cards (B2C, B2B, Financing) — placeholders visuels (perf-first)
  - Hiérarchie:
    - Individuals + Professionals = chemins principaux (CTA “porcelaine”/blanc cassé)
    - Financing = option spéciale “EARLY ACCESS” (accent `#5A0F14`)
  - Header:
    - Label uppercase + tracking (aligné visuellement avec Section 3)
    - Underline signature `#5A0F14` fin (présence sans agressivité)
    - Entrée adoucie (padding top ajusté) pour ne pas “envahir” le bas de Section 3
  - Cards:
    - Taille légèrement réduite (padding + placeholder height) pour tenir mieux sur mobile
    - Borders:
      - B2C/B2B: bordure neutre au repos, accent `#5A0F14` au hover
      - Financing: bordure `#5A0F14` subtile au repos (distinction claire)
    - Badge EARLY ACCESS:
      - Fond blanc, texte `#5A0F14` (visible, non confus)
    - CTA:
      - B2C/B2B: fond clair, texte noir, pill, hover subtil
      - Financing: outline `#5A0F14` + texte blanc (lisible), hover léger

- All homepage sections are static (no backend logic)

- Section 5 (Delivery Options):
  - Informational only (no selection, no CTA)
  - 2 delivery modes: Port-to-Port, Door-to-Door
  - Same visual hierarchy as Section 4 title

- Section 6 (Real Results):
  - Mobile: horizontal swipeable carousel (scroll-snap)
  - Desktop: grid layout (≤ 3 items)
  - Data source abstracted (mock file, API-ready)
  - Images handled via next/image

  - Section 7 (Final CTA):
  - Single CTA: "Speak with a Nevexa advisor"
  - No forms, no inputs, no backend logic
  - Mobile: bottom sheet interaction
  - Desktop: centered modal
  - Contact options: Email (mailto) and WhatsApp (direct link)
  - Overlay + explicit close button for dismissal

