import React from 'react';
import EmailEditor from 'react-email-editor';
import { StyledButton, Container } from './styled';

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

  saveDesign = () => {
    const { name, onSubmit } = this.props;
    this.emailEditor.current.exportHtml((data) => {
      const { design, html } = data;
      const event = {
        target: {
          name,
          json: design,
          html
        }
      }
      onSubmit(event);
    })
  }

  render() {
    return (
      <Container>
        <StyledButton variant="secondary" onClick={this.saveDesign}>Submit Email</StyledButton>
        <EmailEditor
          ref={this.emailEditor}
          onLoad={this.onLoad}
        />
      </Container>
    );
  }
}

export default EditorEmail;
