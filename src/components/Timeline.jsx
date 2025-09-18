import { useEffect, useRef } from "react";

export default function Timeline({ items = [] }) {
  const ref = useRef(null);

  // Petite apparition au scroll (respect PRM)
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll(".tl-item");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle("is-in", e.isIntersecting));
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <ol ref={ref} className="timeline" aria-label="Parcours">
      {items.map((it, i) => (
        <li key={i} className="tl-item">
          <div className="tl-marker" aria-hidden="true" />
          <div className="tl-content card">
            <div className="tl-header">
              <time className="tl-date" dateTime={it.year}>{it.year}</time>
              {it.org && <span className="tl-location"> · {it.org}</span>}
            </div>
            <h3 className="tl-title">{it.title}</h3>
            {it.desc && <p className="tl-desc">{it.desc}</p>}
            {it.tags?.length > 0 && (
              <ul className="tl-tags">
                {it.tags.map((t) => <li key={t} className="chip">{t}</li>)}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
