import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard.jsx";
import Timeline from "../components/Timeline.jsx";
import { skills } from "../data/skills.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data/projects.js";
import { journey } from "../data/journey.js";
import { Helmet } from "@dr.pogodin/react-helmet";
import { useState } from "react";


export default function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  const [pitchOpen, setPitchOpen] = useState(false);

  const SITE_URL = "https://benjaminfontaine.com";

  // Informations perso pour le SEO local
  const personalInfo = {
    city: "Bellot",
    region: "Seine-et-Marne",
    postalCode: "77510",
    country: "France",
    email: "Benjamin77510be@gmail.com"
  };

  return (
    <>
      <Helmet>
        {/* Langue et titre optimisé avec localisation */}
        <html lang="fr" />
        <title>Benjamin Fontaine | Développeur Web React Freelance à Bellot (77)</title>
        {/* Meta description avec localisation */}
        <meta
          name="description"
          content="Développeur web front-end freelance React basé à Bellot (Seine-et-Marne). Je crée des sites modernes, performants et accessibles pour TPE et indépendants en Île-de-France."
        />
        {/* Mots-clés avec localisation */}
        <meta name="keywords" content="développeur web Bellot, développeur React Seine-et-Marne, freelance web 77, développeur front-end Île-de-France, intégration web Meaux, création site internet Coulommiers, développeur JavaScript Provins" />
        <meta name="author" content="Benjamin Fontaine" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="geo.region" content="FR-77" />
        <meta name="geo.placename" content="Bellot, Seine-et-Marne" />
        {/* Canonical */}
        <link rel="canonical" href={SITE_URL} />
        {/* Langue alternative */}
        <link rel="alternate" hrefLang="fr" href={SITE_URL} />
        {/* Theme color */}
        <meta name="theme-color" content="#0f1110" />

        {/* Open Graph optimisé avec localisation */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="Benjamin Fontaine - Portfolio" />
        <meta property="og:title" content="Benjamin Fontaine | Développeur Web React Freelance - Bellot (77)" />
        <meta property="og:description" content="Développeur web freelance spécialisé React en Seine-et-Marne. Sites modernes, performants et accessibles." />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:alt" content="Portfolio Benjamin Fontaine - Développeur Web Front-End" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Benjamin Fontaine | Développeur Web React - Bellot" />
        <meta name="twitter:description" content="Développeur freelance React en Seine-et-Marne. Sites modernes et performants." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta name="twitter:image:alt" content="Portfolio Benjamin Fontaine" />

        {/* Données structurées JSON-LD */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Benjamin Fontaine",
          "jobTitle": "Développeur Web Front-End",
          "description": "Développeur web freelance spécialisé React, création de sites modernes et performants",
          "url": SITE_URL,
          "image": `${SITE_URL}/og-image.jpg`,
          "email": personalInfo.email,
          "telephone": personalInfo.phone,
          "sameAs": [
            "https://github.com/Bennftn",
            "https://www.linkedin.com/in/benjamin-fontaine-18b44a37a/"
          ],
          "knowsAbout": [
            "React",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Accessibilité Web",
            "SEO",
            "React Router",
            "Git",
            "Responsive Design",
            "Performance Web"
          ],
          "knowsLanguage": {
            "@type": "Language",
            "name": "Français",
            "alternateName": "fr"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": personalInfo.city,
            "addressRegion": personalInfo.region,
            "postalCode": personalInfo.postalCode,
            "addressCountry": personalInfo.country
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": personalInfo.latitude,
            "longitude": personalInfo.longitude
          },
          "homeLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": personalInfo.city,
              "addressRegion": personalInfo.region,
              "addressCountry": "FR"
            }
          },
          "workLocation": [
            {
              "@type": "Place",
              "name": "Île-de-France"
            },
            {
              "@type": "Place",
              "name": "Seine-et-Marne"
            }
          ],
          "offers": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Développement Web Front-End",
              "description": "Création de sites web modernes, performants et accessibles avec React",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Rebais"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Seine-et-Marne"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Île-de-France"
                },
                {
                  "@type": "Country",
                  "name": "France"
                }
              ]
            }
          }
        })}
        </script>

        {/* Données structurées JSON-LD - LocalBusiness (pour le SEO local) */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Benjamin Fontaine - Développement Web",
          "image": `${SITE_URL}/og-image.jpg`,
          "description": "Services de développement web front-end freelance : sites React, intégrations responsives, optimisation performance",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": personalInfo.city,
            "addressRegion": personalInfo.region,
            "postalCode": personalInfo.postalCode,
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": personalInfo.latitude,
            "longitude": personalInfo.longitude
          },
          "url": SITE_URL,
          "telephone": personalInfo.phone,
          "email": personalInfo.email,
          "priceRange": "$$",
          "areaServed": [
            {
              "@type": "City",
              "name": "Rebais"
            },
            {
              "@type": "City",
              "name": "Coulommiers"
            },
            {
              "@type": "City",
              "name": "Meaux"
            },
            {
              "@type": "City",
              "name": "Provins"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Seine-et-Marne"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Île-de-France"
            }
          ],
          "serviceType": [
            "Développement Web Front-End",
            "Intégration React",
            "Site Web Responsive",
            "Optimisation Performance Web",
            "Accessibilité Web WCAG"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de développement web",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Création de site vitrine React",
                  "description": "Développement de site vitrine moderne avec React"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Intégration maquette Figma vers React",
                  "description": "Transformation de designs Figma en composants React"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Audit performance et accessibilité",
                  "description": "Analyse et optimisation des performances web et de l'accessibilité"
                }
              }
            ]
          }
        })}
        </script>

        {/* Données structurées JSON-LD - BreadcrumbList */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": SITE_URL
            }
          ]
        })}
        </script>
      </Helmet>

      <section id="accueil" className="hero">
        <div className="container">
          <h1>Développeur Web Front-End React Freelance</h1>
          <p className="subtitle">
            Basé à <strong>Rebais (Seine-et-Marne, 77)</strong>, je conçois des <strong>sites web modernes</strong>,
            performants et accessibles avec React, HTML5 et CSS3.
          </p>
          <p className="skills-summary">
            Spécialisations : intégration responsive, applications React (SPA),
            optimisation performance et SEO. Intervention en Île-de-France.
          </p>
          <a className="btn" href="#projets" aria-label="Découvrir mes projets web">
            Découvrir mes projets
          </a>
        </div>
      </section>

      <section id="competences" className="skills section">
        <div className="container skills-grid">
          {/* Colonne gauche : texte */}
          <div className="skills-intro">
            <h2>Compétences techniques</h2>
            <p>
              Je développe des <strong>interfaces web propres</strong>, performantes et accessibles.
              Voici mes compétences principales en développement front-end.
            </p>
            <ul>
              <li><strong>Intégration responsive</strong> et sémantique (HTML5, CSS3)</li>
              <li><strong>React</strong> : composants, hooks, routing, gestion d'état</li>
              <li><strong>Performance web</strong>, accessibilité (A11y) et SEO</li>
              <li><strong>Git/GitHub</strong> : versioning et collaboration</li>
            </ul>
            <a className="btn" href="/contact" aria-label="Me contacter pour travailler ensemble">
              Travailler ensemble
            </a>
          </div>

          {/* Colonne droite : barres */}
          <div className="skills-bars">
            {skills.map((s) => (
              <SkillBar key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section id="presentation" className="intro section">
        <div className="container">
          <h2>Qui suis-je ?</h2>

          {/* Accroche courte visible avec localisation */}
          <p className="lead">
            Bonjour, je suis <strong>Benjamin Fontaine</strong>, développeur web
            <strong> front-end React freelance</strong> basé à <strong>Rebais en Seine-et-Marne (77)</strong>.
            J'accompagne les indépendants et TPE d'<strong>Île-de-France</strong> dans la création
            d'<strong>interfaces rapides</strong>, <strong>accessibles</strong> et faciles à maintenir.
          </p>

          {/* Le pitch en 6 actes replié */}
          <button
            type="button"
            className="btn readmore-toggle"
            aria-expanded={pitchOpen}
            aria-controls="pitch-panel"
            onClick={() => setPitchOpen(o => !o)}>
            {pitchOpen ? "Masquer la présentation" : "En savoir plus sur mon parcours"}
          </button>

          <div
            id="pitch-panel"
            className={`readmore-panel${pitchOpen ? " is-open" : ""}`}
            role="region"
            aria-label="Présentation détaillée de mon parcours">

            <div className="prose">
              <h3>Mon profil de développeur web</h3>
              <p>
                Je m'appelle <strong>Benjamin Fontaine</strong>, développeur <strong>front-end freelance</strong>
                spécialisé <strong>React</strong> en <strong>Seine-et-Marne</strong>. J'aide les indépendants et TPE
                de la région (Coulommiers, Meaux, Provins) et d'Île-de-France à transformer leurs maquettes en
                interfaces <strong>rapides</strong>, <strong>accessibles</strong> et <strong>évolutives</strong>,
                sans sacrifier la qualité du code ni l'expérience utilisateur.
              </p>
              <p>
                Mon terrain de jeu : des <strong>UI claires et performantes</strong>, construites avec des
                composants React propres, une architecture maintenable et une base technique solide.
              </p>

              <h3>Mon parcours et ma reconversion</h3>
              <p>
                Issu d'une reconversion structurée via la formation <strong>OpenClassrooms (Développeur Web)</strong>,
                j'ai consolidé mes compétences en développement web par des projets concrets et professionnalisants.
                Venir d'un univers orienté utilisateur m'a appris à écouter les besoins, cadrer un périmètre et
                livrer de façon itérative.
              </p>
              <p>
                Ce qui m'a fait rester dans le développement web ? La satisfaction de résoudre des problèmes réels
                par le code et d'offrir une <strong>expérience utilisateur fluide et accessible</strong> à tous.
              </p>

              <h3>Stack technique et expertises</h3>
              <p>
                Au quotidien, je travaille avec : <strong>HTML5 sémantique</strong>, <strong>CSS3 moderne</strong>
                (Flexbox, Grid, variables CSS), <strong>JavaScript ES6+</strong> et <strong>React</strong>
                (hooks, composition de composants, <strong>React Router</strong>).
              </p>
              <p>
                Je maîtrise <strong>Git/GitHub</strong> pour le versioning, et j'accorde une attention particulière à
                l'<strong>accessibilité web</strong> (landmarks ARIA, navigation clavier, contrastes WCAG) et à la
                <strong> performance</strong> (images responsives, lazy-loading, optimisation des bundles,
                audits Lighthouse). J'intègre également un <strong>SEO technique de base</strong> efficace
                (balises meta, données structurées, structure du contenu).
              </p>

              <h3>Mes projets web marquants</h3>
              <ul>
                <li>
                  <strong>Booki</strong> — Intégration <em>pixel-perfect</em> et entièrement responsive d'une
                  plateforme de réservation, avec respect strict des contrastes WCAG AA et de la maquette Figma
                  sur plusieurs breakpoints.
                </li>
                <li>
                  <strong>Sophie Bluel</strong> — Galerie filtrable avec interface d'administration en
                  JavaScript Vanilla : appels API REST, gestion d'état côté front, modales dynamiques,
                  validations de formulaires et messages d'erreur clairs.
                </li>
                <li>
                  <strong>Kasa</strong> — Application React SPA avec <strong>routing dynamique</strong>,
                  composants réutilisables (accordéon, tags, notation par étoiles) et gestion robuste des erreurs 404
                  pour une base de code propre et évolutive.
                </li>
              </ul>

              <h3>Mon approche de développement</h3>
              <p>
                Je privilégie des <strong>cycles de développement courts</strong>, des démos régulières et une
                communication simple et transparente. Mon approche <strong>accessibility-first</strong> garantit
                que le design et le code servent toutes et tous : focus visibles, interactions prévisibles,
                lecture confortable et navigation intuitive.
              </p>
              <p>
                Côté technique, j'opte pour des <strong>composants réutilisables</strong>, une dette technique minimale
                et des décisions architecturales documentées pour faciliter la maintenance et la reprise du code.
                Objectif : livrer vite, bien et de manière mesurable.
              </p>

              <h3>Mes ambitions et services freelance</h3>
              <p>
                Je recherche des <strong>missions freelance en Île-de-France</strong> (Seine-et-Marne et départements
                limitrophes) : création de sites vitrines et portfolios, intégrations <strong>Figma → React</strong>,
                refontes orientées <strong>performance web</strong> et <strong>SEO</strong>. J'ai envie de participer
                à des <strong>design systems</strong> légers, mener des audits <strong>accessibilité et performance</strong>,
                et accompagner mes clients sur des bonnes pratiques durables et maintenables.
              </p>
              <p style={{ textAlign: "center", marginTop: 12 }}>
                <a className="btn" href="/contact" aria-label="Me contacter pour un projet web">
                  Me contacter pour un projet
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      <section id="projets" className="projets section">
        <div className="container">
          <h2>Mes projets web</h2>
          <p className="section-intro">
            Découvrez mes réalisations en développement web front-end :
            intégrations React, sites responsives et applications performantes.
          </p>
          <div className="grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section id="apropos" className="about section">
        <div className="container">
          <h2>Mon parcours professionnel</h2>
          <p className="section-intro">
            Retour sur mon évolution dans le développement web, de ma formation
            à mes projets professionnels.
          </p>
          <Timeline items={journey} order="desc" />
        </div>
      </section>
    </>
  );
}