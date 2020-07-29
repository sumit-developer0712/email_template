import React from 'react';
import { StyledInput } from './styled';

function InputBox(props) {
  const { type, name, id, value, ...otherProps } = props;
  return (
    <StyledInput type={type} name={name} id={id} value={value} {...otherProps} />
  )
}

export default InputBox;