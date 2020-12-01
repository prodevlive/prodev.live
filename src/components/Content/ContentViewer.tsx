import React, { FunctionComponent } from 'react';
// import { FileEx } from 'contexts/File/FileEx';
// import { FileEx } from 'contexts';
// import { FileViewer, TextViewer, MediaViewer, ModelViewer } from 'components';
// import { ImageViewer } from '../Image';
// import { ContentType } from './ContentType';

export interface ContentViewerProps {
  file: string | null;
}

export const ContentViewer: FunctionComponent<ContentViewerProps> = ({
  file,
}: ContentViewerProps) => {
//   if (!file) {
//     return <div>no file</div>;
//   }
//   switch (file.type) {
//     case ContentType.Root:
//     case ContentType.Node:
//       return <FileViewer file={file} />;
//     case ContentType.Text:
//       return <TextViewer file={file} />;
//     case ContentType.Image:
//       return <ImageViewer file={file} />;
//     case ContentType.Audio:
//     case ContentType.Video:
//       return <MediaViewer file={file} />;
//     case ContentType.Model:
//       return <ModelViewer file={file} />;
//   }
  return <div>no viewer</div>;
};
