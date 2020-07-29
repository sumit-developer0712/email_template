import React from 'react';
import { StyledContainer, StyledLabel, StyledInputBox } from './styled';

function GroupInput(props) {
  const { className, id, labelText, inputType, placeholder, value, name, emphasised, labelSuffix, ...otherProps} = props;
  return (
    <StyledContainer className={className} labelSuffix={labelSuffix}>
      <StyledLabel for={id} emphasised={emphasised}>{labelText}</StyledLabel>
      <StyledInputBox id={id} type={inputType} placeholder={placeholder} value={value} name={name} labelSuffix={labelSuffix} {...otherProps} />
    </StyledContainer>
  )
}

export default GroupInput;