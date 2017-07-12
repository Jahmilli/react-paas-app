import React, { Component } from 'react';

export default class PastEvents extends Component {
  render() {
    return (
      <div>
        <h1>Past Event</h1>
        <img src={this.props.eventsPhoto} alt="Events Photo" />
      </div>
    );
  }
}
