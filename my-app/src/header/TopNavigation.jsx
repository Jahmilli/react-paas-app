import React from 'react';

export default class TopNavigation extends React.Component {

  render() {
    return (
      <div className = "navbar-lockup">
        <div className = "header-logo">
        </div>
        <div className = "nav-right">
          <a href = "index.html">Home</a>
          <a href = "executives.html">About</a>
          <a href = "events.html">Events</a>
          <a href = "#">Contact</a>
        </div>
      </div>
    );
  }
}
