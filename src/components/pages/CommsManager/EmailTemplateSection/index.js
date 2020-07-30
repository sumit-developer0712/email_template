import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../../../modules/Section';
import EmailEditor from '../../../modules/EmailEditor';
import { dataSuffixer } from '../../../../shared/helper';
import {
  StyledSectionContainer,
  StyledContent,
  StyledDynamicDropDown,
  StyledEmailTriggers,
  StyledFooter
} from './styled';

import sample from '../../../../assets/sample.json';

const emailTextBoxId  = "email_text";

function EmailTemplateSection(props) {
    const { onChange, email_dynamic_content, onSubmit, ...inputs} = props;
    const [currentId, setCurrentId] = useState('');
    useEffect(() => {
      if (email_dynamic_content) {
        const emailData = inputs[emailTextBoxId] || '';
        const appendedDynamicContent = dataSuffixer(email_dynamic_content, emailData);
        onChange({
          target: {
            value: appendedDynamicContent,
            name: emailTextBoxId
          }
        })
        setCurrentId(uuidv4());
      }
    }, [email_dynamic_content]);
    return (
      <Section title="E-mail Template Editor">
        <StyledSectionContainer>
          <StyledContent>
            <EmailEditor name="email_submit" onSubmit={onSubmit} loadNewData={currentId} newEmailJson={sample} />
            <StyledDynamicDropDown email_dynamic_content={email_dynamic_content} onChange={onChange} />
          </StyledContent>
          <StyledFooter>
            <StyledEmailTriggers {...inputs} onChange={onChange}/>
          </StyledFooter>
        </StyledSectionContainer>
      </Section>
    )
}

export default EmailTemplateSection;