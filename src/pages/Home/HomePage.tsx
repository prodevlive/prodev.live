/* eslint-disable import/no-webpack-loader-syntax */
import React, { FunctionComponent } from 'react';
import { Page } from 'components/Page/Page';
import { Body } from 'components/Page/Body';
import { Main } from 'components/Page/Main';
import { Header } from 'components/Page/Header/Header';
import { Sidebar } from 'components/Page/Sidebar/Sidebar';
import { ContentTab } from 'components/Content/ContentTab';
import { useHistory } from 'react-router-dom';
import { HomeFooter } from './HomeFooter';
import { HomePaths } from './HomeEnum';
import { HomeContent } from './Content/HomeContent';

export const HomePage: FunctionComponent = () => {
  const history = useHistory();
  if (history.location.pathname === HomePaths.Home){
    history.push(HomePaths.Creators);
  }
  return (
    <Page>
      <Header />
      <Body>
        <Sidebar />
        <Main>
          <ContentTab content={HomeContent} />
        </Main>
      </Body>
      <HomeFooter />
    </Page>
  );
};
