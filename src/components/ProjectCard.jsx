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
  featured = false,
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
      className={`
        group
        flex flex-col h-full
        bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-[0_20px_40px_var(--glow)] hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--border))]
        opacity-0 translate-y-2.5
        [&.is-in]:opacity-100 [&.is-in]:translate-y-0
        motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none
        ${featured ? "border-[var(--accent)]/30" : ""}
      `}
      style={{ "--d": `${delay}ms`, transitionDelay: `${delay}ms` }}
    >
      {/* Badge Featured */}
      {featured && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-[var(--accent)] text-[var(--btn-fg)] rounded-full text-xs font-bold shadow-lg">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Vedette
        </div>
      )}

      {image && (
        <div className="overflow-hidden relative">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className={`
              w-full object-cover block transition-transform duration-500 group-hover:scale-105
              ${featured ? "aspect-[16/9] lg:aspect-[16/12]" : "aspect-[16/10]"}
            `}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-60"></div>
        </div>
      )}

      <div className={`flex flex-col flex-1 ${featured ? "p-6" : "p-4"}`}>
        <h3 className={`font-bold mb-2 ${featured ? "text-xl lg:text-2xl" : "text-lg"}`}>
          {title}
        </h3>
        {description && (
          <p className={`text-[var(--muted)] mb-4 ${featured ? "text-base" : "text-sm"}`}>
            {description}
          </p>
        )}

        {skills.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2 text-[var(--muted)]">Compétences</h4>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {skills.map((s) => (
                <li
                  key={s}
                  className="bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-2.5 py-1 rounded-lg text-xs font-medium text-[var(--accent)]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {challenges.length > 0 && (
          <details className="my-2 border border-[var(--border)] rounded-xl px-4 py-3 open:border-[var(--accent)]/30 open:bg-[var(--accent)]/5 transition-all">
            <summary className="cursor-pointer font-semibold list-none text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              Problématiques & solutions
            </summary>
            <ul className="mt-3 ml-1 space-y-2">
              {challenges.map((c, i) => (
                <li key={i} className="text-[var(--muted)] text-sm pl-4 border-l-2 border-[var(--accent)]/30">
                  <strong className="text-[var(--text)]">Problème :</strong> {c.problem}
                  <br />
                  <strong className="text-[var(--text)]">Solution :</strong> {c.solution}
                </li>
              ))}
            </ul>
          </details>
        )}

        {tech.length > 0 && (
          <div
            className="flex items-center gap-2.5 flex-wrap mb-4"
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
                    grayscale opacity-60
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

        <div className="flex gap-3 flex-wrap mt-auto pt-2">
          {demo && (
            <a
              className={`
                inline-flex items-center justify-center gap-2 
                bg-[var(--accent)] text-[var(--btn-fg)]
                border border-[color-mix(in_oklab,var(--accent-2)_30%,var(--accent)_70%)]
                rounded-xl font-semibold cursor-pointer
                transition-all duration-200
                hover:bg-[var(--accent-2)] hover:text-white hover:-translate-y-0.5 hover:shadow-lg
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40
                ${featured ? "min-h-[48px] px-6 text-base" : "min-h-[42px] px-4 text-sm"}
              `}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le site
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
          {code && (
            <a
              className={`
                inline-flex items-center justify-center gap-2
                bg-transparent text-[var(--accent)]
                border-[1.5px] border-[var(--accent)]
                rounded-xl font-semibold cursor-pointer
                transition-all duration-200
                hover:bg-[var(--accent)] hover:text-[var(--btn-fg)] hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40
                ${featured ? "min-h-[48px] px-6 text-base" : "min-h-[42px] px-4 text-sm"}
              `}
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Code source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}