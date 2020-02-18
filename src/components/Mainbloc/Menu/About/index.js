import React from 'react';
import './about.scss';

const About = () => {
    return (
      <div id="about">
        <div className="section-title">
          <div data-aos="fade-right">À propos</div>
          <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
        </div>
        <div className="content">
          <div className="text">
            Découvrez mon parcours professionnel et d'autres informations à mon sujet
          </div>
          <div className="container about-container animated-border" data-aos="fade-left" data-aos-delay="500">
            <div className="item" >
              <h2>Carrière professionnelle</h2>
              <h3>Etudes en développement-web</h3>
              <p>Parlons de l'école O'Clock.
                C'est une école spécialisée dans le développement web, proposant une formation professionnalisante avec une particularité...Tout se passe en téléprésentiel !
                J'ai la chance de suivre ces 5 mois intenses d'entrainement, avec une spécialisation en React, puis Symfony très bientôt.
              </p>
              <h3>Développeur junior</h3>
              <p>A la suite de cette formation, je suis basé actuellement dans la région Hauts-de-France, mais prêt à bouger sur tout le territoire 
                pour mon premier emploi en tant que développeur junior. Pour cette première expérience professionnelle, je suis plus que jamais désireux de monter en aptitudes et expérience.
                Très motivé et enthousiaste, je mettrai à disposition mes compétences pour transformer une idée en solution numérique. </p>
            </div>

            <div className="item" >
              <h2>Passions</h2>
              <h3>Aventure</h3>
              <p>Le sport et les activités outdoor prennent une place importante dans ma vie, en particulier le vélo. <br />
                A 24 ans maintenant, j'ai eu la chance de vivre dans plusieurs pays ces dernières années ( Norvège, Australie, Japon ), 
                avec une activité saisonnière, principalement en hôtellerie/restauration. Je suis donc ouvert au changement et nouvelles expériences. Basé dorénavant en France et pris de passion pour le développement web, ce métier sonne pour moi comme une évidence.<br />
                </p>
              <h3>Technologie</h3>
              <p>De notre temps, impossible d'échapper au domaine du numérique qui façonne le quotidien. La technologie est maintenant essentielle pour beaucoup d'entre nous, et contribuer à ce domaine en développant applications et sites utiles à la communauté est pour moi un beau privilège et satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    );
}


export default About;