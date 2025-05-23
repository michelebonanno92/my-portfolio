import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa le immagini
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";

export function SectionProgetti() {
  const progetti = [
    {
      id: 1,
      titolo: "Boolbnb",
      descrizione:
        "Boolbnb una web app che permette ai visitatori di cercare appartamenti filtrandoli per via/città, distanza, servizi, stanze e letti. Gli utenti registrati accedono a una dashboard per gestire appartamenti (aggiungere, modificare, eliminare), consultare statistiche e messaggi, sponsorizzare le strutture per maggiore visibilità e filtrare i messaggi nel profilo. La sponsorizzazione è disponibile sia in fase di creazione che successivamente. Tecnologie usate: Front-end: Vue.js, Vue router, Bootstrap, SCSS, Axios, Braintree; Back-end: Laravel e MySQL.",
      stack: ["Node.js", "MySQL", "Bootstrap", "Vue", "Vue router", "Axios" , "Braintree", "Laravel", "SCSS","API Tom Tom"],
      images: [img1, img2, img3, img4], // Usa le immagini importate qui
      demoLink: "#",
      sourceLink: "#",
    },
  
  ];

  const [expanded, setExpanded] = useState({});

  const toggleDescription = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  

  return (
    <section id="progetti" className="progetti-container">
      <h2>Progetti</h2>
      <div className="progetti-grid">
        {progetti.map((progetto) => (
          <div key={progetto.id} className="progetto-card">
            <Slider {...sliderSettings} className="progetto-slider">
              {progetto.images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1} del progetto ${progetto.titolo}`}
                    className="progetto-image"
                  />
                </div>
              ))}
            </Slider>
            <div className="progetto-info">
                <h3>{progetto.titolo}</h3>
                <p>
                    {expanded[progetto.id]
                    ? progetto.descrizione
                    : `${progetto.descrizione.substring(0, 150)}.`}
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
      
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
