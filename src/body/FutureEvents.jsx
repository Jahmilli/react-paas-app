import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import CarouselComponent from './CarouselComponent';

import Images from '../image-urls';

export default class FutureEvents extends Component {
  render() {
    return (
      <div>
        <Parallax className="EventPageSpotlightImg" bgImage={this.props.eventsPhoto} strength={400}>
        <h2>Future Events</h2>
        </Parallax>
          <CarouselComponent
          carouselClassName="CarouselEventLockup CarouselComponent"
          photo1={Images.iacBanner} heading1="" description1=""          
          link1="https://www.facebook.com/events/289754671437502/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1264001986977158%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1264001986977158%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D"

          photo2={Images.welcomeNight3} heading2="2018 Welcome Night" description2=""
          link2="https://www.facebook.com/events/1767086486664256/"

          photo3={Images.futureEvents.qaSpacePanelNight2018} heading3="" description3=""
          link3="https://www.facebook.com/events/152272708820985/"

          photo4={Images.iacBanner} heading4="" description4=""
          link4="" />
      </div>
    );
  }
}
