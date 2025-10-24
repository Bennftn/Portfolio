import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";

export default function MentionsLegales() {
  const SITE_URL = "https://benjaminfontaine.com";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Mentions légales - Benjamin Fontaine</title>
        <meta name="description" content="Mentions légales du site benjaminfontaine.com - Développeur Web Freelance" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${SITE_URL}/mentions-legales`} />
      </Helmet>

      <section className="legal-page section">
        <div className="container legal-container">
          <Link to="/" className="back-link">← Retour à l'accueil</Link>

          <h1>Mentions légales</h1>

          <div className="legal-content">

            <section className="legal-section">
              <h2>Éditeur du site</h2>
              <p>
                <strong>Nom :</strong> Benjamin Fontaine<br />
                <strong>Statut :</strong> Micro-entrepreneur / Auto-entrepreneur<br />
                <strong>SIRET :</strong> 99255553200017<br />
                <strong>Adresse :</strong> Bellot, 77510 Seine-et-Marne, France<br />
                <strong>Email :</strong> <a href="mailto:Benjamin77510be@gmail.com">Benjamin77510be@gmail.com</a><br />
              </p>
            </section>

            <section className="legal-section">
              <h2>Directeur de la publication</h2>
              <p>Benjamin Fontaine</p>
            </section>

            <section className="legal-section">
              <h2>Hébergement du site</h2>
              <p>
                <strong>Hébergeur :</strong> Netlify, Inc.<br />
                <strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA<br />
                <strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">www.netlify.com</a>
              </p>
            </section>

            <section className="legal-section">
              <h2>Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site web (textes, images, code source, design) est la propriété
                exclusive de Benjamin Fontaine, sauf mention contraire explicite.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de
                ces différents éléments est strictement interdite sans l'accord écrit préalable de Benjamin Fontaine.
              </p>
              <p>
                Les marques, logos et visuels appartenant à des tiers restent la propriété de leurs auteurs respectifs.
              </p>
            </section>

            <section className="legal-section">
              <h2>Crédits</h2>
              <p>
                <strong>Développement et design :</strong> Benjamin Fontaine<br />
                <strong>Photos :</strong> Unsplash, Pexels (licences libres)<br />
                <strong>Icônes :</strong> Devicon, Lucide Icons<br />
                <strong>Polices :</strong> Google Fonts (Manrope, Space Grotesk)
              </p>
            </section>

            <section className="legal-section">
              <h2>Données personnelles</h2>
              <p>
                Pour toute information concernant le traitement de vos données personnelles,
                veuillez consulter notre <Link to="/confidentialite">Politique de confidentialité</Link>.
              </p>
            </section>

            <section className="legal-section">
              <h2>Limitation de responsabilité</h2>
              <p>
                Benjamin Fontaine ne pourra être tenu responsable des dommages directs ou indirects
                causés au matériel de l'utilisateur lors de l'accès au site benjaminfontaine.com.
              </p>
              <p>
                Benjamin Fontaine s'engage à sécuriser au mieux le site benjaminfontaine.com, cependant
                sa responsabilité ne pourra être engagée en cas de force majeure ou du fait imprévisible
                et insurmontable d'un tiers.
              </p>
            </section>

            <section className="legal-section">
              <h2>Liens hypertextes</h2>
              <p>
                Le site benjaminfontaine.com peut contenir des liens vers d'autres sites internet.
                Benjamin Fontaine ne dispose d'aucun moyen de contrôle sur le contenu de ces sites
                et décline toute responsabilité quant au contenu de ces sites.
              </p>
            </section>

            <section className="legal-section">
              <h2>Litiges</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige et à défaut d'accord amiable, le litige sera porté devant les
                tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </section>

          </div>

          <div className="legal-footer">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            <Link to="/" className="btn">Retour à l'accueil</Link>
          </div>

        </div>
      </section>
    </>
  );
}