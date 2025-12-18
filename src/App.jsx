import "./tailwind.css";
import { Routes, Route, NavLink, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Merci from "./pages/Merci.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import Confidentialite from "./pages/Confidentialite.jsx";
import CGV from "./pages/CGV-site.jsx";

// Configuration des liens de navigation
const navLinks = [
  { hash: "#accueil", label: "Accueil" },
  { hash: "#services", label: "Services" },
  { hash: "#competences", label: "Compétences" },
  { hash: "#projets", label: "Projets" },
  { hash: "#apropos", label: "À propos" },
];

export default function App() {
  const loc = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet de scroll pour le header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [loc.pathname]);

  // Scroll doux si on clique une ancre alors qu'on est déjà sur "/"
  const handleAnchorClick = (e, hash) => {
    if (loc.pathname === "/") {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", hash);
    }
    setMobileMenuOpen(false);
  };

  // Détermine si un lien est actif
  const isLinkActive = (hash) => {
    if (hash === "#accueil") {
      return loc.pathname === "/" && (!loc.hash || loc.hash === "#accueil");
    }
    return loc.hash === hash;
  };

  // Classes pour les liens de navigation
  const getNavLinkClass = (hash, isMobile = false) => {
    const baseClass = isMobile
      ? "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
      : "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200";
    
    const activeClass = "bg-[var(--accent)]/10 text-[var(--accent)] font-semibold";
    const inactiveClass = "text-[var(--header-text)] hover:bg-white/5 hover:text-[var(--accent)]";
    
    return `${baseClass} ${isLinkActive(hash) ? activeClass : inactiveClass}`;
  };

  return (
    <>
      {/* Fond animé */}
      <div className="bg-ornaments" aria-hidden="true" />

      {/* Header */}
      <header 
        className={`
          sticky top-0 z-50 
          backdrop-blur-xl bg-[var(--header-bg)] 
          border-b border-[var(--header-border)]
          transition-shadow duration-300
          ${scrolled ? "shadow-lg shadow-black/5" : "shadow-sm"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="font-display text-xl font-bold tracking-tight text-[var(--header-text)] hover:text-[var(--accent)] transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benjamin Fontaine
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Navigation principale">
              {navLinks.map(({ hash, label }) => (
                <NavLink
                  key={hash}
                  to={`/${hash}`}
                  onClick={(e) => handleAnchorClick(e, hash)}
                  className={getNavLinkClass(hash)}
                >
                  {label}
                </NavLink>
              ))}

              {/* Séparateur */}
              <div className="w-px h-6 bg-[var(--border)] mx-3" aria-hidden="true" />

              {/* Bouton Contact */}
              <NavLink
                to="/contact"
                className={({ isActive }) => `
                  px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                  ${isActive
                    ? "bg-[var(--accent)] text-[var(--btn-fg)] shadow-lg shadow-[var(--accent)]/25"
                    : "bg-[var(--accent)] text-[var(--btn-fg)] hover:bg-[var(--accent-2)] hover:shadow-lg hover:shadow-[var(--accent)]/20 hover:-translate-y-0.5"
                  }
                `}
              >
                Contact
              </NavLink>

              <ThemeToggle className="ml-3" />
            </nav>

            {/* Navigation Mobile - Boutons */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl hover:bg-white/5 transition-colors duration-200 text-[var(--header-text)]"
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ transform: mobileMenuOpen ? "rotate(90deg)" : "none" }}
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Menu mobile dropdown */}
          <div
            id="mobile-menu"
            className={`
              lg:hidden overflow-hidden transition-all duration-300 ease-out
              ${mobileMenuOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"}
            `}
          >
            <nav 
              className="flex flex-col gap-1 pt-4 border-t border-[var(--header-border)]"
              role="navigation"
              aria-label="Navigation mobile"
            >
              {navLinks.map(({ hash, label }) => (
                <NavLink
                  key={hash}
                  to={`/${hash}`}
                  onClick={(e) => handleAnchorClick(e, hash)}
                  className={getNavLinkClass(hash, true)}
                >
                  {label}
                </NavLink>
              ))}

              {/* Séparateur */}
              <div className="h-px bg-[var(--border)] my-2" aria-hidden="true" />

              {/* Bouton Contact Mobile */}
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  px-4 py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200
                  ${isActive
                    ? "bg-[var(--accent)] text-[var(--btn-fg)]"
                    : "bg-[var(--accent)] text-[var(--btn-fg)] hover:bg-[var(--accent-2)]"
                  }
                `}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-[1]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merci" element={<Merci />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="relative z-[1] mt-auto border-t border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            {/* Logo & tagline */}
            <div className="text-center md:text-left">
              <Link 
                to="/" 
                className="font-display text-lg font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              >
                Benjamin Fontaine
              </Link>
              <p className="text-sm text-[var(--muted)] mt-1">
                Développeur Web React Freelance
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Bennftn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/benjamin-fontaine-18b44a37a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:Benjamin77510be@gmail.com"
                className="w-10 h-10 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[var(--border)] mb-6" />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-[var(--muted)] text-center sm:text-left">
              © {new Date().getFullYear()} Benjamin Fontaine. Tous droits réservés.
            </p>

            {/* Legal links */}
            <nav className="flex flex-wrap justify-center gap-1 text-sm" aria-label="Liens légaux">
              <Link
                to="/mentions-legales"
                className="px-3 py-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200"
              >
                Mentions légales
              </Link>
              <Link
                to="/confidentialite"
                className="px-3 py-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200"
              >
                Confidentialité
              </Link>
              <Link
                to="/cgv"
                className="px-3 py-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200"
              >
                CGV
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}