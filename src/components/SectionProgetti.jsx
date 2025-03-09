import React from "react";

export function SectionProgetti() {
  const progetti = [
    {
      id: 1,
      titolo: "Project A",
      descrizione: "This is a project made to learn the latest languages by building an app.",
      stack: ["React", "Express", "Node"],
      img: "https://via.placeholder.com/300x200", // Sostituisci con l'URL dell'immagine del progetto
      demoLink: "#",
      sourceLink: "#",
    },

  ];

  return (
    <section className="progetti-container">
      <h2>Progetti</h2>
      <div className="progetti-grid">
        {progetti.map((progetto) => (
          <div key={progetto.id} className="progetto-card">
            <img src={progetto.img} alt={progetto.titolo} className="progetto-image" />
            <div className="progetto-info">
              <h3>{progetto.titolo}</h3>
              <p>{progetto.descrizione}</p>
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
