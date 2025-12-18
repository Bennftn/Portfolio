import { useEffect, useRef, useState } from "react";

export default function SkillBar({ label, level }) {
  const trackRef = useRef(null);
  const [w, setW] = useState(0); // largeur animée

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Si l'utilisateur préfère réduire les animations → afficher directement
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setW(level);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setW(level); // lance l'animation
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [level]);

  return (
    <div className="my-3.5">
      {/* Header avec label et pourcentage */}
      <div className="flex justify-between font-semibold mb-1.5">
        <span>{label}</span>
        <span className="text-[var(--muted)]">{level}%</span>
      </div>

      {/* Track (fond de la barre) */}
      <div
        ref={trackRef}
        className="
          h-3 rounded-full overflow-hidden
          bg-[var(--tan)]
          shadow-[inset_0_1px_2px_rgba(0,0,0,0.18)]
          dark:bg-[var(--tan)]
          [html[data-theme='light']_&]:bg-[#edebfa]
        "
        role="progressbar"
        aria-label={label}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Fill (barre de progression) */}
        <div
          className="
            h-full rounded-[inherit]
            bg-[var(--accent)]
            transition-[width] duration-[900ms] ease-out
            motion-reduce:transition-none
          "
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}