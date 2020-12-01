import React, { FunctionComponent, useRef } from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

interface UploadButtonProps {
  onUpload: (files: FileList) => void;
}

export const UploadButton: FunctionComponent<UploadButtonProps> = ({
  onUpload,
}: UploadButtonProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const doUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpload(event.currentTarget.files as FileList);
    if (inputFileRef && inputFileRef.current) {
      (inputFileRef.current as HTMLInputElement).value = '';
    }
  };
  return (
    <>
      <BottomNavigationAction
        key="upload_button"
        label="upload"
        showLabel
        icon={<CloudUploadIcon />}
        onClick={() => {
          if (inputFileRef && inputFileRef.current) {
            (inputFileRef.current as HTMLInputElement).click();
          }
        }}
      />
      <input
        hidden
        ref={inputFileRef}
        type="file"
        name="file"
        onChange={doUpload}
      />
    </>
  );
};
