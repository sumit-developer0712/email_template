import React from 'react';
import { withRouter } from "react-router";
import { StyledNavContainer, StyledDropdown } from './styled';

function MenusList(props) {
  const { name, menuIcon, id, options = [], history } = props;
  function onMenuItemSelect(e) {
    debugger
    history.push()
  }
  return (
    <StyledNavContainer>
      <i class={`fa ${menuIcon}`} aria-hidden="true"></i>
      <StyledDropdown
        id={id}
        name={name}
        onChange={onMenuItemSelect}
        options={options}
      />
    </StyledNavContainer>
  )
}

export default withRouter(MenusList);