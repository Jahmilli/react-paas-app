import React, { Component } from 'react';
import { Button, Thumbnail } from 'react-bootstrap';


export default class GalleryThumbnail extends Component {
  render() {
    return (
      <div>
        <img className="GalleryImage" src={this.props.photo} alt="Gallery Image" />
      </div>


    );
  }
}
