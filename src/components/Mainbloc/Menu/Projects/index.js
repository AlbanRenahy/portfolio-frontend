/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Museo from '../../../../style/images/museo.png';
import CovidTraker from '../../../../style/images/covid-traker.png'
import './projects.scss';
const Portfolio = () => {
  const Swal = withReactContent(MySwal);

  const handleMuseoClick = () => {
    Swal.fire({
      title: 'Museo',
      html:
      '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
      '<div><img style="width: 100%;" src="'+Museo+'"></div>' +
      '<div><i>APPLICATION TO SHARE YOUR FAVORITES MUSEUMS & MONUMENTS WITH THE COMMUNITY<i><br><br>The version 1.0 of Museo you are currently browsing was developed in 3 weeks. This site is not finished and continues to be developped<br>This project validates a 6-month training course followed by 5 aspiring developers in the virtual classrooms of Oclock. Besides the intense pleasure of creating "from scratch" a web project, this web app also serves to support the passage of the Professional title of web developer.</div>' +
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
  return (
    <div id="portfolio">
      <div className="section-title">
        <div data-aos="fade-right">Projects</div>
        <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
      </div>
      <div className="content">
        <div className="text">
          Here you can find my latest creations.
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
        </div>
      </div>
    </div >
  )
};


export default Portfolio;
