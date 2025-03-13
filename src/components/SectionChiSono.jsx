import React from 'react';
import myImage from '../assets/images/foto.png'; // Percorso relativo

export function SectionChiSono() {
  return (
    <section id="chisono">
        <div>
            <h2>Benvenuto! Sono Michele Bonanno...</h2>
            <p>
             Sono uno sviluppatore web appassionato di tecnologie e innovazione. Creo siti e applicazioni web con cura e dedizione, sempre alla ricerca di nuove sfide per crescere e offrire soluzioni di qualità.
             <br />
             Se cerchi un professionista determinato e pronto a trasformare idee in realtà, sei nel posto giusto!
            </p>
        </div>
        <div className='img-container'>
            <img src={myImage} alt="Michele Bonanno" />
        </div>
 
    </section>
  );

}


