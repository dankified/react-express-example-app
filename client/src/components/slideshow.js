import React from 'react';
import { Carousel } from 'react-bootstrap';


class Slideshow extends React.Component {
    render() {
        return (
      
        <Carousel>
          
            <Carousel.Item>
              <img width={900} height={500} className="image1" alt="Concrete Beach Brewery" src="https://www.amicon.us/wp-content/uploads/2014/09/0000_Layer-21.jpg" />
              <Carousel.Caption className="carousel">
                <h3>Concrete Beach Brewery</h3>
                <p>
                  Huge space with a brewery, a taproom and an
                  indoor/outdoor bar pouring signature and seasonal
                  brews.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="Proof Brewery" src="https://media-cdn.tripadvisor.com/media/photo-o/06/4c/be/a2/proof-brewing-company.jpg" />
              <Carousel.Caption className="carousel">
                <h3>Proof Brewery</h3>
                <p>
                  Proof Brewing Company is Tallahassee’s First and
                  Largest Independently-Owned Production Brewery
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="Funky Brewery" src="http://cmgpbpfeastpb.files.wordpress.com/2014/05/funkybuddha1.jpg" />
            <Carousel.Caption className='carousel'>
                <h3>Funky Buddha</h3>
                <p>
                  Offering tours on weekends, this large craft brewery
                  features a no-frills taproom with games.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>    
          
        )
    }
}
export default Slideshow;
