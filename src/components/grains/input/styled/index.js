import styled from 'styled-components';

export const StyledInput = styled.input`
  border-radius: 7px;
  border: 1px solid #ccc;
  &:focus {
    outline-width: 0;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    padding-left: 15px;
  }
`;