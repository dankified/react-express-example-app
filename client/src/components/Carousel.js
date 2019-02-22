import React from 'react';
import {
  Carousel
} from 'react-bootstrap';

class Slideshow extends React.Component {
    render() {
        return<div className="car-box">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = "http://miamifoodpug.com/2017/09/veza-sur-brewing-co/veza-sur-veza-sur/"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = "https://media-cdn.tripadvisor.com/media/photo-o/06/4c/be/a2/proof-brewing-company.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = "http://cmgpbpfeastpb.files.wordpress.com/2014/05/funkybuddha1.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
</div>
    }}

    export default Slideshow
