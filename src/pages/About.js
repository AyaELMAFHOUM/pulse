import React from 'react';

function About() {
  return (
    <div className="about">
      <div className="container">
        {/* Header Section */}
        <header className="text-center mb-5">
          <h1 className="display-4">À Propos d'Inetum</h1>
          <p className="lead">
            Un leader mondial des services et solutions digitales
          </p>
        </header>

        {/* History Section */}
        <section className="mb-5">
          <h2>Notre Histoire</h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                Inetum est une ESN agile, leader des services et solutions digitales,
                et un groupe international qui aide les entreprises et institutions
                à tirer le meilleur du digital flow.
              </p>
              <p>
                Dans un contexte de mouvement permanent, où les besoins et les usages
                inventent chaque jour de nouveaux flux, Inetum s'engage auprès de
                tous les acteurs pour innover, s'adapter continuellement et garder
                une longueur d'avance.
              </p>
            </div>
            <div className="col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title">Chiffres Clés</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>27 000+</strong> collaborateurs
                    </li>
                    <li className="mb-2">
                      <strong>26</strong> pays
                    </li>
                    <li className="mb-2">
                      <strong>2,2</strong> milliards d'euros de chiffre d'affaires
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-5">
          <h2 className="mb-4">Nos Valeurs</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Innovation</h4>
                  <p className="card-text">
                    Nous encourageons l'innovation et la créativité pour apporter
                    des solutions pertinentes à nos clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Excellence</h4>
                  <p className="card-text">
                    Nous visons l'excellence dans tous nos services et solutions
                    pour garantir la satisfaction de nos clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Engagement</h4>
                  <p className="card-text">
                    Nous nous engageons pleinement dans la réussite des projets
                    de nos clients et le développement de nos collaborateurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-light p-5 rounded">
          <h2 className="mb-4">Notre Mission</h2>
          <div className="row">
            <div className="col-12">
              <p className="lead">
                Accompagner nos clients, collaborateurs et partenaires dans leur
                transformation digitale pour créer de la valeur et assurer leur
                succès dans un monde en constante évolution.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About; 