import React, { Component } from 'react';
import DeskPicture from '../images/deskpicture.jpg';
import PhotoGallery from '../body/PhotoGallery';

export default class GalleryPage extends Component {
  render() {
    return (
      <div className="EventsPage">
        <PhotoGallery eventsPhoto={DeskPicture}/>
      </div>
    );
  }
}
