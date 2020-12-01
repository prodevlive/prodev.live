import React, { FunctionComponent } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { HomePage } from './Home/HomePage';
import { TextPage } from './Text/TextPage';
import { FilePage } from './File/FilePage';
import { ModePage } from './Mode/ModePage';
import { UserPage } from './User/UserPage';
import { PagePaths } from './PageEnum';

export const PageSwitch: FunctionComponent = () => {
  const history = useHistory();
  const { pathname } = history.location;
  if (pathname === '/') {
    history.push(PagePaths.Home);
  }
  return (
    <Switch>
      <Route path={PagePaths.Home} component={HomePage} />
      <Route path={PagePaths.Text} component={TextPage} />
      <Route path={PagePaths.File} component={FilePage} />
      <Route path={PagePaths.Mode} component={ModePage} />
      <Route path={PagePaths.User} component={UserPage} />
    </Switch>
  );
};
