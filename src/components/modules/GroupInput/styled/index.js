import styled from 'styled-components';
import Label from '../../../grains/label';
import InputBox from '../../../grains/input';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.labelSuffix && 'flex-direction: row-reverse;'}
`;

export const StyledLabel = styled(Label)`
  margin-right: 20px;
`;

export const StyledInputBox = styled(InputBox)`
  ${(props) => props.labelSuffix && 'margin-right: 20px;'}
`;