import React, { Component } from 'react';
import ContainedElement from './ContainedElement';
import CarouselComponent from './CarouselComponent';
import Arrow from 'react-icons/lib/fa/arrow-right';

import DeskPicture from '../images/deskpicture.jpg';
import SebSpacePanel from '../images/space_panel_night_1.jpg';
import Gavan from '../images/space_panel_night_gavan.jpg';


import { Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
    <div className="container Section-Info">
        <h2 className="Section-Title">{this.props.children}</h2>
        <p>
        The Professional Aeronautics and Astronautics Society (PAAS UTS) is a student-run organisation working in collaboration with the AIAA.
        <br /> <br />
        The AIAA is the largest technical society devoted to the progress of engineering and science in aviation and space.
        PAAS UTS is a pre-professional society to promote interest and encourage involvement in projects and activities in the fields of space and aerospace entrepreneurship, avionics, aeronautics, and astronautics.
        We act as an open door to professional activities, recognition, and contacts that would otherwise be unavailable to students.
        </p>
        <br />
        <a className="MembershipLink" href="https://utspaasmembership.getqpay.com/" target="_blank"><button type="button">Become a member!</button></a>
        <CarouselComponent photo1={SebSpacePanel} photo2={Gavan} photo3={SebSpacePanel} photo4={Gavan}/>
        <div className="row">
          <Col sm={4}>
            <ContainedElement photo={DeskPicture} title="2016 Space Panel Night" description="This is a description of the event"/>
          </Col>
          <Col sm={4}>
            <ContainedElement photo={DeskPicture} title="2016 Space Panel Night" description="This is a description of the event"/>
          </Col>
          <Col sm={4}>
            <ContainedElement photo={DeskPicture} title="2016 Space Panel Night" description="This is a description of the event"/>
          </Col>
        </div>
      </div>
    );
  }
}
