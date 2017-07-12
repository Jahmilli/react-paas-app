import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

export default class EventInfo extends Component {
  render() {
    return (
    <div>
      <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={400}>
      <br/>
      <h1> Event Info </h1>
      </Parallax>
    </div>
    );
  }
}
