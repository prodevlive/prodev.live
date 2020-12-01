import { FunctionComponent } from 'react';
// import { FileEx } from 'contexts/File/FileEx';

export interface ImageViewerProps {
  file: string;
}

export const ImageViewer: FunctionComponent<ImageViewerProps> = ({
  file,
}: ImageViewerProps) => {
  return null;
//   return <img alt={file.name} src={file.dataUrl} />;
};
