import React, { Component } from 'react';
import UpComingEvents from '../body/UpComingEvents';
import PastEvents from '../body/PastEvents';
import EventInfo from '../body/EventInfo';
import DeskPicture from '../images/deskpicture.jpg';

export default class Event extends Component {
  render() {
    return (
      <div className="EventsPage">
        <h1>Event Page</h1>
        <UpComingEvents eventsPhoto={DeskPicture}/>
        <PastEvents eventsPhoto={DeskPicture}/>
        <EventInfo eventsPhoto={DeskPicture}/>
      </div>
    );
  }
}
