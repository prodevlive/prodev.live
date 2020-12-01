import React, { FunctionComponent } from 'react';
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
  const [value, setValue] = React.useState(history.location.pathname);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(newValue);
  };
  if (!content || !content.contents || !content.contents.length){
    return null;
  }
  return (
    <div>
      <Tabs
        value={value}
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