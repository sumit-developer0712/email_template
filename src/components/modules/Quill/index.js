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
    const { noModules, noFormats, className, title, id } = this.props;
    return (
      <StyledContainer>
        {title && <StyledLabel id={id}>{title}</StyledLabel>}
        <ReactQuill
          id={id}
          className={className}
          value={this.state.text}
          onChange={this.handleChange}
          theme={this.state.theme}
          modules={!noModules? Quill.modules:{}}
          formats={!noFormats? Quill.formats:{}}
          bounds={'.app'}
          placeholder={this.props.placeholder}
        />
      </StyledContainer>
    )
  }
}

Quill.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Quill.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

export default Quill;