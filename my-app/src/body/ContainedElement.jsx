import React, { Component } from 'react';
import Arrow from 'react-icons/lib/fa/arrow-right';
import { Button, Thumbnail } from 'react-bootstrap';


export default class ContainedElement extends Component {
  render() {
    return (
      <Thumbnail className="ContainedElement" src={this.props.photo} alt="242x200">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>Learn More <Arrow /></p>
      </Thumbnail>
    );
  }
}
