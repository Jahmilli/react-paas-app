import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../logo.svg';

export default class Navigation extends React.Component {

render() {
  return (
  <Navbar inverse>
        <Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Brand>
            <Link to="/home"><img src={logo} className="App-logo" alt="logo" /></Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/home">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>About</NavItem>
            </LinkContainer>
              <NavItem eventKey={3}>Event</NavItem>
              <NavItem eventKey={4}>Contact</NavItem>

            <NavDropdown key={2} title="Home" id="about-dropdown">
                <MenuItem eventKey={2.1}>Home</MenuItem>
                <MenuItem eventKey={2.2}>About</MenuItem>
                <MenuItem eventKey={2.3}>Events</MenuItem>
              <MenuItem divider />
                <MenuItem eventKey={2.4}>Contact</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
);
}
}
