import styled from 'styled-components';
import Quill from '../../../../modules/Quill';
import DynamicContent from '../DynamicContent';
import SMSTriggers from '../SMSTriggers';
import { LOWEL_DARKER_GRAY } from '../../../../../shared/constants';

export const StyledQuill = styled(Quill)`
  height: 100px;
  width: 800px;
  margin-bottom: 50px;
`;

export const StyledSectionContainer = styled.div`
  margin: 12px 15px;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledDynamicDropDown = styled(DynamicContent)`
  margin: auto;
  button {
    background-color: ${LOWEL_DARKER_GRAY};
    border-color: ${LOWEL_DARKER_GRAY};
    &:hover {
      background-color: ${LOWEL_DARKER_GRAY};
      border-color: ${LOWEL_DARKER_GRAY};
    }
  }
`;

export const StyledSMSTriggers = styled(SMSTriggers)`

`;