import React, { Component } from 'react';

import Images from '../image-urls';
import EventItem from './EventItem';


export default class Event extends Component {

  renderGallery() {
    return (
      <div>
        <EventItem background={Images.deskPicture} eventLink="/gallery" eventTitle="Gallery" />
        <div className="container">
          <h2>Future Events Blah blah</h2>
          <p>Lorem ipsum dolor sit amet, no habeo insolens eos. Lorem iuvaret vim ea. Sed ei aliquam maluisset. Meis diceret cu cum, at liber harum has.
             Platonem appellantur mea no, in usu consulatu deseruisse, eos suas esse ei. Magna errem nonumes ad sit, illud dolorum eam ad, et nisl blandit iudicabit cum.

             Eu appetere definitionem usu. Ne mei dicta gubergren. Eos autem mentitum ponderum an,
             sea elit instructior ad. At solet fabulas eum, persius delenit ex usu. Eu vix oporteat accusata adolescens,
             ullum alienum ne mel. Vis dolorum luptatum iracundia ad, per ut choro accumsan repudiare.
             <br/>
             Lorem ipsum dolor sit amet, no habeo insolens eos. Lorem iuvaret vim ea. Sed ei aliquam maluisset. Meis diceret cu cum, at liber harum has.
            Platonem appellantur mea no, in usu consulatu deseruisse, eos suas esse ei. Magna errem nonumes ad sit, illud dolorum eam ad, et nisl blandit iudicabit cum.

            Eu appetere definitionem usu. Ne mei dicta gubergren. Eos autem mentitum ponderum an,
            sea elit instructior ad. At solet fabulas eum, persius delenit ex usu. Eu vix oporteat accusata adolescens,
            ullum alienum ne mel. Vis dolorum luptatum iracundia ad, per ut choro accumsan repudiare.
            <br/>
            Lorem ipsum dolor sit amet, no habeo insolens eos. Lorem iuvaret vim ea. Sed ei aliquam maluisset. Meis diceret cu cum, at liber harum has.
           Platonem appellantur mea no, in usu consulatu deseruisse, eos suas esse ei. Magna errem nonumes ad sit, illud dolorum eam ad, et nisl blandit iudicabit cum.

           Eu appetere definitionem usu. Ne mei dicta gubergren. Eos autem mentitum ponderum an,
           sea elit instructior ad. At solet fabulas eum, persius delenit ex usu. Eu vix oporteat accusata adolescens,
           ullum alienum ne mel. Vis dolorum luptatum iracundia ad, per ut choro accumsan repudiare.
          </p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="EventsPage">
      <div className="container">
      <h1>What do we do?</h1>
      <p>
        PAAS UTS will be scaling massively in 2018 to provide the best opportunities to its members. Whether you are an engineering, business, law, science or art student or just a
        fellow space enthusiast we will try to cater to cater to every area of interest. These events will range from project based work with the development of a High Altitude Baloon (HAB)
        launch to social events, workshops, speaker talks and general meet ups as we hope to grow interest among all students into the areas of space.
      </p>
      </div>
        <EventItem background={Images.habLaunch} eventLink="/future-events" eventTitle="Future Events" />
        <div className="container">
          <h2>Future Events Blah blah</h2>
          <p>Lorem ipsum dolor sit amet, no habeo insolens eos. Lorem iuvaret vim ea. Sed ei aliquam maluisset. Meis diceret cu cum, at liber harum has.
             Platonem appellantur mea no, in usu consulatu deseruisse, eos suas esse ei. Magna errem nonumes ad sit, illud dolorum eam ad, et nisl blandit iudicabit cum.

             Eu appetere definitionem usu. Ne mei dicta gubergren. Eos autem mentitum ponderum an,
             sea elit instructior ad. At solet fabulas eum, persius delenit ex usu. Eu vix oporteat accusata adolescens,
             ullum alienum ne mel. Vis dolorum luptatum iracundia ad, per ut choro accumsan repudiare.
             <br/>
             Lorem ipsum dolor sit amet, no habeo insolens eos. Lorem iuvaret vim ea. Sed ei aliquam maluisset. Meis diceret cu cum, at liber harum has.
            Platonem appellantur mea no, in usu consulatu deseruisse, eos suas esse ei. Magna errem nonumes ad sit, illud dolorum eam ad, et nisl blandit iudicabit cum.

            Eu appetere definitionem usu. Ne mei dicta gubergren. Eos autem mentitum ponderum an,
            sea elit instructior ad. At solet fabulas eum, persius delenit ex usu. Eu vix oporteat accusata adolescens,
            ullum alienum ne mel. Vis dolorum luptatum iracundia ad, per ut choro accumsan repudiare.
            <br/>
            Lorem ipsum dolor sit amet, no habeo insolens eos. Lorem iuvaret vim ea. Sed ei aliquam maluisset. Meis diceret cu cum, at liber harum has.
           Platonem appellantur mea no, in usu consulatu deseruisse, eos suas esse ei. Magna errem nonumes ad sit, illud dolorum eam ad, et nisl blandit iudicabit cum.

           Eu appetere definitionem usu. Ne mei dicta gubergren. Eos autem mentitum ponderum an,
           sea elit instructior ad. At solet fabulas eum, persius delenit ex usu. Eu vix oporteat accusata adolescens,
           ullum alienum ne mel. Vis dolorum luptatum iracundia ad, per ut choro accumsan repudiare.
          </p>
        </div>
        <EventItem background={Images.gavanPeaceSign} eventLink="/past-events" eventTitle="Past Events" />
        <div className="container">
          <h2>Future Events Blah blah</h2>
          <p>Lorem ipsum dolor sit amet, no habeo insolens eos. Lorem iuvaret vim ea. Sed ei aliquam maluisset. Meis diceret cu cum, at liber harum has.
             Platonem appellantur mea no, in usu consulatu deseruisse, eos suas esse ei. Magna errem nonumes ad sit, illud dolorum eam ad, et nisl blandit iudicabit cum.

             Eu appetere definitionem usu. Ne mei dicta gubergren. Eos autem mentitum ponderum an,
             sea elit instructior ad. At solet fabulas eum, persius delenit ex usu. Eu vix oporteat accusata adolescens,
             ullum alienum ne mel. Vis dolorum luptatum iracundia ad, per ut choro accumsan repudiare.
             <br/>
             Lorem ipsum dolor sit amet, no habeo insolens eos. Lorem iuvaret vim ea. Sed ei aliquam maluisset. Meis diceret cu cum, at liber harum has.
            Platonem appellantur mea no, in usu consulatu deseruisse, eos suas esse ei. Magna errem nonumes ad sit, illud dolorum eam ad, et nisl blandit iudicabit cum.

            Eu appetere definitionem usu. Ne mei dicta gubergren. Eos autem mentitum ponderum an,
            sea elit instructior ad. At solet fabulas eum, persius delenit ex usu. Eu vix oporteat accusata adolescens,
            ullum alienum ne mel. Vis dolorum luptatum iracundia ad, per ut choro accumsan repudiare.
            <br/>
            Lorem ipsum dolor sit amet, no habeo insolens eos. Lorem iuvaret vim ea. Sed ei aliquam maluisset. Meis diceret cu cum, at liber harum has.
           Platonem appellantur mea no, in usu consulatu deseruisse, eos suas esse ei. Magna errem nonumes ad sit, illud dolorum eam ad, et nisl blandit iudicabit cum.

           Eu appetere definitionem usu. Ne mei dicta gubergren. Eos autem mentitum ponderum an,
           sea elit instructior ad. At solet fabulas eum, persius delenit ex usu. Eu vix oporteat accusata adolescens,
           ullum alienum ne mel. Vis dolorum luptatum iracundia ad, per ut choro accumsan repudiare.
          </p>
        </div>
      </div>
    );
  }
}
