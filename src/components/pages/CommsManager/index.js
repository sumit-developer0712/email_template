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
  render() {
    const { inputs } = this.state;
    return (
      <>
        <form onChange={this.onChange}>
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