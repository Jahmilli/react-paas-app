import Executive from './ExecutiveDescriptions';
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
        <h2>Meet the 2018 Executive Members!</h2>
        <div className="row">
          <Col md={2} mdOffset={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Gavan" last="Huang" title={Executive.GAVAN.title} description={Executive.GAVAN.description} photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Sebastian" last="Southern" title={Executive.SEBASTIAN.title} description={Executive.SEBASTIAN.description} photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Kshitij" last="Karub" title={Executive.KSHITIJ.title} description={Executive.KSHITIJ.description} photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Jason" last="Ho" title={Executive.JASON.title} description={Executive.JASON.description} photo={Logo}></PersonalDetails>
          </Col>
        </div>
        <div className="row">
          <Col md={2} mdOffset={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Callum" last="Oldfield" title={Executive.CALLUM.title} description={Executive.CALLUM.description} photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Caley" last="Yarnold" title={Executive.CALEY.title} description={Executive.CALEY.description} photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Argie" last="Alaso" title={Executive.ARGIE.title} description={Executive.ARGIE.description} photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Georgia" last="May McCarthy" title={Executive.GEORGIA.title} description={Executive.GEORGIA.description} photo={Logo}></PersonalDetails>
          </Col>
        </div>
        <div className="row">
          <Col md={2} mdOffset={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Shivangi" last="Singh" title={Executive.SHIVANGI.title} description={Executive.SHIVANGI.description} photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Jonathan" last="Reibel" title={Executive.JONATHAN.title} description={Executive.JONATHAN.description} photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Michael" last="Fedulov" title={Executive.MICHAEL.title} description={Executive.MICHAEL.description} photo={Logo}></PersonalDetails>
          </Col>
          <Col md={2}>
            <PersonalDetails changeLink={(newName) => this.onChangeLinkName(newName)} first="Alastair" last="Bate" title={Executive.ALASTAIR.title} description={Executive.ALASTAIR.description} photo={Logo}></PersonalDetails>
          </Col>
        </div>
        <div className="row ExecutiveDescriptions">
          <p className="ExecutiveDescriptions">{this.state.text}</p>
        </div>
      </div>
    );
  }
}
