import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../../../modules/Section';
import { dataSuffixer } from '../../../../shared/helper';
import {
  StyledQuill,
  StyledSectionContainer,
  StyledContent,
  StyledDynamicDropDown,
  StyledSMSTriggers,
  StyledFooter,
  StyledSubmit
} from './styled';

const smsTextBoxId  = "sms_text";

function SmsTemplateSection(props) {
    const { onChange, dynamic_content, onSubmit, ...inputs } = props;
    const [currentId, setCurrentId] = useState('');
    useEffect(() => {
      if (dynamic_content) {
        const smsData = inputs[smsTextBoxId] || '';
        const appendedDynamicContent = dataSuffixer(dynamic_content, smsData);
        onChange({
          target: {
            value: appendedDynamicContent,
            name: smsTextBoxId
          }
        })
        setCurrentId(uuidv4());
      }
    }, [dynamic_content]);
    return (
      <Section title="SMS Template Editor">
        <StyledSectionContainer>
          <StyledContent>
            <StyledQuill refreshData={currentId} value={inputs[smsTextBoxId]} onChange={onChange} id={smsTextBoxId} title="SMS Text" />
            <StyledDynamicDropDown dynamic_content={dynamic_content} onChange={onChange} />
          </StyledContent>
          <StyledFooter>
            <StyledSMSTriggers {...inputs} onChange={onChange}/>
            <StyledSubmit name="sms_submit" variant="secondary" onClick={onSubmit}>
              {'Submit sms'}
            </StyledSubmit>
          </StyledFooter>
        </StyledSectionContainer>
      </Section>
    )
}

export default SmsTemplateSection;