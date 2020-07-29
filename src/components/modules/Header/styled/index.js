import styled from 'styled-components';
import { LOWEL_BLUE } from '../../../../shared/constants';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeading = styled.div`
  flex-grow: 1;
  background-color: ${LOWEL_BLUE};
  margin-top: 22px;
  height: 42px;
  display: flex;
  align-items: center;

  h5 {
    margin: auto;
    color: #fff;
  }
`;

export const StyledProfile = styled.div`
  display: flex;
  alight-items: center;
  padding: 20px 20px 0;
  font-weight: bold;
  p {
    margin: 0;
  }
`;

export const StyledLogo = styled.img`
  width: 150px;
`;