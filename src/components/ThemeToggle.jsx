import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // thème initial : mémoire > préférence système > "dark" (par défaut)
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved; // "light" | "dark"
    return window.matchMedia?.("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.dataset.theme = "light";
    else root.dataset.theme = ""; // dark par défaut (tes variables :root)
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === "light" ? "dark" : "light"));

  const isLight = theme === "light";
  return (
    <button
      type="button"
      className="btn btn-ghost theme-toggle"
      onClick={toggle}
      aria-pressed={isLight ? "true" : "false"}
      title={isLight ? "Passer en mode sombre" : "Passer en mode clair"}
    >
      {isLight ? "🌙 Mode sombre" : "☀️ Mode clair"}
    </button>
  );
}
