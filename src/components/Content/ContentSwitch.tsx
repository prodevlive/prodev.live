import React, { FunctionComponent, ReactNode } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContentNode } from './ContentNode';

interface ContentSwitchProps {
  content: ContentNode;
}

export const ContentSwitch: FunctionComponent<ContentSwitchProps> = ({
  content,
}: ContentSwitchProps) => {
  if (!content.contents || !content.contents.length){
    return null;
  }
  const routes: ReactNode[] = [];
  const getRoutes = (contents: ContentNode[] | undefined) => {
    if (!contents || !contents.length) {
      return;
    }
    contents.forEach(c => {
      routes.push(<Route key={`${c.key}-route`} exact path={c.path}>{c.element}</Route>);
      getRoutes(c.contents);
    });
  };
  getRoutes(content.contents);
  return (
    <Switch>
      {routes}
    </Switch>
  );
};