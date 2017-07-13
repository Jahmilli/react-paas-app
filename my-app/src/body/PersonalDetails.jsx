import React, { Component } from 'react';

export default class PersonalDetails extends Component {
  render() {
    return (
      <div className="PersonalDetails">
        <p><strong> {this.props.first} {this.props.last}</strong> <br /> {this.props.info} </p>
        <img className="ProfilePicture" alt="Hello" src={this.props.photo} />
      </div>
    );
  }
}
