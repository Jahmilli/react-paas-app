import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import DeskPicture from '../images/deskpicture.jpg';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';


export default class UpComingEvents extends Component {
  render() {
    return (
      <div>
        <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={400}>
        <br/>
        <Link className="EventPageLink" to='/upcoming-events'> Up Coming Events </Link>
        </Parallax>
      </div>
    );
  }
}
