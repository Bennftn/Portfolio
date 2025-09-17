export default function ProjectCard({ title, description, image, alt = `Aperçu ${title}`, skills = [], challenges = [], demo, code, }) {
    return (
        <article className="project-card">
            {image && (
                <div className="pc-media">
                    <img src="{image}" alt="{alt}" loading="lazy"/>
                </div>
            )}

            <div className="pc-body">
                <h3 className="pc-title">{title}</h3>
                {description && <p className="pc-desc">{description}</p>}

                {/* Compétences */}
                {skills?.length > 0 && (
                    <div className="pc-section">
                        <h4>Compétences</h4>
                        <ul className="pc-skills">
                            {skills.map((s) => <li key={s} className="chip">{s}</li>)}
                        </ul>
                    </div>
                )}

                {/* Problématiques & solutions (repliable)*/}
                {challenges?.length > 0 && (
                    <details className="pc-details">
                        <summary>Problématiques & solutions</summary>
                        <ul className="pc-challenge">
                            {challenges.map((c, i) => (
                                <li key={i}>
                                    <strong>Problème :</strong> {c.problem}<br/>
                                    <strong>Solution :</strong> {c.solution}
                                </li>
                            ))}
                        </ul>
                    </details>
                )}

                {/* Liens */}
                <div className="pc-actions">
                    {demo && <a className="btn" href="{demo}" target="_blank" rel="noreferrer">Voir en ligne</a>}
                    {code && <a className="btn btn-outline" href="{code}" target="_blank" rel="noreferrer">Code GitHub</a>}
                </div>
            </div>
        </article>
    );
}