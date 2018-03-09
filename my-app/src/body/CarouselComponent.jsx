import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'


export default class CarouselComponent extends Component {

  renderCarouselList() {
  const LIST = [
    {photo: this.props.photo1, url: this.props.link1, heading: this.props.heading1, description: this.props.description1},
    {photo: this.props.photo2, url: this.props.link2, heading: this.props.heading2, description: this.props.description2},
    {photo: this.props.photo3, url: this.props.link3, heading: this.props.heading3, description: this.props.description3},
    {photo: this.props.photo4, url: this.props.link4, heading: this.props.heading4, description: this.props.description4},
  ];

  return LIST.map((items, index) => {
    return (
    <Carousel.Item className="CarouselComponent">
      <img width={500} height={500} alt="900x500" src={items.photo}/>
      <Carousel.Caption>
        <h1>{items.heading}</h1>
        <p>{items.description}</p>
        {this.isLink(items.url)}
      </Carousel.Caption>
    </Carousel.Item>
    );
  });

  }

  isLink(url) {
    if(!url) {
      return '';
    } else {
      return <a className="CarouselLink" href={url} target="_blank">Check it out</a>
    }
  }



  render() {
    return (
      <Carousel>
      {this.renderCarouselList()}
      </Carousel>
    );
  }
}
