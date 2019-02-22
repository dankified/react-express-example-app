import React from 'react'
import {Navbar} from 'react-bootstrap'
import '../styles/footer.css'

const Footer = () => {
  return(
  <Navbar bg="dark" variant="dark" className='foot-box'>
    <Navbar.Brand href="#home">

      < a  target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer"  className='white' href = 'https://github.com/leopolicastro' > < i class = "fab fa-github-square foot-font" > </i >  </a > 
      < a  target="_blank" rel="noopener noreferrer" className='linkedin' href = "https://www.linkedin.com/in/leo-policastro/" > < i class = "fab fa-linkedin foot-font" > </i></a > 
       < a  target="_blank" rel="noopener noreferrer" className="twitter" href = "https://twitter.com/lpolicastro84" > < i class = "fab fa-twitter-square foot-font" > </i></a >
      
    </Navbar.Brand>
  </Navbar>
  )
}

export default Footer
