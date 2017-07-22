import React, { Component } from 'react';

export default class PartnershipDetails extends Component {
  render() {
    return (
      <div className="container-fluid PartnershipDetails">
      <a target="_blank" href={this.props.link}>
        <img alt="Partner Logo" src={this.props.partnerLogo}></img>
      </a>
      </div>
    );
  }
}
