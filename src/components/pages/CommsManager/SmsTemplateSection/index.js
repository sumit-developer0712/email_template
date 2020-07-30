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
    const { onChange, dynamic_content, ...inputs } = props;
    return (
      <Section title="SMS Template Editor">
        <StyledSectionContainer>
          <StyledContent>
            <StyledQuill onChange={onChange} id="sms_text" title="SMS Text" />
            <StyledDynamicDropDown dynamic_content={dynamic_content} onChange={onChange} />
          </StyledContent>
          <StyledSMSTriggers {...inputs} onChange={onChange}/>
        </StyledSectionContainer>
      </Section>
    )
}

export default SmsTemplateSection;