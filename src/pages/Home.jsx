import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard.jsx";
import Timeline from "../components/Timeline.jsx";
import Services from "../components/Services.jsx";
import { skills } from "../data/skills.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data/projects.js";
import { journey } from "../data/journey.js";
import { Helmet } from "@dr.pogodin/react-helmet";

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

  const personalInfo = {
    city: "Bellot",
    region: "Seine-et-Marne",
    postalCode: "77510",
    country: "France",
    email: "Benjamin77510be@gmail.com",
  };

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>
          Benjamin Fontaine | Développeur Web React Freelance à Bellot (77)
        </title>
        <meta
          name="description"
          content="Développeur web front-end freelance React basé à Bellot (Seine-et-Marne). Je crée des sites modernes, performants et accessibles pour TPE et indépendants en Île-de-France."
        />
        <meta
          name="keywords"
          content="développeur web Bellot, développeur React Seine-et-Marne, freelance web 77, développeur front-end Île-de-France, intégration web Meaux, création site internet Coulommiers, développeur JavaScript Provins"
        />
        <meta name="author" content="Benjamin Fontaine" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="geo.region" content="FR-77" />
        <meta name="geo.placename" content="Bellot, Seine-et-Marne" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="fr" href={SITE_URL} />
        <meta name="theme-color" content="#0f1110" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="Benjamin Fontaine - Portfolio" />
        <meta
          property="og:title"
          content="Benjamin Fontaine | Développeur Web React Freelance - Bellot (77)"
        />
        <meta
          property="og:description"
          content="Développeur web freelance spécialisé React en Seine-et-Marne. Sites modernes, performants et accessibles."
        />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta
          property="og:image:alt"
          content="Portfolio Benjamin Fontaine - Développeur Web Front-End"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Benjamin Fontaine | Développeur Web React - Bellot"
        />
        <meta
          name="twitter:description"
          content="Développeur freelance React en Seine-et-Marne. Sites modernes et performants."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta name="twitter:image:alt" content="Portfolio Benjamin Fontaine" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Benjamin Fontaine",
            jobTitle: "Développeur Web Front-End",
            description:
              "Développeur web freelance spécialisé React, création de sites modernes et performants",
            url: SITE_URL,
            image: `${SITE_URL}/og-image.jpg`,
            email: personalInfo.email,
            sameAs: [
              "https://github.com/Bennftn",
              "https://www.linkedin.com/in/benjamin-fontaine-18b44a37a/",
            ],
            knowsAbout: [
              "React",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Accessibilité Web",
              "SEO",
              "React Router",
              "Git",
              "Responsive Design",
              "Performance Web",
            ],
            knowsLanguage: {
              "@type": "Language",
              name: "Français",
              alternateName: "fr",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: personalInfo.city,
              addressRegion: personalInfo.region,
              postalCode: personalInfo.postalCode,
              addressCountry: personalInfo.country,
            },
            homeLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: personalInfo.city,
                addressRegion: personalInfo.region,
                addressCountry: "FR",
              },
            },
            workLocation: [
              { "@type": "Place", name: "Île-de-France" },
              { "@type": "Place", name: "Seine-et-Marne" },
            ],
            offers: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Développement Web Front-End",
                description:
                  "Création de sites web modernes, performants et accessibles avec React",
                areaServed: [
                  { "@type": "City", name: "Bellot" },
                  { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
                  { "@type": "AdministrativeArea", name: "Île-de-France" },
                  { "@type": "Country", name: "France" },
                ],
              },
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Benjamin Fontaine - Développement Web",
            image: `${SITE_URL}/og-image.jpg`,
            description:
              "Services de développement web front-end freelance : sites React, intégrations responsives, optimisation performance",
            address: {
              "@type": "PostalAddress",
              addressLocality: personalInfo.city,
              addressRegion: personalInfo.region,
              postalCode: personalInfo.postalCode,
              addressCountry: "FR",
            },
            url: SITE_URL,
            email: personalInfo.email,
            priceRange: "$$",
            areaServed: [
              { "@type": "City", name: "Bellot" },
              { "@type": "City", name: "Coulommiers" },
              { "@type": "City", name: "Meaux" },
              { "@type": "City", name: "Provins" },
              { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
              { "@type": "AdministrativeArea", name: "Île-de-France" },
            ],
            serviceType: [
              "Développement Web Front-End",
              "Intégration React",
              "Site Web Responsive",
              "Optimisation Performance Web",
              "Accessibilité Web WCAG",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services de développement web",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Création de site vitrine React",
                    description:
                      "Développement de site vitrine moderne avec React",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Intégration maquette Figma vers React",
                    description:
                      "Transformation de designs Figma en composants React",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Audit performance et accessibilité",
                    description:
                      "Analyse et optimisation des performances web et de l'accessibilité",
                  },
                },
              ],
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: SITE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section id="accueil" className="pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              <span className="text-sm font-medium text-[var(--accent)]">Disponible pour vos projets</span>
            </div>

            {/* Titre principal */}
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold font-display tracking-tight mb-6 leading-[1.1]">
              Je crée des{" "}
              <span className="relative">
                <span className="relative z-10 text-[var(--accent)]">sites web</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent)]/20 -z-0 rounded"></span>
              </span>
              <br />
              qui convertissent
            </h1>

            {/* Sous-titre */}
            <p className="mx-auto mb-8 text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
              Développeur <strong className="text-[var(--text)]">React freelance</strong> basé en{" "}
              <strong className="text-[var(--text)]">Seine-et-Marne (77)</strong>. 
              Je transforme vos idées en interfaces performantes, accessibles et optimisées pour le SEO.
            </p>

            {/* Stats rapides */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[var(--text)]">10+</div>
                <div className="text-sm text-[var(--muted)]">Projets livrés</div>
              </div>
              <div className="w-px h-12 bg-[var(--border)] hidden sm:block"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[var(--text)]">100%</div>
                <div className="text-sm text-[var(--muted)]">Clients satisfaits</div>
              </div>
              <div className="w-px h-12 bg-[var(--border)] hidden sm:block"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[var(--text)]">48h</div>
                <div className="text-sm text-[var(--muted)]">Délai de réponse</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                className="group inline-flex items-center justify-center gap-2 min-h-[52px] px-8 bg-[var(--accent)] text-[var(--btn-fg)] rounded-xl font-semibold cursor-pointer transition-all duration-200 hover:bg-[var(--accent-2)] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
                href="#projets"
                aria-label="Découvrir mes projets web"
              >
                Voir mes réalisations
                <svg 
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                className="group inline-flex items-center justify-center gap-2 min-h-[52px] px-8 bg-transparent text-[var(--text)] border border-[var(--border)] rounded-xl font-semibold cursor-pointer transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
                href="#services"
                aria-label="Découvrir mes services"
              >
                Mes services
              </a>
            </div>

            {/* Tech stack - Marquee défilant */}
            <div className="mt-12 pt-8 border-t border-[var(--border)] overflow-hidden">
              <p className="text-sm text-[var(--muted)] mb-6">Technologies maîtrisées</p>
              
              <div className="relative">
                {/* Gradient masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none"></div>
                
                {/* Scrolling content */}
                <div className="flex animate-marquee">
                  {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex shrink-0">
                      {[
                        "React",
                        "JavaScript",
                        "TypeScript",
                        "HTML5",
                        "CSS3",
                        "Tailwind CSS",
                        "Git",
                        "Figma",
                        "Node.js",
                        "REST API",
                      ].map((tech, index) => (
                        <div
                          key={`${groupIndex}-${index}`}
                          className="flex items-center mx-6 shrink-0"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--accent)] mr-3"></span>
                          <span className="text-lg font-medium text-[var(--text)] whitespace-nowrap">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Skills Section */}
      <section id="competences" className="py-12 scroll-mt-[90px]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-7 items-start">
          <div className="order-1 lg:order-none">
            <h2 className="text-2xl font-bold font-display mb-2">Compétences techniques</h2>
            <p className="text-[var(--muted)] mb-3">
              Je développe des <strong className="text-[var(--text)]">interfaces web propres</strong>,
              performantes et accessibles. Voici mes compétences principales en
              développement front-end.
            </p>
            <ul className="ml-5 mb-4 list-disc space-y-1">
              <li>
                <strong className="text-[var(--text)]">Intégration responsive</strong> et sémantique (HTML5,
                CSS3)
              </li>
              <li>
                <strong className="text-[var(--text)]">React</strong> : composants, hooks, routing, gestion
                d'état
              </li>
              <li>
                <strong className="text-[var(--text)]">Performance web</strong>, accessibilité (A11y) et SEO
              </li>
              <li>
                <strong className="text-[var(--text)]">Git/GitHub</strong> : versioning et collaboration
              </li>
            </ul>
            <a
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 bg-[var(--accent)] text-[var(--btn-fg)] border border-[color-mix(in_oklab,var(--accent-2)_30%,var(--accent)_70%)] rounded-xl font-semibold cursor-pointer transition-all duration-200 hover:bg-[var(--accent-2)] hover:text-white hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
              href="/contact"
              aria-label="Me contacter pour travailler ensemble"
            >
              Travailler ensemble
            </a>
          </div>
          <div className="order-2 lg:order-none space-y-5">
            {skills.map((s) => (
              <SkillBar key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section id="presentation" className="py-12 scroll-mt-[90px]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display mb-2">Qui suis-je ?</h2>
          <p className="text-lg leading-relaxed text-[var(--muted)] mb-4">
            Bonjour, je suis <strong className="text-[var(--text)]">Benjamin Fontaine</strong>, développeur web{" "}
            <strong className="text-[var(--text)]">front-end React freelance</strong> basé à{" "}
            <strong className="text-[var(--text)]">Bellot en Seine-et-Marne (77)</strong>. J'accompagne les
            indépendants et TPE d'<strong className="text-[var(--text)]">Île-de-France</strong> dans la
            création d'<strong className="text-[var(--text)]">interfaces rapides</strong>,{" "}
            <strong className="text-[var(--text)]">accessibles</strong> et faciles à maintenir.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 bg-[var(--accent)] text-[var(--btn-fg)] border border-[color-mix(in_oklab,var(--accent-2)_30%,var(--accent)_70%)] rounded-xl font-semibold cursor-pointer transition-all duration-200 hover:bg-[var(--accent-2)] hover:text-white hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 mt-3"
            aria-expanded={pitchOpen}
            aria-controls="pitch-panel"
            onClick={() => setPitchOpen((o) => !o)}
          >
            {pitchOpen
              ? "Masquer la présentation"
              : "En savoir plus sur mon parcours"}
          </button>
          <div
            id="pitch-panel"
            className={`mt-3 overflow-hidden transition-all duration-400 ease-out ${
              pitchOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
            }`}
            role="region"
            aria-label="Présentation détaillée de mon parcours"
          >
            <div className="prose-custom">
              <h3 className="text-xl font-semibold mt-4 mb-2">Mon profil de développeur web</h3>
              <p className="text-[var(--muted)] mb-3">
                Je m'appelle <strong className="text-[var(--text)]">Benjamin Fontaine</strong>, développeur{" "}
                <strong className="text-[var(--text)]">front-end freelance</strong> spécialisé{" "}
                <strong className="text-[var(--text)]">React</strong> en <strong className="text-[var(--text)]">Seine-et-Marne</strong>.
                J'aide les indépendants et TPE de la région (Coulommiers, Meaux,
                Provins) et d'Île-de-France à transformer leurs maquettes en
                interfaces <strong className="text-[var(--text)]">rapides</strong>,{" "}
                <strong className="text-[var(--text)]">accessibles</strong> et <strong className="text-[var(--text)]">évolutives</strong>,
                sans sacrifier la qualité du code ni l'expérience utilisateur.
              </p>
              <p className="text-[var(--muted)] mb-3">
                Mon terrain de jeu : des{" "}
                <strong className="text-[var(--text)]">UI claires et performantes</strong>, construites avec
                des composants React propres, une architecture maintenable et
                une base technique solide.
              </p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Mon parcours et ma reconversion</h3>
              <p className="text-[var(--muted)] mb-3">
                Issu d'une reconversion structurée via la formation{" "}
                <strong className="text-[var(--text)]">OpenClassrooms (Développeur Web)</strong>, j'ai
                consolidé mes compétences en développement web par des projets
                concrets et professionnalisants. Venir d'un univers orienté
                utilisateur m'a appris à écouter les besoins, cadrer un
                périmètre et livrer de façon itérative.
              </p>
              <p className="text-[var(--muted)] mb-3">
                Ce qui m'a fait rester dans le développement web ? La
                satisfaction de résoudre des problèmes réels par le code et
                d'offrir une{" "}
                <strong className="text-[var(--text)]">expérience utilisateur fluide et accessible</strong> à
                tous.
              </p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Stack technique et expertises</h3>
              <p className="text-[var(--muted)] mb-3">
                Au quotidien, je travaille avec :{" "}
                <strong className="text-[var(--text)]">HTML5 sémantique</strong>, <strong className="text-[var(--text)]">CSS3 moderne</strong>{" "}
                (Flexbox, Grid, variables CSS), <strong className="text-[var(--text)]">JavaScript ES6+</strong>{" "}
                et <strong className="text-[var(--text)]">React</strong> (hooks, composition de composants,{" "}
                <strong className="text-[var(--text)]">React Router</strong>).
              </p>
              <p className="text-[var(--muted)] mb-3">
                Je maîtrise <strong className="text-[var(--text)]">Git/GitHub</strong> pour le versioning, et
                j'accorde une attention particulière à l'
                <strong className="text-[var(--text)]">accessibilité web</strong> (landmarks ARIA, navigation
                clavier, contrastes WCAG) et à la <strong className="text-[var(--text)]">performance</strong>{" "}
                (images responsives, lazy-loading, optimisation des bundles,
                audits Lighthouse). J'intègre également un{" "}
                <strong className="text-[var(--text)]">SEO technique de base</strong> efficace (balises meta,
                données structurées, structure du contenu).
              </p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Mes projets web marquants</h3>
              <ul className="ml-5 mb-4 list-disc space-y-1 text-[var(--muted)]">
                <li>
                  <strong className="text-[var(--text)]">Booki</strong> — Intégration <em>pixel-perfect</em> et
                  entièrement responsive d'une plateforme de réservation, avec
                  respect strict des contrastes WCAG AA et de la maquette Figma
                  sur plusieurs breakpoints.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Sophie Bluel</strong> — Galerie filtrable avec
                  interface d'administration en JavaScript Vanilla : appels API
                  REST, gestion d'état côté front, modales dynamiques,
                  validations de formulaires et messages d'erreur clairs.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Kasa</strong> — Application React SPA avec{" "}
                  <strong className="text-[var(--text)]">routing dynamique</strong>, composants réutilisables
                  (accordéon, tags, notation par étoiles) et gestion robuste des
                  erreurs 404 pour une base de code propre et évolutive.
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Mon approche de développement</h3>
              <p className="text-[var(--muted)] mb-3">
                Je privilégie des{" "}
                <strong className="text-[var(--text)]">cycles de développement courts</strong>, des démos
                régulières et une communication simple et transparente. Mon
                approche <strong className="text-[var(--text)]">accessibility-first</strong> garantit que le
                design et le code servent toutes et tous : focus visibles,
                interactions prévisibles, lecture confortable et navigation
                intuitive.
              </p>
              <p className="text-[var(--muted)] mb-3">
                Côté technique, j'opte pour des{" "}
                <strong className="text-[var(--text)]">composants réutilisables</strong>, une dette technique
                minimale et des décisions architecturales documentées pour
                faciliter la maintenance et la reprise du code. Objectif :
                livrer vite, bien et de manière mesurable.
              </p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Mes ambitions et services freelance</h3>
              <p className="text-[var(--muted)] mb-3">
                Je recherche des{" "}
                <strong className="text-[var(--text)]">missions freelance en Île-de-France</strong>{" "}
                (Seine-et-Marne et départements limitrophes) : création de sites
                vitrines et portfolios, intégrations{" "}
                <strong className="text-[var(--text)]">Figma → React</strong>, refontes orientées{" "}
                <strong className="text-[var(--text)]">performance web</strong> et <strong className="text-[var(--text)]">SEO</strong>. J'ai
                envie de participer à des <strong className="text-[var(--text)]">design systems</strong>{" "}
                légers, mener des audits{" "}
                <strong className="text-[var(--text)]">accessibilité et performance</strong>, et accompagner
                mes clients sur des bonnes pratiques durables et maintenables.
              </p>
              <p className="text-center mt-4">
                <a
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 bg-[var(--accent)] text-[var(--btn-fg)] border border-[color-mix(in_oklab,var(--accent-2)_30%,var(--accent)_70%)] rounded-xl font-semibold cursor-pointer transition-all duration-200 hover:bg-[var(--accent-2)] hover:text-white hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
                  href="/contact"
                  aria-label="Me contacter pour un projet web"
                >
                  Me contacter pour un projet
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-12 scroll-mt-[90px]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display mb-2">Mes projets web</h2>
          <p className="text-[var(--muted)] mb-6">
            Découvrez mes réalisations en développement web front-end :
            intégrations React, sites responsives et applications performantes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-[clamp(14px,2.4vw,22px)]">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* About / Timeline Section */}
      <section id="apropos" className="py-12 scroll-mt-[90px]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display mb-2">Mon parcours professionnel</h2>
          <p className="text-[var(--muted)] mb-4">
            Retour sur mon évolution dans le développement web, de ma formation
            à mes projets professionnels.
          </p>
          <Timeline items={journey} order="desc" />
        </div>
      </section>
    </>
  );
}