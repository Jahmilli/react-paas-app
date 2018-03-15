import Executive from './ExecutiveDescriptions';
import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Images from '../image-urls';

import { Col } from 'react-bootstrap';
/*
return Executive.map((exec, index) => {
console.log(exec)
  return (
    <Col md={2} mdOffset={2}>
      <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first={exec.firstName} last={exec.lastName} title={exec.title} description={exec.description} photo={Images.profiles.gavanProfile}></PersonalDetails>
    </Col>
  );
});
*/

export default class ExecutiveInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Click on the images to see a description!',
    }
  }

  onChangeLinkName(newName) {
    this.setState({text: newName})
  }

  renderExecDescription() {
    return (
      <div>
        <div className="row ExecutiveDescriptions">
          <p className="ExecutiveDescriptions">{this.state.text}<br /></p>
        </div>
      </div>
    );
  }

  renderExecutiveComponent() {
  var counter = 0;
    return Executive.map((exec) => {
      return (
        <Col md={3} >
          <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first={exec.firstName} last={exec.lastName} title={exec.title} description={exec.description} photo={exec.profilePicture}></PersonalDetails>
        </Col>
      )
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Meet the 2018 Executive Members!</h2>
        <div className="row">
          {this.renderExecutiveComponent()}
        </div>
      </div>
    );
  }
}
