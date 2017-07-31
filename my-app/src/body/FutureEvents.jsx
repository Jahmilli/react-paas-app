import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import CarouselComponent from './CarouselComponent';
import IAC from '../images/IAC_Header.jpg';

export default class FutureEvents extends Component {
  render() {
    return (
      <div>
        <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={400}>
        <h2>Future Events</h2>
        </Parallax>
        <CarouselComponent
        photo1={IAC}
        link1="https://www.facebook.com/events/289754671437502/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1264001986977158%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1264001986977158%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D"

        photo2="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/20157505_1589526341091386_5543014631079297478_o.jpg?oh=d221907855121640b8ef9e1955a8d70d&oe=5A020B7E"
        heading2="OrbitOz: How to Build a Space Business"
        link2="https://www.facebook.com/events/1927258547549124/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1264001986977158%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1264001986977158%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D"

        photo3="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18922831_1424048427674943_915990070201332786_o.jpg?oh=0bb301d3e73cbdc1ee326aff6c7b7bf6&oe=59FCC32F"
        heading3="AIAA USSB Canberra Tour"
        link3="https://www.facebook.com/events/655962771279661/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1264001986977158%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1264001986977158%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D"

        photo4={IAC}/>
      </div>
    );
  }
}
