import "./App.css";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Merci from "./pages/Merci.jsx";

export default function App() {
  const loc = useLocation();

  // Scroll doux si on clique une ancre alors qu’on est déjà sur "/"
  const onAnchorClick = (e, hash) => {
    if (loc.pathname === "/") {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", hash);
    }
  };

  return (
    <>
      <div className="bg-ornaments" aria-hidden="true" />

      <header className="site-header">
        <div className="container header-row">
          <div className="logo">Benjamin Fontaine</div>
          <nav id="site-nav" className="primary-nav">
        {/* Liens “ancres” (desktop) */}
          <NavLink to="/#accueil" onClick={(e)=>onAnchorClick(e,"#accueil")} className="desktop-only">Accueil
          </NavLink>
          <NavLink to="/#competences" onClick={(e)=>onAnchorClick(e,"#competences")} className="desktop-only">Compétences
          </NavLink>
          <NavLink to="/#projets" onClick={(e)=>onAnchorClick(e,"#projets")} className="desktop-only">Projets
          </NavLink>
          <NavLink to="/#apropos" onClick={(e)=>onAnchorClick(e,"#apropos")} className="desktop-only">À propos
          </NavLink>
          <NavLink to="/contact" className="desktop-only">Contact</NavLink>

        {/* Bouton mobile : Contact ou Accueil selon la page courante */}
        {loc.pathname === "/contact" ? (
        <NavLink to="/" className="nav-contact btn mobile-only">Accueil
        </NavLink> ) : (
        <NavLink to="/contact" className="nav-contact btn mobile-only">Contact
        </NavLink>
        )}

        <ThemeToggle className="theme-toggle desktop-only" />
        </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merci" element={<Merci />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} - Benjamin Fontaine</div>
      </footer>
    </>
  );
}

