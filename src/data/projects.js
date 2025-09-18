export const projects = [
  {
    title: "Booki",
    description: "Intégration pixel-perfect d’une page d’hébergements, responsive.",
    image: "/assets/Booki.png",
    skills: ["HTML sémantique", "CSS Grid/Flex", "Responsive", "A11y de base"],
    tech: ["HTML", "CSS"],
    challenges: [
      {
        problem: "Respect strict de la maquette sur tous les breakpoints.",
        solution: "Mise en place d’une grille CSS + variables et tests manuels sur 320–1440px."
      },
      {
        problem: "Contrastes et lecteurs d’écran.",
        solution: "Balises sémantiques, alt pertinents, couleurs vérifiées (AA)."
      }
    ],
    demo: "https://…/booki",   // <- remplace par ton lien
    code: "https://github.com/Bennftn/Booki"
  },
  {
    title: "Sophie Bluel",
    description: "Galerie filtrable avec interface d’admin (vanilla JS).",
    image: "/assets/sophie.jpg",
    skills: ["JavaScript", "Fetch API", "Modales", "Gestion d’état côté front"],
    tech: ["HTML", "CSS", "JavaScript"],
    challenges: [
      {
        problem: "Gestion des états (login, ajout/suppression d’éléments).",
        solution: "Stockage du token, mise à jour du DOM après chaque action et feedback utilisateur."
      },
      {
        problem: "Téléversement sécurisé d’images.",
        solution: "Validation (type/taille), messages d’erreur, appels API try/catch."
      }
    ],
    demo: "https://…/sophie",  // <- remplace
    code: "https://github.com/Bennftn/Sophie-Bluel"
  },
  {
    title: "Kasa",
    description: "Application de location en React avec routing, composants réutilisables et gestion des états.",
    image: "/assets/kasa.jpg",
    skills: ["React", "React Router", "Props/State", "Composants réutilisables", "A11y"],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    challenges: [
      {
        problem: "Structurer l’app en composants clairs tout en respectant la maquette.",
        solution: "Découpage par pages/sections, composants UI (Accordion, Tag, Rating) et props typées."
      },
      {
        problem: "Gestion des routes dynamiques (page logement) et des 404.",
        solution: "Mise en place de React Router (routes dynamiques, fallback 404) + redirections propres."
      },
      {
        problem: "Éviter les re-rendus inutiles et garder une UI fluide.",
        solution: "État local minimal, clés stables, et dérivation de données au rendu plutôt que les stocker."
      }
    ],
    demo: "https://ton-domaine.vercel.app",          // remplace par ton lien de démo
    code: "https://github.com/Bennftn/Kasa"          // remplace par ton repo
  }
  // Tu peux ajouter Kasa, Nina Carducci, etc.
];
