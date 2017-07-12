import React, { Component } from 'react';
import { Parallax } from 'react-parallax';


export default class PastEvents extends Component {
  render() {
    return (
      <div>
        <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={400}>
        <br/>
        <h1> Past Events </h1>
        </Parallax>
      </div>
    );
  }
}
