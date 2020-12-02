import React, { FunctionComponent, useEffect } from 'react';
import { Page } from 'components/Page/Page';
import { Body } from 'components/Page/Body';
import { Main } from 'components/Page/Main';
import { Header } from 'components/Page/Header/Header';
import { Sidebar } from 'components/Page/Sidebar/Sidebar';
import { ContentContainer } from 'components/Content/ContentContainer';
import { useHistory } from 'react-router-dom';
import { TextFooter } from './TextFooter';
import { TextPaths } from './TextEnum';
import { TextContent } from './Content/TextContent';

export const TextPage: FunctionComponent = () => {
  const history = useHistory();
  useEffect(()=>{
    if (history.location.pathname === TextPaths.Text){
      history.push(TextPaths.Overview);
    }    
  }, [history, history.location.pathname]);
  return (
    <Page>
      <Header />
      <Body>
        <Sidebar />
        <Main>
          <ContentContainer content={TextContent} />
        </Main>
      </Body>
      <TextFooter />
    </Page>
  );
};
