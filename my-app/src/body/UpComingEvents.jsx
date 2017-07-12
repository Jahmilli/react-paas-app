import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import DeskPicture from '../images/deskpicture.jpg';
import { Parallax } from 'react-parallax';


export default class UpComingEvents extends Component {
  render() {
    return (
      <div>
        <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={400}>
        <br/>
        <h1> Up Coming Events </h1>
        </Parallax>
      </div>
    );
  }
}
