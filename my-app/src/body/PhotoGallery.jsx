import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import GalleryThumbnail from './GalleryThumbnail';
import ContainedElement from './ContainedElement';

export default class PhotoGallery extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>Photo Gallery</h2>
        <div className="row">
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18278600_1503656399678381_3480088402011775015_o.jpg?oh=066492ad23ab20bf98459aa279047982&oe=5A1141E8"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18278758_1503656293011725_5403458170052193891_o.jpg?oh=15b569602ce1f20fefc850d0e2b71ec7&oe=5A0B9F27"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18278370_1503653486345339_4338202432376378564_o.jpg?oh=0e77ee4c61ed0d45e478bcccefdaeb8d&oe=59F81741"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18319417_1503653586345329_555191172687715752_o.jpg?oh=54d2495c06f976f3f25eafd2e27c8f2c&oe=59F51C12"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18278231_1503650906345597_3340289705568077123_o.jpg?oh=3d6edd41a2fcf596fae24a55c14eab4a&oe=59C4601F"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18278177_1503654749678546_1625049053533782682_o.jpg?oh=fd7a5309712d1d654afd7f9f62dd761f&oe=5A0EF045"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18278108_1503653023012052_3627867773812429070_o.jpg?oh=e9c4e1afa3abe6441b07e8ebc2e440e0&oe=59F125DA"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/17499555_1462234210487267_2556479780539137061_n.jpg?oh=9401547d56b3ee5c4942305a71059624&oe=59C6E944"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/17626693_1462234027153952_9135996673227558302_n.jpg?oh=1087f1927c7112bb09e7884f1a09106a&oe=5A06D596"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/17626693_1462234027153952_9135996673227558302_n.jpg?oh=1087f1927c7112bb09e7884f1a09106a&oe=5A06D596"/>
          </Col>
          <Col className="GalleryImageLockup" md={3} style={{height: "200"}}>
            <GalleryThumbnail
            photo="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/17626693_1462234027153952_9135996673227558302_n.jpg?oh=1087f1927c7112bb09e7884f1a09106a&oe=5A06D596"/>
          </Col>

        </div>
      </div>
    );
  }
}
