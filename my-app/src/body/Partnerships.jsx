import React, { Component } from 'react';
import PartnershipDetails from './PartnershipDetails';
import BlueSatLogo from '../images/bluesatLogo.png';
import AIAALogo from '../images/AIAA_LOGO.xbm';

export default class Partnerships extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>Partners</h2>
        <PartnershipDetails partnerLogo={BlueSatLogo} link="http://bluesat.com.au/"/>
        <PartnershipDetails partnerLogo={AIAALogo} link="https://www.aiaa.org/"/>
      </div>
    );
  }
}
