import React from 'react';
import axios from 'axios';
import './about.scss';

const Container = ({ pseudo, description, id }) => {

  return (
    <div key={id} id={id}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60%',
        margin: '0 auto',
        border: '2px solid #464646',
        borderRadius: '4px',
        padding: '20px',
        marginTop: '20px',
      }}>
        <p style={{
          width: "100%",
          color: "white",
        }}>{description}</p>
        <p style={{
          alignSelf: "flex-end",
          fontSize: "1rem",
          opacity: ".7",
          color: "white",
        }}>- {pseudo}</p>
      </div>
    </div>
  )
}
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/comments')
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({ posts: response.data });

        // document.querySelector("#posts").appendChild("<div>"response"</div>")
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }
  render() {
    const { posts } = this.state;

    return (
      <div id="about">
        <div className="section-title">
          <div data-aos="fade-right">About</div>
          <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
        </div>
        <div className="content">
          <div className="text">
            Découvrez mon parcours professionnel et d'autres information à mon sujet
          </div>
          <div className="about-container animated-border">
            <div data-aos="fade-left" data-aos-delay="500">
              <h2>Carrière professionnelle</h2>
              <h3>Etudes en développement-web</h3>
              <p>Parlons de l'école O'Clock.
                C'est une école spécialisée dans le développement web, proposant une formation professionnalisante avec une particularité...Tout se passe en téléprésentiel !
                J'ai la chance de suivre ces 5 mois intenses d'entrainement, avec une spécialisation en React, puis Symfony très bientôt.
              </p>
              <h3>Développeur junior</h3>
              <p>A la suite de cette formation, je suis basé actuellement dans la région Hauts-de-France, mais prêt à bouger sur tout le territoire 
                pour mon premier emploi en tant que développeur junior. Pour cette première expérience professionnelle, je suis plus que jamais désireux de monter en aptitudes et expérience.
                Très motivé et anthousiaste, je mettrai à disposition mes compétences pour transformer une idée en solution numérique. </p>
            </div>

            <div data-aos="fade-left" data-aos-delay="1000">
              <h2>Passions</h2>
              <h3>Aventure</h3>
              <p>Le sport et les activités outdoor prennent une place importante dans ma vie, en particulier le vélo. <br />
                A 24 ans maintenant, j'ai eu la chance de vivre dans plusieurs pays ces dernières années ( Norvège, Australie, Japon ), 
                avec une activité saisonnière, principalement en hôtellerie/restauration. Je suis donc ouvert au changement et nouvelles expériences. Basé dorénavant en France et pris de passion pour le développement web, ce métier sonne pour moi comme une évidence.<br />
                </p>
              <h3>Technology</h3>
              <p>De notre temps, impossible d'échapper au domaine du numérique qui façonne le quotidien. La technologie est maintenant essentielle pour beaucoup d'entre nous, et contribuer à ce domaine en développant applications et sites utiles à la communauté est pour moi un beau privilège et satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default About;