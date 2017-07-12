import React, { Component } from 'react';
import UpComingEvents from '../body/UpComingEvents';
import PastEvents from '../body/PastEvents';
import EventInfo from '../body/EventInfo';

export default class Event extends Component {
  render() {
    return (
      <div>
        <h1>Event Page</h1>
        <UpComingEvents />
        <PastEvents />
        <EventInfo />
      </div>
    );
  }
}
