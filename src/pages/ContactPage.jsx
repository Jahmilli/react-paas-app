import React, { Component } from 'react';
import ContactForm from '../body/ContactForm';
import SocialMedia from '../header/SocialMedia';

export default class Contact extends Component {
  render() {
    return (
      <div className="container-fluid ContactPage">
        <h1>Contact Page</h1>
        <ContactForm />
        <div style={{height: "200px"}}/>
      </div>
    );
  }
}
