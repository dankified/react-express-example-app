import React from 'react';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";


const Footer =  () => {
     
    return (
        <footer id="footer" >
            <div className="social-letter">
                {/* <FontAwesomeIcon icon='facebook'/> */}
                <i className="fab fa-facebook"></i>
                <a href="http://twitter.com">
                    <i className="fab fa-twitter fa-5x"></i>
                </a>
            </div>
            <div className="visit">
            </div>
            <div className="calendar">                
            </div>
        </footer>)
}

export default Footer;
