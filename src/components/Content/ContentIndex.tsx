import React, { FunctionComponent, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import NoteIcon from '@material-ui/icons/Note';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { ContentNode } from './ContentNode';
import { ContentType } from './ContentType';

interface TextIndexProps {
  content: ContentNode;
  disabled?: boolean;
}

export const ContentIndex: FunctionComponent<TextIndexProps> = ({
  content,
  disabled,
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
    if (history.location.pathname.includes(path)){
      expanded = true;
    }
    if (visible) {
      return (
        <List key={`${key}-list`}>
          <ListItem
            key={`${key}-list-item`}
            button
            onClick={() => {
              history.push(path);
            }}
            disabled={disabled}
          >
            {renderIcon(type, expanded)}
            <ListItemText
              primary={name}
              style={{ paddingLeft: '8px' }}
            />
            {renderCheck(selected)}
          </ListItem>
          {renderNodes(contents, expanded)}
        </List>
      );
    }
    return null;
  };
  const renderIcon = (type: string, expanded: boolean | undefined) => {
    if (type === ContentType.Root || type === ContentType.Node) {
      if (!expanded) {
        return <FolderOpenIcon />;
      }
      return <FolderIcon />;
    }
    return <NoteIcon />;
  };
  const renderCheck = (selected: boolean | undefined) => {
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
