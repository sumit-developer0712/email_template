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

  static getDerivedStateFromProps(props, state) {
    if (props.refreshData.length > 1 && (props.refreshData !== state.refreshData)) {
      return {
        text: props.value,
        refreshData: props.refreshData
      }
    }
  }
 
  handleChange(value) {
    const { onChange, id } = this.props;
    this.setState({ text: value });
    onChange({
      target: {
        value: value,
        name: id
      }
    })
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