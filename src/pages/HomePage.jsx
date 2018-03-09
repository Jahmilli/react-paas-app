import React, { Component } from 'react';
import Header from '../header/Header';
import HomePageAbout from '../body/HomePageAbout';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomePageAbout />
      </div>
    );
  }
}
