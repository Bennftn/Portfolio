import React from "react";

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
      popular: true,
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
    <section id="services" className="py-20 scroll-mt-[90px]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold font-display mb-3">
            Mes Services
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
            Des solutions web adaptées à vos besoins et votre budget
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(20px,3vw,28px)]">
          {services.map((service, index) => (
            <article
              key={index}
              className={`
                group relative flex flex-col p-8 lg:p-7
                bg-[var(--surface)] border rounded-2xl
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-[0_20px_40px_var(--glow)]
                animate-fadeInUp motion-reduce:animate-none
                ${
                  service.popular
                    ? "border-2 border-[var(--accent)] bg-gradient-to-br from-[color-mix(in_oklab,var(--accent)_5%,var(--surface))] to-[var(--surface)] hover:border-[var(--accent)] hover:shadow-[0_20px_50px_color-mix(in_oklab,var(--accent)_35%,transparent)]"
                    : "border-[var(--border)] hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--border))]"
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge Popular */}
              {service.popular && (
                <div className="absolute -top-3 right-5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-[var(--btn-fg)] px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_4px_12px_color-mix(in_oklab,var(--accent)_40%,transparent)]">
                  <span>⭐ Populaire</span>
                </div>
              )}

              {/* Icon Wrapper */}
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-gradient-to-br from-[color-mix(in_oklab,var(--accent)_15%,transparent)] to-[color-mix(in_oklab,var(--accent-2)_15%,transparent)] border border-[color-mix(in_oklab,var(--accent)_30%,var(--border))] rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-[5deg] group-hover:border-[var(--accent)]">
                <span className="text-4xl">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--muted)] leading-relaxed mb-6 text-[0.95rem]">
                {service.description}
              </p>

              {/* Price Box */}
              <div className="flex items-baseline gap-1.5 mb-6 p-4 bg-[color-mix(in_oklab,var(--accent)_8%,transparent)] border border-[color-mix(in_oklab,var(--accent)_20%,var(--border))] rounded-xl">
                <span className="text-sm text-[var(--muted)] font-medium">
                  {service.priceDetail}
                </span>
                <span className="text-3xl font-extrabold text-[var(--accent)] tracking-tight">
                  {service.price}
                </span>
                {service.priceSuffix && (
                  <span className="text-base text-[var(--muted)] font-medium">
                    {service.priceSuffix}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="list-none p-0 m-0 mb-7 flex-1 space-y-2.5">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[0.95rem] leading-normal"
                  >
                    <svg
                      className="flex-shrink-0 text-[var(--accent)] mt-0.5"
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
                className={`
                  w-full mt-auto flex items-center justify-center gap-2 py-3.5 px-5
                  font-semibold rounded-xl cursor-pointer
                  transition-all duration-300
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40
                  ${
                    service.popular
                      ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] border-[var(--accent)] text-[var(--btn-fg)] shadow-[0_4px_12px_color-mix(in_oklab,var(--accent)_30%,transparent)] hover:shadow-[0_6px_20px_color-mix(in_oklab,var(--accent)_40%,transparent)] hover:-translate-y-0.5"
                      : "bg-[var(--accent)] text-[var(--btn-fg)] border border-[color-mix(in_oklab,var(--accent-2)_30%,var(--accent)_70%)] hover:bg-[var(--accent-2)] hover:text-white hover:-translate-y-0.5"
                  }
                `}
                onClick={() => (window.location.href = "/contact")}
              >
                {service.cta}
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-1"
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