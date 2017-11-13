import React from 'react';
import { Navbar, Nav, NavItem, FormControl, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import SocialMedia from '../header/SocialMedia'

export default class Footer extends React.Component {

render() {
  return (
      <div className="Footer">
        <SocialMedia styleName="FooterMediaIconsLockup" mediaClass="FooterMediaIcons" />
        <ul className="FooterNavigationList">
          <li>Home</li>
          <li> | </li>
          <li>About</li>
          <li> | </li>
          <li>Events</li>
          <li> | </li>
          <li>Contact</li>
        </ul>
        <div className="FooterInputLockup">
          <p>Connect with us!</p>
          <div className="FooterInput">
            <FormControl style={{textAlign: 'center'}} type="text" placeholder="Email" />
          </div>
        </div>
      </div>
    );
  }
}
