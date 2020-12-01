import React, { FunctionComponent } from 'react';
import { Footer } from 'components/Page/Footer/Footer';
import { HomeButton } from 'components/Page/Footer/HomeButton';

export const ModeFooter: FunctionComponent = () => {
  return (
    <Footer>
      <HomeButton />
    </Footer>
  );
};
