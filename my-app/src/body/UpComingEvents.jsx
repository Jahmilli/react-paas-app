import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import DeskPicture from '../images/deskpicture.jpg';


export default class UpComingEvents extends Component {
  render() {
    return (
      <div>
        <h1>Up Coming Events</h1>
        <img src={this.props.eventsPhoto} alt="Events Photo" />
      </div>
    );
  }
}
