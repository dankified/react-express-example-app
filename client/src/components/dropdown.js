import React from 'react';
import { MenuItem, ButtonToolbar, DropdownButton } from 'react-bootstrap';


const Button = () => {
    return <ButtonToolbar>
        <DropdownButton bsSize="small" title="LocalBrewCrew" id="dropdown-size-small">
          <MenuItem eventKey="1" href="https://localbrew.herokuapp.com/" rel="noopener noreferrer">
            Home
          </MenuItem>
          <MenuItem eventKey="2" href="https://wyncode.co/" target="_blank" rel="noopener noreferrer">
            Wyncode
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4" href="https://www.instagram.com/wyncode/" target="_blank" rel="noopener noreferrer">
            Follow Us
          </MenuItem>
        </DropdownButton>
      </ButtonToolbar>;
}

export default Button; 
