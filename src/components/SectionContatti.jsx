import React, { useState } from "react";

export function SectionContatti() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Grazie per averci contattato!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contatti" className="contatti-section">
      <div className="form-container">
        <h2>Contattami</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Inserisci il tuo nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Inserisci la tua email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Scrivi il tuo messaggio"
            >
            </textarea>
          </div>
          <button type="submit" className="submit-btn">Invia</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Social Network</h2>
        <a
          href="https://www.linkedin.com/in/michele-bonanno-9886a01a3/"
          className="contact-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
          <span>Linkedin</span>
        </a>
        <h2>Scopri i miei lavori su GitHub!</h2>
        <p>
            Su GitHub puoi trovare una selezione dei miei progetti più recenti. Dallo sviluppo di applicazioni web a progetti open source, ogni repository rappresenta una parte del mio viaggio nel mondo della tecnologia.

            Clicca sul link qui sotto per esplorare il mio profilo GitHub e dare un'occhiata al mio codice. Se hai domande o vuoi collaborare, non esitare a contattarmi!
        </p>
        <a
          href="https://github.com/michelebonanno92"
          className="contact-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/color/48/github.png" alt="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}
