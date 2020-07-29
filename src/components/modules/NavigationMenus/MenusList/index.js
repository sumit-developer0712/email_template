import React from 'react';
import { withRouter } from "react-router";
import Dropdown from 'react-bootstrap/Dropdown';
import { StyledNavContainer, StyledDropdown } from './styled';

function MenusList(props) {
  const { name, menuIcon, options = [], history } = props;
  function onMenuItemSelect(e) {
    debugger
    history.push()
  }
  return (
    <StyledNavContainer>
      <i class={`fa ${menuIcon}`} aria-hidden="true"></i>
      <StyledDropdown>
        <Dropdown.Toggle id="dropdown-basic">
          {name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((option) => (
            <Dropdown.Item value={option.path} onClick={onMenuItemSelect}>{option.title}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </StyledDropdown>
    </StyledNavContainer>
  )
}

export default withRouter(MenusList);