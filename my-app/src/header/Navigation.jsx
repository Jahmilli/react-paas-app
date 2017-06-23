import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default class Navigation extends React.Component {


render() {

  return (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a className="page-scroll" href="#page-top" >Some Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav bsStyle="pills">
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavItem eventKey={3} href="#">Link</NavItem>
        <NavItem eventKey={4} href="#">Link</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
}
}
