import React from 'react';
import Navigation from './Navigation';
import Title from './Title';

export default class Header extends React.Component {

  render() {

    return (
      <header>
        <div className="Nav-Right">
          <Navigation />
        </div>
      <Title />
      </header>
    );
  }
}
