import React, { Component } from 'react';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Facebook from 'react-icons/lib/fa/facebook-square';
import Linkedin from 'react-icons/lib/fa/linkedin-square';

export default class SocialMedia extends Component {
  render() {
    return (
    <div className="container-fluid">
    <div className={this.props.styleName}>
      <a href = "#"><Twitter className={this.props.mediaClass}/></a>
      <a href="#"><Facebook className={this.props.mediaClass}/></a>
      <a href="#"><Linkedin className={this.props.mediaClass}/></a>
    </div>
    </div>
    );
  }
}
