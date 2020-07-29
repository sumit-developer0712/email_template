import React from 'react';
import InputBox from '../../grains/input';
import { StyledContainer, StyledLabel } from './styled';

function GroupInput(props) {
  const { className, id, labelText, inputType, placeholder, value, name, emphasised, ...otherProps} = props;
  return (
    <StyledContainer className={className}>
      <StyledLabel for={id} emphasised={emphasised}>{labelText}</StyledLabel>
      <InputBox id={id} type={inputType} placeholder={placeholder} value={value} name={name} {...otherProps} />
    </StyledContainer>
  )
}

export default GroupInput;