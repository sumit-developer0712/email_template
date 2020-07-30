import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const StyledButton = styled(Button)`
  width: 150px;
  margin-left: auto;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export const WaterMarkMasker = styled.div`
  position: absolute;
  width: 350px;
  height: 49px;
  right: 0;
  bottom: 0;
  background-color: #d9d9d9;
`;