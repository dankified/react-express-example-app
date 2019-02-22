import React from 'react';
import { Dropdown, ButtonToolbar, DropdownButton } from 'react-bootstrap';


const Button = () => {
    return <ButtonToolbar>
        <DropdownButton bsSize="small" title="Learn More" id="dropdown-size-small">
          <Dropdown eventKey="1" href="https://localbrew.herokuapp.com/" rel="noopener noreferrer">
            Home
          </Dropdown>
          <Dropdown eventKey="2" href="https://wyncode.co/" target="_blank" rel="noopener noreferrer">
            Wyncode
          </Dropdown>
          <Dropdown divider />
          <Dropdown eventKey="4" href="https://www.instagram.com/wyncode/" target="_blank" rel="noopener noreferrer">
            Follow Us
          </Dropdown>
        </DropdownButton>
      </ButtonToolbar>;
}

export default Button; 
