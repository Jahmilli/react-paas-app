import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Logo from '../images/seb_paas_profile.jpg';

export default class ExecutiveInfo extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>Meet the 2017 Executive Members!</h2>
        <div className="row">
          <div className="col-md-2 col-md-offset-2">
            <PersonalDetails first="Gavan" last="Huang" info="President" photo={Logo}></PersonalDetails>
          </div>
          <div className="col-md-2">
            <PersonalDetails first="Sebastian" last="Southern" info="Vice President" photo={Logo}></PersonalDetails>
          </div>
          <div className="col-md-2">
            <PersonalDetails first="Blake" last="Cox" info="Vice President" photo={Logo}></PersonalDetails>
          </div>
          <div className="col-md-2">
            <PersonalDetails first="Karolyn" last="Jane" info="Vice President" photo={Logo}></PersonalDetails>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-md-offset-2">
            <PersonalDetails first="Kshitij" last="Kharub" info="Treasurer" photo={Logo}></PersonalDetails>
          </div>
          <div className="col-md-2">
            <PersonalDetails first="Alastair" last="Bate" info="Administrator" photo={Logo}></PersonalDetails>
          </div>
          <div className="col-md-2">
            <PersonalDetails first="Benny" last="Suryadi" info="Executive" photo={Logo}></PersonalDetails>
          </div>
          <div className="col-md-2">
            <PersonalDetails first="Argie" last="Alaso" info="Executive" photo={Logo}></PersonalDetails>
          </div>
        </div>
      </div>
    );
  }
}
