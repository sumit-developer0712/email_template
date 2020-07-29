import React from 'react';
import Section from '../../../modules/Section';
import { StyledCheckBoxes, StyledAppCheckBoxes, StyledSectionContainer } from './styled';

function CommModeSection(props) {
  const { sms } = props;
  return (
    <Section title="Communication Mode">
      <StyledSectionContainer>
        <StyledCheckBoxes
          id="sms"
          labelText="SMS"
          inputType="checkbox"
          value={sms}
          name="sms"
          labelSuffix
        />
        <StyledCheckBoxes
          id="email"
          labelText="E-mail"
          inputType="checkbox"
          value={sms}
          name="email"
          labelSuffix
        />
        <StyledCheckBoxes
          id="print"
          labelText="Print"
          inputType="checkbox"
          value={sms}
          name="print"
          labelSuffix
        />
        <StyledCheckBoxes
          id="voice"
          labelText="Voice"
          inputType="checkbox"
          value={sms}
          name="voice"
          labelSuffix
        />
        <StyledAppCheckBoxes
          id="appnotification"
          labelText="App notification"
          inputType="checkbox"
          value={sms}
          name="appnotification"
          labelSuffix
        />
      </StyledSectionContainer>
    </Section>
  )
}

export default CommModeSection;
