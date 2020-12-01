import React, { FunctionComponent } from 'react';

import { BottomNavigationAction } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { Footer } from 'components/Page/Footer/Footer';
import { HomeButton } from 'components/Page/Footer/HomeButton';

export const UserFooter: FunctionComponent = () => {
  // const context = useContext(AppContext);
  // const userContext = context.contexts[AppContextName.User] as UserContext;
  // const { alertResult } = context.utility;
  const doSave = async () => {
    // if (!userContext.isValid) {
    //     logAndShow(
    //         new DataResult(DataStatus.Failure, 'fix errors before saving')
    //     );
    //     return;
    // }
    // const result = await userContext.save();
    // switch (result) {
    //     case 'save':
    //         logAndShow(new DataResult(DataStatus.Undefined, 'user saved'));
    //         break;
    //     default:
    //         logAndShow(new DataResult(DataStatus.Failure, result));
    //         break;
    // }
  };
  return (
    <Footer>
      <HomeButton />
      <BottomNavigationAction
        label="save"
        icon={<DoneIcon />}
        onClick={doSave}
      />
    </Footer>
  );
};
