import React, { Component } from 'react';

export default class EventItem extends Component {
  render() {
    return(
      <div className="container-fluid">
        <h2>{this.props.eventTitle}</h2>
        <img src={this.props.eventPhoto} alt="Event Photo" />
        <p>{this.props.eventDescription}</p>
      </div>
    );
  }
}
