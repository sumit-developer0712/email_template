import React from 'react';
import { StyledTemplateSection, StyledCommModeSection } from './styled';

class CommsManagerPage extends React.Component {
  state = {
    inputs: {
      templateId: ''
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
        </form>
      </>
    )
  }
}

export default CommsManagerPage;