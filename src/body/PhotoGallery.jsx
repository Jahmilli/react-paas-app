import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PHOTOLIST = [
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18278600_1503656399678381_3480088402011775015_o.jpg?oh=066492ad23ab20bf98459aa279047982&oe=5A1141E8"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/18216892_1503654216345266_6662966836623489255_o.jpg?oh=ba96e20fff8857eed548099308d75bd4&oe=59F7C797"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19679359_1573388496038504_3592417853422282416_o.jpg?oh=5a5804935c53158033e6e7b4e1bf5cf2&oe=5A04850B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
  {url: "https://scontent-syd2-1.xx.fbcdn.net/v/t31.0-8/19780611_1573388502705170_135582896334775158_o.jpg?oh=90d3dab781173876d83cce2ef3572fbc&oe=5A02981B"},
];

export default class PhotoGallery extends Component {
renderPhotos() {
  return PHOTOLIST.map((x, index) => {

    return (
    <div className="GalleryImageLockup">
      <Link to='gallery-carousel'>
        <img key={index} className="GalleryImage" src={x.url} alt="Gallery Image" />
      </Link>
    </div>
    );
  });
}

  render() {
    return (
      <div className="container-fluid">
        <h2>Photo Gallery</h2>
        <div className="row">
            {this.renderPhotos()}
        </div>
      </div>
    );
  }
}
