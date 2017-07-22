import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'


export default class CarouselComponent extends Component {


  

  render() {
    return (
      <Carousel>
    <Carousel.Item className="CarouselComponent">
      <img width={1000} height={500} alt="900x500" src={this.props.photo1}/>
      <Carousel.Caption>
        <h3>{this.props.heading1}</h3>
        <p>{this.props.description1}</p>
        <a href={this.props.link1} target="_blank">Check it out</a>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="CarouselComponent">
      <img width={1000} height={500} alt="900x500" src={this.props.photo2}/>
      <Carousel.Caption>
        <h3>{this.props.heading2}</h3>
        <p>{this.props.description2}</p>
        <a href={this.props.link2} target="_blank">Check it out</a>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="CarouselComponent">
      <img width={1000} height={500} alt="900x500" src={this.props.photo3}/>
      <Carousel.Caption>
        <h3>{this.props.heading3}</h3>
        <p>{this.props.description3}</p>
        <a href={this.props.link3} target="_blank">Check it out</a>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="CarouselComponent">
      <img width={1000} height={500} alt="900x500" src={this.props.photo4}/>
      <Carousel.Caption>
        <h3>{this.props.heading4}</h3>
        <p>{this.props.description4}</p>
        <a href={this.props.link4} target="_blank">Check it out</a>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    );
  }
}
