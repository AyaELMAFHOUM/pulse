import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>À propos d'Inetum</h5>
            <p>
              Inetum est une ESN agile, une société de services et de solutions digitales, et un groupe international qui aide les entreprises et institutions à tirer le meilleur du digital flow.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Liens rapides</h5>
            <ul className="list-unstyled">
              <li><Link className="text-light" to="/">Accueil</Link></li>
              <li><Link className="text-light" to="/about">À propos</Link></li>
              <li><Link className="text-light" to="/services">Services</Link></li>
              <li><Link className="text-light" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: contact@inetum.com</li>
              <li>Téléphone: +33 (0)1 44 08 47 00</li>
              <li>Adresse: 145 Boulevard Victor Hugo, 93400 Saint-Ouen, France</li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Inetum. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 