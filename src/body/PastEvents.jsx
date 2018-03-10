import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import CarouselComponent from './CarouselComponent';

import Images from '../image-urls';
import SpacePanel from '../images/space_panel_night_1.jpg';

export default class PastEvents extends Component {
  render() {
    return (
      <div>
        <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={300}>
        <h2>Past Events</h2>
        </Parallax>
        <CarouselComponent
        photo1={Images.sebCStanding}
        heading1="Q&A Space Panel Night"
        link1="https://www.facebook.com/events/1515511468511749/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1264001986977158%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1264001986977158%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D"

        photo2={Images.pastEvents.spaceStartUpForDummies}
        heading2="OrbitOz: Space Start-Ups for Dummies"
        link2="https://www.facebook.com/events/429577420755189/"

        photo3={Images.pastEvents.startGazingNight}
        heading3="PAASxPhotoSoc Stargazing Night"
        link3="https://www.facebook.com/events/1725987907709070/"

        photo4={Images.pastEvents.stemSports}
        heading4="STEM Sports"
        link4="https://www.facebook.com/events/825003464331274/"/>
      </div>
    );
  }
}
