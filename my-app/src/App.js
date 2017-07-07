import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Footer from './footer/Footer';
import Navigation from './header/Navigation';
import About from './pages/About';
import { HashRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navigation />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
