import React from "react";

// Icônes SVG pour chaque service
const icons = {
  vitrine: (
    <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  ecommerce: (
    <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
  maintenance: (
    <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

const Services = () => {
  const services = [
    {
      iconKey: "vitrine",
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
      iconKey: "ecommerce",
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
      iconKey: "maintenance",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className={`
                group relative flex flex-col p-7
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
                <div className="absolute -top-3 right-5 flex items-center gap-1.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-[var(--btn-fg)] px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_4px_12px_color-mix(in_oklab,var(--accent)_40%,transparent)]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Populaire
                </div>
              )}

              {/* Icon Wrapper */}
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[color-mix(in_oklab,var(--accent)_15%,transparent)] to-[color-mix(in_oklab,var(--accent-2)_10%,transparent)] border border-[color-mix(in_oklab,var(--accent)_25%,var(--border))] rounded-2xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-[var(--accent)]">
                {icons[service.iconKey]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--muted)] leading-relaxed mb-5 text-sm">
                {service.description}
              </p>

              {/* Price Box */}
              <div className="flex items-baseline gap-1.5 mb-5 p-4 bg-[color-mix(in_oklab,var(--accent)_8%,transparent)] border border-[color-mix(in_oklab,var(--accent)_20%,var(--border))] rounded-xl">
                <span className="text-sm text-[var(--muted)] font-medium">
                  {service.priceDetail}
                </span>
                <span className="text-2xl font-extrabold text-[var(--accent)] tracking-tight">
                  {service.price}
                </span>
                {service.priceSuffix && (
                  <span className="text-sm text-[var(--muted)] font-medium">
                    {service.priceSuffix}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="list-none p-0 m-0 mb-6 flex-1 space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                  >
                    <svg
                      className="flex-shrink-0 text-[var(--accent)] mt-0.5"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[var(--muted)]">{feature}</span>
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
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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