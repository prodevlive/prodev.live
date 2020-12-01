import React, { FunctionComponent } from 'react';
// import { FileContext } from 'contexts/File/FileContext';
// import { FileViewer, MediaViewer, TextEditor, ImageEditor, ModelViewer } from 'components';
// import { FileContext } from 'contexts';
// import { ContentType } from './ContentType';

export interface ContentEditorProps {
  context: string;
}

export const ContentEditor: FunctionComponent<ContentEditorProps> = ({
  context,
}: ContentEditorProps) => {
//   const selectedFile = context.getSelectedFile();
//   if (!selectedFile) {
//     return <div>no file</div>;
//   }
//   switch (selectedFile.type) {
//     case ContentType.Root:
//     case ContentType.Node:
//       return <FileViewer file={selectedFile} />;
//     case ContentType.Text:
//       return <TextEditor context={context} />;
//     case ContentType.Image:
//       return <ImageEditor context={context} />;
//     case ContentType.Audio:
//     case ContentType.Video:
//       return <MediaViewer file={selectedFile} />;
//     case ContentType.Model:
//       return <ModelViewer file={selectedFile} />;
//   }
  return <div>no editor</div>;
};
