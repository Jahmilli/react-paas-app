import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../logo.svg';

export default class Footer extends React.Component {

render() {
  return (
    <Navbar fixedBottom style={{marginBottom: "0"}}>
      <Navbar.Header>
        <Navbar.Toggle />
          <Navbar.Brand>
            <Link to="/home"><img src={logo} className="App-logo" alt="logo" /></Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullCenter>
            <LinkContainer to="/home">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/events">
              <NavItem eventKey={3}>Events</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={4}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
