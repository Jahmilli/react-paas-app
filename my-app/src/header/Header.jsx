import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';


export default class Header extends Component {

  render() {
    return (
      <header>
      <Navigation />
        <Title>Professional Aeronautics and Astronautics Society</Title>
        <SocialMedia />
      </header>
    );
  }
}
