import React, { Component } from 'react';
import Home from './pages/HomePage';
import Navigation from './header/Navigation';
import About from './pages/AboutPage';
import Events from './pages/EventsPage';
import Contact from './pages/ContactPage';
import FutureEvents from './pages/FutureEventsPage';
import PastEvents from './pages/PastEventsPage';
import GalleryPage from './pages/GalleryPage';
import PhotoGalleryWithCarousel from './body/PhotoGalleryWithCarousel';
import Footer from './footer/Footer';
import { HashRouter, Route } from 'react-router-dom';


class App extends Component {

  renderGallery() {
    return (
      <div>
         <Route path='/gallery' component={GalleryPage} />
          <Route path='/gallery-carousel' component={PhotoGalleryWithCarousel} />
      </div>
    );
  }
  render() {
    console.log("Hope you're having a nice day! :) - Sebastian 10-03-2018")
    return (
      <HashRouter>
        <div className="App">
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/events' component={Events} />
          <Route path='/future-events' component={FutureEvents} />
          <Route path='/past-events' component={PastEvents} />         
          <Route path='/contact' component={Contact} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
