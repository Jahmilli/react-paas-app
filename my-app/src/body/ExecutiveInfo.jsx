import SEBASTIAN_DESCRIPTION from './ExecutiveDescriptions';
import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Logo from '../images/seb_paas_profile.jpg';

import { Col } from 'react-bootstrap';

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

  render() {
    return (
      <div className="container-fluid">
        <h2>Meet the 2017 Executive Members!</h2>
        <div className="row">
          <Col md={2} mdOffset={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Gavan" last="Huang" info="President" description={SEBASTIAN_DESCRIPTION.SEBASTIAN_DESCRIPTION} photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Sebastian" last="Southern" info="Vice President" photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Blake" last="Cox" info="Vice President" photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Karolyn" last="Jane" info="Vice President" photo={Logo}></PersonalDetails>
          </Col>
        </div>
        <div className="row">
          <Col md={2} mdOffset={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Kshitij" last="Kharub" info="Treasurer" photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Alastair" last="Bate" info="Administrator" photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Benny" last="Suryadi" info="Executive" photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Argie" last="Alaso" info="Executive" photo={Logo}></PersonalDetails>
          </Col>
        </div>
        <div className="row ExecutiveDescriptions">
          <p className="ExecutiveDescriptions">{this.state.text}</p>
        </div>
      </div>
    );
  }
}
