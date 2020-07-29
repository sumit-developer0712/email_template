import styled from 'styled-components';
import GroupInput from '../../../../modules/GroupInput';
import { LOWEL_LIGHT_GRAY } from '../../../../../shared/constants';

export const StyledCheckBoxes = styled(GroupInput)`
  border: 1px solid ${LOWEL_LIGHT_GRAY};
  padding: 5px 40px 5px 10px;
  border-right: none;
`;

export const StyledAppCheckBoxes = styled(StyledCheckBoxes)`
  border-right: 1px solid ${LOWEL_LIGHT_GRAY};
`;

export const StyledSectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 35px;
  justify-content: center;
`;
