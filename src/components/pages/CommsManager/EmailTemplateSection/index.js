import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../../../modules/Section';
import {
  StyledQuill,
  StyledSectionContainer,
  StyledContent,
  StyledDynamicDropDown,
  StyledEmailTriggers,
  StyledFooter,
  StyledSubmit
} from './styled';

const emailTextBoxId  = "email_text";

function EmailTemplateSection(props) {
    const { onChange, dynamic_content, onSubmit, ...inputs} = props;
    const [currentId, setCurrentId] = useState('');
    useEffect(() => {
      if (dynamic_content) {
        const smsData = inputs[emailTextBoxId];
        const appendedDynamicContent = `${smsData}<span> ${dynamic_content}</span>`;
        onChange({
          target: {
            value: appendedDynamicContent,
            name: emailTextBoxId
          }
        })
        setCurrentId(uuidv4());
      }
    }, [dynamic_content]);
    return (
      <Section title="E-mail Template Editor">
        <StyledSectionContainer>
          <StyledContent>
            <StyledQuill refreshData={currentId} value={inputs[emailTextBoxId]} onChange={onChange} id={emailTextBoxId} />
            <StyledDynamicDropDown dynamic_content={dynamic_content} onChange={onChange} />
          </StyledContent>
          <StyledFooter>
            <StyledEmailTriggers {...inputs} onChange={onChange}/>
            <StyledSubmit name="email_submit" variant="secondary" onClick={onSubmit}>
              {'Submit email'}
            </StyledSubmit>
          </StyledFooter>
        </StyledSectionContainer>
      </Section>
    )
}

export default EmailTemplateSection;