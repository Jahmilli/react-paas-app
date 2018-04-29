import React, { Component } from 'react';
import ListAllMembers from '../executive/ListAllMembers';
import QueryMember from '../executive/QueryMember';
import AdminLinks from '../executive/AdminLinks';

export default class AdminPage extends Component {
  render() {
    return (
      <div className="Admin-Page container">
        <AdminLinks />
        <h1>Admin Page</h1>
        <p style={{margin: "25px 0 25px 0"}}>Through this page you will be able to do all of the required steps to plan and book an event with a list
           of all the documents needed to do so. Click here to review what needs to be done to plan a certain event
           and if you have any other questions please message the slack group or messenger group. If you have any
           issues with using this site or an error comes up please message Sebastian Southern. If you want to
           contribute to developing this site checkout the Github repo as displayed above :)
        </p>
        <div style={{textAlign: "center"}}>
          <QueryMember />
        </div>
        <ListAllMembers />
      </div>
    );
  }
}
