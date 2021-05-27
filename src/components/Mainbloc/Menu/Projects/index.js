/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Museo from '../../../../style/images/museo.png';
import GithubUsers from '../../../../style/images/githubusers.png';
import ComfySloth from '../../../../style/images/comfysloth.png';
import Quizzy from '../../../../style/images/quizzy.png';
import Restaurant from '../../../../style/images/restaurant.png'
import MuseoDevices from '../../../../style/images/museo-devices.png';
import GithubUsersDevices from '../../../../style/images/githubusers-devices.png';
import ComfySlothDevices from '../../../../style/images/comfysloth-devices.png';
import QuizzyDevices from '../../../../style/images/quizzy-devices.png';
import RestaurantDesktop from '../../../../style/images/restaurant-desktop.png'

import './projects.scss';
import SitePreview from '../../../SitePreview.js';
const Portfolio = () => {
  const Swal = withReactContent(MySwal);

  const handleMuseoClick = () => {
    Swal.fire({
      title: 'Museo',
      html:<SitePreview imageSource={MuseoDevices} video={<iframe style={{margin: '0 auto'}} width="560" height="315" src="https://www.youtube.com/embed/zuGKEx1i1zk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>} href={"https://github.com/AlbanRenahy/museo"} target={"_blank"} buttonText={'View this app on Github'} description={'APPLICATION OF PARTICIPATORY MAPPING OF CULTURAL PLACES DATA\n\nThe version 1.0 of Museo you are currently browsing was developed in 3 weeks.\nThis project validates a 6-month training course followed by 5 aspiring developers in the virtual classrooms of Oclock. Besides the intense pleasure of creating "from scratch" a web project, this web app also serves to support the passage of the Professional title of web developer.'} />,
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }

  const handleComfySlothClick = () => {
    Swal.fire({
      title: 'Comfy Sloth',
      html:<SitePreview imageSource={ComfySlothDevices} href={"https://comfyy-sloth.netlify.app/"} target={"_blank"} buttonText={'Discover'} description={'Comfy Sloth is a dummy interior design e-shop that I created with React.js for the front-end, and an API with Node.js/Express for the back-end. I also used Stripe to proceed to checkout.'} />,
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }

  const handleGithubUsersClick = () => {
    Swal.fire({
      title: 'GithubUsers Website',
      html: <SitePreview imageSource={GithubUsersDevices} href={"https://github-users-appli.netlify.app/"} target={"_blank"} buttonText={'View this website'} description={'I made Github users as a designed website that display the statistics of github profiles thanks to the github API. I used React for this project.'} />,
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }

  const handleQuizzyClick = () => {
    Swal.fire({
      title: 'Quizzy Game',
      html: <SitePreview imageSource={QuizzyDevices} href={"https://quizzy-app.netlify.app/"} target={"_blank"} buttonText={'Play !'} description={'AN EXCITING QUIZ GAME WILL THAT ENTERTAIN YOU FOUR HOURS ;-)\n I built this project with React / Redux and Typescript. Tests are implemented for each component, and the entirely layout is made with Styled Components. The questions are fetched from TriviaAPI'} />,
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }

  const handleRestaurantClick = () => {
    Swal.fire({
      title: 'Restaurant Landing Page',
      html: <SitePreview imageSource={RestaurantDesktop} href={"https://alban-restaurantpage.netlify.app/"} target={"_blank"} buttonText={'Discover'} description={'BASIC DESKTOP WITH INTERACTIVE CONTENT\n Built with Reatc/Redux, SASS and some animation tricks.'} />,
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }
  return (
    <div id="portfolio">
      <div className="section-title">
        <div data-aos="fade-right">Portfolio</div>
        <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
      </div>
      <div className="content">
        <div className="text">
          Here you can find my latest creations.
        </div>
        <div className="container sites-container animated-border">

        <div className="item site" data-aos="fade-left" data-aos-delay="200" onClick={handleComfySlothClick}>
            <figure className="figure purple">
              <img src={ComfySloth} alt="ComfySloth" />
              <figcaption>
                <h2>Comfy Sloth <span> e-Shop</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
          
          <div className="item site" data-aos="fade-left" data-aos-delay="400" onClick={handleMuseoClick}>
            <figure className="figure red">
              <img src={Museo} alt="Museo" />
              <figcaption>
                <h2>Museo <span> App</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>

          <div className="item site" data-aos="fade-left" data-aos-delay="600" onClick={handleGithubUsersClick}>
            <figure className="figure green">
              <img src={GithubUsers} alt="GithubUsers" />
              <figcaption>
                <h2>Github-Users<span> Website</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>

          <div className="item site" data-aos="fade-left" data-aos-delay="600" onClick={handleQuizzyClick}>
            <figure className="figure green">
              <img src={Quizzy} alt="GithubUsers" />
              <figcaption>
                <h2>Quizzy<span> Game</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>

          <div className="item site" data-aos="fade-left" data-aos-delay="600" onClick={handleRestaurantClick}>
            <figure className="figure green">
              <img src={Restaurant} alt="GithubUsers" />
              <figcaption>
                <h2>Restaurant<span> Landing Page</span></h2>
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