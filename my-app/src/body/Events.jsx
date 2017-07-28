import React, { Component } from 'react';

import DeskPicture from '../images/deskpicture.jpg';
import Gavan from '../images/space_panel_night_gavan.jpg';
import Elon from '../images/iac_2016_elon_musk.jpg';

import EventItem from './EventItem';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

export default class Event extends Component {
  render() {
    return (
      <div className="EventsPage">
      <div className="container">
      <h1>What we do</h1>
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
        <EventItem background={Elon} eventLink="/future-events" eventTitle="Future Events" />

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
        <EventItem background={Gavan} eventLink="/past-events" eventTitle="Past Events" />
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
        <EventItem background={DeskPicture} eventLink="/gallery" eventTitle="Gallery" />
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
