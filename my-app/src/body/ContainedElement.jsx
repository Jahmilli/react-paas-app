import React, { Component } from 'react';
import Arrow from 'react-icons/lib/fa/arrow-right';


export default class ContainedElement extends Component {
  render() {
    return (
      <div className="ContainedElement">
        <img src={this.props.photo} />
        <h2>{this.props.text}</h2>
        <p>Learn More <Arrow /> </p>
      </div>
    );
  }
}
