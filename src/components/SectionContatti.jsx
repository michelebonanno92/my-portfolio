import React from 'react';  
// import './SectionContatti.css'; // Importiamo il file CSS per lo styling  


export function SectionContatti() {
// export const SectionContatti = () => {
    return (  
        <section id='contatti' className="contatti-section">  
            <h2>Contatti</h2>    
            <div className="contact-info">  
                <a href="mailto:mikelebon7@gmail.com" className="contact-item">  
                    <img src="path/to/email-icon.png" alt="Email" />
                    <span>mikelebon7@gmail.com</span>  
                </a>  
                <a href="https://www.linkedin.com/in/michele-bonanno-9886a01a3/" className="contact-item" target="_blank" rel="noopener noreferrer">  
                    <img src="path/to/linkedin-icon.png" alt="LinkedIn" />
                    <span>linkedin.com/MicheleBonanno</span>  
                </a>  
                <a href="https://github.com/michelebonanno92" className="contact-item" target="_blank" rel="noopener noreferrer">  
                    <img src="path/to/github-icon.png" alt="GitHub" />
                    <span>github.com/MicheleBonanno</span>  
                </a>  
            </div>  
        </section>  
    );  
};  

// export default SectionContatti;  