import React from 'react';


export default class Title extends React.Component {
  render () {
    return (
      <div className="Title-Lockup">
        <h1>{this.props.children}</h1>
        <p className="UTS-Kicker">University of Technology Sydney</p>
        <p className="Kicker">Shaping the Future of Aerospace</p>
      </div>
    );
  }
}
