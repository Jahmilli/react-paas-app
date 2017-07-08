import React, { Component } from 'react';

export default class PartnershipDetails extends Component {
  render() {
    return (
      <div className="container-fluid PartnershipDetails">
        <h3>{this.props.partnerName}</h3>
        <img alt="Partner Logo" src={this.props.partnerLogo}></img>
        <p>{this.props.partnerInfo}</p>
      </div>
    );
  }
}
