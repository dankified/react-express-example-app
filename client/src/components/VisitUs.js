import React from "react";
import { Link } from 'react-router-dom';


class VisitUs extends React.Component {
  render() {
    return (
      <div id="visit" >
        <Link className='footerabout' to="/about"><p>About</p></Link>
        <p>_________</p>
        <p>Visit Us</p>
        <p>LocalBrew</p>
        <p>549 NW 28th St</p>
        <p>Miami, FL 33127</p>        
      </div>
    );
  }
}

export default VisitUs;
