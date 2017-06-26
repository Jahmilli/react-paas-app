import React from 'react';
import Title from './Title';
import Navigation from './Navigation';
export default class Header extends React.Component {

  render() {

    return (
      <header>
      <Navigation />
      <Title>{this.props.children}</Title>
      </header>
    );
  }
}
