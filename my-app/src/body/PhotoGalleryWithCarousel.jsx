import React, { Component } from 'react';
import { Carousel, Col } from 'react-bootstrap';

import ContainedElement from './ContainedElement';

const PHOTOLIST = [
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18278600_1503656399678381_3480088402011775015_o.jpg?oh=066492ad23ab20bf98459aa279047982&oe=5A1141E8"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18216892_1503654216345266_6662966836623489255_o.jpg?oh=ba96e20fff8857eed548099308d75bd4&oe=59F7C797"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"}
];


export default class PhotoGalleryWithCarousel extends Component {

  renderPhotos() {
    return PHOTOLIST.map((x, index) => {
      return (
      <div className="GalleryImageLockup">
        <img key={index} className="GalleryImageLeft" src={x.url} alt="Gallery Image" />
      </div>
      );
    });
  }


  renderCarouselList() {
    return PHOTOLIST.map((items, index) => {
      return (
      <Carousel.Item className="CarouselItem">
        <img key={index} alt="900x500" src={items.url}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      );
    });
  }


  render() {
    return (
      <div className="container-fluid">
        <h2>Photo Gallery</h2>
        <div className="row">
          <Col md={6}>
            {this.renderPhotos()}
          </Col>
          <Col md={6}>
          <Carousel className="CarouselComponentGallery">
            {this.renderCarouselList()}
          </Carousel>
          </Col>
        </div>
      </div>
    );
  }
}
