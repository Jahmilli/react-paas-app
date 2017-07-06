import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Info from './body/Info';
import ExecutiveInfo from './body/ExecutiveInfo';
import { HashRouter, Route, Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Route path='/info' component={Info} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
