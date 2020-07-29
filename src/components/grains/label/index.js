import React from 'react';
import { StyledLabel } from './styled';

function Label(props) {
  const { id, children, ...otherProps } = props;
  return (
    <StyledLabel for={id} {...otherProps}>
      {children}
    </StyledLabel>
  )
}

export default Label;