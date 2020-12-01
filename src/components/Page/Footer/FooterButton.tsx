import React, { FunctionComponent } from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

interface FooterButtonProps {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export const FooterButton: FunctionComponent<FooterButtonProps> = ({
  name,
  icon,
  onClick,
}: FooterButtonProps) => {
  return (
    <BottomNavigationAction
      key="{name}-footer-button"
      label={name}
      showLabel
      icon={icon}
      onClick={onClick}
    />
  );
};
