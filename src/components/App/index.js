import React from 'react';
import Header from '../../containers/Header';
import Blocone from '../../containers/Blocone';
import {Switch, Route} from 'react-router-dom';
import AOS from 'aos';
import './app.scss';



 class App extends React.Component {

  componentDidMount() {
    AOS.init();
  }

   render(){
    return (
      <>
        <Header />
        <Blocone />
        <Switch>
          <Route path="/portfolio" />
        </Switch>
      </>
    );
  }
}

 export default App;