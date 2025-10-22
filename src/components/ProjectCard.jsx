import { useEffect, useRef } from "react";

const iconClassFor = (name = "") => {
  const n = name.toLowerCase();
  if (["html","html5"].includes(n)) return "devicon-html5-plain";
  if (["css","css3"].includes(n)) return "devicon-css3-plain";
  if (["js","javascript"].includes(n)) return "devicon-javascript-plain";
  if (["ts","typescript"].includes(n)) return "devicon-typescript-plain";
  if (["react"].includes(n)) return "devicon-react-original";
  if (["sass","scss"].includes(n)) return "devicon-sass-original";
  if (["node","nodejs"].includes(n)) return "devicon-nodejs-plain";
  if (["git"].includes(n)) return "devicon-git-plain";
  if (["github"].includes(n)) return "devicon-github-original";
  return "devicon-devicon-plain";
};

export default function ProjectCard({
  title, description, image, alt = `Aperçu ${title}`,
  skills = [], challenges = [], demo, code, tech = [], delay = 0
}) {
  const ref = useRef(null);

  useEffect(() => {
  const el = ref.current;
  if (!el) return;

  // Si l’utilisateur préfère réduire les animations → visible en permanence
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
      rootMargin: "0px 0px -10% 0px" // retire un peu la zone en bas pour un ressenti propre
    }
  );

  io.observe(el);
  return () => io.disconnect();
  }, []);


  return (
    <article
      ref={ref}
      className="project-card reveal"
      style={{ "--d": `${delay}ms` }}
    >
      {image && (
        <div className="pc-media">
          <img src={image} alt={alt} loading="lazy" />
        </div>
      )}

      <div className="pc-body">
        <h3 className="pc-title">{title}</h3>
        {description && <p className="pc-desc">{description}</p>}

        {skills.length > 0 && (
          <div className="pc-section">
            <h4>Compétences</h4>
            <ul className="pc-skills">
              {skills.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
          </div>
        )}

        {challenges.length > 0 && (
          <details className="pc-details">
            <summary>Problématiques & solutions</summary>
            <ul className="pc-challenges">
              {challenges.map((c, i) => (
                <li key={i}>
                  <strong>Problème :</strong> {c.problem}<br />
                  <strong>Solution :</strong> {c.solution}
                </li>
              ))}
            </ul>
          </details>
        )}

        {tech.length > 0 && (
          <div className="tech-icons" aria-label={`Technologies utilisées : ${tech.join(", ")}`}>
            {tech.map((t) => {
              const cls = iconClassFor(t);
              return (
                <i
                  key={`${title}-${t}`}
                  className={`tech-icon ${cls} colored`}
                  title={t}
                  aria-hidden="true"
                />
              );
            })}
          </div>
        )}

        <div className="pc-actions">
          {demo && (
            <a className="btn" href={demo} target="_blank" rel="noopener noreferrer">
              Voir le site
            </a>
            )}
          {code && (
            <a className="btn btn-outline" href={code} target="_blank" rel="noopener noreferrer">
              Code GitHub
            </a>
            )}
        </div>
      </div>
    </article>
  );
}
