import React, { Component } from 'react';

export default class PersonalDetails extends Component {
  render() {
    return (
      <div>
        <h2> {this.props.title} </h2>
        <p> {this.props.info} </p>
        <img alt="Hello" src={this.props.photo} />

      </div>
    );
  }
}
