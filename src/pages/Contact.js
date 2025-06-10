import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <div className="container">
        {/* Header */}
        <header className="text-center mb-5">
          <h1 className="display-4">Contactez-nous</h1>
          <p className="lead">
            Nous sommes là pour répondre à vos questions
          </p>
        </header>

        <div className="row">
          {/* Contact Information */}
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title mb-4">Nos Coordonnées</h3>
                <div className="mb-4">
                  <h5>Siège Social</h5>
                  <p>
                    145 Boulevard Victor Hugo<br />
                    93400 Saint-Ouen<br />
                    France
                  </p>
                </div>
                <div className="mb-4">
                  <h5>Téléphone</h5>
                  <p>+33 (0)1 44 08 47 00</p>
                </div>
                <div className="mb-4">
                  <h5>Email</h5>
                  <p>contact@inetum.com</p>
                </div>
                <div>
                  <h5>Horaires d'ouverture</h5>
                  <p>
                    Lundi - Vendredi<br />
                    9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4">Envoyez-nous un message</h3>
                {submitted ? (
                  <div className="alert alert-success">
                    Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Nom complet</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Sujet</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-5">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title mb-4">Notre Localisation</h3>
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.9989397557584!2d2.3306889!3d48.9067262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66eb6cc6e3f27%3A0x5c9f7b56001ce29f!2s145%20Bd%20Victor%20Hugo%2C%2093400%20Saint-Ouen!5e0!3m2!1sfr!2sfr!4v1648226735000!5m2!1sfr!2sfr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Inetum Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact; 