import React, { FunctionComponent, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import FolderIcon from '@material-ui/icons/Folder';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import NoteIcon from '@material-ui/icons/Note';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { ContentNode } from './ContentNode';
import { ContentType } from './ContentType';

interface TextIndexProps {
  content: ContentNode;
  disabled?: boolean;
  selectable?: boolean;
}

export const ContentIndex: FunctionComponent<TextIndexProps> = ({
  content,
  disabled,
  selectable,
}: TextIndexProps) => {
  const history = useHistory();
  const renderNode = ({
    key,
    type,
    name,
    path,
    visible,
    contents,
    selected,
    expanded,
  }: ContentNode) => {
    const { pathname } = history.location;
    // eslint-disable-next-line no-debugger
    debugger;
    if (pathname === path) {
      selected = true;
    }
    if (pathname.includes(path)) {
      expanded = true;
    }
    if (visible) {
      return (
        <List key={`${key}-list`}>
          <a href={path}>
            <ListItem
              key={`${key}-list-item`}
              button
              disabled={disabled}
            >
              {renderIcon(type, selected, expanded)}
              <ListItemText
                primary={name}
                style={{ paddingLeft: '8px' }}
              />
              {renderCheck(selected)}
            </ListItem>
          </a>
          {renderNodes(contents, expanded)}
        </List>
      );
    }
    return null;
  };
  const renderIcon = (
    type: string,
    selected: boolean | undefined,
    expanded: boolean | undefined,
  ) => {
    if (type === ContentType.Root || type === ContentType.Node) {
      if (!selected && !expanded) {
        return <FolderOutlinedIcon />;
      }
      if (expanded && !selected) {
        return <FolderOpenOutlinedIcon />;
      }
      return <FolderIcon />;
    }
    if (!selected) {
      return <NoteOutlinedIcon />;
    }
    return <NoteIcon />;
    
  };
  const renderCheck = (selected: boolean | undefined) => {
    if (!selectable) {
      return null;
    }
    if (!selected) {
      return <CheckBoxOutlineBlankIcon />;
    }
    return <CheckBoxIcon />;
  };
  const renderNodes = (
    contents: ContentNode[] | undefined,
    expanded: boolean | undefined,
  ) => {
    if (!contents || !expanded) {
      return null;
    }
    const renderedNodes: ReactNode[] = [];
    contents.forEach((n: ContentNode) => renderedNodes.push(renderNode(n)));
    return (
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {renderedNodes}
      </Collapse>
    );
  };
  return renderNodes(content.contents, true);
};
