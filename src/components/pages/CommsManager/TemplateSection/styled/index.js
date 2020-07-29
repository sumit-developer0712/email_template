import styled from 'styled-components';
import GroupInput from '../../../../modules/GroupInput';

export const StyledGroupInput = styled(GroupInput)`

`;

export const StyledSection = styled.div`
  display: flex;
  margin: 15px 12px;
`;

export const StyledName = styled(GroupInput)`
  margin-left: 40px;
  input {
    width: 300px;
  }
`;

export const StyledDes = styled(GroupInput)`
  flex-grow: 1;
  margin-left: 40px;
  input {
    width: 100%;
    height: 60px;
  }
`;