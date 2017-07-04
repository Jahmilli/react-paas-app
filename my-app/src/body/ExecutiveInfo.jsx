import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Logo from '../images/seb_photo.jpg';

export default class ExecutiveInfo extends Component {
  render() {
    return (
      <div>
        <PersonalDetails title="Sebastian Southern" info="This is some info of the person" photo={Logo}></PersonalDetails>


      </div>
    );
  }
}
