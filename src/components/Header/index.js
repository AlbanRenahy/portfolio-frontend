import React from 'react';
import Particles from 'react-particles-js';
import Config from '../../particlesjs-config.json';
import AOS from 'aos';
import './header.scss';



 class Header extends React.Component {

   componentDidMount(){
    AOS.init();
    document.querySelector("canvas").parentElement.style.height = "100%";
    document.querySelector("canvas").parentElement.style.width = "100%";
    document.querySelector("canvas").parentElement.style.position = "absolute";
    setTimeout(() => {
      document.querySelector("hr").classList.add("open");
    }, 1000);
  }

   render(){
    return (
      <div id="header">
        <div className="background">
          <Particles width="100%" height="25%" params={Config}/>
        </div>
        <div className="title">
          <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-out">ALBAN RENAHY</h1>
          <hr />
          <h2 data-aos="fade-in" data-aos-duration="400" data-aos-easing="ease-out" data-aos-delay="1700">Développeur web</h2>
          <h2 data-aos="fade-in" data-aos-duration="400" data-aos-easing="ease-out" data-aos-delay="1900">France</h2>
        </div>
      </div>
    );
  }
}

 export default Header;