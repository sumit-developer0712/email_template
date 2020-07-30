import styled from 'styled-components';
import DropDown from '../../../../../grains/dropdown';
import { LOWEL_DARKER_GRAY } from '../../../../../../shared/constants';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
`;

const StyledDropdown = styled(DropDown)`
  button {
    background-color: ${LOWEL_DARKER_GRAY};
    border-color: ${LOWEL_DARKER_GRAY};
    &:hover {
      background-color: ${LOWEL_DARKER_GRAY};
      border-color: ${LOWEL_DARKER_GRAY};
    }
  }
`;

export const StyledOrderTypes = styled(StyledDropdown)`
  margin-left: 45px;
`;

export const StyledChecker = styled(StyledDropdown)`
  margin-left: 15px;
`;

export const StyledOrderValue = styled(StyledDropdown)`
  margin-left: 15px;
`;