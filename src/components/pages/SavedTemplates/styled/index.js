import styled from 'styled-components';
import Button from '../../../modules/Button';
import { LOWEL_LIGHT_GRAY, WHITE } from '../../../../shared/constants';

export const StyledContainer = styled.div`
  padding: 30px;
`;

export const StyledHeader = styled.h3`
  margin: 0 20px 30px 0;
`;

export const StyledTableHead = styled.thead`
  background-color: ${LOWEL_LIGHT_GRAY};
`;

export const StyledCell = styled.td`
  background-color: ${WHITE};
`;

export const StyledCellChangesSection = styled(StyledCell)`
  display: flex;
  align-items: center;
`;

export const StyledSearchButton = styled(Button)`
  margin-right: 20px;
`;