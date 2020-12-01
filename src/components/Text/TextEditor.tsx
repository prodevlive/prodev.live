// import React, { useState, useEffect } from 'react';
// // import { FileContext } from 'contexts';
// // import MonacoEditor from 'react-monaco-editor';
// import RichTextEditor, { EditorValue } from 'react-rte';
// import TextField from '@material-ui/core/TextField';
// import { FileContext } from 'contexts/File/FileContext';

interface TextEditorProp {
  context: string;
}

export function TextEditor({ context }: TextEditorProp) {
  return null;
//   const [text, setText] = useState(context.item.text);
//   const [value, setValue] = useState(RichTextEditor.createEmptyValue());
//   useEffect(() => {
//     const selectedFile = context.getSelectedFile();
//     if (selectedFile && selectedFile.text) {
//       setText(selectedFile.text);
//       setValue(
//         RichTextEditor.createValueFromString(
//           selectedFile.text,
//           'markdown',
//         ),
//       );
//     }
//   }, [context]);
//   const ext = context.item.url.toLowerCase();
//   if (ext.endsWith('.md')) {
//     return (
//       <RichTextEditor
//         value={value}
//         onChange={(newValue: EditorValue) => {
//           setValue(newValue);
//           context.setText(newValue.toString('markdown'));
//         }}
//       />
//     );
//   }
//   // if (ext.endsWith('.ts')) {
//   //     return (
//   //         <MonacoEditor
//   //             language="typescript"
//   //             theme="vs-dark"
//   //             value={text}
//   //             options={{
//   //                 selectOnLineNumbers: true,
//   //             }}
//   //             onChange={(newValue, e) => {
//   //                 console.log('onChange', newValue, e);
//   //             }}
//   //             editorDidMount={(editor, monaco) => {
//   //                 console.log('editorDidMount', editor);
//   //                 editor.focus();
//   //             }}
//   //         />
//   //     );
//   // }
//   return (
//     <TextField
//       id="standard-multiline-static"
//       label="Multiline"
//       multiline
//       rows={4}
//       value={text}
//       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//         setText(event.target.value);
//         context.setText(event.target.value);
//       }}
//     />
//   );
}
