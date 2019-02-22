import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../styles/navbar.css'


class realNavbar extends React.Component {
  render(){
  return(
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="http://www.leopolicastro.com"  target="_blank" rel="noopener noreferrer" >Leo Policastro</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="My Apps" id="collasible-nav-dropdown">
            <NavDropdown.Item href="http://todo.leopolicastro.com" target="_blank" rel="noopener noreferrer" >TodoApp</NavDropdown.Item>
            <NavDropdown.Item href="http://localbrew.leopolicastro.com" target="_blank" rel="noopener noreferrer" >LocalBrew</NavDropdown.Item>
            <NavDropdown.Item href="http://tictactoe.leopolicastro.com" target="_blank" rel="noopener noreferrer" >Tic-Tac-Toe</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/leopolicastro/OS-install-files" target="_blank" rel="noopener noreferrer" >CryptoPriceTracker</NavDropdown.Item>

        {/* <NavDropdown.Divider /> */}
        {/* <NavDropdown.Item href="#action/3.4">Codewars</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
          < Nav.Link href="#features" > < a target="_blank" rel="noopener noreferrer" className='white' href='https://github.com/leopolicastro' > < i class="fab fa-github-square nav-font" > </i >  </a > < a className='linkedin' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leo-policastro/" > < i class="fab fa-linkedin nav-font" > </i></a >  < a className="twitter" target="_blank" rel="noopener noreferrer"  href = "https://twitter.com/lpolicastro84" > < i class = "fab fa-twitter-square nav-font" > </i></a ></Nav.Link >

      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
  )}
}

export default realNavbar;
