import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";

export default function MentionsLegales() {
  const SITE_URL = "https://benjaminfontaine.com";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Mentions légales - Benjamin Fontaine</title>
        <meta
          name="description"
          content="Mentions légales du site benjaminfontaine.com - Développeur Web Freelance"
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${SITE_URL}/mentions-legales`} />
      </Helmet>

      <section className="py-12 md:py-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:-translate-x-1 transition-transform duration-200 mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour à l'accueil
          </Link>

          {/* Header */}
          <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-bold font-display mb-10 leading-tight">
            Mentions légales
          </h1>

          {/* Content */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Éditeur du site
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--text)]">Nom :</strong> Benjamin
                Fontaine
                <br />
                <strong className="text-[var(--text)]">Statut :</strong>{" "}
                Micro-entrepreneur / Auto-entrepreneur
                <br />
                <strong className="text-[var(--text)]">SIRET :</strong>{" "}
                99255553200017
                <br />
                <strong className="text-[var(--text)]">Adresse :</strong>{" "}
                Bellot, 77510 Seine-et-Marne, France
                <br />
                <strong className="text-[var(--text)]">Email :</strong>{" "}
                <a
                  href="mailto:Benjamin77510be@gmail.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  Benjamin77510be@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Directeur de la publication
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Benjamin Fontaine
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Hébergement du site
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--text)]">Hébergeur :</strong>{" "}
                Netlify, Inc.
                <br />
                <strong className="text-[var(--text)]">Adresse :</strong> 44
                Montgomery Street, Suite 300, San Francisco, CA 94104, USA
                <br />
                <strong className="text-[var(--text)]">Site web :</strong>{" "}
                <a
                  href="https://www.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  www.netlify.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Propriété intellectuelle
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                L'ensemble du contenu de ce site web (textes, images, code
                source, design) est la propriété exclusive de Benjamin Fontaine,
                sauf mention contraire explicite.
              </p>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Toute reproduction, distribution, modification, adaptation,
                retransmission ou publication de ces différents éléments est
                strictement interdite sans l'accord écrit préalable de Benjamin
                Fontaine.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Les marques, logos et visuels appartenant à des tiers restent la
                propriété de leurs auteurs respectifs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Crédits
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--text)]">
                  Développement et design :
                </strong>{" "}
                Benjamin Fontaine
                <br />
                <strong className="text-[var(--text)]">Photos :</strong>{" "}
                Unsplash, Pexels (licences libres)
                <br />
                <strong className="text-[var(--text)]">Icônes :</strong>{" "}
                Devicon, Lucide Icons
                <br />
                <strong className="text-[var(--text)]">Polices :</strong> Google
                Fonts (Manrope, Space Grotesk)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Données personnelles
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Pour toute information concernant le traitement de vos données
                personnelles, veuillez consulter notre{" "}
                <Link
                  to="/confidentialite"
                  className="text-[var(--accent)] hover:underline"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Limitation de responsabilité
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Benjamin Fontaine ne pourra être tenu responsable des dommages
                directs ou indirects causés au matériel de l'utilisateur lors de
                l'accès au site benjaminfontaine.com.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Benjamin Fontaine s'engage à sécuriser au mieux le site
                benjaminfontaine.com, cependant sa responsabilité ne pourra être
                engagée en cas de force majeure ou du fait imprévisible et
                insurmontable d'un tiers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Liens hypertextes
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Le site benjaminfontaine.com peut contenir des liens vers
                d'autres sites internet. Benjamin Fontaine ne dispose d'aucun
                moyen de contrôle sur le contenu de ces sites et décline toute
                responsabilité quant au contenu de ces sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Litiges
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige et à défaut d'accord amiable, le
                litige sera porté devant les tribunaux français conformément aux
                règles de compétence en vigueur.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-[var(--border)] text-center">
            <p className="text-sm text-[var(--muted)] mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 bg-[var(--accent)] text-[var(--btn-fg)] border border-[var(--accent)] rounded-xl font-semibold transition-all duration-200 hover:bg-[var(--accent-2)] hover:text-white"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
