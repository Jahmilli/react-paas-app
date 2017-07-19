import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import ContainedElement from './ContainedElement';

export default class PhotoGallery extends Component {

renderPhotos() {
  const PHOTOLIST = [
    {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18278600_1503656399678381_3480088402011775015_o.jpg?oh=066492ad23ab20bf98459aa279047982&oe=5A1141E8"},
    {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
    {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
    {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
    {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
    {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
    {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
    {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
    {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
    {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  ];

  return PHOTOLIST.map(x => {
  var index = 0;
    return (
    <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
      <img key={index} className="GalleryImage" src={x.url} alt="Gallery Image" />
    </Col>
    );
    index++;
  });
}


  render() {
    return (
      <div className="container-fluid">
        <h2>Photo Gallery</h2>
        <div className="row">
          {this.renderPhotos()}
        </div>
      </div>
    );
  }
}
