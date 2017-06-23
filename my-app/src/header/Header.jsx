import React from 'react';
import TopNavigation from './TopNavigation';
import Title from './Title';

export default class Header extends React.Component {

  render() {

    return (
      <header>
      <TopNavigation />
      <Title />
      </header>
    );
  }
}
