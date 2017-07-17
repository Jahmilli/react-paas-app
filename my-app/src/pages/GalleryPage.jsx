import React, { Component } from 'react';
import DeskPicture from '../images/deskpicture.jpg';
import Gallery from '../body/Gallery';

export default class GalleryPage extends Component {
  render() {
    return (
      <div className="EventsPage">
        <Gallery eventsPhoto={DeskPicture}/>
      </div>
    );
  }
}
