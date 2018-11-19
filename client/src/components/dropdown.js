import React from 'react';
import { MenuItem, ButtonToolbar, DropdownButton } from 'react-bootstrap';


const Button = () => {
    return (
        <ButtonToolbar>
        <DropdownButton
          bsSize="small"
          title = 'LocalBrewCrew'
          id="dropdown-size-small"
        >
          <MenuItem eventKey="1" href='https://localbrew.herokuapp.com/about'>About</MenuItem>
          <MenuItem eventKey="2" href='https://wyncode.co/'>Wyncode</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4" href='https://www.instagram.com/wyncode/'>Follow Us</MenuItem>
        </DropdownButton>
      </ButtonToolbar>    
    )
}

export default Button; 