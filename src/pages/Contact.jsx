import { Helmet } from "@dr.pogodin/react-helmet";

const SITE_URL = "https://benjaminfontaine.com";

export default function Contact() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Contact — Benjamin Fontaine | Développeur Web React Freelance Seine-et-Marne</title>
        <meta
          name="description"
          content="Contactez Benjamin Fontaine, développeur web React freelance à Bellot (77). Disponible pour vos projets web en Seine-et-Marne et Île-de-France. Devis gratuit."
        />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact — Benjamin Fontaine | Développeur Web React" />
        <meta property="og:description" content="Contactez-moi pour discuter de votre projet web. Développeur React freelance en Seine-et-Marne." />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact — Benjamin Fontaine" />
        <meta name="twitter:description" content="Développeur web React freelance — Discutons de votre projet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Benjamin Fontaine",
            description: "Page de contact pour discuter de projets de développement web",
            url: `${SITE_URL}/contact`,
            mainEntity: {
              "@type": "Person",
              name: "Benjamin Fontaine",
              jobTitle: "Développeur Web Front-End",
              email: "Benjamin77510be@gmail.com",
              url: SITE_URL,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bellot",
                addressRegion: "Seine-et-Marne",
                postalCode: "77510",
                addressCountry: "FR",
              },
              areaServed: [
                { "@type": "City", name: "Bellot" },
                { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
                { "@type": "AdministrativeArea", name: "Île-de-France" },
              ],
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
            ],
          })}
        </script>
      </Helmet>

      <section className="py-16 md:py-24 scroll-mt-[90px]">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide uppercase rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
              Disponible pour nouveaux projets
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-display mb-6 leading-tight">
              Travaillons ensemble
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
              Vous avez un projet de site web ou besoin d'un développeur React freelance ? 
              Je suis à votre écoute pour transformer vos idées en solutions concrètes.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Coordonnées */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
                <h2 className="text-lg font-bold mb-6 pb-4 border-b border-[var(--border)]">
                  Informations de contact
                </h2>
                
                <div className="space-y-5">
                  <a
                    href="mailto:Benjamin77510be@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent)]/20 transition-colors duration-200">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted)] mb-1">Email</p>
                      <p className="font-medium text-[var(--accent)] group-hover:underline">Benjamin77510be@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted)] mb-1">Localisation</p>
                      <p className="font-medium">Bellot, Seine-et-Marne (77)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted)] mb-1">Zone d'intervention</p>
                      <p className="font-medium">Île-de-France & Remote</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-[var(--border)]">
                  <p className="text-sm text-[var(--muted)] mb-4">Retrouvez-moi sur</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Bennftn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/benjamin-fontaine-18b44a37a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Avantages */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
                <h2 className="text-lg font-bold mb-6 pb-4 border-b border-[var(--border)]">
                  Pourquoi me choisir
                </h2>
                <ul className="space-y-4">
                  {[
                    { title: "Expertise React", desc: "Applications modernes, performantes et maintenables" },
                    { title: "Accessibilité & SEO", desc: "Respect des standards WCAG et optimisation technique" },
                    { title: "Proximité locale", desc: "Basé en Seine-et-Marne, disponible en Île-de-France" },
                    { title: "Communication claire", desc: "Suivi régulier et documentation complète" },
                    { title: "Devis gratuit", desc: "Estimation détaillée sous 48 heures" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 lg:p-10">
              <h2 className="text-xl font-bold mb-2">Parlez-moi de votre projet</h2>
              <p className="text-[var(--muted)] mb-8">
                Remplissez ce formulaire et je vous recontacte sous 24 à 48 heures.
              </p>

              <form
                className="space-y-6"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input type="hidden" name="access_key" value="8a20ae48-ed6f-4e9e-b175-64477426733b" />
                <input type="hidden" name="redirect" value="https://benjaminfontaine.com/merci" />

                {/* Nom */}
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Nom ou entreprise <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    id="name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-all duration-200"
                    type="text"
                    name="name"
                    placeholder="Votre nom ou nom d'entreprise"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    id="email"
                    className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-all duration-200"
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                {/* Grid 2 cols */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Type de projet */}
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="project-type">
                      Type de projet
                    </label>
                    <select
                      id="project-type"
                      className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-all duration-200 cursor-pointer appearance-none pr-10"
                      name="project-type"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23889063' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="">Sélectionnez</option>
                      <option value="site-vitrine">Site vitrine</option>
                      <option value="e-commerce">Site e-commerce</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="application-react">Application React</option>
                      <option value="integration-figma">Intégration Figma</option>
                      <option value="refonte">Refonte de site</option>
                      <option value="audit">Audit technique</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="budget">
                      Budget indicatif
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-all duration-200 cursor-pointer appearance-none pr-10"
                      name="budget"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23889063' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="">Sélectionnez</option>
                      <option value="< 1000€">Moins de 1 000 €</option>
                      <option value="1000-2000€">1 000 € – 2 000 €</option>
                      <option value="2000-5000€">2 000 € – 5 000 €</option>
                      <option value="> 5000€">Plus de 5 000 €</option>
                      <option value="a-definir">À définir</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Votre message <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-all duration-200 resize-y min-h-[160px]"
                    name="message"
                    rows="5"
                    placeholder="Décrivez votre projet, vos objectifs, vos délais éventuels..."
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 bg-[var(--accent)] text-[var(--btn-fg)] font-semibold rounded-xl cursor-pointer transition-all duration-200 hover:bg-[var(--accent-2)] hover:text-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 group"
                  type="submit"
                >
                  Envoyer ma demande
                  <svg
                    className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>

              {/* Note */}
              <p className="text-center text-sm text-[var(--muted)] mt-6 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Vos données sont confidentielles et ne seront jamais partagées.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}