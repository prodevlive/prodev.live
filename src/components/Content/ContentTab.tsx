import React, { FunctionComponent, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ContentNode } from './ContentNode';

interface ContentTabProps {
  content: ContentNode;
}

export const ContentTab: FunctionComponent<ContentTabProps> = ({
  content,
}: ContentTabProps) => {
  const history = useHistory();
  const { pathname } = history.location;
  const [ path, setPath ] = React.useState('');
  useEffect(() => {
    if (!content || !content.contents || !content.contents.length) {
      return;
    }
    if (!content.contents.find(c => c.path === pathname)){
      history.push(content.contents[0].path);
      return;
    }
    if (path !== pathname){
      setPath(pathname);
    }
  }, [content, history, path, pathname]);
  if (!path || !content || !content.contents || !content.contents.length) {
    return null;
  }
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setPath(newValue);
    history.push(newValue);
  };
  return (
    <div>
      <Tabs
        value={path}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        variant="fullWidth"
      >
        {content.contents.map(c => (<Tab key={`${c.key}-tab`} label={c.name} value={c.path} />))}
      </Tabs>
      <div>
        <Switch>
          {content.contents.map(c => (<Route key={`${c.key}-tab-route`} path={c.path}>{c.element}</Route>))}
        </Switch>
      </div>
    </div>
  );
};