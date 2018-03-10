import React, { Component } from 'react';
import PastEvents from '../body/PastEvents';
import Images from '../image-urls';

export default class PastEventsPage extends Component {
  render() {
    return (
      <div className="EventsPage">
        <PastEvents eventsPhoto={Images.gavanPeaceSign}/>
      </div>
    );
  }
}
