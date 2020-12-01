import React, { FunctionComponent } from 'react';
// import { AppContext } from 'app';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HelpIcon from '@material-ui/icons/Help';

export const HelpControl: FunctionComponent = () => {
//   const context = useContext(AppContext);
  const doHelp = () => {
    // if (!context.mode.item.help) {
    //     context.mode.item.help = true;
    // } else {
    //     context.mode.item.help = false;
    // }
    // context.save();
  };
  const label = 'blah'; //! context.mode.item.help ? 'show help' : 'hide help';
  return (
    <BottomNavigationAction
      key="home_help"
      label={label}
      showLabel
      icon={<HelpIcon />}
      onClick={doHelp}
    />
  );
};
