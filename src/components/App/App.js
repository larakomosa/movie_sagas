import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; //importing bootstrap for formatting
import './App.css';

import Home from '../../pages/Home/Home';
import Details from '../../pages/Details/Details';
import Add from '../../pages/Add-Movie/Add-Movie';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/add" component={Add} />
        </Router>
      </div>
    );
  }
}

export default App;
