import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import MemberDetails from './MemberDetails';

const URL = '/admin/members';
export default class ListAllMembers extends Component {
  constructor(props) {
    super(props);
    this.state= {
      memberList: []
    };
  }

  getMembers() {
    fetch(URL)
      .then((res) => {return res.json()})
      .then((members) => {
        this.setState({ memberList: members });
      })
      .catch(function(err) {
        console.error(err)
      })
  }

  mapMembers() {
    if(this.state.memberList.length > 1) {
      return this.state.memberList.map((member, index) => {
        return (
          <div>
            <MemberDetails name={member[3]} email={member[0]} birthday={member[7]} faculty={member[11]} />
          </div>
        );
      })
    }
  }


  render() {
    return (
      <div>
        <Button onClick={this.getMembers.bind(this)}>Get Member List</Button>
        {this.mapMembers()}
      </div>
    );
  }
}
