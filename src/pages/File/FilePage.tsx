import React, { FunctionComponent, useEffect, useState } from 'react';
import { useModule } from 'hooks';
import { useHistory } from 'react-router-dom';
import { Page } from 'components/Page/Page';
import { Body } from 'components/Page/Body';
import { Main } from 'components/Page/Main';
import { Header } from 'components/Page/Header/Header';
import { Sidebar } from 'components/Page/Sidebar/Sidebar';
import { ResultSwitch } from 'components/ResultSwitch';
import { FileFooter } from './FileFooter';
import { FilePaths } from './FileEnum';
import { FileContentEx } from './FileContentEx';

export const FilePage: FunctionComponent = () => {
  const { fileModule } = useModule();
  const history = useHistory();
  if (history.location.pathname === FilePaths.File){
    history.push(FilePaths.Top);
  }
  const [result, setResult] = useState(fileModule.result);
  useEffect(() => {
    const loadData = async () => {
      setResult(await fileModule.load());
    };
    loadData();
  }, [fileModule]);
  return (
    <Page>
      <Header />
      <Body>
        <Sidebar />
        <Main>          
          <ResultSwitch result={result}>
            <FileContentEx fileModule={fileModule} />
            <div>sucess</div>
          </ResultSwitch>
        </Main>
      </Body>
      <FileFooter />
    </Page>
  );
};
