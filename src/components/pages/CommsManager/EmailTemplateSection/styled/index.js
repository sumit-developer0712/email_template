import styled from 'styled-components';
import Quill from '../../../../modules/Quill';
import DynamicContent from '../DynamicContent';
import EmailContentDropDown from '../EmailContentLoader';
import EmailTriggers from '../EmailTriggers';
import { LOWEL_DARKER_GRAY } from '../../../../../shared/constants';
import Button from 'react-bootstrap/Button';

export const StyledQuill = styled(Quill)`
  height: 700px;
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

export const StylyedDropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 200px;
`;

export const StyledDynamicDropDown = styled(DynamicContent)`
  margin: 20px auto;
  button {
    background-color: ${LOWEL_DARKER_GRAY};
    border-color: ${LOWEL_DARKER_GRAY};
    &:hover {
      background-color: ${LOWEL_DARKER_GRAY};
      border-color: ${LOWEL_DARKER_GRAY};
    }
  }
`;

export const StyledEmailContentDropDown = styled(EmailContentDropDown)`
  margin: 20px auto;
  button {
    background-color: ${LOWEL_DARKER_GRAY};
    border-color: ${LOWEL_DARKER_GRAY};
    &:hover {
      background-color: ${LOWEL_DARKER_GRAY};
      border-color: ${LOWEL_DARKER_GRAY};
    }
  }
`

export const StyledEmailTriggers = styled(EmailTriggers)`

`;

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSubmit = styled(Button)`
 margin-left: auto;
 margin-right: 30px;
`;