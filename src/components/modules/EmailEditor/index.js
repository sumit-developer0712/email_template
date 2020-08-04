import React from 'react';
import EmailEditor from 'react-email-editor';
import { StyledButtonContainer, StyledSaveButton, StyledButton, Container } from './styled';

class EditorEmail extends React.Component {
  constructor(props) {
    super(props)
    this.emailEditor = React.createRef();
    this.state = {
      loadNewData: {}
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.loadNewData.length > 1 && (props.loadNewData !== state.loadNewData)) {
      return {
        newJsonData: props.newEmailJson,
        loadNewData: props.loadNewData
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (Object.keys(nextState.loadNewData).length > 0 && (nextState.loadNewData !== this.state.loadNewData)) {
      this.emailEditor.current.loadDesign(nextState.newJsonData);
    }
  }

  submitDesign = (e) => {
    const { name, onSubmit } = this.props;
    const { name: buttonType } = e.target;
    this.emailEditor.current.exportHtml((data) => {
      const { design, html } = data;
      const event = {
        target: {
          name,
          json: design,
          html,
          type: buttonType
        }
      }
      onSubmit(event);
    })
  }

  render() {
    return (
      <Container>
        <StyledButtonContainer>
          <StyledSaveButton name="save" variant="secondary" onClick={this.submitDesign}>Save Email</StyledSaveButton>
          <StyledButton name="submit" variant="secondary" onClick={this.submitDesign}>Submit Email</StyledButton>
        </StyledButtonContainer>
        <EmailEditor
          ref={this.emailEditor}
          onLoad={this.onLoad}
        />
      </Container>
    );
  }
}

export default EditorEmail;
