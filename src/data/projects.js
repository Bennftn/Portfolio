export const projects = [
  {
    title: "VANTA - E-commerce Streetwear",
    description:
      "Site e-commerce complet avec panier fonctionnel, système multilingue (6 langues) et design minimaliste haut de gamme.",
    image: "/assets/VANTA-landing.png",
    skills: [
      "React",
      "E-commerce",
      "Multi-langue (i18n)",
      "State Management",
      "UI/UX Design",
    ],
    tech: [
      "React",
      "React Router",
      "Context API",
      "Tailwind CSS",
      "Framer Motion",
      "LocalStorage",
      "Vite",
    ],
    challenges: [
      {
        problem:
          "Créer un système de panier complexe avec gestion des variantes (tailles, couleurs).",
        solution:
          "Implémentation d'un Context API robuste gérant l'ajout/suppression/modification de produits avec variants uniques, persistance LocalStorage et calculs en temps réel.",
      },
      {
        problem:
          "Système de traduction complet pour 6 langues (EN/FR/ES/DE/IT/JA).",
        solution:
          "Architecture i18n centralisée avec Context React, dot notation pour accès aux clés, persistance langue utilisateur et sélecteur visuel avec drapeaux.",
      },
      {
        problem:
          "Design ultra-premium avec direction artistique forte (Noir + Lime).",
        solution:
          "Utilisation de typographie Bebas Neue, animations Framer Motion subtiles, micro-interactions sur chaque élément, glassmorphism sur composants clés.",
      },
      {
        problem: "Expérience checkout réaliste sans backend.",
        solution:
          "Formulaire multi-étapes avec validation, simulation de paiement, feedback visuel immédiat, états de chargement et confirmation animée.",
      },
    ],
    features: [
      "8 produits avec variations (tailles, couleurs)",
      "Panier fonctionnel avec drawer latéral",
      "Système checkout complet",
      "6 langues avec persistance",
      "Filtres et tri produits",
      "Pages détaillées produits",
      "Animations fluides",
      "100% responsive",
    ],
    liveUrl: "https://site-e-commerce-fictif.vercel.app/",
  },
  {
    title: "FlowTask - SaaS Landing Page",
    description:
      "Landing page ultra-moderne pour plateforme de gestion de tâches avec animations avancées et design gradient.",
    image: "/assets/saas-landing.png",
    skills: [
      "React",
      "Animation",
      "UI/UX Design",
      "Landing Page",
      "Conversion Design",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "CSS Animations",
      "Vite",
    ],
    challenges: [
      {
        problem:
          "Créer des animations impressionnantes sans sacrifier les performances.",
        solution:
          "Utilisation de Framer Motion pour animations orchestrées, blobs CSS animés avec keyframes optimisées, intersection observer pour animations au scroll, lazy loading des sections.",
      },
      {
        problem: "Design gradient complexe avec multiples couches animées.",
        solution:
          "Background gradient animé 400% avec keyframes CSS, blobs flottants avec blur-3xl, grid pattern overlay, glassmorphism sur cards avec backdrop-blur.",
      },
      {
        problem: "Section pricing persuasive avec focus sur l'offre premium.",
        solution:
          "Card centrale agrandie (scale-110), border gradient animé, badge 'Most Popular', alignement parfait des boutons CTA, shadows volumétriques.",
      },
      {
        problem: "Typographie et hiérarchie visuelle forte.",
        solution:
          "Duo de fonts Space Grotesk + Inter, text-gradient sur titres clés, tailles display importantes (text-6xl à text-8xl), tracking et leading optimisés.",
      },
    ],
    features: [
      "Hero avec animations complexes",
      "Section Features glassmorphism",
      "Stats animés au scroll",
      "Pricing avec 3 plans",
      "6 Testimonials clients",
      "Footer complet",
      "Navbar sticky adaptive",
      "100% responsive",
    ],
    liveUrl: "https://saas-landing-fictif.vercel.app/",
  },
  {
    title: "Le Clos des Saveurs - Restaurant Gastronomique",
    description:
      "Site vitrine élégant pour restaurant gastronomique avec carte interactive, carte des vins détaillée et système de réservation en ligne.",
    image: "/assets/restaurant-landing.png",
    skills: [
      "React",
      "UI/UX Design",
      "Hospitality",
      "Animation",
      "Responsive Design",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Google Maps API",
      "Lucide React",
      "Vite",
    ],
    challenges: [
      {
        problem:
          "Créer une ambiance gastronomique haut de gamme tout en restant accessible.",
        solution:
          "Palette couleurs chaude (bordeaux/or/crème), typographie élégante, hero avec parallax sur image culinaire, photographies professionnelles haute qualité des plats et ambiance.",
      },
      {
        problem:
          "Présenter une carte des plats visuellement attrayante et organisée.",
        solution:
          "Section 'La Carte' avec grid de plats illustrés, badges 'Nouveau' sur nouveautés, prix clairement affichés, catégorisation (Entrées, Plats, Desserts), descriptions courtes et appétissantes.",
      },
      {
        problem:
          "Carte des vins complète avec 20+ références organisées par type.",
        solution:
          "Section dédiée 'La Cave' avec filtrage par type (Rouge, Blanc, Rosé, Effervescent), cards vins avec millésime, région, cépage, prix verre/bouteille, notes de dégustation, design bouteille avec étiquette.",
      },
      {
        problem:
          "Système de réservation intuitif avec sélection date/heure/convives.",
        solution:
          "Formulaire réservation avec calendrier interactif, sélection nombre de personnes (1-12+), créneaux horaires disponibles, champs contact (nom, email, téléphone, commentaires), confirmation visuelle.",
      },
      {
        problem:
          "Mettre en avant les 3 menus dégustation (Découverte 45€, Signature 65€, Gastronomique 95€).",
        solution:
          "Section 'Menus Dégustation' avec cards bordeaux/noir, listing détaillé des plats de chaque menu, accords mets-vins suggérés, call-to-action réservation directe.",
      },
    ],
    features: [
      "Hero fullscreen avec parallax",
      "Carte interactive avec photos plats",
      "Cave à vins (20+ références)",
      "3 menus dégustation détaillés",
      "Système de réservation en ligne",
      "Galerie photos ambiance/créations",
      "Section 'Nos Créations' avec chef",
      "Avis clients avec étoiles",
      "Google Maps intégré",
      "Stats restaurant (4.8★, 500+ avis, 10 ans)",
      "Footer avec horaires et contact",
      "100% responsive",
    ],
    liveUrl: "https://landing-page-restaurant-vins.vercel.app/",
  },
  {
    title: "ComptaPro - Cabinet d'Expertise Comptable",
    description:
      "Landing page professionnelle pour cabinet comptable avec système de tarification transparent et formulaire de devis personnalisé.",
    image: "/assets/compta-landing.png",
    skills: [
      "React",
      "UI/UX Design",
      "Landing Page",
      "Forms",
      "Responsive Design",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Lucide React",
      "Vite",
    ],
    challenges: [
      {
        problem:
          "Créer une interface de confiance pour un secteur conservateur (comptabilité).",
        solution:
          "Design sobre et professionnel avec palette bleu/blanc, mise en avant des certifications (15 ans d'expérience, 200+ entreprises), témoignages clients avec photos, section transparence tarifaire.",
      },
      {
        problem:
          "Système de tarification clair avec 3 formules adaptées (Micro/TPE/PME).",
        solution:
          "Cards de pricing avec features détaillées, highlighting de l'offre recommandée (TPE/Indépendant à 180€/mois), option 'Sur devis' pour PME/Sociétés, comparaison visuelle des prestations incluses.",
      },
      {
        problem:
          "Formulaire de contact complexe avec collecte d'informations métier.",
        solution:
          "Formulaire multi-champs avec sélection type d'entreprise, secteur d'activité, nombre d'employés, CA annuel, checkboxes services souhaités, validation en temps réel, design accessible.",
      },
      {
        problem: "Rassurer sur l'expertise et la réactivité du cabinet.",
        solution:
          "Section 'Comment ça fonctionne' avec steps clairs (Prise de contact → Premier RDV → Suivi personnalisé), cards Expertise/Transparence avec icônes, stats de confiance en hero (15 ans, 200+ clients, 24h réponse).",
      },
    ],
    features: [
      "Hero avec stats de confiance",
      "3 formules tarifaires transparentes",
      "Section services détaillés (6 prestations)",
      "Process en 3 étapes",
      "Témoignages clients avec avatars",
      "Formulaire de devis avancé",
      "Footer complet avec coordonnées",
      "Design professionnel bleu/blanc",
    ],
    liveUrl: "https://landing-page-comptable.vercel.app",
  },
  {
    title: "Alexandre Moreau - Coach Sportif",
    description:
      "Landing page complète avec système de réservation pour coach sportif personnel.",
    image: "/assets/landing-page-coach.PNG",
    skills: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "UI/UX",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide React", "Vite"],
    challenges: [
      {
        problem: "Créer un système de réservation intuitif sans backend.",
        solution:
          "Implémentation d'un calendrier interactif avec React state management, validation de formulaire en temps réel et feedback utilisateur immédiat.",
      },
      {
        problem: "Assurer un responsive parfait sur tous les devices.",
        solution:
          "Utilisation des breakpoints Tailwind, adaptation des tailles de texte et composants, tests approfondis mobile/tablet/desktop.",
      },
      {
        problem: "Navigation fluide et navbar adaptive au scroll.",
        solution:
          "Navbar avec changement de style dynamique basé sur la position de scroll, smooth scroll vers les sections, menu mobile optimisé.",
      },
    ],
    demo: "https://landing-page-coach-sportif.vercel.app/",
    code: "https://github.com/Bennftn/coach-sportif-landing",
  },
  {
    title: "Booki",
    description:
      "Intégration pixel-perfect d’une page d’hébergements, responsive.",
    image: "/assets/Booki.webp",
    skills: ["HTML sémantique", "CSS Grid/Flex", "Responsive", "A11y de base"],
    tech: ["HTML", "CSS"],
    challenges: [
      {
        problem: "Respect strict de la maquette sur tous les breakpoints.",
        solution:
          "Mise en place d’une grille CSS + variables et tests manuels sur 320–1440px.",
      },
      {
        problem: "Contrastes et lecteurs d’écran.",
        solution:
          "Balises sémantiques, alt pertinents, couleurs vérifiées (AA).",
      },
    ],
    demo: "https://bennftn.github.io/Booki/",
    code: "https://github.com/Bennftn/Booki",
  },
  {
    title: "Sophie Bluel",
    description: "Galerie filtrable avec interface d’admin (vanilla JS).",
    image: "/assets/Sophie-Bluel.webp",
    skills: ["JavaScript", "Fetch API", "Modales", "Gestion d’état côté front"],
    tech: ["HTML", "CSS", "JavaScript"],
    challenges: [
      {
        problem: "Gestion des états (login, ajout/suppression d’éléments).",
        solution:
          "Stockage du token, mise à jour du DOM après chaque action et feedback utilisateur.",
      },
      {
        problem: "Téléversement sécurisé d’images.",
        solution:
          "Validation (type/taille), messages d’erreur, appels API try/catch.",
      },
    ],
    code: "https://github.com/Bennftn/Portfolio-architecte-sophie-bluel.git",
  },
  {
    title: "Kasa",
    description:
      "Application de location en React avec routing et composants réutilisables",
    image: "/assets/Kasa.webp",
    skills: [
      "React",
      "React Router",
      "Props/State",
      "Composants réutilisables",
      "A11y",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    challenges: [
      {
        problem:
          "Structurer l’app en composants clairs tout en respectant la maquette.",
        solution:
          "Découpage par pages/sections, composants UI (Accordion, Tag, Rating) et props typées.",
      },
      {
        problem: "Gestion des routes dynamiques (page logement) et des 404.",
        solution:
          "Mise en place de React Router (routes dynamiques, fallback 404) + redirections propres.",
      },
      {
        problem: "Éviter les re-rendus inutiles et garder une UI fluide.",
        solution:
          "État local minimal, clés stables, et dérivation de données au rendu plutôt que les stocker.",
      },
    ],
    code: "https://github.com/Bennftn/Kasa", // a remplacer par le repo
  },
  {
    title: "VD Serrurerie",
    description: "Site vitrine pour promouvoir ses créations",
    image: "/assets/vd-serrurerie-site.PNG",
    skills: [
      "React",
      "React Router",
      "Props/State",
      "Composants réutilisables",
      "A11y",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    challenges: [
      {
        problem:
          "Structurer l’app en composants clairs tout en respectant la maquette.",
        solution:
          "Découpage par pages/sections, composants UI (Accordion, Tag, Rating) et props typées.",
      },
      {
        problem: "Gestion des routes dynamiques (page logement) et des 404.",
        solution:
          "Mise en place de React Router (routes dynamiques, fallback 404) + redirections propres.",
      },
      {
        problem: "Éviter les re-rendus inutiles et garder une UI fluide.",
        solution:
          "État local minimal, clés stables, et dérivation de données au rendu plutôt que les stocker.",
      },
    ],
    demo: "https://vdserrurerie.com", // a remplace par le lien de démo
    code: "https://github.com/Bennftn/Kasa", // a remplacer par le repo
  },
];
