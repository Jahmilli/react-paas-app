import React, { Component } from 'react';
import FutureEvents from '../body/FutureEvents';
import PastEvents from '../body/PastEvents';
import EventInfo from '../body/EventInfo';
import DeskPicture from '../images/deskpicture.jpg';
import Gavan from '../images/space_panel_night_gavan.jpg';
import Elon from '../images/iac_2016_elon_musk.jpg';

export default class Event extends Component {
  render() {
    return (
      <div className="EventsPage">
        <FutureEvents eventsPhoto={Elon}/>
        <PastEvents eventsPhoto={Gavan}/>
        <EventInfo eventsPhoto={DeskPicture}/>
      </div>
    );
  }
}
