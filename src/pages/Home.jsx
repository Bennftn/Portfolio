import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard.jsx";
import Timeline from "../components/Timeline.jsx";
import { skills } from "../data/skills.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data/projects.js";
import { journey } from "../data/journey.js";
import { Helmet } from "@dr.pogodin/react-helmet";


<Helmet>
  <title>Portfolio — Benjamin Fontaine</title>
  <meta name="description" content="Intégrations front modernes, React, accessibilité." />
  <link rel="canonical" href="" />  {/*a remplir apres */}
</Helmet>

export default function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
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
