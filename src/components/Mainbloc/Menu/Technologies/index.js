import React from "react";
import Axios from "../../../../style/images/technos/axios.png";
import ReactRouter from "../../../../style/images/technos/react-router.svg";
import Jquery from "../../../../style/images/technos/jquery.png";
import Postman from "../../../../style/images/technos/postman.png";
import Mysql from "../../../../style/images/technos/mysql.png";
import "./technologies.scss";

const Technologies = () => {
  const mainTechnologies = [
    { name: "HTML5, JSX", icon: "fab fa-html5" },
    { name: "CSS3, Sass", icon: "fab fa-sass" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React, Redux", icon: "fab fa-react" },
    { name: "PHP 7", icon: "fab fa-php" },
    { name: "Symfony (bientôt)", icon: "fab fa-symfony" }
  ];

  const otherTechnologies = [
    { name: "jQuery", icon: Jquery },
    { name: "Axios", icon: Axios },
    { name: "React Router", icon: ReactRouter },
    { name: "MySQL", icon: Mysql },
  ];

  const mainTools = [
    { name: "Git", icon: "fab fa-git" },
    { name: "Github", icon: "fab fa-github" },
    { name: "Slack", icon: "fab fa-slack" },
    { name: "Trello", icon: "fab fa-trello" },
    { name: "Yarn", icon: "fab fa-yarn" },
    { name: "Npm", icon: "fab fa-npm" },
    { name: "VSCode", icon: "fas fa-code" },
    { name: "Discord", icon: "fab fa-discord" },
    { name: "Font Awesome", icon: "fab fa-font-awesome" },
  ];

  return (
    <div id="technologies">
      <div className="section-title">
        <div data-aos="fade-right">Technologies</div>
        <div
          className="underline"
          data-aos="flip-right"
          data-aos-delay="400"
        ></div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="text">
          Je m'emploie à maîtriser des technologies modernes, rapides et
          efficaces pour le développement. <br />
          Ici vous pouvez trouver certains des outils que j'utilise
        </div>
        <div className="technologies-container animated-border">
          <section
            className="technologies"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <h2>Technologies</h2>
            <div className="technologies">
              {mainTechnologies.map((tech, index) => (
                <div className="technology" key={"main-tech" + index}>
                  <i className={tech.icon + " fa-3x"}></i>
                  <p>{tech.name}</p>
                </div>
              ))}
              {otherTechnologies.map((tech, index) => (
                <div className="technology" key={"other-tech" + index}>
                  <img className="other-tech-img" src={tech.icon} alt="Icon" />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="tools" data-aos="fade-left" data-aos-delay="1000">
            <h2>Outils</h2>
            <div className="main-tools">
              {mainTools.map((tool, index) => (
                <div className="tool" key={"main-tools" + index}>
                  <i className={tool.icon + " fa-3x"} alt="Icon"></i>
                  <p>{tool.name}</p>
                </div>
              ))}
              <div className="tool">
                <img src={Postman} alt="Icon" />
                <p>Postman</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
