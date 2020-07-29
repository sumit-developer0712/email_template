import React from 'react';
import { StyledTemplateSection, StyledCommModeSection, StyledSmsTemplateSection } from './styled';

class CommsManagerPage extends React.Component {
  state = {
    inputs: {
      templateId: '',
      templateName: '',
      templateDes: ''
    }
  }
  onChange = (e) => {
    debugger
  }
  render() {
    const { inputs } = this.state;
    return (
      <>
        <form onChange={this.onChange}>
          <StyledTemplateSection {...inputs} />
          <StyledCommModeSection {...inputs} />
          <StyledSmsTemplateSection onChange={this.onChange} {...inputs} />
        </form>
      </>
    )
  }
}

export default CommsManagerPage;