import React, { Component } from 'react';

export default class PersonalDetails extends Component {
  handleChange() {
      this.props.changeLink(this.props.description)
  }

  render() {
    return (
      <div className="PersonalDetails">
        <p><strong> {this.props.first} {this.props.last}</strong> <br /> {this.props.title} </p>
        <img onClick={this.handleChange.bind(this)} className="ProfilePicture" alt="Hello" src={this.props.photo} />
      </div>
    );
  }
}
