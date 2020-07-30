import React from 'react';
import { StyledTemplateSection, StyledCommModeSection, StyledSmsTemplateSection, StyledEmailTemplateSection } from './styled';

class CommsManagerPage extends React.Component {
  state = {
    inputs: {
      templateId: '',
      templateName: '',
      templateDes: '',
      order_types: '',
      order_checker: '',
      order_status: '',
      dynamic_content: '',
      sms: '',
      email: '',
      print: '',
      voice: '',
      appnotification: ''
    }
  }

  onChange = (e) => {
    const { name, value, checked, id } = e.target;
    const currentState = { ...this.state.inputs };
    currentState[name] = value || checked || id;
    this.setState({
      inputs: {...currentState}
    });
  }

  onSubmit = (e) => {
  }

  render() {
    const { inputs } = this.state;
    return (
      <>
        <form onChange={this.onChange} onSubmit={(e) => { e.preventDefault(); this.onSubmit(e); }}>
          <StyledTemplateSection {...inputs} />
          <StyledCommModeSection {...inputs} />
          <StyledSmsTemplateSection onChange={this.onChange} {...inputs} />
          <StyledEmailTemplateSection {...inputs} />
        </form>
      </>
    )
  }
}

export default CommsManagerPage;