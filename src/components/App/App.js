import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; //importing bootstrap for formatting
import './App.css';

import Home from '../../pages/Home/Home';
import Details from '../../pages/Details/Details';
import Add from '../../pages/Add-Movie/Add-Movie';
import { makeStyles } from '@material-ui/core/styles';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <h2>Blockbusters</h2>
            <nav>
              <h4>
                <Link to="/">HOME</Link>
              </h4>
              <h4>
                <Link to="/add"> ADD MOVIES</Link>
              </h4>
            </nav>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/add" component={Add} />
        </div>
      </Router>
    );
  }
}

export default App;
