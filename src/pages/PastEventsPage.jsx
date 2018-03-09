import React, { Component } from 'react';
import Gavan from '../images/space_panel_night_gavan.jpg';
import PastEvents from '../body/PastEvents';

export default class PastEventsPage extends Component {
  render() {
    return (
      <div className="EventsPage">
        <PastEvents eventsPhoto={Gavan}/>
      </div>
    );
  }
}
