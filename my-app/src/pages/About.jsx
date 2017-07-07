import React, { Component } from 'react';
import ExecutiveInfo from '../body/ExecutiveInfo';
import Partnerships from '../body/Partnerships';

export default class Home extends Component {
  render() {
    return (
      <div className="About">
        <ExecutiveInfo />
        <Partnerships />
      </div>
    );
  }
}
