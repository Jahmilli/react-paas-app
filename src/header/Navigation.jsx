import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
bootstrapUtils.addStyle(NavItem, 'custom');

export default class Navigation extends React.Component {
renderGallery() {
  return (
    <div>
      <MenuItem divider />
      <LinkContainer to={{ pathname: '/gallery' }}>
        <MenuItem eventKey={2.4}>Gallery</MenuItem>
      </LinkContainer>
    </div>
  );
}

render() {
  var styles={
    "color": "red"
  }
  return (
    <Navbar style={{marginBottom: "0px"}}>
      <Navbar.Header>
        <Navbar.Toggle />
          <Navbar.Brand>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer exact={true} to="/">
              <NavItem style={styles} eventKey={1}>Home</NavItem>
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
            </NavDropdown>
            <LinkContainer to="/contact">
              <NavItem eventKey={4}>Contact</NavItem>
            </LinkContainer>
            <LinkContainer to="/admin">
              <NavItem eventKey={4}>Admin</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
