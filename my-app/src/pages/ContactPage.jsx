import React, { Component } from 'react';
import ContactForm from '../body/ContactForm';
import SocialMedia from '../header/SocialMedia';

export default class Contact extends Component {
  render() {
    return (
      <div className="container-fluid ContactPage">
        <h1>Contact Page</h1>
        <ContactForm />
        <div className="Contact-Social-Media-Lockup">
          <p>Also find us at</p>
          <SocialMedia styleName="Contact-Social-Media" mediaClass="Contact-Media-Icon"/>
        </div>
      </div>
    );
  }
}