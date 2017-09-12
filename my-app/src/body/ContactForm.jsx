import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Col } from 'react-bootstrap';
import isEmail from 'validator/lib/isEmail';

const URL = '/api/contact';

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state={
    email: '',
    firstName: '',
    lastName: '',
    message: ''
      };
  }

  _onPressButtonPOST() {
  console.log(this.state);
  console.log(URL);
    fetch(URL, {
      method: 'POST',
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
      .catch((err) => {
        alert('Error occured while trying to connect with the server');
      });
  }

  handleChange = (event) => {
  this.setState({
        [event.target.id]: event.target.value,
      });
  }

  handleSubmit = (event) => {
    console.log(this.state);
  }

  getEmailValidationState = (event) => {
    let email = this.state.email;
    if(!isEmail(email)) {
    console.log('not an email');
    }

  }

  getFirstNameValidationState = (event) => {

  }

  getLastNameValidationState = (event) => {

  }



  render() {
    return (
    <div className="row">
    <h3>Email us with any inquiries</h3>
    <Col md={4} mdOffset={4}>
    <form className="form-signin" onSubmit={this.handleSubmit}>
      <FormGroup controlId="email" validationState={this.getEmailValidationState()}>
        <ControlLabel srOnly>Email address</ControlLabel>
        <FormControl type="email" value={this.state.email} placeholder="Email address" onChange={this.handleChange} required autoFocus/>
        <FormControl.Feedback />
      </FormGroup>

      <FormGroup controlId="firstName" validationState={this.getFirstNameValidationState()}>
        <FormControl type="text" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
        <FormControl.Feedback />
      </FormGroup>

      <FormGroup controlId="lastName" validationState={this.getLastNameValidationState()}>
        <FormControl type="text" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
        <FormControl.Feedback />
      </FormGroup>

      <FormGroup controlId="message">
       <FormControl
         style={{height: '200px'}}
         componentClass="textarea"
         placeholder="Enter message here"
         value={this.state.message}
         onChange={this.handleChange}
       />
      </FormGroup>

      <Button type="submit" onClick={this._onPressButtonPOST.bind(this)} bsSize="large" bsStyle="primary">
        Send Message
      </Button>
    </form>
    </Col>
    </div>
    );
  }
}
