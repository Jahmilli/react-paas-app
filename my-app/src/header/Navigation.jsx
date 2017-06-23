import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navigation extends React.Component {


render() {

  return (
  <Navbar fixedTop inverse>
        <Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Brand>
            <p>PAAS</p>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
              <NavItem eventKey={1}>Home</NavItem>
              <NavItem eventKey={2}>About</NavItem>
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
