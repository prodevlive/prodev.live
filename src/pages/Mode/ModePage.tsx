import React, { FunctionComponent, useEffect } from 'react';
import { Page } from 'components/Page/Page';
import { Body } from 'components/Page/Body';
import { Main } from 'components/Page/Main';
import { Header } from 'components/Page/Header/Header';
import { Sidebar } from 'components/Page/Sidebar/Sidebar';
import { useHistory } from 'react-router-dom';
import { ModeFooter } from './ModeFooter';
import { ModePaths } from './ModeEnum';
import { ModePlatform } from './ModePlatform';

export const ModePage: FunctionComponent = () => {
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname === ModePaths.Mode){
      history.push(ModePaths.Top);
    }
  }, [history, history.location.pathname]);
  return (
    <Page>
      <Header />
      <Body>
        <Sidebar />
        <Main>
          <ModePlatform />
        </Main>
      </Body>
      <ModeFooter />
    </Page>
  );
};
