import React, { useRef } from 'react';
import styled from 'styled-components';

import EmailEditor from 'react-email-editor';
// import sample from '../../../shared/test.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #61dafb;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 40px;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`;

const Example = (props) => {
  const emailEditorRef = useRef(null);

  const saveDesign = () => {
    emailEditorRef.current.saveDesign((design) => {
      console.log('saveDesign', design);
      alert('Design JSON has been logged in your developer console.');
    });
  };

  const exportHtml = () => {
    emailEditorRef.current.exportHtml((data) => {
      const { design, html } = data;
      debugger
      console.log('exportHtml', html);
      alert('Output HTML has been logged in your developer console.');
    });
  };

  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };

  const onLoad = () => {
    // emailEditorRef.current.addEventListener('onDesignLoad', onDesignLoad);
    // emailEditorRef.current.loadDesign(sample);
  };

  return (
    <Container>
      <Bar>
        <button onClick={saveDesign} type="button">Save Design</button>
        <button onClick={exportHtml} type="button">Export HTML</button>
      </Bar>

      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
      />
    </Container>
  );
};

export default Example;
