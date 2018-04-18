import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

let URL = '/admin/search/'
export default class QueryMember extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      memberDetails: []
    }
  }

  _onPressButtonPOST() {
    if(this.state.firstName.length < 1 && this.state.lastName.length < 1) {
      alert("Please enter correct details");
    } else {
      fetch(URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.state.firstName.trim(),
          lastName: this.state.lastName.trim(),
        })
      }).then((res) => {return res.json()})
        .then((user) => {
          this.setState({memberDetails: user})
          console.log(user);
        })
        .catch((err) => {
          console.error("Error occured " + err);
        });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  renderMemberDetails() {
    if(this.state.memberDetails.length > 1) {
      let user = this.state.memberDetails;
      return (
        <div style={{textAlign: "left"}}>
          <p><strong>Name:</strong> {user[2]} {user[3]}</p>
          <p><strong>Email:</strong> {user[0]}</p>
          <p><strong>Faculty:</strong> {user[11]}</p>
          <p><strong>Signed up:</strong> {user[1]}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{display: "inline-block"}}>
      <form className="QueryMember-Form" onSubmit={this.handleSubmit}>
        <FormGroup controlId="firstName">
          <FormControl type="text" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="lastName">
          <FormControl type="text" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit" onClick={this._onPressButtonPOST.bind(this)} bsSize="large" bsStyle="primary">
          Send Message
        </Button>
      </form>
      {this.renderMemberDetails()}
      </div>
    );
  }
}
