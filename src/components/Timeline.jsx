import { useEffect, useRef } from "react";

export default function Timeline({ items = [] }) {
  const ref = useRef(null);

  // Petite apparition au scroll (respect PRM)
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Si l'utilisateur préfère réduire les animations
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.querySelectorAll(".tl-item").forEach((el) => el.classList.add("is-in"));
      return;
    }

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
    <ol
      ref={ref}
      className="list-none relative mt-5 pl-16"
      aria-label="Parcours"
    >
      {/* Ligne verticale */}
      <div
        className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-[var(--border)]"
        aria-hidden="true"
      />

      {items.map((it, i) => (
        <li
          key={i}
          className="
            tl-item
            relative my-4
            opacity-0 translate-y-2
            transition-all duration-[450ms] ease-out
            [&.is-in]:opacity-100 [&.is-in]:translate-y-0
            motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none
          "
        >
          {/* Marker / Point */}
          <div
            className="
              absolute w-4 h-4 rounded-full
              -left-7 top-[0.9rem]
              bg-[var(--accent)]
              border-2 border-[color-mix(in_oklab,var(--accent)_50%,transparent)]
              shadow-[0_0_0_6px_color-mix(in_oklab,var(--accent)_18%,transparent)]
            "
            aria-hidden="true"
          />

          {/* Content Card */}
          <div
            className="
              bg-[var(--surface)] border border-[var(--border)] rounded-2xl
              px-3.5 py-3
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_18px_36px_var(--glow)]
              hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--border))]
            "
          >
            {/* Header avec date et organisation */}
            <div className="text-[var(--muted)] text-[0.92rem]">
              <time dateTime={it.year}>{it.year}</time>
              {it.org && <span> · {it.org}</span>}
            </div>

            {/* Titre */}
            <h3 className="text-[1.05rem] font-semibold mt-1 mb-1">
              {it.title}
            </h3>

            {/* Description */}
            {it.desc && (
              <p className="text-[var(--muted)] m-0 text-sm">{it.desc}</p>
            )}

            {/* Tags */}
            {it.tags?.length > 0 && (
              <ul className="flex gap-2 mt-2.5 p-0 list-none flex-wrap">
                {it.tags.map((t) => (
                  <li
                    key={t}
                    className="bg-white/5 border border-[var(--border)] px-2.5 py-1 rounded-full text-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}