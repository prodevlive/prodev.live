/* eslint-disable import/no-webpack-loader-syntax */
import React, { FunctionComponent } from 'react';
import { Page } from 'components/Page/Page';
import { Body } from 'components/Page/Body';
import { Main } from 'components/Page/Main';
import { Header } from 'components/Page/Header/Header';
import { Sidebar } from 'components/Page/Sidebar/Sidebar';
import { useHistory } from 'react-router-dom';
import { ModeFooter } from './ModeFooter';
import { ModePaths } from './ModeEnum';

export const ModePage: FunctionComponent = () => {
  const history = useHistory();
  if (history.location.pathname === ModePaths.Mode){
    history.push(ModePaths.Top);
  }
  return (
    <Page>
      <Header />
      <Body>
        <Sidebar />
        <Main>
          <div>settings</div>
        </Main>
      </Body>
      <ModeFooter />
    </Page>
  );
};
