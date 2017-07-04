import React, { Component } from 'react';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Facebook from 'react-icons/lib/fa/facebook-square';
import Linkedin from 'react-icons/lib/fa/linkedin-square';

export default class SocialMedia extends Component {
  render() {
    return (
    <div className="Social-Media">
      <h3><Twitter className="Media-Icon"/></h3>
      <h3><Facebook className="Media-Icon"/></h3>
      <h3><Linkedin className="Media-Icon"/></h3>
    </div>
    );
  }
}
