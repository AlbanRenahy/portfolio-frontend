import React from 'react';
import Welcome from '../../../containers/Welcome';
import Technologies from './Technologies';
import Whatcanyoudo from '../../../containers/Whatcanyoudo';
import Projects from './Projects';
import Testimonials from './Testimonials';
import About from './About';
import './menu.scss';

const Menu = ({ view }) => (
  <div id="menu">
    {view === "Bienvenue" && <Welcome />}
    {view === "Technologies" && <Technologies />}
    {view === "About" && <About />}
    {view === "Projects" && <Projects />}
    {view === "What can you do?" && <Whatcanyoudo />}
    {view === "Testimonials" && <Testimonials />}
  </div>
);


export default Menu;
