import React, { Component } from 'react';
import ContactForm from '../body/ContactForm';

export default class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Contact Page</h1>
        <ContactForm />
      </div>
    );
  }
}
