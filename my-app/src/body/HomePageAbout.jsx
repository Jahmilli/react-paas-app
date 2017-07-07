import React, { Component } from 'react';
import ContainedElement from './ContainedElement';
import DeskPicture from '../images/deskpicture.jpg';
import Picture from '../images/space_panel_night_1.jpg';


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
        <button type="button">Become a member!</button>
        <div className="Carousel">
          <img src={Picture} />
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ContainedElement photo={DeskPicture} text="2016 Space Panel Night"/>
          </div>
          <div className="col-sm-4">
            <ContainedElement photo={DeskPicture} text="2016 Space Panel Night"/>
          </div>
          <div className="col-sm-4">
            <ContainedElement photo={DeskPicture} text="2016 Space Panel Night"/>
          </div>
        </div>
      </div>
    );
  }
}
