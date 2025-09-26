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

  return (
    <>
      <Helmet>
        {/* Titre et description */}
        <html lang="fr" />
        <title>Benjamin Fontaine - Développeur web Front-end</title>
        <meta
          name="description"
          content="Je crée des sites modernes, performants et accessibles avec React."
        />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="Benjamin Fontaine — Développeur Web Front-End" />
        <meta property="og:description" content="Sites modernes, performants et accessibles." />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Benjamin Fontaine — Développeur Web Front-End" />
        <meta name="twitter:description" content="Sites modernes, performants et accessibles." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

        {/* Données structurées JSON-LD */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Benjamin Fontaine",
          "url": SITE_URL,
          "sameAs": [
            "https://github.com/Bennftn",
            "https://www.linkedin.com/in/benjamin-fontaine-18b44a37a/"
          ]
        })}
        </script>
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Portfolio — Benjamin Fontaine",
          "url": SITE_URL,
        })}
        </script>
      </Helmet>

      <section id="accueil" className="hero">
        <div className="container">
          <h1>Développeur Web Front-End</h1>
          <p>Je conçois des sites modernes, performants et responsives.</p>
          <a className="btn" href="#projets">Voir mes projets</a>
        </div>
      </section>

      <section id="competences" className="skills section">
  <div className="container skills-grid">
    {/* Colonne gauche : texte */}
    <div className="skills-intro">
      <h2>Compétences</h2>
      <p>
        J’aime produire des interfaces propres, performantes et accessibles.
        Voici mon socle actuel côté front.
      </p>
      <ul>
        <li>Intégration responsive et sémantique</li>
        <li>React (composants, routing, état)</li>
        <li>Performance, accessibilité, SEO de base</li>
      </ul>
      <a className="btn" href="/contact">Travailler ensemble</a>
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
    <h2>Présentation</h2>

    {/* 1) Accroche courte visible */}
    <p className="lead">
      Bonjour, je suis <strong>Benjamin Fontaine</strong>, développeur
      <strong> Front-End (React)</strong> freelance. J’aide indépendants et TPE à livrer des interfaces
      <strong> rapides</strong>, <strong>accessibles</strong> et faciles à maintenir.
    </p>

    {/* 2) Le pitch en 6 actes replié */}

  <button
    type="button"
    className="btn readmore-toggle"
    aria-expanded={pitchOpen}
    aria-controls="pitch-panel"
    onClick={() => setPitchOpen(o => !o)}>
    {pitchOpen ? "Masquer la présentation" : "En savoir davantage"}
  </button>

  <div
    id="pitch-panel"
    className={`readmore-panel${pitchOpen ? " is-open" : ""}`}
    role="region"
    aria-label="Présentation détaillée">

    <div className="prose">
      <h3>Accroche identitaire</h3>
      <p>
        Je m’appelle <strong>Benjamin Fontaine</strong>, développeur <strong>Front-End</strong> freelance
        spécialisé <strong>React</strong>. J’aide indépendants et TPE à transformer des maquettes en
        interfaces <strong>rapides</strong>, <strong>accessibles</strong> et <strong>évolutives</strong>, sans
        sacrifier la qualité du code.
      </p>
      <p>
        Mon terrain de jeu : des UI claires, performantes et maintenables, construites avec des
        composants propres et une base technique solide.
      </p>

      <h3>Parcours et légitimité</h3>
      <p>
        Issu d’une reconversion structurée via la formation <strong>OpenClassrooms (Développeur Web)</strong>,
        j’ai consolidé mes compétences par des projets concrets. Venir d’un univers orienté
        utilisateur m’a appris à écouter les besoins, cadrer un périmètre et livrer de façon itérative.
      </p>
      <p>
        Ce qui m’a fait rester ? La satisfaction de résoudre des problèmes réels par le code et
        d’offrir une expérience fluide aux utilisatrices et utilisateurs.
      </p>

      <h3>Stack technique et expertise</h3>
      <p>
        Au quotidien : <strong>HTML sémantique</strong>, <strong>CSS moderne</strong> (Flexbox, Grid, variables),
        <strong>JavaScript</strong> et <strong>React</strong> (hooks, composition, <strong>React Router</strong>).
        Je travaille avec <strong>Git/GitHub</strong>, une attention forte à
        l’<strong>accessibilité</strong> (landmarks, navigation clavier, contrastes) et à la
        <strong>performance</strong> (images responsives, lazy-loading, budgets, audits Lighthouse).
        J’intègre aussi un <strong>SEO de base</strong> efficace (balises, métadonnées, structure du contenu).
      </p>

      <h3>Projets marquants et impact</h3>
      <ul>
        <li>
          <strong>Booki</strong> — Intégration <em>pixel-perfect</em> et entièrement responsive, respect strict
          des contrastes AA et de la maquette sur plusieurs breakpoints.
        </li>
        <li>
          <strong>Sophie Bluel</strong> — Galerie filtrable avec interface d’admin en JavaScript Vanilla :
          appels API, gestion d’état côté front, modales, validations et messages d’erreur clairs.
        </li>
        <li>
          <strong>Kasa</strong> — Application React avec <strong>routing dynamique</strong>, composants
          réutilisables (accordéon, tags, rating) et gestion robuste des 404 pour une base de code
          propre et évolutive.
        </li>
      </ul>

      <h3>Approche et différenciation</h3>
      <p>
        Je privilégie des cycles courts, des démos régulières et une communication simple.
        Mon approche <strong>accessibility-first</strong> garantit que le design et le code servent
        toutes et tous : focus visibles, interactions prévisibles, lecture confortable.
      </p>
      <p>
        Côté technique, j’opte pour des composants réutilisables, une dette minimale et des décisions
        documentées pour faciliter la reprise. Objectif : livrer vite, bien et de manière mesurable.
      </p>

      <h3>Projection et ambitions</h3>
      <p>
        Je recherche des missions freelance : sites vitrines/portfolios, intégrations
        <strong> Figma → React</strong>, refontes orientées <strong>performance</strong> et <strong>SEO</strong>.
        J’ai envie de pousser des <strong>design systems</strong> légers, mener des audits
        <strong> A11y/Perf</strong> et accompagner mes clients sur des bonnes pratiques durables.
      </p>
      <p style={{ textAlign: "center", marginTop: 12 }}>
        <a className="btn" href="/contact">Me contacter</a>
      </p>
    </div>
    </div>

    </div>
  </section>

      <section id="projets" className="projets section">
        <div className="container">
          <h2>Mes Projets</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section id="apropos" className="about section">
        <div className="container">
          <h2>À propos</h2>
          <p>
            Je suis Benjamin Fontaine, développeur web en formation, passionné par la
            création d'interfaces modernes et accessibles.
          </p>
          <Timeline items={journey} order="desc" />  {/* récent -> ancien */}
        </div>
      </section>
    </>
  );
}
