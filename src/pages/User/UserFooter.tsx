import React, { FunctionComponent } from 'react';
import { Footer } from 'components/Page/Footer/Footer';
import { HomeButton } from 'components/Page/Footer/HomeButton';

export const UserFooter: FunctionComponent = () => {
  return (
    <Footer>
      <HomeButton />
    </Footer>
  );
};
