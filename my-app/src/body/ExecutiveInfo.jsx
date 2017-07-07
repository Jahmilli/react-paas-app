import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Logo from '../images/seb_photo.jpg';

export default class ExecutiveInfo extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="Executive-Photos">
          <div className="row">
            <div className="col-md-2 col-md-offset-2">
              <PersonalDetails title="Gavan Huang" info="President" photo={Logo}></PersonalDetails>
            </div>
            <div className="col-md-2">
              <PersonalDetails title="Sebastian Southern" info="Vice President" photo={Logo}></PersonalDetails>
            </div>
            <div className="col-md-2">
              <PersonalDetails title="Blake Cox" info="Vice President" photo={Logo}></PersonalDetails>
            </div>
            <div className="col-md-2">
              <PersonalDetails title="Karolyn Jane" info="Vice President" photo={Logo}></PersonalDetails>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-2">
              <PersonalDetails title="Kshitij Kharub" info="Treasurer" photo={Logo}></PersonalDetails>
            </div>
            <div className="col-md-2">
              <PersonalDetails title="Alastair Bate" info="Administrator" photo={Logo}></PersonalDetails>
            </div>
            <div className="col-md-2">
              <PersonalDetails title="Benny Suryadi" info="Executive" photo={Logo}></PersonalDetails>
            </div>
            <div className="col-md-2">
              <PersonalDetails title="Argie Alaso" info="Executive" photo={Logo}></PersonalDetails>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
