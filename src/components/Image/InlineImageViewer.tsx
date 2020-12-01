/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FunctionComponent, useState } from 'react';
import './InlineImageViewer.css';

export interface InlineImageViewerProps {
  title?: string;
  alt?: string;
  src?: string;
  asset?: string;
  assets?: Map<string, string>;
  clip?: boolean;
}

export const InlineImageViewer: FunctionComponent<InlineImageViewerProps> = ({
  title,
  alt,
  src,
  asset,
  assets,
  clip,
}: InlineImageViewerProps) => {
  if (asset && assets) {
    src = assets.get(asset);
  }
  const [fullSize, setFullSize] = useState(false);
  const handleClick = () => {
    setFullSize(!fullSize);
  };
  let className;
  if (clip){
    className = !fullSize ? 'inline-image-viewer-clip' : 'inline-image-viewer-show';
  }
  return (
    <div className={className}>
      <img
        title={title}
        src={src}
        alt={alt}
        onClick={handleClick}
        onKeyDown={handleClick}
      />
    </div>
  );
};
