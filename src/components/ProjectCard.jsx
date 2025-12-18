import { useEffect, useRef } from "react";

const iconClassFor = (name = "") => {
  const n = name.toLowerCase();
  if (["html", "html5"].includes(n)) return "devicon-html5-plain";
  if (["css", "css3"].includes(n)) return "devicon-css3-plain";
  if (["js", "javascript"].includes(n)) return "devicon-javascript-plain";
  if (["ts", "typescript"].includes(n)) return "devicon-typescript-plain";
  if (["react"].includes(n)) return "devicon-react-original";
  if (["sass", "scss"].includes(n)) return "devicon-sass-original";
  if (["node", "nodejs"].includes(n)) return "devicon-nodejs-plain";
  if (["git"].includes(n)) return "devicon-git-plain";
  if (["github"].includes(n)) return "devicon-github-original";
  return "devicon-devicon-plain";
};

export default function ProjectCard({
  title,
  description,
  image,
  alt = `Aperçu ${title}`,
  skills = [],
  challenges = [],
  demo,
  code,
  tech = [],
  delay = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si l'utilisateur préfère réduire les animations → visible en permanence
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-in");
          } else {
            el.classList.remove("is-in");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="
        group
        flex flex-col h-full
        bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-[0_18px_36px_var(--glow)] hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--border))]
        opacity-0 translate-y-2.5
        [&.is-in]:opacity-100 [&.is-in]:translate-y-0
        motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none
      "
      style={{ "--d": `${delay}ms`, transitionDelay: `${delay}ms` }}
    >
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="w-full aspect-[16/10] object-cover block"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-lg font-semibold mt-1 mb-1.5">{title}</h3>
        {description && (
          <p className="text-[var(--muted)] mb-3 text-sm">{description}</p>
        )}

        {skills.length > 0 && (
          <div className="mb-3">
            <h4 className="text-base font-medium mb-1.5">Compétences</h4>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {skills.map((s) => (
                <li
                  key={s}
                  className="bg-white/5 border border-[var(--border)] px-2.5 py-1 rounded-full text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {challenges.length > 0 && (
          <details className="my-2 border border-[var(--border)] rounded-lg px-3 py-2.5 open:border-[color-mix(in_oklab,var(--accent)_35%,var(--border))]">
            <summary className="cursor-pointer font-semibold list-none">
              Problématiques & solutions
            </summary>
            <ul className="mt-2 ml-4 list-disc space-y-1.5">
              {challenges.map((c, i) => (
                <li key={i} className="text-[var(--muted)] text-sm">
                  <strong className="text-[var(--text)]">Problème :</strong>{" "}
                  {c.problem}
                  <br />
                  <strong className="text-[var(--text)]">
                    Solution :
                  </strong>{" "}
                  {c.solution}
                </li>
              ))}
            </ul>
          </details>
        )}

        {tech.length > 0 && (
          <div
            className="flex items-center gap-2.5 flex-wrap mb-2.5"
            aria-label={`Technologies utilisées : ${tech.join(", ")}`}
          >
            {tech.map((t) => {
              const cls = iconClassFor(t);
              return (
                <i
                  key={`${title}-${t}`}
                  className={`
                    ${cls} colored
                    text-xl leading-none
                    grayscale opacity-80
                    transition-all duration-200
                    group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-0.5
                  `}
                  title={t}
                  aria-hidden="true"
                />
              );
            })}
          </div>
        )}

        <div className="flex gap-3 flex-wrap mt-auto">
          {demo && (
            <a
              className="
                inline-flex items-center justify-center gap-2 min-h-[44px] px-4
                bg-[var(--accent)] text-[var(--btn-fg)]
                border border-[color-mix(in_oklab,var(--accent-2)_30%,var(--accent)_70%)]
                rounded-xl font-semibold cursor-pointer
                transition-all duration-200
                hover:bg-[var(--accent-2)] hover:text-white hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40
              "
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le site
            </a>
          )}
          {code && (
            <a
              className="
                inline-flex items-center justify-center gap-2 min-h-[44px] px-4
                bg-transparent text-[var(--accent)]
                border-[1.5px] border-[var(--accent)]
                rounded-xl font-semibold cursor-pointer
                transition-all duration-200
                hover:bg-[var(--accent)] hover:text-[var(--btn-fg)] hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40
              "
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
