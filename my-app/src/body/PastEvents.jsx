import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

export default class PastEvents extends Component {
  render() {
    return (
      <div>
        <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={300}>
        <br/>
        <Link className="EventPageLink" to="/past-events"> Past Events </Link>
        </Parallax>
      </div>
    );
  }
}
