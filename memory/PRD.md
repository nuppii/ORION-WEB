
## Update — Refonte contenu + sections cosmiques 3D (Juillet 2025)
- Contenu intégral remplacé par le nouveau texte fourni (EN) via src/components/site/content.js (source unique)
- Nouvelles sections : Vision, About+Principles, Capabilities (accordéon 9 items), Architecture (galaxie 3D épinglée, 9 couches), How It Works (timeline 10 étapes), Integrations (système solaire 3D, 5 services-planètes), Finance, Security, Tech Stack (marquee + 8 groupes), Status (panneau diagnostics + 13 limitations), Roadmap (6 phases), FAQ (accordéon 10), Final CTA (trou noir 3D), Disclaimer, Footer © 2026 Rochat's Enterprise
- Nav : 9 liens + bouton Discover ORION + menu mobile plein écran + barre de progression scroll
- 3 scènes three.js pilotées par le scroll (framer-motion useScroll + useMotionValueEvent), montées uniquement quand visibles (useInView), fallback statique en prefers-reduced-motion
- Pas de formulaire de contact (aligné sur la branche main). Frontend uniquement, backend inchangé.
