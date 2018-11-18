import React from 'react';
import Formspage from './Newsletter.js'
import VisitUs from './VisitUs.js'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";


const Footer =  () => {
     
    return <footer id="footer">
        <div id="socialnewsbox">
          <div id="social">
            <img className="socialicons" src="https://leopolicastro.github.io/basic/if_facebook_28291.png" alt="facebookicon" />
            <img className="socialicons" src="https://leopolicastro.github.io/basic/if_linkedin_28298.png" alt="linkedinicon" />
            <img className="socialicons" src="https://leopolicastro.github.io/basic/if_twitter_28313.png" alt="twittericon" />
            <img className="socialicons" src="https://leopolicastro.github.io/basic/if_rss_28308.png" alt="rssicon" />
          </div>
          {/* <div id="newsletter" /> */}
          <Formspage />
        </div>
        <VisitUs />
        
        <div id="footerlogo">
        <p>Wyncode Academy</p>
        <img src="https://leopolicastro.github.io/basic/wyncode-icon.jpg" alt="logo" />
        </div>

      </footer>;
}

export default Footer;
