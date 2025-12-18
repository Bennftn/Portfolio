import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";

export default function Confidentialite() {
  const SITE_URL = "https://benjaminfontaine.com";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Politique de confidentialité - Benjamin Fontaine</title>
        <meta
          name="description"
          content="Politique de confidentialité et protection des données personnelles (RGPD)"
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${SITE_URL}/confidentialite`} />
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
          <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-bold font-display mb-4 leading-tight">
            Politique de confidentialité
          </h1>

          <p className="text-lg text-[var(--muted)] leading-relaxed mb-10 pb-8 border-b border-[var(--border)]">
            Benjamin Fontaine accorde une grande importance à la protection de
            vos données personnelles. Cette politique de confidentialité vous
            informe sur la manière dont nous collectons, utilisons et protégeons
            vos informations conformément au Règlement Général sur la Protection
            des Données (RGPD).
          </p>

          {/* Content */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                1. Responsable du traitement des données
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--text)]">Responsable :</strong>{" "}
                Benjamin Fontaine
                <br />
                <strong className="text-[var(--text)]">SIRET :</strong>{" "}
                99255553200017
                <br />
                <strong className="text-[var(--text)]">Email :</strong>{" "}
                <a
                  href="mailto:Benjamin77510be@gmail.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  Benjamin77510be@gmail.com
                </a>
                <br />
                <strong className="text-[var(--text)]">Adresse :</strong>{" "}
                Bellot, 77510 Seine-et-Marne, France
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                2. Données personnelles collectées
              </h2>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                2.1. Formulaire de contact
              </h3>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Lorsque vous utilisez notre formulaire de contact, nous
                collectons les informations suivantes :
              </p>
              <ul className="space-y-1 mb-4 ml-5 list-disc text-[var(--muted)]">
                <li>
                  <strong className="text-[var(--text)]">Nom et prénom</strong>{" "}
                  : pour vous identifier et personnaliser notre réponse
                </li>
                <li>
                  <strong className="text-[var(--text)]">Adresse email</strong>{" "}
                  : pour vous répondre
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Numéro de téléphone
                  </strong>{" "}
                  : optionnel, pour vous contacter si nécessaire
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Nom de l'entreprise
                  </strong>{" "}
                  : optionnel, pour mieux comprendre votre contexte
                </li>
                <li>
                  <strong className="text-[var(--text)]">Type de projet</strong>{" "}
                  : pour qualifier votre demande
                </li>
                <li>
                  <strong className="text-[var(--text)]">Message</strong> : pour
                  comprendre votre besoin
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                2.2. Données de navigation
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Ce site n'utilise{" "}
                <strong className="text-[var(--text)]">
                  aucun cookie de suivi
                </strong>{" "}
                ni outil d'analyse comme Google Analytics. Nous ne collectons
                aucune donnée de navigation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                3. Finalité du traitement
              </h2>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Vos données personnelles sont collectées et traitées uniquement
                pour :
              </p>
              <ul className="space-y-1 mb-4 ml-5 list-disc text-[var(--muted)]">
                <li>Répondre à vos demandes d'information</li>
                <li>Établir un devis personnalisé</li>
                <li>Communiquer sur votre projet web</li>
                <li>Assurer le suivi de notre collaboration</li>
              </ul>
              <p className="text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--text)]">
                  Vos données ne sont jamais utilisées à des fins commerciales
                  ou publicitaires et ne sont jamais vendues ou transmises à des
                  tiers.
                </strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                4. Base légale du traitement
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Le traitement de vos données repose sur votre{" "}
                <strong className="text-[var(--text)]">
                  consentement explicite
                </strong>{" "}
                donné lors de la soumission du formulaire de contact et sur l'
                <strong className="text-[var(--text)]">
                  exécution d'un contrat
                </strong>
                dans le cadre d'une collaboration professionnelle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                5. Destinataires des données
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Vos données personnelles sont uniquement accessibles par{" "}
                <strong className="text-[var(--text)]">
                  Benjamin Fontaine
                </strong>
                et ne sont jamais transmises à des tiers, sauf obligation
                légale.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Les données du formulaire de contact sont envoyées via{" "}
                <strong className="text-[var(--text)]">Web3Forms</strong>
                (service tiers sécurisé) puis stockées dans ma messagerie email.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                6. Durée de conservation
              </h2>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Vos données personnelles sont conservées pendant :
              </p>
              <ul className="space-y-1 mb-3 ml-5 list-disc text-[var(--muted)]">
                <li>
                  <strong className="text-[var(--text)]">
                    Prospects (sans contrat signé) :
                  </strong>{" "}
                  3 ans maximum
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Clients (avec contrat) :
                  </strong>{" "}
                  Durée légale de conservation comptable (10 ans)
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Demandes sans suite :
                  </strong>{" "}
                  Suppression après 1 an
                </li>
              </ul>
              <p className="text-[var(--muted)] leading-relaxed">
                À l'issue de ces durées, vos données sont automatiquement
                supprimées ou anonymisées.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                7. Vos droits (RGPD)
              </h2>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez des droits suivants concernant vos données
                personnelles :
              </p>
              <ul className="space-y-1 mb-4 ml-5 list-disc text-[var(--muted)]">
                <li>
                  <strong className="text-[var(--text)]">
                    Droit d'accès :
                  </strong>{" "}
                  Vous pouvez demander une copie de vos données
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Droit de rectification :
                  </strong>{" "}
                  Vous pouvez corriger vos données inexactes
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Droit à l'effacement :
                  </strong>{" "}
                  Vous pouvez demander la suppression de vos données
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Droit d'opposition :
                  </strong>{" "}
                  Vous pouvez vous opposer au traitement de vos données
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Droit à la limitation :
                  </strong>{" "}
                  Vous pouvez limiter le traitement de vos données
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Droit à la portabilité :
                  </strong>{" "}
                  Vous pouvez récupérer vos données dans un format structuré
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                Comment exercer vos droits ?
              </h3>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Pour exercer l'un de ces droits, contactez-nous par email à :
                <a
                  href="mailto:Benjamin77510be@gmail.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  {" "}
                  Benjamin77510be@gmail.com
                </a>
              </p>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Nous nous engageons à répondre à votre demande dans un délai d'
                <strong className="text-[var(--text)]">un mois maximum</strong>.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Vous disposez également du droit d'introduire une réclamation
                auprès de la
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  {" "}
                  CNIL
                </a>
                (Commission Nationale de l'Informatique et des Libertés).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                8. Sécurité des données
              </h2>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Benjamin Fontaine met en œuvre toutes les mesures techniques et
                organisationnelles appropriées pour garantir la sécurité de vos
                données personnelles et empêcher leur altération, leur perte ou
                leur accès non autorisé :
              </p>
              <ul className="space-y-1 ml-5 list-disc text-[var(--muted)]">
                <li>Hébergement sécurisé via HTTPS (certificat SSL)</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegarde régulière des données</li>
                <li>Mots de passe sécurisés et chiffrés</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                9. Cookies
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Ce site web{" "}
                <strong className="text-[var(--text)]">
                  n'utilise aucun cookie de suivi ou publicitaire
                </strong>
                .
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Seuls des cookies techniques strictement nécessaires au
                fonctionnement du site peuvent être utilisés (exemple :
                préférence de thème clair/sombre).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                10. Transfert de données hors UE
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Vos données ne font l'objet d'aucun transfert en dehors de
                l'Union Européenne, sauf dans le cadre de l'utilisation de
                services tiers conformes au RGPD (exemple : hébergeur Netlify
                avec garanties appropriées).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                11. Modifications de la politique
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Benjamin Fontaine se réserve le droit de modifier cette
                politique de confidentialité à tout moment. La date de dernière
                mise à jour est indiquée en bas de cette page.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Nous vous encourageons à consulter régulièrement cette page pour
                prendre connaissance des éventuelles modifications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                12. Contact
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Pour toute question concernant cette politique de
                confidentialité ou vos données personnelles, vous pouvez nous
                contacter :
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--text)]">Email :</strong>{" "}
                <a
                  href="mailto:Benjamin77510be@gmail.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  Benjamin77510be@gmail.com
                </a>
                <br />
                <strong className="text-[var(--text)]">Adresse :</strong>{" "}
                Benjamin Fontaine, Bellot, 77510 Seine-et-Marne, France
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-[var(--border)] text-center">
            <p className="text-sm text-[var(--muted)] mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/mentions-legales"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 bg-transparent text-[var(--accent)] border-[1.5px] border-[var(--accent)] rounded-xl font-semibold transition-all duration-200 hover:bg-[var(--accent)] hover:text-[var(--btn-fg)]"
              >
                Mentions légales
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 bg-[var(--accent)] text-[var(--btn-fg)] border border-[var(--accent)] rounded-xl font-semibold transition-all duration-200 hover:bg-[var(--accent-2)] hover:text-white"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
