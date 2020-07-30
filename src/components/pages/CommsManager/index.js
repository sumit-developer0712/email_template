import React from 'react';
import { StyledTemplateSection, StyledCommModeSection, StyledSmsTemplateSection, StyledEmailTemplateSection } from './styled';

class CommsManagerPage extends React.Component {
  state = {
    emailSubmitData: '',
    error: false,
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
      inputs: { ...currentState }
    });
  }

  onSubmit = (e) => {
    const { name } = e.target;
    if (name === 'email_submit') {
      const payload = {
        name: 'email',
        content: '',
        message: ''
      }
      const URL = 'https://run.mocky.io/v3/501b6c07-3b81-4b59-a25e-d951c1b5e76d';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
      fetch(URL, options)
        .then((res) => res.json())
        .then((response) => {
          this.setState({
            emailSubmitData: response
          })
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        })
    }
  }

  render() {
    const { inputs, error } = this.state;
    return (
      <>
        {error
          ? <div>
            <h1> We shall get back to you on this feature </h1>
          </div>
          : <form onChange={this.onChange} >
            <StyledTemplateSection {...inputs} />
            <StyledCommModeSection {...inputs} />
            <StyledSmsTemplateSection onChange={this.onChange} onSubmit={this.onSubmit} {...inputs} />
            <StyledEmailTemplateSection onChange={this.onChange} onSubmit={this.onSubmit} {...inputs} />
          </form>
        }
      </>
    )
  }
}

export default CommsManagerPage;