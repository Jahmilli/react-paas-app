import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

import Events from '../body/Events';
import DeskPicture from '../images/deskpicture.jpg';
import Gavan from '../images/space_panel_night_gavan.jpg';
import Elon from '../images/iac_2016_elon_musk.jpg';


export default class Event extends Component {
  render() {
    return (
      <div className="EventsPage">
        <Events />
      </div>
    );
  }
}
