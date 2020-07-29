import styled from 'styled-components';
import { LOWEL_BLUE } from '../../../../shared/constants';

export const StyledView = styled.div`
  margin: 20px 12px 20px 12px;
`;

export const StyledContainer = styled.div`
  margin: 20px 0;
  width: 40%;
  .quill {
    margin-bottom: 60px;
    height: 200px;
  }
`;

export const StyledHeader = styled.div`
  background-color: ${LOWEL_BLUE};
  height: 50px;
`;

export const StyledButtonContainer = styled.div`
  button {
    float: right;
  }
`;