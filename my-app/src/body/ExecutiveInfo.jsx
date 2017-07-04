import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';

export default class ExecutiveInfo extends Component {
  render() {
    return (
      <div>
        <PersonalDetails title="Sebastian Southern" info="This is some info of the person"></PersonalDetails>
      </div>
    );
  }
}
