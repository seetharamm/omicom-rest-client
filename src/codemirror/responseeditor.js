import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import vkBeautify from 'vkbeautify';
var beautify = require("json-beautify");

function ResponseEditor(props) {
const { code } = props;
const cc = beautify(code, null, 2, 100);
console.log(beautify(code, null, 2, 100));
console.log(beautify(code));
return (
    <CodeMirror
      value = {cc}
      height="450px"
      editable
      readOnly
      extensions={[javascript({ jsx: true })]}
      
    />
  );
}
export default ResponseEditor;