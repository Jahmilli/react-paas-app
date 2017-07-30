import React, { Component } from 'react';
import DeskPicture from '../images/deskpicture.jpg';
import PhotoGallery from '../body/PhotoGallery';
import PhotoGalleryWithCarousel from '../body/PhotoGalleryWithCarousel';

export default class GalleryPage extends Component {
  render() {
    return (
      <div className="EventsPage">
        <PhotoGallery />
      </div>
    );
  }
}
