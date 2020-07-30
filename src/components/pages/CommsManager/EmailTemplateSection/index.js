import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../../../modules/Section';
import { dataSuffixer } from '../../../../shared/helper';
import {
  StyledQuill,
  StyledSectionContainer,
  StyledContent,
  StyledDynamicDropDown,
  StyledEmailTriggers,
  StyledFooter,
  StyledSubmit
} from './styled';

import App from '../../../modules/ReactEmailEditor';

const emailTextBoxId  = "email_text";

function EmailTemplateSection(props) {
    const { onChange, email_dynamic_content, onSubmit, ...inputs} = props;
    const [currentId, setCurrentId] = useState('');
    useEffect(() => {
      if (email_dynamic_content) {
        const emailData = inputs[emailTextBoxId] || '';
        const appendedDynamicContent = dataSuffixer(email_dynamic_content, emailData);
        // const appendedDynamicContent = `${smsData}<span> &#36;&#123;${email_dynamic_content}&#125;</span>`;
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
            {/* <StyledQuill refreshData={currentId} value={inputs[emailTextBoxId]} onChange={onChange} id={emailTextBoxId} /> */}
            <App />
            <StyledDynamicDropDown email_dynamic_content={email_dynamic_content} onChange={onChange} />
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