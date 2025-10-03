# Portfolio - Benjamin Fontaine

Portfolio personnel de développeur web front-end React freelance.

**Site en ligne** : [benjaminfontaine.com](https://benjaminfontaine.com)

---

## À propos du projet

Ce portfolio présente mes compétences en développement web, mes projets réalisés et mon parcours professionnel. Il a été conçu avec un focus sur les performances, l'accessibilité et le référencement.

---

## Technologies utilisées

- **React 18** + **React Router** - Interface utilisateur et navigation
- **Vite** - Build tool moderne
- **CSS natif** - Styling avec variables CSS et thème clair/sombre
- **React Helmet** - Gestion du SEO
- **Formspree** - Formulaire de contact
- **Netlify** - Hébergement et déploiement continu

---

## Fonctionnalités principales

- Navigation responsive avec header sticky
- Thème clair/sombre avec persistance
- Formulaire de contact fonctionnel
- Animations au scroll
- Barres de progression pour les compétences
- Timeline animée du parcours
- SEO optimisé avec données structurées
- Performance optimale (score Lighthouse 100/100)

---

## Installation

### Prérequis
- Node.js v16+
- npm

### Commandes

```bash
# Cloner le projet
git clone https://github.com/Bennftn/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build

# Tester le build
npm run preview
```

---

## Structure du projet

```
portfolio/
├── src/
│   ├── components/      # Composants réutilisables
│   ├── data/            # Données (projets, compétences, parcours)
│   ├── pages/           # Pages (Home, Contact, Merci)
│   ├── App.jsx          # Routing principal
│   └── App.css          # Styles globaux
├── public/
│   └── assets/          # Images
└── index.html
```

---

## Optimisations réalisées

### Performance
- Build optimisé avec Vite
- Lazy loading des images
- Fonts avec `display: swap`

### SEO
- Balises meta complètes (title, description, Open Graph)
- Données structurées Schema.org (Person, ContactPage, ProfessionalService)
- SEO local (Bellot, Seine-et-Marne, Île-de-France)
- Sitemap et robots.txt

### Accessibilité
- HTML sémantique
- Navigation au clavier
- Contrastes WCAG AA
- Labels sur tous les formulaires

---

## Déploiement

Le site est déployé sur **Netlify** avec déploiement automatique depuis GitHub.

**Configuration**
- Build command : `npm run build`
- Publish directory : `dist`
- SSL/HTTPS automatique

---

## Contact

**Benjamin Fontaine**  
Développeur Web Front-End React Freelance

- Email : contact@benjaminfontaine.com
- GitHub : [@Bennftn](https://github.com/Bennftn)
- LinkedIn : [Benjamin Fontaine](https://www.linkedin.com/in/benjamin-fontaine-18b44a37a/)
- Localisation : Bellot, Seine-et-Marne (77)

---

## Licence

MIT - Libre d'utilisation pour votre propre portfolio.
