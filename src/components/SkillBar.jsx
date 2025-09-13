import { useEffect, useRef, useState } from "react";

export default function SkillBar({ label, level }) {
  const trackRef = useRef(null);
  const [w, setW] = useState(0); // largeur animée

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setW(level);          // lance l’animation
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
    <div className="skill">
      <div className="skill-header">
        <span>{label}</span>
        <span className="skill-value">{level}%</span>
      </div>
      <div
        ref={trackRef}
        className="skill-track"
        role="progressbar"
        aria-label={label}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="skill-fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}
