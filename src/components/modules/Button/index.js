import React from 'react';
import { StyledButton } from './styled';

function Button(props) {
  const { icon, text, className, onClick, name, id } = props;
  return (
    <StyledButton onClick={onClick} id={id} name={name} className={className}>
      <i class={`fa ${icon}`} aria-hidden="true"></i>
      <p>{text}</p>
    </StyledButton>
  )
}

export default Button;