import React from 'react';
import Typed from 'react-typed';
import './projects.scss';

const Projects = () => (
  <div id="whatcanyoudo">
    <div className="section-title">
      <div data-aos="fade-right">Projets</div>
      <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
    </div>
    <div className="content">
      <div className="text">
        <Typed
          strings={['Premier projet web en construction et bientôt en ligne...']}
          typeSpeed={25}
          backSpeed={10} >
        </Typed>
      </div>
    </div>
  </div>
);


export default Projects;
