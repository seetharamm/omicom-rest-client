import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function CodeEditor(props) {
  const {handleRequestBodyChange} = props;

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);

    handleRequestBodyChange(JSON.parse(value));
  }, []);
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="450px"
      sx={{fontSize:"2px", textAlign:"left"}}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
export default CodeEditor;