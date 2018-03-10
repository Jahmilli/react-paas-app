import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

export default class EventItem extends Component {
  render() {
    return(
      <div>
        <Link className="EventPageLink" to={this.props.eventLink}>{this.props.eventTitle}</Link>
        <div className="EventPageSpotlightImg" style={{backgroundImage: `url(${this.props.background})`}}>        
        </div>
      </div>
    );
  }
}
