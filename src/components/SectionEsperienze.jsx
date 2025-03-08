import React from "react";

export function SectionEsperienze() {
  const competenze = [
    { id: 1, nome: "HTML5", icon: "https://img.icons8.com/color/96/html-5.png" },
    { id: 2, nome: "CSS/SCSS", icon: "https://img.icons8.com/color/96/css3.png" },
    { id: 3, nome: "Javascript", icon: "https://img.icons8.com/color/96/javascript.png" },
    { id: 4, nome: "Bootstrap", icon: "https://img.icons8.com/color/96/bootstrap.png" },
    { id: 5, nome: "Vue", icon: "https://img.icons8.com/color/96/vue-js.png" },
    { id: 6, nome: "Vite", icon: "https://vitejs.dev/logo.svg" },
    { id: 7, nome: "PHP", icon: "https://img.icons8.com/officel/96/php-logo.png" },
    { id: 8, nome: "Laravel", icon: "https://laravel.com/img/logomark.min.svg" },
    { id: 9, nome: "MySQL", icon: "https://img.icons8.com/color/96/mysql-logo.png" },
    { id: 10, nome: "Postman", icon: "https://img.icons8.com/dusk/96/postman-api.png" },
    { id: 11, nome: "Composer npm", icon: "https://img.icons8.com/color/96/npm.png" },
    { id: 12, nome: "Visual Studio Code", icon: "https://img.icons8.com/color/96/visual-studio-code-2019.png" },
    { id: 13, nome: "Git", icon: "https://img.icons8.com/color/96/git.png" },
    { id: 14, nome: "GitHub", icon: "https://img.icons8.com/ios-filled/96/github.png" },
    { id: 15, nome: "React", icon: "https://img.icons8.com/color/96/react-native.png" },
  ];

  const esperienze = [
    {
      id: 1,
      titolo: "Master Full Stack Web Developer presso Boolean",
      periodo: "Maggio 2024 - Dicembre 2024",
      descrizioneBreve: "Corso intensivo di 700 ore, con lezioni teoriche e pratiche sulla programmazione front-end e back-end e DB, sviluppo di applicazioni web e mobile, gestione di progetti e sviluppo di team.",
    },
  ];

  return (
    <section className="esperienze-container">
      <div className="competenze">
        <h2>Competenze Acquisite</h2>
        <div className="competenze-grid">
          {competenze.map((competenza) => (
            <div key={competenza.id} className="competenza-item">
              <img src={competenza.icon} alt={competenza.nome} />
              <p>{competenza.nome}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="esperienze">
        <h2>Esperienze</h2>
        <ul>
          {esperienze.map((esperienza) => (
            <li key={esperienza.id} className="esperienza-item">
              <h3>{esperienza.titolo}</h3>
              <p className="periodo">{esperienza.periodo}</p>
              <p>{esperienza.descrizioneBreve}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

