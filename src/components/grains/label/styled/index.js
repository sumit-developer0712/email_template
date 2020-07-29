import styled from 'styled-components';
import { LOWEL_BLUE } from '../../../../shared/constants';

export const StyledLabel = styled.label`
  margin: 0;
  color: ${LOWEL_BLUE};
  ${(props) => props.emphasised ? `font-weight: 500` : ''};
`;