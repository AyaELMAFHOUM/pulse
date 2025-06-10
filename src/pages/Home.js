import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="jumbotron bg-primary text-white text-center">
        <h1 className="display-4">Bienvenue chez Inetum</h1>
        <p className="lead">
          Votre partenaire dans la transformation digitale
        </p>
        <hr className="my-4 bg-white" />
        <p>
          Découvrez comment nous pouvons vous aider à réussir dans l'ère numérique
        </p>
        <Link className="btn btn-light btn-lg" to="/contact" role="button">
          Contactez-nous
        </Link>
      </div>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nos Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Conseil Digital</h5>
                  <p className="card-text">
                    Expertise en transformation digitale et stratégie numérique
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Solutions Cloud</h5>
                  <p className="card-text">
                    Services cloud innovants et solutions d'hébergement
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Développement</h5>
                  <p className="card-text">
                    Création d'applications web et mobiles sur mesure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Pourquoi Nous Choisir ?</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Expertise Reconnue</h4>
              <p>
                Plus de 27 000 collaborateurs dans 26 pays, au service de vos projets
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h4>Innovation Continue</h4>
              <p>
                Toujours à la pointe des dernières technologies et méthodologies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center">
        <div className="container">
          <h2>Prêt à Démarrer Votre Projet ?</h2>
          <p className="lead">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins
          </p>
          <Link className="btn btn-primary btn-lg" to="/contact">
            Commencer Maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 