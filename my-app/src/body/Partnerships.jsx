import React, { Component } from 'react';
import PartnershipDetails from './PartnershipDetails';
import BlueSatLogo from '../images/bluesatLogo.png';
import AIAALogo from '../images/AIAA_LOGO.xbm';

export default class Partnerships extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>Partners</h2>
        <PartnershipDetails partnerName="BLUESat"
        partnerLogo={BlueSatLogo}
        partnerInfo="BLUEsat UNSW is a student space society,
         with a mission to give students real-world experience in multi-disciplinary space engineering projects, and promote space technology in Australia."/>

         <PartnershipDetails partnerName="American Institute of Aeronautics and Astronautics"
          partnerLogo={AIAALogo}
          partnerInfo="AIAA has earned an international reputation as the preeminent publisher of cutting-edge aerospace books and journals,
          and the leading source of aerospace industry archives, dating back to the early 1900s.
          Over the past eight decades, AIAA and its predecessor organizations have published over 300 books and almost 200,000 technical articles.
          AIAA’s current publications include seven technical journals, a magazine, three book series,
          national and international standards documents, a growing number of e-books and other electronic products, and a full-service,
          interactive Web site. For the most authoritative technical publications, look to AIAA." />
      </div>
    );
  }
}
