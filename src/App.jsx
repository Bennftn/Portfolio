import "./app.css";
import SkillBar from "./components/SkillBar";
import { skills } from "./data/skills.js";
import ThemeToggle from "./components/ThemeToggle.jsx";

export default function App() {
  return (
    <>
    <div className="bg-ornaments" aria-hidden="true" />
      <header className="site-header">
        <div className="container">
          <div className="logo">Benjamin Fontaine</div>
          <nav>
            <a href="#accueil">Accueil</a>
            <a href="#competences">Compétences</a>
            <a href="#projets">Projets</a>
            <a href="#apropos">À propos</a>
            <a href="#contact">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="container">
            <h1>Développeur Web Front-End</h1>
            <p>Je conçois des sites modernes, performants et responsives.</p>
            <a className="btn" href="#projets">Voir mes projets</a>
          </div>
        </section>

        <section id="competences" className="skills">
          <div className="container">
            <h2>Compétences</h2>
            {skills.map((s) => (
              <SkillBar key={s.label} {...s} />
            ))}
          </div>
        </section>

        <section id="projets" className="projets">
          <div className="container">
            <h2>Mes Projets</h2>
            <div className="grid">
              <article className="card">Booki</article>
              <article className="card">Sophie Bluel</article>
              <article className="card">Kasa</article>
            </div>
          </div>
        </section>

        <section id="apropos" className="about">
          <div className="container">
            <h2>À propos</h2>
            <p>
              Je suis Benjamin Fontaine, développeur web en formation, passionné par la
              création d'interfaces modernes et accessibles.
            </p>
            <ul>
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git / GitHub</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Contactez-moi</h2>
            <p>
              <a href="mailto:mail@test.com">mail@test.com</a> ·{" "}
              <a href="https://github.com/Bennftn" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} - Benjamin Fontaine</div>
      </footer>
    </>
  );
}
