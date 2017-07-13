import React, { Component } from 'react';
import Title from './Title';
import SocialMedia from './SocialMedia';

export default class Header extends Component {

render() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="Header-Lockup">
          <Title />
          <SocialMedia styleName="Header-Social-Media" mediaClass="Header-Media-Icon"/>
        </div>
      </div>
    </div>
   );
 }
}
