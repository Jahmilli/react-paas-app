import React, { Component } from 'react';

export default class MemberDetails extends Component {
  render() {
    return (
      <div className="Member-Info-Lockup">
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
        <p>{this.props.birthday}</p>
        <p>{this.props.faculty}</p>
        <br />
      </div>
    );
  }
}
