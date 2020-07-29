import React from 'react';
import Label from '../../grains/label';
import { StyledSectionHeader } from './styled';

function Section(props) {
  const { className, title, children } = props;
  return (
    <>
      {title && 
        <StyledSectionHeader className={className}>
          <Label>{title}</Label>
        </StyledSectionHeader>
      }
      {children}
    </>
  )
}

export default Section;