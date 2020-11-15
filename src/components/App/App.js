import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//import stylings
import 'bootstrap/dist/css/bootstrap.css'; //importing bootstrap for formatting
import './App.css';

//import pages using routes
import Home from '../../pages/Home/Home';
import Details from '../../pages/Details/Details';
import Add from '../../pages/Add-Movie/Add-Movie';

//final render/order/paths of all pages
// Renders the entire app on the DOM
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <h1>CINEMA</h1>
            <nav class="navbar-header">
              <h5>
                <Link to="/">HOME </Link>
              </h5>
              {'        '}
              <h5>
                <Link to="/add"> ADD MOVIES</Link>
              </h5>
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
