import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      title: 'Conseil Digital',
      description: 'Accompagnement stratégique pour votre transformation numérique',
      features: [
        'Audit digital',
        'Stratégie de transformation',
        'Gouvernance des données',
        'Change management'
      ]
    },
    {
      title: 'Solutions Cloud',
      description: 'Services cloud innovants et solutions d\'hébergement',
      features: [
        'Migration cloud',
        'Cloud hybride',
        'DevOps',
        'Sécurité cloud'
      ]
    },
    {
      title: 'Développement',
      description: 'Création d\'applications sur mesure',
      features: [
        'Applications web',
        'Applications mobiles',
        'APIs',
        'Microservices'
      ]
    },
    {
      title: 'Intelligence Artificielle',
      description: 'Solutions IA pour optimiser vos processus',
      features: [
        'Machine Learning',
        'Deep Learning',
        'Analyse prédictive',
        'Automatisation'
      ]
    }
  ];

  return (
    <div className="services">
      <div className="container">
        {/* Header */}
        <header className="text-center mb-5">
          <h1 className="display-4">Nos Services</h1>
          <p className="lead">
            Des solutions innovantes pour votre transformation digitale
          </p>
        </header>

        {/* Services Grid */}
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title text-primary">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                  <ul className="list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Section */}
        <section className="my-5">
          <h2 className="text-center mb-4">Notre Méthodologie</h2>
          <div className="row">
            <div className="col-md-3 text-center mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="h5">1. Analyse</h4>
                  <p>Compréhension approfondie de vos besoins</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="h5">2. Conception</h4>
                  <p>Élaboration de solutions sur mesure</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="h5">3. Réalisation</h4>
                  <p>Mise en œuvre agile des solutions</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="h5">4. Support</h4>
                  <p>Accompagnement continu et évolution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-5">
          <h2>Besoin d'en savoir plus ?</h2>
          <p className="lead mb-4">
            Nos experts sont là pour vous accompagner dans votre projet
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contactez-nous
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Services; 