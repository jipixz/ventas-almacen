import React, { Component } from 'react';
import './App.css';
import HomeComponent from './components/home';
import SalesComponent from './components/sales';
import CartComponent from './components/cart';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src="https://bulma.io/images/bulma-logo-white.png" alt="yes" width="112" height="28" />
              </a>
    
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
    
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <ul className="navbar-item">
                  <li className="nav-item">
                    <Link className="nav-link"  to='/'>Home</Link>
                  </li>
                </ul>
                <ul className="navbar-item">
                  <li className="nav-item">
                    <Link className="nav-link"  to='/sales'>Ventas</Link>
                  </li>
                </ul>
              </div>
    
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <ul className="button is-primary">
                      <li>  
                      <Link className="nav-link"  to='/carrito'>Carrito</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>

    
            {/*<nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>*/}
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/sales" component={SalesComponent} />
              <Route exact path="/carrito" component={CartComponent} />
            </Switch>
          </div>
        </Router>
    );
    
  }
}
export default App;
