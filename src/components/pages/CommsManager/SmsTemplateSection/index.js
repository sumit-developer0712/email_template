import React from 'react';
import Section from '../../../modules/Section';
import {
  StyledQuill,
  StyledSectionContainer,
  StyledContent,
  StyledDynamicDropDown,
  StyledSMSTriggers
} from './styled';

function SmsTemplateSection(props) {
    const { onChange } = props;
    return (
      <Section title="SMS Template Editor">
        <StyledSectionContainer>
          <StyledContent>
            <StyledQuill title="SMS Text" />
            <StyledDynamicDropDown onChange={onChange} />
          </StyledContent>
          <StyledSMSTriggers onChange={onChange}/>
        </StyledSectionContainer>
      </Section>
    )
}

export default SmsTemplateSection;