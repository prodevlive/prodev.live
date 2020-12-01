import React, { FunctionComponent } from 'react';
import { FileModule } from 'hooks';

export interface FileContentExProps {
  fileModule: FileModule;
}

export const FileContentEx: FunctionComponent<FileContentExProps> = ({
  fileModule,
}: FileContentExProps) => {
  return <div>file: {fileModule.count}</div>;
};