import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';


export default class FutureEvents extends Component {
  render() {
    return (
      <div>
        <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={400}>
        <br/>
        <h2>Future Events</h2>
        </Parallax>
      </div>
    );
  }
}
