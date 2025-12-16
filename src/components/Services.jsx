import React from "react";
import "../App.css";

const Services = () => {
  const services = [
    {
      icon: "🌐",
      title: "Site Vitrine",
      description:
        "Présentation professionnelle de votre activité avec un design moderne et responsive",
      features: [
        "Design sur mesure",
        "SEO Optimisé",
        "Responsive mobile",
        "Formulaire de contact",
        "Hébergement inclus 1 an",
      ],
      price: "1 200€",
      priceDetail: "À partir de",
      cta: "Demander un devis",
      popular: false,
    },
    {
      icon: "🛒",
      title: "Site E-commerce",
      description:
        "Boutique en ligne complète pour vendre vos produits ou services",
      features: [
        "Paiement sécurisé (Stripe/PayPal)",
        "Gestion des stocks",
        "Espace client personnalisé",
        "Tableau de bord admin",
        "Formation à l'utilisation",
      ],
      price: "3 000€",
      priceDetail: "À partir de",
      cta: "En savoir plus",
      popular: true, // ← Mettre en avant
    },
    {
      icon: "🔧",
      title: "Maintenance & Support",
      description: "Assurer la pérennité et l'évolution de votre site web",
      features: [
        "Mises à jour régulières",
        "Sauvegarde automatique",
        "Support prioritaire 24/48h",
        "Évolutions sur demande",
        "Monitoring performances",
      ],
      price: "80€",
      priceDetail: "Dès",
      priceSuffix: "/mois",
      cta: "Découvrir l'offre",
      popular: false,
    },
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
            <article
              key={index}
              className={`service-card ${service.popular ? "service-popular" : ""}`}
              style={{ "--delay": `${index * 100}ms` }}
            >
              {/* Badge Popular */}
              {service.popular && (
                <div className="service-badge">
                  <span>⭐ Populaire</span>
                </div>
              )}

              {/* Icon */}
              <div className="service-icon-wrapper">
                <span className="service-icon">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="service-title">{service.title}</h3>

              {/* Description */}
              <p className="service-description">{service.description}</p>

              {/* Price */}
              <div className="service-price-box">
                <span className="price-detail">{service.priceDetail}</span>
                <span className="price-amount">{service.price}</span>
                {service.priceSuffix && (
                  <span className="price-suffix">{service.priceSuffix}</span>
                )}
              </div>

              {/* Features */}
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg
                      className="check-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`btn service-cta ${service.popular ? "btn-featured" : ""}`}
                onClick={() => (window.location.href = "/contact")}
              >
                {service.cta}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
