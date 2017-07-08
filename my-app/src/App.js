import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Footer from './footer/Footer';
import Navigation from './header/Navigation';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import { HashRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navigation />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/events' component={Events} />
          <Route path='/contact' component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
