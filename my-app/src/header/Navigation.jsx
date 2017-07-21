import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import bUtils from 'react-bootstrap/lib/utils/bootstrapUtils';
import logo from '../logo.svg';


export default class Navigation extends React.Component {

render() {
  return (
    <Navbar  inverse style={{marginBottom: "0px"}}>
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
            <NavDropdown key={2} title="Events" id="events-dropdown">
          <LinkContainer to={{ pathname: '/events' }}>
            <MenuItem eventKey={2.1}>Events</MenuItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/future-events' }}>
            <MenuItem eventKey={2.2}>Future Events</MenuItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/past-events' }}>
            <MenuItem eventKey={2.3}>Past Events</MenuItem>
          </LinkContainer>
          <MenuItem divider />
          <LinkContainer to={{ pathname: '/gallery' }}>
            <MenuItem eventKey={2.4}>Gallery</MenuItem>
          </LinkContainer>
        </NavDropdown>
            <LinkContainer to="/contact">
              <NavItem eventKey={4}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
