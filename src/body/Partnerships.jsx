import React, { Component } from 'react';
import PartnershipDetails from './PartnershipDetails';
import Images from '../image-urls';

export default class Partnerships extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>Partners</h2>
        <PartnershipDetails partnerLogo={Images.partnerships.bluesatLogo} link="http://bluesat.com.au/"/>
        <PartnershipDetails partnerLogo={Images.partnerships.orbitozLogo} link="http://orbitoz.com/"/>
        <PartnershipDetails partnerLogo={Images.partnerships.aiaaLogo} link="https://www.aiaa.org/"/>
      </div>
    );
  }
}
