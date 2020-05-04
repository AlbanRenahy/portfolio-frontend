/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Museo from '../../../../style/images/museo.png';
import CovidTraker from '../../../../style/images/covid-traker.png';
import Chattychatty from '../../../../style/images/chatty-chatty.png';
import Eole from '../../../../style/images/eole.png';
import Quizzy from '../../../../style/images/quizzy.png';
import Resto from '../../../../style/images/food-app.png';
import './projects.scss';
const Portfolio = () => {
  const Swal = withReactContent(MySwal);

  const handleMuseoClick = () => {
    Swal.fire({
      title: 'Museo',
      html:
      '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
      '<div><img style="width: 100%;" src="'+Museo+'"></div>' +
      '<div><i>APPLICATION TO SHARE YOUR FAVORITES MUSEUMS & MONUMENTS WITH THE COMMUNITY<i><br><br>The version 1.0 of Museo you are currently browsing was developed in 3 weeks. This site is not finished and continues to be developped<br>This project validates a 6-month training course followed by 5 aspiring developers in the virtual classrooms of Oclock. Besides the intense pleasure of creating "from scratch" a web project, this web app also serves to support the passage of the Professional title of web developer.<br><br>FLASH INFO ! Application temporarily unavailable on May 4th, 2020 due to servor hosting problem. I will return the website online as soon as possible. Sorry for the inconvenience<br></div>' +
      '</div>' +
      '<a class="swal2-confirm swal2-styled" style="text-decoration: none;font-weight:bold;" target="blank" href="http://www.museo-map.com/">View this app</a>',
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }

  const handleCovidTrakerClick = () => {
    Swal.fire({
      title: 'Covid-Traker',
      html:
      '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
      '<div><img style="width: 100%;" src="'+CovidTraker+'"></div>' +
      '<div><i>SIMPLE STATISTICS REACT APP ABOUT CORONOVIRUS SPREAD AROUND THE WORLD<i><br><br>This react page is developped by using hooks and materialUI.<br> All the data is fetched from an external API.</div>' +
      '</div>' +
      '<a class="swal2-confirm swal2-styled" style="text-decoration: none;font-weight:bold;" target="blank" href="https://covid-traker.netlify.app/">View this app</a>',
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }

    const handleChattychattyClick = () => {
      Swal.fire({
        title: 'Chatty-Chatty',
        html:
        '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
        '<div><img style="width: 75%;" src="'+Chattychatty+'"></div>' +
        '<div><i>MEETING APP TO FIND LOVE, FRIENDSHIP, HELP FOR YOUR PROJECTS, OR JUST MOMENTS TOGETHER<i><br><br>Personal project of a social application currently in progress, with React for frontend, Node.js for backend and MySQL as database. The first version is coming soon! <br><br>Dear developers, you can check the repository on Github ;-)</div>' +
        '</div>' +
        '<a class="swal2-confirm swal2-styled" style="text-decoration: none;font-weight:bold;" target="blank" href="https://github.com/AlbanRenahy/Chatty-chatty-Front">View the repository</a>',
        animation: true,
        showConfirmButton: false,
        showCloseButton: true,
      })
  }

  const handleEoleClick = () => {
    Swal.fire({
      title: 'Eole',
      html:
      '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
      '<div><img style="width: 75%;" src="'+Eole+'"></div>' +
      '<div><i>SIMPLE REAL TIME WEATHER APP<i><br><br>Built and testing with React/Redux, TypeScript. It uses OpenWeatherData API <br></div>' +
      '</div>' +
      '<a class="swal2-confirm swal2-styled" style="text-decoration: none;font-weight:bold;" target="blank" href="https://5eaaf7d914a1de0171518910--eole-weather.netlify.app/">View this app</a>',
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
}

const handleQuizzyClick = () => {
  Swal.fire({
    title: 'Quizzy',
    html:
    '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
    '<div><img style="width: 75%;" src="'+Quizzy+'"></div>' +
    '<div><i>AN EXCITING QUIZ GAME WILL THAT ENTERTAIN YOU FOUR HOURS ;-)<i><br><br>I built this project with React / Redux and Typescript. Tests are implemented for each component, and the entirely layout is made with Styled Components. The questions are fecthed from TriviaAPI<br></div>' +
    '</div>' +
    '<a class="swal2-confirm swal2-styled" style="text-decoration: none;font-weight:bold;" target="blank" href="https://quizzy-app.netlify.app/">View this app</a>',
    animation: true,
    showConfirmButton: false,
    showCloseButton: true,
  })
}
const handleRestoClick = () => {
  Swal.fire({
    title: 'Restaurant landing page',
    html:
    '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
    '<div><img style="width: 75%;" src="'+Resto+'"></div>' +
    '<div><i>BASIC WEBSITE WITH INTERACTIVE CONTENT<i><br><br>Built with Reatc/Redux, SASS and some animation tricks. Still in continuous development. The final version is coming soon !</div>' +
    '</div>' +
    '<a class="swal2-confirm swal2-styled" style="text-decoration: none;font-weight:bold;" target="blank" href="https://alban-restaurantpage.netlify.app/#">View this app</a>',
    animation: true,
    showConfirmButton: false,
    showCloseButton: true,
  })
}
  return (
    <div id="portfolio">
      <div className="section-title">
        <div data-aos="fade-right">Projects</div>
        <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
      </div>
      <div className="content">
        <div className="text">
          Here you can find my latest creations or current development projects
        </div>
        <div className="container sites-container animated-border">
          <div className="item site" data-aos="fade-left" data-aos-delay="200" onClick={handleMuseoClick}>
            <figure className="figure red">
              <img src={Museo} alt="Museo" />
              <figcaption>
                <h2>Museo <span> App</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
          <div className="item site" data-aos="fade-left" data-aos-delay="200" onClick={handleCovidTrakerClick}>
            <figure className="figure red">
              <img src={CovidTraker} alt="CovidTraker" />
              <figcaption>
                <h2>Covid-Traker <span> App</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
          <div className="item site" data-aos="fade-left" data-aos-delay="200" onClick={handleChattychattyClick}>
            <figure className="figure red">
              <img src={Chattychatty} alt="Chattychatty" />
              <figcaption>
                <h2>Chatty-Chatty <span> App</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
          <div className="item site" data-aos="fade-left" data-aos-delay="200" onClick={handleEoleClick}>
            <figure className="figure red">
              <img src={Eole} alt="Eole" />
              <figcaption>
                <h2>Eole <span> Weather-App</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
          <div className="item site" data-aos="fade-left" data-aos-delay="200" onClick={handleQuizzyClick}>
            <figure className="figure red">
              <img src={Quizzy} alt="Eole" />
              <figcaption>
                <h2>Quizzy <span> Game</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
          <div className="item site" data-aos="fade-left" data-aos-delay="200" onClick={handleRestoClick}>
            <figure className="figure red">
              <img src={Resto} alt="Eole" />
              <figcaption>
                <h2>Restaurant <span> Landing-page</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
        </div>
      </div>
    </div >
  )
};


export default Portfolio;
