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
      appnotification: '',
      email_order_types: '',
      email_order_checker: '',
      email_order_status: '',
      email_dynamic_content: '',
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
        <form onChange={this.onChange} >
          <StyledTemplateSection {...inputs} />
          <StyledCommModeSection {...inputs} />
          <StyledSmsTemplateSection onChange={this.onChange} onSubmit={this.onSubmit} {...inputs} />
          <StyledEmailTemplateSection onChange={this.onChange} onSubmit={this.onSubmit} {...inputs} />
        </form>
      </>
    )
  }
}

export default CommsManagerPage;