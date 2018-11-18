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
            <a href="https://www.facebook.com/wyncode/" target="_blank">
              <img className="socialicons" src="https://leopolicastro.github.io/basic/if_facebook_28291.png" alt="facebookicon" />
            </a>
            <a href="https://www.linkedin.com/school/wyncode/" target="_blank">
              <img className="socialicons" src="https://leopolicastro.github.io/basic/if_linkedin_28298.png" alt="linkedinicon" />
            </a>
            <a href="https://twitter.com/wyncode?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
              <img className="socialicons" src="https://leopolicastro.github.io/basic/if_twitter_28313.png" alt="twittericon" />
            </a>
          <a href='https://github.com/wyncode' target="_blank">
              <img className="socialicons" id="gitlogo" src="https://leopolicastro.github.io/basic/Screen%20Shot%202018-11-18%20at%2011.34.21%20AM.png" alt="githubicon" />
            </a>
          </div>
          {/* <div id="newsletter" /> */}
          <Formspage />
        </div>
        <VisitUs id='hidevisit'/>

        <div id="footerlogo">
          <p>Wyncode Academy</p>
        <a href='https://wyncode.co/' target="_blank">
          <img id="wynlogo" src="https://leopolicastro.github.io/basic/wyncode-icon.jpg" alt="wynlogo" />
        </a>
        </div>
      </footer>;
}

export default Footer;
