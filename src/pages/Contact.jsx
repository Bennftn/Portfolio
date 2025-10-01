import { Helmet } from "@dr.pogodin/react-helmet";

const SITE_URL = "https://benjaminfontaine.com";

export default function Contact() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        {/* Titre et description */}
        <title>Contact — Benjamin Fontaine | Développeur Web React Freelance Seine-et-Marne</title>
        <meta
          name="description"
          content="Contactez Benjamin Fontaine, développeur web React freelance à Bellot (77). Disponible pour vos projets web en Seine-et-Marne et Île-de-France. Devis gratuit."
        />
        {/* Canonical */}
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact — Benjamin Fontaine | Développeur Web React" />
        <meta property="og:description" content="Contactez-moi pour discuter de votre projet web. Développeur React freelance en Seine-et-Marne." />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact — Benjamin Fontaine" />
        <meta name="twitter:description" content="Développeur web React freelance — Discutons de votre projet" />
        {/* Données structurées */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Benjamin Fontaine",
          "description": "Page de contact pour discuter de projets de développement web",
          "url": `${SITE_URL}/contact`,
          "mainEntity": {
            "@type": "Person",
            "name": "Benjamin Fontaine",
            "jobTitle": "Développeur Web Front-End",
            "email": "Benjamin77510be@gmail.com",
            "url": SITE_URL,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bellot",
              "addressRegion": "Seine-et-Marne",
              "postalCode": "77510",
              "addressCountry": "FR"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Bellot"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Seine-et-Marne"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Île-de-France"
              }
            ]
          }
        })}
        </script>
        {/* Breadcrumb */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": SITE_URL
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact",
              "item": `${SITE_URL}/contact`
            }
          ]
        })}
        </script>
      </Helmet>

      <section className="section contact">
        <div className="container">
          <h1>Contactez-moi pour votre projet web</h1>
          <p className="contact-lead">
            Vous avez un <strong>projet de site web</strong>, une <strong>refonte</strong> ou besoin
            d'un <strong>développeur React freelance en Seine-et-Marne</strong> ?
            Discutons-en ensemble !
          </p>

          <div className="contact-info-box">
            <h2>
              Mes coordonnées
            </h2>
            <p>
              📧 <strong>Email :</strong>{" "}
              <a href="mailto:Benjamin77510be@gmail.com">
                Benjamin77510be@gmail.com
              </a>
            </p>
            <p>
              📍 <strong>Localisation :</strong> Bellot, Seine-et-Marne (77)
            </p>
            <p>
              🌐 <strong>Zone d'intervention :</strong> Île-de-France (déplacements possibles)
            </p>
            <p>
              🔗 <strong>GitHub :</strong>{" "}
              <a
                href="https://github.com/Bennftn"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Bennftn
              </a>
            </p>
          </div>

          <h2 className="contact-section-title">
            Formulaire de contact
          </h2>
          <p className="contact-intro-text">
            Remplissez le formulaire ci-dessous ou envoyez-moi directement un email.
            Je vous réponds généralement <strong>sous 24-48h</strong>.
          </p>

          <form
            className="form"
            action="https://formspree.io/f/xwprbenk"
            method="POST"
          >
            <input type="hidden" name="_next" value="https://benjaminfontaine.com/merci" />
            <label>
              Nom ou entreprise
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Votre nom ou nom d'entreprise"
                required
              />
            </label>

            <label>
              Email
              <input
                className="input"
                type="email"
                name="email"
                placeholder="votre@email.com"
                required
              />
            </label>

            <label>
              Type de projet
              <select className="input" name="project-type">
                <option value="">Sélectionnez un type de projet</option>
                <option value="site-vitrine">Site vitrine</option>
                <option value="portfolio">Portfolio</option>
                <option value="application-react">Application React (SPA)</option>
                <option value="integration-figma">Intégration maquette Figma</option>
                <option value="refonte">Refonte de site existant</option>
                <option value="audit">Audit performance/accessibilité</option>
                <option value="autre">Autre</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                className="textarea"
                name="message"
                rows="6"
                placeholder="Décrivez votre projet, vos besoins, votre budget indicatif..."
                required
              />
            </label>

            <button className="btn" type="submit">
              Envoyer le message
            </button>
          </form>

          <p className="contact-tip">
            💡 <strong>Astuce :</strong> Vous pouvez aussi cliquer directement sur l'email
            ci-dessus pour ouvrir votre application mail.
          </p>

          <div className="contact-why-box">
            <h2>
              🚀 Pourquoi me contacter ?
            </h2>
            <ul>
              <li>
                <strong>Développement React moderne</strong> : Sites performants et maintenables
              </li>
              <li>
                <strong>Accessibilité et SEO</strong> : Respect des standards WCAG et bonnes pratiques
              </li>
              <li>
                <strong>Proximité locale</strong> : Basé en Seine-et-Marne, disponible en Île-de-France
              </li>
              <li>
                <strong>Devis gratuit</strong> : Estimation transparente de votre projet
              </li>
              <li>
                <strong>Communication claire</strong> : Suivi régulier et documentation complète
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}