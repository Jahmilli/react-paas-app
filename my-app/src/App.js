import React, { Component } from 'react';
import './App.css';
import Home from './pages/HomePage';
import Footer from './footer/Footer';
import Navigation from './header/Navigation';
import About from './pages/AboutPage';
import Events from './pages/EventsPage';
import Contact from './pages/ContactPage';
import FutureEvents from './pages/FutureEventsPage';
import PastEvents from './pages/PastEventsPage';
import GalleryPage from './pages/GalleryPage';
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
          <Route path='/future-events' component={FutureEvents} />
          <Route path='/past-events' component={PastEvents} />
          <Route path='/gallery' component={GalleryPage} />
          <Route path='/contact' component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
