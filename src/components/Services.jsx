import React from 'react';
import '../App.css';

const Services = () => {
  const services = [
    {
      icon: "🌐",
      title: "Site Vitrine",
      description: "Présentation professionnelle de votre activité avec un design moderne et responsive",
      features: [
        "Design sur mesure",
        "SEO Optimisé ",
        "Responsive mobile",
        "Formulaire de contact"
      ],
      price: "À partir de 800€",
      cta: "Demander un devis"
    },
    {
      icon: "🛒",
      title: "Site E-commerce",
      description: "Boutique en ligne complète pour vendre vos produits ou services",
      features: [
        "Paiement sécurisé",
        "Gestion des stocks",
        "Espace client",
        "Tableau de bord"
      ],
      price: "À partir de 2 500€",
      cta: "En savoir plus"
    },
    {
      icon: "🔧",
      title: "Maintenance & Support",
      description: "Assurer la pérennité et l'évolution de votre site web",
      features: [
        "Mises à jour régulières",
        "Sauvegarde automatique",
        "Support technique",
        "Évolutions sur demande"
      ],
      price: "Dès 80€/mois",
      cta: "Découvrir l'offre"
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-header">
          <h2>Mes Services</h2>
          <p className="services-subtitle">
            Des solutions web adaptées à vos besoins et votre budget
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={index} className="card service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-mark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <button
                  className="btn btn-sm"
                  onClick={() => window.location.href='/contact'}
                >
                  {service.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;