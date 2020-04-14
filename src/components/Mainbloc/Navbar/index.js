import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../style/images/alban.png';
import './navbar.scss';

const Navbar = ({ isMenuOpen, closeMenu, changeView, view, openMenu }) => {

  const changeActiveView = e => {
    var elements = document.querySelectorAll(".menu-item");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.remove("current");
    }
    changeView(e.target.textContent)
    e.target.closest(".menu-item").classList.add("current");
  }

  const toggleMenu = function(e) {
    
    if (isMenuOpen) {
      setTimeout(() => {
        closeMenu();
      }, 0);
    } else {
      openMenu();
    }
  }

  return (
  <>
    <button onClick={toggleMenu} className={isMenuOpen ? "hamburger hamburger--slider is-active" : "hamburger hamburger--slider"} type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
    </button>
    <div id="navbar" className={isMenuOpen ? 'open' : ''}>
      <ul className="menu-container">
        <li className="menu-item" onClick={closeMenu}><img id="nav-picture" src={Logo} alt="Alban Renahy picture" /></li>
        <li className={view === "Bienvenue" ? "menu-item current" : "menu-item"} onClick={changeActiveView}><Link to={`/menu`}>Bienvenue</Link></li>
        <li className={view === "What can you do?" ? "menu-item current" : "menu-item"} onClick={changeActiveView}><Link to={`/whatcanyoudo`}>What can I do?</Link></li>
        <li className={view === "About" ? "menu-item current" : "menu-item"} onClick={changeActiveView}><Link to={`/about`}>À propos</Link></li>
        <li className={view === "Technologies" ? "menu-item current" : "menu-item"} onClick={changeActiveView}><Link to={`/technologies`}>Technologies</Link></li>
        <li className={view === "Projects" ? "menu-item current" : "menu-item"} onClick={changeActiveView}><Link to={`/projets`}>Projets</Link></li>
      </ul>
    </div>
  </>
  );
}

export default Navbar;