import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Facebook from 'react-icons/lib/fa/arrow-left';

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
  constructor(props) {
    super(props);

    this.state = {carouselImage: 'https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18278600_1503656399678381_3480088402011775015_o.jpg?oh=066492ad23ab20bf98459aa279047982&oe=5A1141E8'}
  }

  renderPhotos() {
    return PHOTOLIST.map((x, index) => {
      return (
      <div key={index} style={{backgroundImage: `url(${x.url})`}} className="GalleryImageLeft" onClick={() => this.handleImageChange(x.url)} />
      );
    });
  }


  renderCarousel() {
    return (
      <div style={{backgroundImage: `url(${this.state.carouselImage})`}} className="GalleryCarousel" >
      </div>
    );
  }

  handleImageChange(image) {
    this.setState({carouselImage: image})
  }


  render() {
    return (
      <div className="container-fluid">
        <h2><Link to='gallery'><Facebook className="Previous-Page-Icon"/></Link>Photo Gallery</h2>
        <div className="row">
          <Col md={6}>
            {this.renderPhotos()}
          </Col>
          <Col md={6}>
            <div className="PhotoGalleryCarouselLockup">
            {this.renderCarousel()}
            </div>
          </Col>
        </div>
      </div>
    );
  }
}
