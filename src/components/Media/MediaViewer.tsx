import { FunctionComponent } from 'react';
// import { FileEx } from 'contexts/File/FileEx';
// import ReactPlayer from 'react-player';

export interface MediaViewerProps {
  file: string;
}

export const MediaViewer: FunctionComponent<MediaViewerProps> = ({
  file,
}: MediaViewerProps) => {
  return null;
//   return <img alt={file.name} src={file.url} />;
};
