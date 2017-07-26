import React, { Component } from 'react';
import Header from '../header/Header';
import Info from '../body/Info';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
      </div>
    );
  }
}
