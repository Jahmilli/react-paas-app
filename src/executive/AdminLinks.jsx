import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import MdEmail from 'react-icons/lib/md/email';
import MdCloudUpload from 'react-icons/lib/md/cloud-upload';
import FaGithub from 'react-icons/lib/fa/github';
import FaSlack from 'react-icons/lib/fa/slack';


export default class AdminLinks extends Component {
  render() {
    return (
      <div id="AdminLinks-Lockup">
        <a href="#" target="_blank">
          <MdEmail className="AdminLink-Icon" />
        </a>
        <a href="#" target="_blank">
          <MdCloudUpload className="AdminLink-Icon" />
        </a>
        <a href="https://paasuts2018.slack.com/messages/C7EUPMFRS/" target="_blank">
          <FaSlack className="AdminLink-Icon" />
        </a>
        <a href="https://github.com/Jahmilli/react-paas-app" target="_blank">
          <FaGithub className="AdminLink-Icon" />
        </a>
      </div>
    );
  }
}
