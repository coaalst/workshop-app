import React from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LandingPage from './components/landing/LandingPage'
import MovieDetailsPage from './components/details/MovieDetailsPage'

function App() {
  return (
    <Router>
    <div className="App grey lighten-1">
    <Switch>
      <Route path="/" exact label="Home" component={LandingPage}/>
      <Route path="/movie/:id" exact label="MovieView" component={MovieDetailsPage}/>
    </Switch>
  </div>
  </Router>
  );  
}

export default App;
//      <Route path="/about" exact label="About" component={AboutComponent}/>