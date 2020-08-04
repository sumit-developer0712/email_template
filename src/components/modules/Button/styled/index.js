import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { WHITE } from '../../../../shared/constants';

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: ${WHITE};
  border: none;
  padding: 0;
  color: black;
  : hover  {
    background-color: ${WHITE};
    border: none;
    color: black;
  }
  p {
    margin: 0;
    pointer-events: none;
  }
  i  {
    margin-right: 10px;
    pointer-events: none;
  }
`;