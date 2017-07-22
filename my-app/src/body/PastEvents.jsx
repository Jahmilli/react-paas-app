import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import CarouselComponent from './CarouselComponent';

import SpacePanel from '../images/space_panel_night_1.jpg';

export default class PastEvents extends Component {
  render() {
    return (
      <div>
        <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={300}>
        <h2>Past Events</h2>
        </Parallax>
        <CarouselComponent
        photo1={SpacePanel}
        heading1="Q&A Space Panel Night"
        link1="https://www.facebook.com/events/1515511468511749/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1264001986977158%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1264001986977158%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D"

        photo2="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18673130_1524469010930453_6797362723595627135_o.jpg?oh=a2d1b4d027b36a338785e5d409feb91a&oe=59FFCA4C"
        heading2="OrbitOz: Space Start-Ups for Dummies"
        link2="https://www.facebook.com/events/429577420755189/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1264001986977158%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1264001986977158%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D"

        photo3="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/17361911_1859239714314573_4151115201937412583_n.jpg?oh=acf365fca519a89ff8eacedf87e23a36&oe=59F073D6"
        heading3="OrbitOz: Newspace- Australia Poised for Rapid Growth?"
        link3="https://www.facebook.com/events/1380870998642033/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1264001986977158%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1264001986977158%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D"

        photo4="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-0/p235x350/16114371_1393318467378842_7323173519796540149_n.jpg?oh=dcae3bd46d3f2a949cccaa4be1462150&oe=59F9CBB7"
        heading4="Orbitoz: Understanding the Space Industy"
        link4="https://www.facebook.com/events/1635678703401342/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1264001986977158%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1264001986977158%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D"/>
      </div>
    );
  }
}
