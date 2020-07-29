import React from 'react';
import Section from '../../../modules/Section';
import { StyledGroupInput, StyledSection, StyledName, StyledDes } from './styled';

function TemplateSection(props) {
  const { className, templateId, templateName, templateDes } = props;
  return (
    <Section>
      <StyledSection className={className}>
        <StyledGroupInput
          id="templateId"
          labelText="Template ID"
          inputType="text"
          placeholder="Enter template id"
          value={templateId}
          name="templateId"
          emphasised
        />
        <StyledName
          id="templateName"
          labelText="Template Name"
          inputType="text"
          placeholder="Enter the template name"
          value={templateName}
          name="templateName"
          emphasised
        />
        <StyledDes
          id="templateDes"
          labelText="Template Description"
          inputType="text"
          placeholder="What's the communication for ?"
          value={templateDes}
          name="templateDes"
          emphasised
        />
      </StyledSection>
    </Section>
  )
}

export default TemplateSection;