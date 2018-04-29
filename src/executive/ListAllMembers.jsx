import React, { Component } from 'react';
import { Button, Col, Panel, Row } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

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
          <Col md={4}>
            <div style={{textAlign: "left", marginTop: "5vh"}}>
              <Panel bsStyle="success">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">{member[2]} {member[3]}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <div style={{marginBottom: "15px"}}>
                    <p><strong>Email</strong><br /> {member[0]}</p>
                    <p><strong>Birthday</strong><br /> {member[1]}</p>
                    <p><strong>Faculty</strong><br /> {member[11]}</p>
                  </div>
                </Panel.Body>
              </Panel>
            </div>
          </Col>
        );
      })
    }
  }

  render() {
    return (
      <div className="container">
        <Button type="submit" bsStyle="primary" onClick={this.getMembers.bind(this)}>
        Click Me
        </Button>
        <Row>
          {this.mapMembers()}
        </Row>
      </div>
    );
  }
}
