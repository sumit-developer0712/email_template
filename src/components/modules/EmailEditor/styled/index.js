import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 150px;
  margin-bottom: 30px;
`;

export const StyledSaveButton = styled(StyledButton)`
  margin-left: auto;
  margin-right: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;