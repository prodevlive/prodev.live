import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

export interface TextLinkProps {
  title: string;
  path: string;
}

export const TextLink: FunctionComponent<TextLinkProps> = ({
  title,
  path,
}: TextLinkProps) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(path);
  };
  return (
    <div
      className="text-link"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      {title}
    </div>
  );
};
