import React, { FunctionComponent, useState } from 'react';

export interface TextImageProps {
  title: string;
  alt?: string;
  src?: string;
  asset?: string;
  assets?: Map<string, string>;
  clip?: boolean;
}

export const TextImage: FunctionComponent<TextImageProps> = ({
  title,
  src,
  asset,
  assets,
  clip,
  alt,
}: TextImageProps) => {
  if (asset && assets) {
    src = assets.get(asset);
  }
  const [fullSize, setFullSize] = useState(false);
  const handleClick = () => {
    setFullSize(!fullSize);
  };
  let className = 'text-image';
  if (clip){
    className = !fullSize ? 'text-image-clip' : 'text-image-show';
  }
  return (
    <div className="text-image-div">
      <div className="text-image-caption">{title}</div>
      <div
        className={className}
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex={0}
      >
        <img
          title={title}
          src={src}
          alt={alt || title}
        />
      </div>      
    </div>
  );
};
