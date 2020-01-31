import React from 'react';
import Typed from 'react-typed';
import './menu.scss';

class Menu extends React.Component {

  componentDidMount() {}

  render() {
    var { isMenuOpen } = this.props;
    return (
      <div id="menu">
        
        <div id="animation-container">
          <div id="animation-relative">
            <p className="speechbubble" data-depth="1.1" style={{
              fontSize: "26px",
              width: "fit-content",
              textAlign: "center",
            }}>
              {
                isMenuOpen &&
                <Typed
                  strings={[
                    "Bonjour, cher visiteur, bienvenue sur mon site",
                    "Vous êtes ici sur le menu principal",
                    "Cliquez sur ce que vous souhaitez savoir à mon propos."
                  ]}
                  typeSpeed={50}
                  backSpeed={10} >
                </Typed>
              }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
