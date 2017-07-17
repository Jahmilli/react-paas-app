import React, { Component } from 'react';
import Elon from '../images/iac_2016_elon_musk.jpg';
import FutureEvents from '../body/FutureEvents';

export default class FutureEventsPage extends Component {
  render() {
    return (
      <div className="EventsPage">
        <FutureEvents eventsPhoto={Elon}/>
      </div>
    );
  }
}
