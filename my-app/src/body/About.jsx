import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


export default class About extends Component {
  render() {
    return (
      <div>
        <h2 className="Section-Title">{this.props.children}</h2>
        <p className="Section-Info">
        The Professional Aeronautics and Astronautics Society (PAAS UTS) is a student-run organisation working in collaboration with the AIAA.
        <br /> <br />
        The AIAA is the largest technical society devoted to the progress of engineering and science in aviation and space.
        PAAS UTS is a pre-professional society to promote interest and encourage involvement in projects and activities in the fields of space and aerospace entrepreneurship, avionics, aeronautics, and astronautics.
        We act as an open door to professional activities, recognition, and contacts that would otherwise be unavailable to students.
        </p>
        <br />
        <button type="button">Meet the Crew!</button>
      </div>
    );
  }
}
