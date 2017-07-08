import React, { Component } from 'react';
import ExecutiveInfo from '../body/ExecutiveInfo';
import Partnerships from '../body/Partnerships';
import PresidentMessage from '../body/PresidentMessage';

export default class Home extends Component {
  render() {
    return (
      <div className="About">
        <PresidentMessage />
        <ExecutiveInfo />
        <hr className="HrStyle"/>
        <Partnerships />
      </div>
    );
  }
}
