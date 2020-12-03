import React, { FunctionComponent, useEffect } from 'react';
import { Page } from 'components/Page/Page';
import { Body } from 'components/Page/Body';
import { Main } from 'components/Page/Main';
import { Header } from 'components/Page/Header/Header';
import { Sidebar } from 'components/Page/Sidebar/Sidebar';
import { useHistory } from 'react-router-dom';
import { UserFooter } from './UserFooter';
import { UserPaths } from './UserEnum';

export const UserPage: FunctionComponent = () => {
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname === UserPaths.User){
      history.push(UserPaths.Top);
    }
  }, [history, history.location.pathname]);
  return (
    <Page>
      <Header />
      <Body>
        <Sidebar />
        <Main>
          <div>user profile</div>
        </Main>
      </Body>
      <UserFooter />
    </Page>
  );
};
