import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
