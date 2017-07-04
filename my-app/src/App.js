import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Info from './body/Info';
import ExecutiveInfo from './body/ExecutiveInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
        <ExecutiveInfo />
        <Footer />
      </div>
    );
  }
}

export default App;
