import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Elon from '../images/iac_2016_elon_musk.jpg';
import { Link } from 'react-router-dom';


export default class EventItem extends Component {
  render() {
    return(
    <div>
    <Link className="EventPageLink" to={this.props.eventLink}>{this.props.eventTitle}</Link>
    <Parallax className="EventPageSpotlightImg" bgImage={this.props.background} strength={200}>
    <br/>
    </Parallax>
    </div>
    );
  }
}
