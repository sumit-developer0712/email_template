import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

export const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  i {
    color: #fff;
  }
  margin-left: 20px;
`;

export const StyledDropdown = styled(Dropdown)`
  button {
    background-color: transparent;
    border: none;
    &:hover, &:active {
      background-color: transparent;
      border: none;
    }
    &:after {
      border: none;
    }
  }
  .btn-success.dropdown-toggle {
    background-color: transparent;
    border: none;
  }
`;