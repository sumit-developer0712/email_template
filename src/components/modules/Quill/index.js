import React from 'react';
import ReactQuill from 'react-quill';
import { StyledLabel, StyledContainer } from './styled';
import 'react-quill/dist/quill.snow.css';

class Quill extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(value) {
    this.setState({ text: value });
  }
 
  render() {
    const { className, title, id } = this.props;
    return (
      <StyledContainer>
        {title && <StyledLabel id={id}>{title}</StyledLabel>}
        <ReactQuill
          id={id}
          className={className}
          value={this.state.text}
          onChange={this.handleChange}
        />
      </StyledContainer>
    )
  }
}

export default Quill;