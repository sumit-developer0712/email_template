import React, { useState } from "react";
import ReactQuill from 'react-quill';
import { StyledContainer, StyledHeader, StyledButtonContainer, StyledView } from './styled';
import Button from 'react-bootstrap/Button';
import 'react-quill/dist/quill.snow.css';

function EmailEditor() {
  const [value, setValue] = useState('');

  return (
    <>
      <StyledHeader />
      <StyledView>
        <StyledContainer>
          <ReactQuill theme="snow" value={value} onChange={setValue}/>
          <StyledButtonContainer>
            <Button variant="secondary">Submit</Button>
          </StyledButtonContainer>
        </StyledContainer>
      </StyledView>
    </>
  );
};

export default EmailEditor;