import React, { Component } from 'react';
import PartnershipDetails from './PartnershipDetails';
import BlueSatLogo from '../images/bluesatLogo.png';

export default class Partnerships extends Component {
  render() {
    return (
      <div>
        <h2>Partnerships</h2>
        <PartnershipDetails partnerName="BlueSat"
        partnerLogo={BlueSatLogo}
        partnerInfo="BLUEsat UNSW is a student space society,
         with a mission to give students real-world experience in multi-disciplinary space engineering projects, and promote space technology in Australia."/>
      </div>
    );
  }
}
