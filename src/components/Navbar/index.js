import React from "react";
import { NavLink } from "react-router-dom";
import Picture from "../../style/images/alban.png";
import "./navbar.scss";

class Navbar extends React.Component {
  componentDidMount() {}

  changeActiveButton = e => {};

  render() {
    var { isMenuOpen, closeMenu } = this.props;
    return <div id="navbar" className={isMenuOpen ? "open" : ""}>
      <ul className="menu-container">
          <li onClick={closeMenu}><img className="picture" src={Picture} alt="Alban Renahy logo"/></li>
          <li onClick={this.changeActiveButton}><NavLink to="/menu">Bienvenue</NavLink></li>
          <li onClick={this.changeActiveButton}><NavLink to="/menu">A propos</NavLink></li>
          <li onClick={this.changeActiveButton}><NavLink to="/menu">Technologies</NavLink></li>
          <li onClick={this.changeActiveButton}><NavLink to="/menu">Projets</NavLink></li>
    
        </ul>
    </div>;
  }
}

export default Navbar;
