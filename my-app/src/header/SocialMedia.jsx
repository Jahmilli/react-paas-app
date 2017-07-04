import React, { Component } from 'react';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Facebook from 'react-icons/lib/fa/facebook-square';
import Linkedin from 'react-icons/lib/fa/linkedin-square';

export default class SocialMedia extends Component {
  render() {
    return (
    <div className="Social-Media">
      <a href = "#"><Twitter className="Media-Icon"/></a>
      <a href="#"><Facebook className="Media-Icon"/></a>
      <a href="#"><Linkedin className="Media-Icon"/></a>
    </div>
    );
  }
}
