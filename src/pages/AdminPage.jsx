import React, { Component } from 'react';
import ListAllMembers from '../executive/ListAllMembers';
import QueryMember from '../executive/QueryMember';

export default class AdminPage extends Component {
  render() {
    return (
      <div className="Admin-Page">
        <h1>Admin Page</h1>
        <div style={{textAlign: "center"}}>
          <QueryMember />
        </div>
        <ListAllMembers />
      </div>
    );
  }
}
