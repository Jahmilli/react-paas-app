import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import EventItem from './EventItem';
import IAC from '../images/IAC_Header.jpg';

export default class FutureEvents extends Component {
  render() {
    return (
      <div>
        <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={400}>
        <br/>
        <h2>Future Events</h2>
        </Parallax>
        <EventItem eventTitle="2017 International Astronautical Conference - Adelaide" eventPhoto={IAC}
        eventDescription="This is the description" />
      </div>
    );
  }
}
