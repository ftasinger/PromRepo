// App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './movie.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

export default function App() {
  return (
    <Router>
      <div>
      <nav className="navbar">
        <ul className="navbar-nav">
              <Link to="/">Home</Link>
            
         
              <Link to="/about">About</Link>
           
           
              <Link to="/contact">Contact</Link>
           
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


