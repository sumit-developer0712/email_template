import React from 'react';
import Section from '../../../modules/Section';
import { StyledCheckBoxes, StyledAppCheckBoxes, StyledSectionContainer } from './styled';

function CommModeSection(props) {
  const { sms, email, print, voice, appnotification } = props;
  return (
    <Section title="Communication Mode">
      <StyledSectionContainer>
        <StyledCheckBoxes
          id="sms"
          labelText="SMS"
          inputType="checkbox"
          checked={sms}
          name="sms"
          labelSuffix
        />
        <StyledCheckBoxes
          id="email"
          labelText="E-mail"
          inputType="checkbox"
          checked={email}
          name="email"
          labelSuffix
        />
        <StyledCheckBoxes
          id="print"
          labelText="Print"
          inputType="checkbox"
          checked={print}
          name="print"
          labelSuffix
        />
        <StyledCheckBoxes
          id="voice"
          labelText="Voice"
          inputType="checkbox"
          checked={voice}
          name="voice"
          labelSuffix
        />
        <StyledAppCheckBoxes
          id="appnotification"
          labelText="App notification"
          inputType="checkbox"
          checked={appnotification}
          name="appnotification"
          labelSuffix
        />
      </StyledSectionContainer>
    </Section>
  )
}

export default CommModeSection;
