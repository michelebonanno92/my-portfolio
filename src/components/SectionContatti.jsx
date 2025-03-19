import React from 'react';  
// import './SectionContatti.css'; // Importiamo il file CSS per lo styling  


export function SectionContatti() {
// export const SectionContatti = () => {
    return (  
        <section id='contatti' className="contatti-section">  
            <div className="contact-info"> 
                <h2>Contatti</h2> 
                <div className="contact-item">  
                    <img src="https://img.icons8.com/color/48/phone.png" alt="Email" />
                    <span>3884791600</span>  
                </div>
                <div className="contact-item">  
                    <img src="https://img.icons8.com/color/48/email.png"alt="Email" />
                    <span>mikelebon7@gmail.com</span>  
                </div>  
                <a href="https://www.linkedin.com/in/michele-bonanno-9886a01a3/" className="contact-item" target="_blank" rel="noopener noreferrer">  
                    <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
                    <span>Linkedin</span>  
                </a>  
                <a href="https://github.com/michelebonanno92" className="contact-item" target="_blank" rel="noopener noreferrer">  
                    <img src="https://img.icons8.com/color/48/github.png" alt="GitHub" />
                    <span>GitHub</span>  
                </a>  
            </div>  
        </section>  
    );  
};  

// export default SectionContatti;  