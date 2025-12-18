import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";

export default function CGV() {
  const SITE_URL = "https://benjaminfontaine.com";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Conditions Générales de Vente - Benjamin Fontaine</title>
        <meta
          name="description"
          content="Conditions Générales de Vente des prestations de développement web de Benjamin Fontaine"
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${SITE_URL}/cgv`} />
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
            Conditions Générales de Vente
          </h1>

          <p className="text-lg text-[var(--muted)] leading-relaxed mb-10 pb-8 border-b border-[var(--border)]">
            Les présentes Conditions Générales de Vente (CGV) régissent les
            relations contractuelles entre Benjamin Fontaine, développeur web
            freelance, et ses clients pour toute prestation de développement
            web.
          </p>

          {/* Content */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 1 - Champ d'application
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Les présentes CGV s'appliquent à toutes les prestations de
                services proposées par
                <strong className="text-[var(--text)]">
                  {" "}
                  Benjamin Fontaine
                </strong>
                , micro-entrepreneur, immatriculé sous le numéro SIRET
                99255553100017.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Toute commande implique l'acceptation sans réserve des présentes
                CGV qui prévalent sur tout autre document du client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 2 - Prestations proposées
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Benjamin Fontaine propose les services suivants :
              </p>
              <ul className="space-y-2 mb-4 ml-5 list-disc text-[var(--muted)]">
                <li>
                  <strong className="text-[var(--text)]">
                    Création de sites vitrines
                  </strong>{" "}
                  : Sites web professionnels pour présenter votre activité
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Développement web sur-mesure
                  </strong>{" "}
                  : Applications web React, interfaces personnalisées
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Refonte de sites existants
                  </strong>{" "}
                  : Modernisation et optimisation de sites web
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Optimisation SEO
                  </strong>{" "}
                  : Amélioration du référencement naturel
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Maintenance et support
                  </strong>{" "}
                  : Mises à jour, corrections, évolutions
                </li>
              </ul>
              <p className="text-[var(--muted)] leading-relaxed">
                Chaque prestation fait l'objet d'un{" "}
                <strong className="text-[var(--text)]">
                  devis détaillé et personnalisé
                </strong>
                , précisant le périmètre exact des travaux, les délais et le
                prix.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 3 - Devis et commande
              </h2>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                3.1. Devis
              </h3>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Tout devis est{" "}
                <strong className="text-[var(--text)]">
                  gratuit et sans engagement
                </strong>
                . Il est valable pendant{" "}
                <strong className="text-[var(--text)]">30 jours</strong>à
                compter de sa date d'émission.
              </p>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Le devis détaille précisément :
              </p>
              <ul className="space-y-1 mb-4 ml-5 list-disc text-[var(--muted)]">
                <li>La description des prestations</li>
                <li>Le prix total TTC</li>
                <li>Les délais de réalisation estimés</li>
                <li>Les modalités de paiement</li>
                <li>Les livrables attendus</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                3.2. Commande
              </h3>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                La commande est considérée comme ferme et définitive après :
              </p>
              <ul className="space-y-1 mb-3 ml-5 list-disc text-[var(--muted)]">
                <li>Signature du devis par le client</li>
                <li>Réception de l'acompte (si prévu)</li>
              </ul>
              <p className="text-[var(--muted)] leading-relaxed">
                Toute commande ferme entraîne l'acceptation des présentes CGV.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 4 - Tarifs
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Les prix sont indiqués en{" "}
                <strong className="text-[var(--text)]">
                  euros TTC (Toutes Taxes Comprises)
                </strong>
                .
              </p>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                En tant que micro-entrepreneur, Benjamin Fontaine bénéficie de
                la franchise en base de TVA (article 293 B du CGI). Les factures
                ne comportent donc pas de TVA.
              </p>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                <strong className="text-[var(--text)]">
                  Tarifs indicatifs :
                </strong>
              </p>
              <ul className="space-y-1 mb-4 ml-5 list-disc text-[var(--muted)]">
                <li>Site vitrine : À partir de 1 200€</li>
                <li>Site e-commerce : À partir de 3 000€</li>
                <li>Maintenance mensuelle : Dès 80€/mois</li>
                <li>Refonte de site : Sur devis</li>
              </ul>
              <p className="text-[var(--muted)] leading-relaxed">
                Les tarifs sont susceptibles d'être révisés à tout moment, mais
                le prix indiqué dans le devis signé reste garanti pour la durée
                du projet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 5 - Modalités de paiement
              </h2>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                5.1. Échéancier standard
              </h3>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Sauf mention contraire dans le devis, les paiements s'effectuent
                selon l'échéancier suivant :
              </p>
              <ul className="space-y-1 mb-3 ml-5 list-disc text-[var(--muted)]">
                <li>
                  <strong className="text-[var(--text)]">Acompte de 30%</strong>{" "}
                  à la signature du devis (pour lancer le projet)
                </li>
                <li>
                  <strong className="text-[var(--text)]">Solde de 70%</strong> à
                  la livraison finale du projet
                </li>
              </ul>
              <p className="text-[var(--muted)] mb-4 leading-relaxed">
                Pour les projets de grande envergure (plus de 5 000€), un
                échéancier personnalisé peut être défini.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                5.2. Modes de paiement acceptés
              </h3>
              <ul className="space-y-1 mb-4 ml-5 list-disc text-[var(--muted)]">
                <li>Virement bancaire (IBAN fourni sur facture)</li>
                <li>Chèque (à l'ordre de Benjamin Fontaine)</li>
                <li>Carte bancaire via lien de paiement sécurisé (Stripe)</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                5.3. Délais de paiement
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Les factures sont{" "}
                <strong className="text-[var(--text)]">
                  payables sous 15 jours
                </strong>{" "}
                à compter de leur date d'émission, sauf mention contraire sur la
                facture.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 6 - Retard de paiement
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                En cas de retard de paiement, et après mise en demeure restée
                sans effet pendant 8 jours, les sommes dues porteront intérêt au
                taux légal en vigueur.
              </p>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Une indemnité forfaitaire de{" "}
                <strong className="text-[var(--text)]">40€</strong> pour frais
                de recouvrement sera également due (article L.441-6 du Code de
                commerce).
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                En outre, Benjamin Fontaine se réserve le droit de suspendre
                toute prestation en cours jusqu'au règlement intégral des sommes
                dues.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 7 - Délais de réalisation
              </h2>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Les délais de réalisation sont indiqués à titre{" "}
                <strong className="text-[var(--text)]">indicatif</strong> dans
                le devis et peuvent varier en fonction de :
              </p>
              <ul className="space-y-1 mb-3 ml-5 list-disc text-[var(--muted)]">
                <li>La complexité du projet</li>
                <li>
                  La fourniture des contenus par le client (textes, images,
                  logos)
                </li>
                <li>
                  Le nombre d'allers-retours et de modifications demandées
                </li>
                <li>La réactivité du client pour les validations</li>
              </ul>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Un planning détaillé est établi en début de projet avec des
                jalons de validation.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Tout retard imputable au client (fourniture de contenus,
                validation tardive) entraîne un décalage proportionnel du
                planning.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 8 - Obligations du client
              </h2>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Le client s'engage à :
              </p>
              <ul className="space-y-1 ml-5 list-disc text-[var(--muted)]">
                <li>
                  Fournir tous les éléments nécessaires à la réalisation du
                  projet (contenus, images, accès)
                </li>
                <li>Respecter les délais de validation prévus</li>
                <li>
                  S'assurer de détenir les droits d'utilisation des contenus
                  fournis (textes, images, logos)
                </li>
                <li>Régler les factures dans les délais convenus</li>
                <li>
                  Informer Benjamin Fontaine de toute modification du cahier des
                  charges
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 9 - Propriété intellectuelle
              </h2>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                9.1. Transfert des droits
              </h3>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Après{" "}
                <strong className="text-[var(--text)]">
                  paiement intégral
                </strong>{" "}
                des prestations, le client devient propriétaire :
              </p>
              <ul className="space-y-1 mb-4 ml-5 list-disc text-[var(--muted)]">
                <li>Du code source du site web développé</li>
                <li>Du design graphique personnalisé</li>
                <li>Des éléments créés spécifiquement pour le projet</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                9.2. Droits conservés par le prestataire
              </h3>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Benjamin Fontaine conserve le droit :
              </p>
              <ul className="space-y-1 mb-4 ml-5 list-disc text-[var(--muted)]">
                <li>D'utiliser le projet dans son portfolio professionnel</li>
                <li>
                  De mentionner le projet comme référence client (sauf demande
                  contraire explicite)
                </li>
                <li>
                  De réutiliser les compétences et méthodologies développées
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                9.3. Éléments tiers
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Les bibliothèques, frameworks et composants open-source utilisés
                (React, etc.) restent soumis à leurs licences respectives.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 10 - Garantie et maintenance
              </h2>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                10.1. Garantie de bon fonctionnement
              </h3>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Benjamin Fontaine garantit le bon fonctionnement du site livré
                pendant
                <strong className="text-[var(--text)]"> 30 jours</strong>{" "}
                suivant la mise en ligne.
              </p>
              <p className="text-[var(--muted)] mb-4 leading-relaxed">
                Durant cette période, les bugs et dysfonctionnements constatés
                seront corrigés
                <strong className="text-[var(--text)]">
                  {" "}
                  gratuitement
                </strong>{" "}
                dans un délai raisonnable.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                10.2. Maintenance
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Au-delà de la période de garantie, la maintenance (mises à jour,
                corrections, évolutions) fait l'objet d'un{" "}
                <strong className="text-[var(--text)]">
                  contrat de maintenance séparé
                </strong>
                , facturé mensuellement ou au forfait.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 11 - Modifications et évolutions
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Toute demande de modification ou d'ajout de fonctionnalité{" "}
                <strong className="text-[var(--text)]">
                  non prévue au devis initial
                </strong>
                fera l'objet d'un devis complémentaire.
              </p>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                <strong className="text-[var(--text)]">
                  Aller-retours inclus :
                </strong>{" "}
                2 à 3 rounds de modifications (selon devis)
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Au-delà, chaque modification supplémentaire sera facturée au
                taux horaire de{" "}
                <strong className="text-[var(--text)]">50€/heure</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 12 - Annulation et résiliation
              </h2>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                12.1. Annulation par le client
              </h3>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                En cas d'annulation du projet par le client après signature du
                devis :
              </p>
              <ul className="space-y-1 mb-4 ml-5 list-disc text-[var(--muted)]">
                <li>
                  <strong className="text-[var(--text)]">
                    Avant le début des travaux :
                  </strong>{" "}
                  L'acompte reste acquis à titre de dédommagement
                </li>
                <li>
                  <strong className="text-[var(--text)]">
                    Après le début des travaux :
                  </strong>{" "}
                  Le client règle les prestations réalisées jusqu'à la date
                  d'annulation (prorata temporis)
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                12.2. Annulation par le prestataire
              </h3>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Benjamin Fontaine se réserve le droit d'annuler un projet en cas
                de :
              </p>
              <ul className="space-y-1 mb-3 ml-5 list-disc text-[var(--muted)]">
                <li>Non-paiement de l'acompte</li>
                <li>
                  Non-fourniture des éléments nécessaires par le client après
                  relance
                </li>
                <li>
                  Modification substantielle du cahier des charges sans accord
                </li>
              </ul>
              <p className="text-[var(--muted)] leading-relaxed">
                Dans ce cas, seules les prestations déjà réalisées seront
                facturées.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 13 - Responsabilité
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Benjamin Fontaine met tout en œuvre pour livrer un site web
                fonctionnel, performant et sécurisé. Toutefois, sa
                responsabilité est limitée aux prestations directement fournies.
              </p>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                Benjamin Fontaine ne peut être tenu responsable :
              </p>
              <ul className="space-y-1 ml-5 list-disc text-[var(--muted)]">
                <li>
                  Des contenus fournis par le client (textes, images, légalité)
                </li>
                <li>De la qualité de l'hébergement choisi par le client</li>
                <li>
                  Des attaques informatiques (piratage, virus) après livraison
                </li>
                <li>Des mises à jour non effectuées par le client</li>
                <li>
                  De la perte de données due à une mauvaise manipulation du
                  client
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 14 - Force majeure
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Benjamin Fontaine ne pourra être tenu responsable en cas de
                force majeure ou d'événement imprévisible empêchant la bonne
                exécution du contrat (maladie grave, catastrophe naturelle,
                etc.).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 15 - Confidentialité
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                Benjamin Fontaine s'engage à ne pas divulguer les informations
                confidentielles communiquées par le client dans le cadre du
                projet.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Cette obligation de confidentialité reste valable même après la
                fin de la collaboration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 16 - Règlement des litiges
              </h2>
              <p className="text-[var(--muted)] mb-3 leading-relaxed">
                En cas de litige, les parties s'engagent à rechercher une
                solution amiable avant toute action judiciaire.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                À défaut d'accord amiable, le litige sera porté devant les
                tribunaux compétents du ressort de{" "}
                <strong className="text-[var(--text)]">
                  Meaux (Seine-et-Marne)
                </strong>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 17 - Loi applicable
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Les présentes CGV sont régies par le{" "}
                <strong className="text-[var(--text)]">droit français</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 18 - Modifications des CGV
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Benjamin Fontaine se réserve le droit de modifier les présentes
                CGV à tout moment. Les CGV applicables sont celles en vigueur à
                la date de signature du devis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--text)]">
                Article 19 - Acceptation des CGV
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                La signature du devis vaut acceptation pleine et entière des
                présentes Conditions Générales de Vente.
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
                to="/confidentialite"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 bg-transparent text-[var(--accent)] border-[1.5px] border-[var(--accent)] rounded-xl font-semibold transition-all duration-200 hover:bg-[var(--accent)] hover:text-[var(--btn-fg)]"
              >
                Confidentialité
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
