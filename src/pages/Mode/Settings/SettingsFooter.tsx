import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
// import { HelpControl } from 'components';

export const SettingsFooter: FunctionComponent = () => {
  const useStyles = makeStyles({
    footer: {
      position: 'fixed',
      bottom: '0px',
      width: '100%',
      zIndex: 1300,
    },
  });
  const classes = useStyles('');
  const doSave = async () => {
    // const result = await context.mode.save();
    // switch (result) {
    //     case 'save':
    //         logAndShow(new DataResult(DataStatus.Null, 'Settings saved'));
    //         break;
    //     default:
    //         logAndShow(new DataResult(DataStatus.Failure, result));
    //         break;
    // }
    // context.setMode(AppMode.Home);
  };
  const doClose = () => {
    // context.setMode(AppMode.Home);
  };
  return (
    <BottomNavigation showLabels className={classes.footer}>
      {/* <HelpControl /> */}
      <BottomNavigationAction
        label="save"
        icon={<DoneIcon />}
        onClick={doSave}
      />
      <BottomNavigationAction
        label="close"
        icon={<CloseIcon />}
        onClick={doClose}
      />
    </BottomNavigation>
  );
};
