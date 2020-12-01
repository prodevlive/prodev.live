import React, { FunctionComponent } from 'react';
import { useModule } from 'hooks';
import { Footer } from 'components/Page/Footer/Footer';
import { FooterButton } from 'components/Page/Footer/FooterButton';
import { HomeButton } from 'components/Page/Footer/HomeButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


export const FileFooter: FunctionComponent = () => {
  const { fileModule, setFileModule } = useModule();
  const doClick = () => {
    fileModule.setCount(fileModule.count + 1);
    setFileModule(fileModule);
  };
  return (
    <Footer>
      <HomeButton />
      <FooterButton
        key="file-footer-click"
        name="save"
        icon={<CheckCircleIcon />}
        onClick={doClick}
      />
    </Footer>
  );
};
