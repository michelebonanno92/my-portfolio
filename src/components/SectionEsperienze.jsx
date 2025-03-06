import React from 'react';

export function SectionEsperienze() {
  const esperienze = [
    {
      id: 1,
      titolo: "Corso Full Stack Developer",
      descrizioneBreve: "XYZ Academy, 2023",
      dettagli: "Corso intensivo su HTML, CSS, JavaScript, React, Node.js e database SQL.",
    },
    {
      id: 2,
      titolo: "Progetto personale - App web",
      descrizioneBreve: "2024",
      dettagli: "Sviluppo di un'app per la gestione dei task con React, Node.js e MongoDB.",
    },
  ];

  return (
    <section>
      <h2>Esperienze</h2>
      <ul>
        {esperienze.map((esperienza) => (
          <li key={esperienza.id}>
            <h3>{esperienza.titolo}</h3>
            <p>{esperienza.descrizioneBreve}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

