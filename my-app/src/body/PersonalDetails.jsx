import React, { Component } from 'react';

export default class PersonalDetails extends Component {
  render() {
    return (
      <div className="PersonalDetails">
        <h3> {this.props.first} <br /> {this.props.last} </h3>
        <p>{this.props.info} </p>
        <img className="ProfilePicture" alt="Hello" src={this.props.photo} />
      </div>
    );
  }
}
