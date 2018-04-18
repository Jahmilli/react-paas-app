import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class AdminPage extends Component {
  const URL = '/admin/'

  _onPressButtonPOST() {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        message: this.state.message,
      })
    })
  }


  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <Button>Click me!</Button>
      </div>
    );
  }
}
