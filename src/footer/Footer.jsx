import React from 'react';
import { FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SocialMedia from '../header/SocialMedia'

export default class Footer extends React.Component {

render() {
  return (
      <div className="Footer">
        <SocialMedia styleName="FooterMediaIconsLockup" mediaClass="FooterMediaIcons" />
        <ul className="FooterNavigationList">
          <li classNam="FooterNavLink"><Link to="/" className="FooterNavLink">Home</Link></li>
          <li> | </li>
          <li><Link to="/about" className="FooterNavLink">About</Link></li>
          <li> | </li>
          <li><Link to="/events" className="FooterNavLink">Events</Link></li>
          <li> | </li>
          <li><Link to="/contact" className="FooterNavLink">Contact</Link></li>
        </ul>
        <div className="FooterInputLockup">
          <p id="FooterConnectText">Connect with us!</p>
          <div className="FooterInput">
            <FormControl style={{textAlign: 'center'}} type="text" placeholder="Email" />
          </div>
        </div>
      </div>
    );
  }
}
