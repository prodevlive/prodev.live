import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export interface SidebarItemProps {
  name: string;
  path: string;
  icon: ReactNode;
  iconSelected: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function SidebarItem({
  name,
  path,
  icon,
  iconSelected,
  onClick,
}: SidebarItemProps) {
  const history = useHistory();
  const selected = history.location.pathname.includes(path);
  const doClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!onClick) {
      history.push(path);
      return;
    }
    onClick(event);
  };
  const renderIcon = () => {
    if (iconSelected && selected) {
      return iconSelected;
    }
    return icon;
  };
  const style: { backgroundColor?: string } = {};
  if (selected) {
    style.backgroundColor = 'GhostWhite';
  }
  return (
    <ListItem button onClick={doClick} style={style}>
      <Tooltip title={name} aria-label={name}>
        <ListItemIcon style={{ minWidth: '0px' }}>{renderIcon()}</ListItemIcon>
      </Tooltip>
    </ListItem>
  );
}
