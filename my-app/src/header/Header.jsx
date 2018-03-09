import React, { Component } from 'react';
import Title from './Title';

export default class Header extends Component {

render() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="Header-Lockup">
          <Title />
        </div>
      </div>
    </div>
   );
 }
}
