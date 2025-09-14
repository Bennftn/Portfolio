import "./app.css";
import { Routes, Route, NavLink } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <div className="bg-ornaments" aria-hidden="true" />
      <header className="site-header">
        <div className="container">
          <div className="logo">Benjamin Fontaine</div>
          <nav>
            {/* Liens vers les ancres de la page d'accueil */}
            <a href="/#accueil">Accueil</a>
            <a href="/#competences">Compétences</a>
            <a href="/#projets">Projets</a>
            <a href="/#apropos">À propos</a>
            {/* Page dédiée */}
            <NavLink to="/contact">Contact</NavLink>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* simple fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} - Benjamin Fontaine</div>
      </footer>
    </>
  );
}
