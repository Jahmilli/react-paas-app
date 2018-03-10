import React, { Component } from 'react';
import FutureEvents from '../body/FutureEvents';
import Images from '../image-urls';

export default class FutureEventsPage extends Component {
  render() {
    return (
      <div className="EventsPage">
        <FutureEvents eventsPhoto={Images.sebCStanding}/>
      </div>
    );
  }
}
