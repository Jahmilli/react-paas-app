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
        <PartnershipDetails partnerLogo="https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14720380_1785955378309674_873093156900455063_n.png?oh=27e27772055de7857a2a2db3220941f2&oe=5A06E405"
        link="http://orbitoz.com/"/>

      </div>
    );
  }
}
