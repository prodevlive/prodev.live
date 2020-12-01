import React, { FunctionComponent } from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HelpIcon from '@material-ui/icons/Help';

export const HelpButton: FunctionComponent = () => {
  return (
    <BottomNavigationAction
      key="help_button"
      label="help"
      showLabel
      icon={<HelpIcon />}
      onClick={() => {
        // alert('help');
      }}
    />
  );
};
