import React from "react";
import Header from "../../containers/Header";
import Mainbloc from "../../containers/Mainbloc";
import Err404 from "../Err404";
import { Switch, Route } from "react-router-dom";
import AOS from "aos";
import "./App.scss";

class App extends React.Component {
  componentDidMount() {
    AOS.init();
    console.log(
      "Bonjour! \nJe peux voir que le code est important pour toi. \nComme tu peux le constater, ce site web a été totallement développé avec React.js/Redux sur le modèle d'une one-page application. \nSi tu as aimé et que tu souhaites me contacter, tu peux m'envoyer un message sur LinkedIn ou autre! ☕"
    );
  }
  increaseClickCounter = () => {
    const { increaseClickCounter } = this.props;
    increaseClickCounter();
  }

  render() {
    const { openMenu, changeView } = this.props;
    return (
      <div id="app" onClick={this.increaseClickCounter}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Header />
                <Mainbloc />
              </>
            )}
          />
          <Route
            path="/menu"
            render={() => {
              openMenu();
              return (
                <>
                  <Header />
                  <Mainbloc />
                </>
              );
            }}
          />
          <Route path="/whatcanyoudo" render={() => {
            openMenu();
            changeView("What can you do?");
            return (
              <>
                <Header />
                <Mainbloc />
              </>
            )
          }}
          />
          <Route
            path="/technologies"
            render={() => {
              openMenu();
              changeView("Technologies");
              return (
                <>
                  <Header />
                  <Mainbloc />
                </>
              );
            }}
          />
          <Route
            path="/projets"
            render={() => {
              openMenu();
              changeView("Projects");
              return (
                <>
                  <Header />
                  <Mainbloc />
                </>
              );
            }}
          />
          <Route
            path="/about"
            render={() => {
              openMenu();
              changeView("About");
              return (
                <>
                  <Header />
                  <Mainbloc />
                </>
              );
            }}
          />
          <Route component={Err404} />
        </Switch>
      </div>
    );
  }
}

export default App;
