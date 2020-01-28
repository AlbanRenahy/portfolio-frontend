import React from "react";
import Typed from "react-typed";
import "./menu.scss";

class Menu extends React.Component {
  componentDidMount() {}

  render() {
    var { isMenuOpen } = this.props;
    return (
      <div id="menu">
        <div
          style={{
            fontSize: "30px",
            textAlign: "center"
          }}
        >
          {isMenuOpen && (
            <Typed
              strings={[
                "Bonjour, cher visiteur, bienvenue sur mon site",
                "Vous êtes ici sur le menu principal",
                "Cliquez sur ce que vous souhaitez savoir à mon propos."
              ]}
              typeSpeed={50}
              backSpeed={10}
            ></Typed>
          )}
        </div>
        <section className="menu-items"></section>
        <section className="menu-items"></section>
        <section className="menu-items"></section>
      </div>
    );
  }
}

export default Menu;
