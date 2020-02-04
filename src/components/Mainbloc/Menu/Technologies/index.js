import React from 'react';
import Axios from '../../../../style/images/technos/axios.png';
import ReactRouter from '../../../../style/images/technos/react-router.svg';
import Jquery from '../../../../style/images/technos/jquery.png';
import './technologies.scss';

const Technologies = () => {

  const mainTechnologies = [
    { name: "React, Redux", icon: "fab fa-react" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "JavaScript, jQuery", icon: "fab fa-js" },
    { name: "Css3, Sass", icon: "fab fa-sass" },
    { name: "Symfony (bientôt)", icon: "fab fa-symfony" },
  ];

  const otherTechnologies = [
    { name: "jQuery", icon: Jquery },
    { name: "Axios", icon: Axios },
    { name: "React Router", icon: ReactRouter },
  ];

  return (
    <div id="technologies">
      <div className="section-title">
        <div data-aos="fade-right">Technologies</div>
        <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
      </div>

      {/* Content */}

      <section className="technologies">
        <h2>Technologies principales</h2>
        <div className="main-technologies">
          {
            mainTechnologies.map((tech, index) => (
              <div className="technology" key={"main-tech" + index}>
                <i className={tech.icon + " fa-5x"}></i>
                <p>{tech.name}</p>
              </div>
            ))
          }
        </div>
        <h2>Autres technologies</h2>
        <div className="other-technologies">
          {
            otherTechnologies.map((tech, index) => (
              <div className="technology" key={"other-tech" + index}>
                <img className="other-tech-img" src={tech.icon} alt="Icon" />
                <p>{tech.name}</p>
              </div>
            ))
          }
        </div>
      </section>
      </div>
  )
};


export default Technologies;