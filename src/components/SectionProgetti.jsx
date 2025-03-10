import React, { useState } from "react";

export function SectionProgetti() {
  const progetti = [
    {
      id: 1,
      titolo: "Boolbnb",
      descrizione:
        "Boolbnb una web app che permette ai visitatori di cercare appartamenti filtrandoli per via/città, distanza, servizi, stanze e letti. Gli utenti registrati accedono a una dashboard per gestire appartamenti (aggiungere, modificare, eliminare), consultare statistiche e messaggi, sponsorizzare le strutture per maggiore visibilità e filtrare i messaggi nel profilo. La sponsorizzazione è disponibile sia in fase di creazione che successivamente. Tecnologie usate: Front-end: Vue.js, Vue router, Bootstrap, SCSS, Axios, Braintree; Back-end: Laravel e MySQL. Caratteristiche: gestione login/registrazione/CRUD via API, design responsive, rotte protette, sistema di pagamento test con Braintree, geolocalizzazione tramite API TomTom, upload immagini dal front-end e validazione client-side. Laravel gestisce database, API CRUD, validazione back-end e protezione tramite Middleware.",
      stack: ["React", "Express", "Node"],
      img: "https://via.placeholder.com/300x200",
      demoLink: "#",
      sourceLink: "#",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleDescription = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id], // Cambia lo stato per il progetto con l'ID specifico
    }));
  };

  return (
    <section className="progetti-container">
      <h2>Progetti</h2>
      <div className="progetti-grid">
        {progetti.map((progetto) => (
          <div key={progetto.id} className="progetto-card">
            <img
              src={progetto.img}
              alt={progetto.titolo}
              className="progetto-image"
            />
            <div className="progetto-info">
              <h3>{progetto.titolo}</h3>
              <p>
                {expanded[progetto.id]
                  ? progetto.descrizione
                  : `${progetto.descrizione.substring(0, 150)}...`}
                <button
                  onClick={() => toggleDescription(progetto.id)}
                  className="toggle-btn"
                >
                  {expanded[progetto.id] ? "Leggi di meno" : "Leggi di più"}
                </button>
              </p>
              <div className="progetto-stack">
                {progetto.stack.map((tech, index) => (
                  <span key={index} className="stack-item">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="progetto-links">
                <a href={progetto.demoLink} className="progetto-btn">
                  Demo
                </a>
                <a href={progetto.sourceLink} className="progetto-btn">
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

