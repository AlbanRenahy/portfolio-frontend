import React from 'react';
import Welcome from '../../../containers/Welcome';
import Technologies from './Technologies';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import './menu.scss';

const Menu = ({ view }) => (
  <div id="menu">
    {view === "Bienvenue" && <Welcome />}
    {view === "Technologies" && <Technologies />}
    {view === "Contact" && <Contact />}
    {view === "About" && <About />}
    {view === "Projects" && <Projects />}
  </div>
);


export default Menu;
