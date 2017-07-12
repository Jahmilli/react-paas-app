import React, { Component } from 'react';
import ContactForm from '../body/ContactForm';
import SocialMedia from '../header/SocialMedia';

export default class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Contact Page</h1>
        <ContactForm />
        <div className="Black">
        <p>Find us at</p>
        <SocialMedia />
        </div>
      </div>
    );
  }
}
