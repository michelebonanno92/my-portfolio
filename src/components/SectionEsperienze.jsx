import React from 'react';

export function SectionEsperienze() {
  const esperienze = [
    {
      id: 1,
      titolo: "Master Full Stack Web Developer presso Boolean",
      descrizioneBreve: "Corso intensivo di 700 ore, con lezioni teoriche e pratiche sulla programmazione front-end e back-end e DB, sviluppo di applicazioni web e mobile, gestione di progetti e sviluppo di team.",
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
      <h2>Competenze acquisite</h2>
    </section>
  );
}

