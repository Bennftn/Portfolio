import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";

export default function Confidentialite() {
  const SITE_URL = "https://benjaminfontaine.com";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Politique de confidentialité - Benjamin Fontaine</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles (RGPD)" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${SITE_URL}/confidentialite`} />
      </Helmet>

      <section className="legal-page section">
        <div className="container legal-container">
          <Link to="/" className="back-link">← Retour à l'accueil</Link>
          <h1>Politique de confidentialité</h1>
          <p className="lead">
            Benjamin Fontaine accorde une grande importance à la protection de vos données personnelles.
            Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons
            et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>

          <div className="legal-content">
            <section className="legal-section">
              <h2>1. Responsable du traitement des données</h2>
              <p>
                <strong>Responsable :</strong> Benjamin Fontaine<br />
                <strong>SIRET :</strong> 99255553200017<br />
                <strong>Email :</strong> <a href="mailto:Benjamin77510be@gmail.com">Benjamin77510be@gmail.com</a><br />
                <strong>Adresse :</strong> Bellot, 77510 Seine-et-Marne, France
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Données personnelles collectées</h2>
              <h3>2.1. Formulaire de contact</h3>
              <p>Lorsque vous utilisez notre formulaire de contact, nous collectons les informations suivantes :</p>
              <ul>
                <li><strong>Nom et prénom</strong> : pour vous identifier et personnaliser notre réponse</li>
                <li><strong>Adresse email</strong> : pour vous répondre</li>
                <li><strong>Numéro de téléphone</strong> : optionnel, pour vous contacter si nécessaire</li>
                <li><strong>Nom de l'entreprise</strong> : optionnel, pour mieux comprendre votre contexte</li>
                <li><strong>Type de projet</strong> : pour qualifier votre demande</li>
                <li><strong>Message</strong> : pour comprendre votre besoin</li>
              </ul>

              <h3>2.2. Données de navigation</h3>
              <p>
                Ce site n'utilise <strong>aucun cookie de suivi</strong> ni outil d'analyse comme Google Analytics.
                Nous ne collectons aucune donnée de navigation.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Finalité du traitement</h2>
              <p>Vos données personnelles sont collectées et traitées uniquement pour :</p>
              <ul>
                <li>Répondre à vos demandes d'information</li>
                <li>Établir un devis personnalisé</li>
                <li>Communiquer sur votre projet web</li>
                <li>Assurer le suivi de notre collaboration</li>
              </ul>
              <p>
                <strong>Vos données ne sont jamais utilisées à des fins commerciales ou publicitaires
                et ne sont jamais vendues ou transmises à des tiers.</strong>
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Base légale du traitement</h2>
              <p>
                Le traitement de vos données repose sur votre <strong>consentement explicite</strong> donné
                lors de la soumission du formulaire de contact et sur l'<strong>exécution d'un contrat </strong>
                dans le cadre d'une collaboration professionnelle.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Destinataires des données</h2>
              <p>
                Vos données personnelles sont uniquement accessibles par <strong>Benjamin Fontaine </strong>
                et ne sont jamais transmises à des tiers, sauf obligation légale.
              </p>
              <p>
                Les données du formulaire de contact sont envoyées via <strong>Formspree </strong>
                (service tiers sécurisé) puis stockées dans ma messagerie email.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Durée de conservation</h2>
              <p>Vos données personnelles sont conservées pendant :</p>
              <ul>
                <li><strong>Prospects (sans contrat signé) :</strong> 3 ans maximum</li>
                <li><strong>Clients (avec contrat) :</strong> Durée légale de conservation comptable (10 ans)</li>
                <li><strong>Demandes sans suite :</strong> Suppression après 1 an</li>
              </ul>
              <p>
                À l'issue de ces durées, vos données sont automatiquement supprimées ou anonymisées.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Vos droits (RGPD)</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD),
                vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul>
                <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> Vous pouvez corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
                <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
                <li><strong>Droit à la limitation :</strong> Vous pouvez limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans un format structuré</li>
              </ul>
              <h3>Comment exercer vos droits ?</h3>
              <p>
                Pour exercer l'un de ces droits, contactez-nous par email à :
                <a href="mailto:Benjamin77510be@gmail.com"> Benjamin77510be@gmail.com</a>
              </p>
              <p>
                Nous nous engageons à répondre à votre demande dans un délai d'<strong>un mois maximum</strong>.
              </p>
              <p>
                Vous disposez également du droit d'introduire une réclamation auprès de la
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer"> CNIL</a>
                (Commission Nationale de l'Informatique et des Libertés).
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Sécurité des données</h2>
              <p>
                Benjamin Fontaine met en œuvre toutes les mesures techniques et organisationnelles
                appropriées pour garantir la sécurité de vos données personnelles et empêcher leur
                altération, leur perte ou leur accès non autorisé :
              </p>
              <ul>
                <li>Hébergement sécurisé via HTTPS (certificat SSL)</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegarde régulière des données</li>
                <li>Mots de passe sécurisés et chiffrés</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>9. Cookies</h2>
              <p>
                Ce site web <strong>n'utilise aucun cookie de suivi ou publicitaire</strong>.
              </p>
              <p>
                Seuls des cookies techniques strictement nécessaires au fonctionnement du site
                peuvent être utilisés (exemple : préférence de thème clair/sombre).
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Transfert de données hors UE</h2>
              <p>
                Vos données ne font l'objet d'aucun transfert en dehors de l'Union Européenne,
                sauf dans le cadre de l'utilisation de services tiers conformes au RGPD
                (exemple : hébergeur Netlify avec garanties appropriées).
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Modifications de la politique</h2>
              <p>
                Benjamin Fontaine se réserve le droit de modifier cette politique de confidentialité
                à tout moment. La date de dernière mise à jour est indiquée en bas de cette page.
              </p>
              <p>
                Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance
                des éventuelles modifications.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles,
                vous pouvez nous contacter :
              </p>
              <p>
                <strong>Email :</strong> <a href="mailto:Benjamin77510be@gmail.com">Benjamin77510be@gmail.com</a><br />
                <strong>Adresse :</strong> Benjamin Fontaine, Bellot, 77510 Seine-et-Marne, France
              </p>
            </section>

          </div>

          <div className="legal-footer">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            <div className="legal-footer-actions">
              <Link to="/mentions-legales" className="btn btn-outline">Mentions légales</Link>
              <Link to="/" className="btn">Retour à l'accueil</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}