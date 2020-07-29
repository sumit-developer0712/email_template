import React from 'react';
import Logo from '../../../assets/Logo.png';
import { StyledLogo, StyledContainer, StyledHeading, StyledProfile } from './styled';

function Header(props) {
  return (
    <StyledContainer className={props.className}>
      <StyledLogo src={Logo} />
      <StyledHeading>
        <h5>Customer Communication Manager</h5>
      </StyledHeading>
      <StyledProfile>
        <p>John</p>
      </StyledProfile>
    </StyledContainer>
  )
}

export default Header;