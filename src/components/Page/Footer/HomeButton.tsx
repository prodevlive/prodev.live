import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';

export const HomeButton: FunctionComponent = () => {
  const history = useHistory();
  const doHome = () => {
    history.push('/home');
  };
  return (
    <BottomNavigationAction
      key="home_button"
      label="home"
      showLabel
      icon={<HomeIcon />}
      onClick={doHome}
    />
  );
};
