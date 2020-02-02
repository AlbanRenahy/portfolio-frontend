import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import Config from '../../../../particlesjs-config2.json';
import './welcome.scss';

class Welcome extends React.Component {
  componentDidMount() {
    
  }

  render() {
    var { isMenuOpen } = this.props;
    return (
      <div id="welcome">
        <Particles height="100%" style={{
          position: "absolute",
        }} params={Config}/>
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

export default Welcome;
