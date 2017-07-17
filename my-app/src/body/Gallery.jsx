import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

export default class Gallery extends Component {
  render() {
    return (
    <div>
      <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={400}>
      <br/>
      <h2> Gallery </h2>
      </Parallax>
    </div>
    );
  }
}
