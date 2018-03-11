import React, { Component } from 'react';
import ContainedElement from './ContainedElement';
import CarouselComponent from './CarouselComponent';
import ExternalLink from 'react-icons/lib/fa/external-link';

import Images from '../image-urls';

import { Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <div className="container Section-Info">
        <h2 className="Section-Title">About</h2>
        <div className="Home-About-Info">
          <p>
          The Professional Aeronautics and Astronautics Society (PAAS UTS) is a student-run organisation working in collaboration with the AIAA.
          <br /> <br />
          The AIAA is the largest technical society devoted to the progress of engineering and science in aviation and space.
          PAAS UTS is a pre-professional society to promote interest and encourage involvement in projects and activities in the fields of space and aerospace entrepreneurship, avionics, aeronautics, and astronautics.
          We act as an open door to professional activities, recognition, and contacts that would otherwise be unavailable to students.

          </p>
          <br />
          <a className="MembershipLink" href="https://activateuts.com.au/clubs/professional-aeronautics-and-astronautics-society-paas" target="_blank"><button type="button"><ExternalLink /> Become a member!</button></a>
        </div>
          <CarouselComponent
          carouselClassName="CarouselComponent"
          photo1={Images.sebCStanding} heading1="" description1="Seb C with Warwick Holmes and Stephen Freeland" 
          photo2={Images.welcomeNight1} heading2="" description2="2018 Welcome Night"
          photo3={Images.welcomeNight2} heading3="" description3="2018 Welcome Night"
          photo4={Images.welcomeNight3} heading4="" description4="2018 Welcome Night" />

        <div className="row">
          <Col sm={4}>
            <ContainedElement photo={Images.deskPicture} title="2016 Space Panel Night" description="This is a description of the event"/>
          </Col>
          <Col sm={4}>
            <ContainedElement photo={Images.deskPicture} title="2016 Space Panel Night" description="This is a description of the event"/>
          </Col>
          <Col sm={4}>
            <ContainedElement photo={Images.deskPicture} title="2016 Space Panel Night" description="This is a description of the event"/>
          </Col>
        </div>
      </div>
    );
  }
}
