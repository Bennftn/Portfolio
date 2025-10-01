import { Helmet } from "@dr.pogodin/react-helmet";
import { useEffect } from "react";

const SITE_URL = "https://benjaminfontaine.com";

export default function Merci() {
  // Scroll en haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Message envoyé - Benjamin Fontaine</title>
        <meta name="description" content="Votre message a bien été envoyé. Je vous réponds sous 24-48h." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`${SITE_URL}/merci`} />
      </Helmet>

      <section className="section contact">
        <div className="container merci-container">
          <div className="merci-card">
            <div className="merci-icon">
              ✓
            </div>

            <h1>
              Message envoyé avec succès
            </h1>

            <p className="merci-lead">
              Merci pour votre message. Je prends connaissance de votre demande
              et vous réponds généralement <strong>sous 24 à 48 heures</strong>.
            </p>

            <div className="merci-steps-box">
              <h2>
                Prochaines étapes
              </h2>
              <ul>
                <li>Vérifiez votre boîte de réception (et vos spams)</li>
                <li>Je vous contacte sous 24-48h pour discuter de votre projet</li>
                <li>Nous échangeons sur vos besoins et votre budget</li>
                <li>Je vous envoie un devis détaillé si le projet correspond</li>
              </ul>
            </div>

            <div className="merci-actions">
              <a href="/" className="btn">
                Retour à l'accueil
              </a>
              <a href="/#projets" className="btn btn-outline">
                Voir mes projets
              </a>
            </div>

            <p className="merci-footer-text">
              Vous pouvez aussi me contacter directement par email :{" "}
              <a href="mailto:Benjamin77510be@gmail.com">
                Benjamin77510be@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}