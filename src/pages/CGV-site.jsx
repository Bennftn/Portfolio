import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";

export default function CGV() {
  const SITE_URL = "https://benjaminfontaine.com";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Conditions Générales de Vente - Benjamin Fontaine</title>
        <meta name="description" content="Conditions Générales de Vente des prestations de développement web de Benjamin Fontaine" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${SITE_URL}/cgv`} />
      </Helmet>

      <section className="legal-page section">
        <div className="container legal-container">
          <Link to="/" className="back-link">← Retour à l'accueil</Link>
          
          <h1>Conditions Générales de Vente</h1>
          
          <p className="lead">
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
            entre Benjamin Fontaine, développeur web freelance, et ses clients pour toute prestation 
            de développement web.
          </p>

          <div className="legal-content">
            
            <section className="legal-section">
              <h2>Article 1 - Champ d'application</h2>
              <p>
                Les présentes CGV s'appliquent à toutes les prestations de services proposées par 
                <strong> Benjamin Fontaine</strong>, micro-entrepreneur, immatriculé sous le numéro SIRET 
                99255553100017.
              </p>
              <p>
                Toute commande implique l'acceptation sans réserve des présentes CGV qui prévalent 
                sur tout autre document du client.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 2 - Prestations proposées</h2>
              <p>Benjamin Fontaine propose les services suivants :</p>
              <ul>
                <li><strong>Création de sites vitrines</strong> : Sites web professionnels pour présenter votre activité</li>
                <li><strong>Développement web sur-mesure</strong> : Applications web React, interfaces personnalisées</li>
                <li><strong>Refonte de sites existants</strong> : Modernisation et optimisation de sites web</li>
                <li><strong>Optimisation SEO</strong> : Amélioration du référencement naturel</li>
                <li><strong>Maintenance et support</strong> : Mises à jour, corrections, évolutions</li>
              </ul>
              <p>
                Chaque prestation fait l'objet d'un <strong>devis détaillé et personnalisé</strong>, 
                précisant le périmètre exact des travaux, les délais et le prix.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 3 - Devis et commande</h2>
              
              <h3>3.1. Devis</h3>
              <p>
                Tout devis est <strong>gratuit et sans engagement</strong>. Il est valable pendant <strong>30 jours</strong> 
                à compter de sa date d'émission.
              </p>
              <p>
                Le devis détaille précisément :
              </p>
              <ul>
                <li>La description des prestations</li>
                <li>Le prix total TTC</li>
                <li>Les délais de réalisation estimés</li>
                <li>Les modalités de paiement</li>
                <li>Les livrables attendus</li>
              </ul>

              <h3>3.2. Commande</h3>
              <p>
                La commande est considérée comme ferme et définitive après :
              </p>
              <ul>
                <li>Signature du devis par le client</li>
                <li>Réception de l'acompte (si prévu)</li>
              </ul>
              <p>
                Toute commande ferme entraîne l'acceptation des présentes CGV.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 4 - Tarifs</h2>
              <p>
                Les prix sont indiqués en <strong>euros TTC (Toutes Taxes Comprises)</strong>.
              </p>
              <p>
                En tant que micro-entrepreneur, Benjamin Fontaine bénéficie de la franchise en base de TVA 
                (article 293 B du CGI). Les factures ne comportent donc pas de TVA.
              </p>
              <p>
                <strong>Tarifs indicatifs :</strong>
              </p>
              <ul>
                <li>Site vitrine : À partir de 800€</li>
                <li>Site e-commerce : À partir de 2 500€</li>
                <li>Maintenance mensuelle : Dès 80€/mois</li>
                <li>Refonte de site : Sur devis</li>
              </ul>
              <p>
                Les tarifs sont susceptibles d'être révisés à tout moment, mais le prix indiqué 
                dans le devis signé reste garanti pour la durée du projet.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 5 - Modalités de paiement</h2>
              
              <h3>5.1. Échéancier standard</h3>
              <p>Sauf mention contraire dans le devis, les paiements s'effectuent selon l'échéancier suivant :</p>
              <ul>
                <li><strong>Acompte de 30%</strong> à la signature du devis (pour lancer le projet)</li>
                <li><strong>Solde de 70%</strong> à la livraison finale du projet</li>
              </ul>
              <p>
                Pour les projets de grande envergure (plus de 5 000€), un échéancier personnalisé peut être défini.
              </p>

              <h3>5.2. Modes de paiement acceptés</h3>
              <ul>
                <li>Virement bancaire (IBAN fourni sur facture)</li>
                <li>Chèque (à l'ordre de Benjamin Fontaine)</li>
                <li>Carte bancaire via lien de paiement sécurisé (Stripe)</li>
              </ul>

              <h3>5.3. Délais de paiement</h3>
              <p>
                Les factures sont <strong>payables sous 15 jours</strong> à compter de leur date d'émission, 
                sauf mention contraire sur la facture.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 6 - Retard de paiement</h2>
              <p>
                En cas de retard de paiement, et après mise en demeure restée sans effet pendant 8 jours, 
                les sommes dues porteront intérêt au taux légal en vigueur.
              </p>
              <p>
                Une indemnité forfaitaire de <strong>40€</strong> pour frais de recouvrement sera également due 
                (article L.441-6 du Code de commerce).
              </p>
              <p>
                En outre, Benjamin Fontaine se réserve le droit de suspendre toute prestation en cours 
                jusqu'au règlement intégral des sommes dues.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 7 - Délais de réalisation</h2>
              <p>
                Les délais de réalisation sont indiqués à titre <strong>indicatif</strong> dans le devis 
                et peuvent varier en fonction de :
              </p>
              <ul>
                <li>La complexité du projet</li>
                <li>La fourniture des contenus par le client (textes, images, logos)</li>
                <li>Le nombre d'allers-retours et de modifications demandées</li>
                <li>La réactivité du client pour les validations</li>
              </ul>
              <p>
                Un planning détaillé est établi en début de projet avec des jalons de validation.
              </p>
              <p>
                Tout retard imputable au client (fourniture de contenus, validation tardive) 
                entraîne un décalage proportionnel du planning.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 8 - Obligations du client</h2>
              <p>Le client s'engage à :</p>
              <ul>
                <li>Fournir tous les éléments nécessaires à la réalisation du projet (contenus, images, accès)</li>
                <li>Respecter les délais de validation prévus</li>
                <li>S'assurer de détenir les droits d'utilisation des contenus fournis (textes, images, logos)</li>
                <li>Régler les factures dans les délais convenus</li>
                <li>Informer Benjamin Fontaine de toute modification du cahier des charges</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>Article 9 - Propriété intellectuelle</h2>
              
              <h3>9.1. Transfert des droits</h3>
              <p>
                Après <strong>paiement intégral</strong> des prestations, le client devient propriétaire :
              </p>
              <ul>
                <li>Du code source du site web développé</li>
                <li>Du design graphique personnalisé</li>
                <li>Des éléments créés spécifiquement pour le projet</li>
              </ul>

              <h3>9.2. Droits conservés par le prestataire</h3>
              <p>
                Benjamin Fontaine conserve le droit :
              </p>
              <ul>
                <li>D'utiliser le projet dans son portfolio professionnel</li>
                <li>De mentionner le projet comme référence client (sauf demande contraire explicite)</li>
                <li>De réutiliser les compétences et méthodologies développées</li>
              </ul>

              <h3>9.3. Éléments tiers</h3>
              <p>
                Les bibliothèques, frameworks et composants open-source utilisés (React, etc.) 
                restent soumis à leurs licences respectives.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 10 - Garantie et maintenance</h2>
              
              <h3>10.1. Garantie de bon fonctionnement</h3>
              <p>
                Benjamin Fontaine garantit le bon fonctionnement du site livré pendant 
                <strong> 30 jours</strong> suivant la mise en ligne.
              </p>
              <p>
                Durant cette période, les bugs et dysfonctionnements constatés seront corrigés 
                <strong> gratuitement</strong> dans un délai raisonnable.
              </p>

              <h3>10.2. Maintenance</h3>
              <p>
                Au-delà de la période de garantie, la maintenance (mises à jour, corrections, évolutions) 
                fait l'objet d'un <strong>contrat de maintenance séparé</strong>, facturé mensuellement 
                ou au forfait.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 11 - Modifications et évolutions</h2>
              <p>
                Toute demande de modification ou d'ajout de fonctionnalité <strong>non prévue au devis initial</strong> 
                fera l'objet d'un devis complémentaire.
              </p>
              <p>
                <strong>Aller-retours inclus :</strong> 2 à 3 rounds de modifications (selon devis)
              </p>
              <p>
                Au-delà, chaque modification supplémentaire sera facturée au taux horaire de <strong>50€/heure</strong>.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 12 - Annulation et résiliation</h2>
              
              <h3>12.1. Annulation par le client</h3>
              <p>
                En cas d'annulation du projet par le client après signature du devis :
              </p>
              <ul>
                <li><strong>Avant le début des travaux :</strong> L'acompte reste acquis à titre de dédommagement</li>
                <li><strong>Après le début des travaux :</strong> Le client règle les prestations réalisées 
                  jusqu'à la date d'annulation (prorata temporis)</li>
              </ul>

              <h3>12.2. Annulation par le prestataire</h3>
              <p>
                Benjamin Fontaine se réserve le droit d'annuler un projet en cas de :
              </p>
              <ul>
                <li>Non-paiement de l'acompte</li>
                <li>Non-fourniture des éléments nécessaires par le client après relance</li>
                <li>Modification substantielle du cahier des charges sans accord</li>
              </ul>
              <p>
                Dans ce cas, seules les prestations déjà réalisées seront facturées.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 13 - Responsabilité</h2>
              <p>
                Benjamin Fontaine met tout en œuvre pour livrer un site web fonctionnel, performant et sécurisé. 
                Toutefois, sa responsabilité est limitée aux prestations directement fournies.
              </p>
              <p>
                Benjamin Fontaine ne peut être tenu responsable :
              </p>
              <ul>
                <li>Des contenus fournis par le client (textes, images, légalité)</li>
                <li>De la qualité de l'hébergement choisi par le client</li>
                <li>Des attaques informatiques (piratage, virus) après livraison</li>
                <li>Des mises à jour non effectuées par le client</li>
                <li>De la perte de données due à une mauvaise manipulation du client</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>Article 14 - Force majeure</h2>
              <p>
                Benjamin Fontaine ne pourra être tenu responsable en cas de force majeure ou d'événement 
                imprévisible empêchant la bonne exécution du contrat (maladie grave, catastrophe naturelle, etc.).
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 15 - Confidentialité</h2>
              <p>
                Benjamin Fontaine s'engage à ne pas divulguer les informations confidentielles 
                communiquées par le client dans le cadre du projet.
              </p>
              <p>
                Cette obligation de confidentialité reste valable même après la fin de la collaboration.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 16 - Règlement des litiges</h2>
              <p>
                En cas de litige, les parties s'engagent à rechercher une solution amiable avant 
                toute action judiciaire.
              </p>
              <p>
                À défaut d'accord amiable, le litige sera porté devant les tribunaux compétents du 
                ressort de <strong>Meaux (Seine-et-Marne)</strong>.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 17 - Loi applicable</h2>
              <p>
                Les présentes CGV sont régies par le <strong>droit français</strong>.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 18 - Modifications des CGV</h2>
              <p>
                Benjamin Fontaine se réserve le droit de modifier les présentes CGV à tout moment. 
                Les CGV applicables sont celles en vigueur à la date de signature du devis.
              </p>
            </section>

            <section className="legal-section">
              <h2>Article 19 - Acceptation des CGV</h2>
              <p>
                La signature du devis vaut acceptation pleine et entière des présentes Conditions Générales de Vente.
              </p>
            </section>

          </div>

          <div className="legal-footer">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            <div className="legal-footer-actions">
              <Link to="/mentions-legales" className="btn btn-outline">Mentions légales</Link>
              <Link to="/confidentialite" className="btn btn-outline">Confidentialité</Link>
              <Link to="/" className="btn">Retour à l'accueil</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}