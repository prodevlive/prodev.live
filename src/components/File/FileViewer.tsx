import { FunctionComponent } from 'react';
// import { FileEx } from 'contexts/File/FileEx';
// import ReactJson from 'react-json-view';

export interface FileViewerProps {
  file: string;
}

export const FileViewer: FunctionComponent<FileViewerProps> = ({
  file,
}: FileViewerProps) => {
//   return <ReactJson src={file} />;
  return null;
};
