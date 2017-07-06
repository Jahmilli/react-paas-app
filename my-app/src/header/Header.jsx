import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';


export default class Header extends Component {

  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <div id="Header-Lockup">
          <Navigation />
            <Title />
            <SocialMedia />
        </div>
        </div>
      </div>
    );
  }
}
