import React from 'react';
import ReactDom from 'react-dom';


class Slideshow extends React.Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="Concrete Beach Brewery" src="https://www.amicon.us/wp-content/uploads/2014/09/0000_Layer-21.jpg" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="Proof Brewery" src="https://media-cdn.tripadvisor.com/media/photo-o/06/4c/be/a2/proof-brewing-company.jpg" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="Funky Brewery" src="http://cmgpbpfeastpb.files.wordpress.com/2014/05/funkybuddha1.jpg" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
    }
}
